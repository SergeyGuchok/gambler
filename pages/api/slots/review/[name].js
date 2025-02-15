import s3Client from 'backend/services/S3';
import nc from 'next-connect';
import { GetObjectCommand } from '@aws-sdk/client-s3';

const streamToString = (stream) => {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
};

const createBucketParams = (name) => ({
  Bucket: process.env.CLOUD_SPACE_BUCKET_NAME,
  Key: `slot/slot-review/${name}/review.md`,
});

const handler = nc({
  onNoMatch: (req, res) => {
    res.status(501).json('Route not found');
  },
});

handler.get(async (req, res) => {
  try {
    const { name } = req.query;

    const result = await s3Client.downloadStream(createBucketParams(name));
    const review = await streamToString(result.Body);

    res.json(review);
  } catch (e) {
    res.json('');
  }
});
export default handler;

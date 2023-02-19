import s3Client from 'backend/services/S3';
import responseResult from 'backend/common/responseResult';
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
  Key: `page-category/${name}.md`,
});

const handler = nc({
  onNoMatch: (req, res) => {
    res.status(501).json('Route not found');
  },
});

handler.get(async (req, res) => {
  const { name } = req.query;

  const result = await s3Client.send(
    new GetObjectCommand(createBucketParams(name)),
  );
  const review = await streamToString(result.Body);

  res.json({ data: review });
});
export default handler;

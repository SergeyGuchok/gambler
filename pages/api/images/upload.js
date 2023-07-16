import formidable from 'formidable';
import S3Service from 'backend/services/S3';
import fs from 'fs';
import nc from 'next-connect';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc({
  onNoMatch: (req, res) => {
    res.status(501).json('Route not found');
  },
});
handler.post(async (req, res) => {
  try {
    const parser = formidable();
    const [errors, files] = await parser.parse(req);

    for (let key in files) {
      const params = {
        Bucket: process.env.CLOUD_SPACE_BUCKET_NAME,
        ACL: 'public-read',
        Key: `slots-review-images/${key}`,
        Body: fs.readFileSync(files[key][0].filepath),
        ContentType: 'image/webp',
      };

      await S3Service.upload(params);
    }

    if (errors.length) {
      return res.status(400).json({ errors });
    }

    return res.status(200).json({ message: 'Images upload successfully' });
  } catch (e) {
    return res.status(400).json(e);
  }
});

export default handler;

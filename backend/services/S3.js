import { S3 } from '@aws-sdk/client-s3';
import multer from 'multer';
import multers3 from 'multer-s3';

const s3Client = new S3({
  forcePathStyle: false,
  region: 'ams3',
  endpoint: 'https://ams3.digitaloceanspaces.com',
  credentials: {
    accessKeyId: process.env.CLOUD_SPACE_PUBLIC_KEY,
    secretAccessKey: process.env.CLOUD_SPACE_SECRET_KEY,
  },
});

const upload = multer({
  storage: multers3({
    s3: s3Client,
    bucket: process.env.CLOUD_SPACE_BUCKET_NAME,
    acl: 'public-read',
    key(request, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

module.exports = upload;

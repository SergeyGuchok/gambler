import { S3 } from '@aws-sdk/client-s3';

const s3Client = new S3({
  forcePathStyle: false,
  region: 'ams3',
  endpoint: 'https://ams3.digitaloceanspaces.com',
  credentials: {
    accessKeyId: process.env.CLOUD_SPACE_PUBLIC_KEY,
    secretAccessKey: process.env.CLOUD_SPACE_SECRET_KEY,
  },
});

module.exports = s3Client;

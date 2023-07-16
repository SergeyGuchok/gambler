import { S3, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';

class S3Service {
  constructor() {
    this.s3Client = new S3({
      forcePathStyle: false,
      region: 'ams3',
      endpoint: 'https://ams3.digitaloceanspaces.com',
      credentials: {
        accessKeyId: process.env.CLOUD_SPACE_PUBLIC_KEY,
        secretAccessKey: process.env.CLOUD_SPACE_SECRET_KEY,
      },
    });
  }

  async upload(params) {
    try {
      await this.s3Client.send(new PutObjectCommand(params));
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  async downloadStream(params) {
    try {
      return await this.s3Client.send(new GetObjectCommand(params));
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
}

module.exports = new S3Service();

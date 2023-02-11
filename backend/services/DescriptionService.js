import mongoClient from 'backend/mongoclient';
import DescriptionModel from 'backend/schemas/description';
import responseStatusType from 'backend/common/responseStatusTypes';
import { ObjectId } from 'mongodb';

class DescriptionService {
  createResponse(status, message, errors = [], data) {
    return {
      status,
      message,
      errors,
      data,
    };
  }

  async getCasinoCollection() {
    const client = await mongoClient;
    const db = await client.db('thegamblr');
    return await db.collection('descriptions');
  }

  async updateDescription(data) {
    try {
      const collection = await this.getCasinoCollection();

      const query = { name: data.name };
      const update = { $set: { ...data } };
      const options = { upsert: true };

      await collection.updateOne(query, update, options);

      return this.createResponse(
        responseStatusType.OK,
        'Description added/updated',
      );
    } catch (e) {
      return this.createResponse(
        responseStatusType.FAIL,
        'Something went wrong',
        [e],
      );
    }
  }

  async getDescriptionByName(name) {
    try {
      const collection = await this.getCasinoCollection();
      const description = await collection.find({ name }).toArray();

      return this.createResponse(
        responseStatusType.OK,
        'Casinos retrieved',
        [],
        description,
      );
    } catch (e) {
      return this.createResponse(
        responseStatusType.FAIL,
        'Something went wrong',
        [e],
      );
    }
  }

  async getDescriptions() {
    try {
      const collection = await this.getCasinoCollection();
      const descriptions = await collection.find().toArray();

      return this.createResponse(
        responseStatusType.OK,
        'Casinos retrieved',
        [],
        descriptions,
      );
    } catch (e) {
      return this.createResponse(
        responseStatusType.FAIL,
        'Something went wrong',
        [e],
      );
    }
  }
}

module.exports = new DescriptionService();

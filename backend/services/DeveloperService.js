import mongoClient from 'backend/mongoclient';
import SlotsModel from 'backend/schemas/slot';
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

  async getDevelopersCollection() {
    const client = await mongoClient;
    const db = await client.db('thegamblr');
    return await db.collection('developers');
  }

  async updateDeveloper({ _id, ...data }) {
    try {
      const collection = await this.getDevelopersCollection();
      const query = { name: data.name };
      const update = { $set: { ...data } };
      const options = { upsert: true };

      await collection.updateOne(query, update, options);

      return this.createResponse(
        responseStatusType.OK,
        'Developer added/updated',
      );
    } catch (e) {
      console.log(e);
      return this.createResponse(
        responseStatusType.FAIL,
        'Something went wrong',
        [e],
      );
    }
  }

  async getDeveloperByName(name) {
    try {
      const collection = await this.getDevelopersCollection();
      const description = await collection.findOne({ name });

      return this.createResponse(
        responseStatusType.OK,
        'Slot retrieved',
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

  async getDevelopersByTag(tag) {
    try {
      const collection = await this.getDevelopersCollection();
      const developers = await collection.find().toArray();
      const result = developers.filter((d) => d.tags.includes(tag));
      return this.createResponse(
        responseStatusType.OK,
        'Slot retrieved',
        [],
        result,
      );
    } catch (e) {
      return this.createResponse(
        responseStatusType.FAIL,
        'Something went wrong',
        [e],
      );
    }
  }

  // async updateSlug({ })

  async getDevelopers(page) {
    try {
      const collection = await this.getDevelopersCollection();
      const developers = await collection.find().toArray();

      return this.createResponse(
        responseStatusType.OK,
        'Slot retrieved',
        [],
        developers,
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

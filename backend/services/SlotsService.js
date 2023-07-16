import mongoClient from 'backend/mongoclient';
import responseStatusType from 'backend/common/responseStatusTypes';

class SlotsService {
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
    return await db.collection('slots');
  }

  async updateSlot({ _id, ...data }) {
    try {
      const collection = await this.getCasinoCollection();
      const query = { name: data.name };
      const update = { $set: { ...data } };
      const options = { upsert: true };

      await collection.updateOne(query, update, options);

      return this.createResponse(responseStatusType.OK, 'Slot added/updated');
    } catch (e) {
      console.log(e);
      return this.createResponse(
        responseStatusType.FAIL,
        'Something went wrong',
        [e],
      );
    }
  }

  async getSlotByName(name) {
    try {
      const collection = await this.getCasinoCollection();
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

  async getSlots(page) {
    try {
      const collection = await this.getCasinoCollection();
      const slotsCount = await collection.count();
      const slots = await collection
        .find()
        .sort({ _id: -1 })
        .skip((page - 1) * 9)
        .toArray();

      return this.createResponse(responseStatusType.OK, 'Slot retrieved', [], {
        slots: slots.slice(0, 9),
        count: slotsCount,
      });
    } catch (e) {
      return this.createResponse(
        responseStatusType.FAIL,
        'Something went wrong',
        [e],
      );
    }
  }
}

module.exports = new SlotsService();

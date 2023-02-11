import mongoClient from 'backend/mongoclient';
import responseStatusType from 'backend/common/responseStatusTypes';

class AdsService {
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
    return await db.collection('casinos');
  }

  async getDescirptionsCollection() {
    const client = await mongoClient;
    const db = await client.db('thegamblr');
    return await db.collection('descriptions');
  }

  async getCasinoPageAds(name) {
    try {
      const collection = await this.getCasinoCollection();
      const selectedCasinoData = await collection.findOne({ name });
      const { pageCategory } = selectedCasinoData;
      const sameCasinosByCategory = await collection
        .find({
          pageCategory: { $in: pageCategory },
        })
        .sort({ ranking: 1 })
        .toArray();

      const filteredCasinos = sameCasinosByCategory.filter(c => c.name !== name)

      return this.createResponse(
        responseStatusType.OK,
        'Casinos retrieved',
        [],
        filteredCasinos,
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

module.exports = new AdsService();

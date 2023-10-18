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

  async getPanelCasinoAds() {
    try {
      const collection = await this.getCasinoCollection();
      const casinos = await collection.find().toArray();

      return this.createResponse(
        responseStatusType.OK,
        'Casinos retrieved',
        [],
        casinos,
      );
    } catch (e) {
      return this.createResponse(
        responseStatusType.FAIL,
        'Something went wrong',
        [e],
      );
    }
  }

  async getBestCasinoAds() {
    try {
      const collection = await this.getCasinoCollection();
      const casinos = await collection.find().toArray();
      const bestCasinos = casinos.slice(0, 4);

      return this.createResponse(
        responseStatusType.OK,
        'Casinos retrieved',
        [],
        bestCasinos,
      );
    } catch (e) {
      return this.createResponse(
        responseStatusType.FAIL,
        'Something went wrong',
        [e],
      );
    }
  }

  async getCasinoPageAds(name) {
    try {
      const collection = await this.getCasinoCollection();
      const casinos = await collection.find().sort({ ranking: 1 }).toArray();

      const filteredCasinos = casinos.filter((c) => c.name !== name);

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

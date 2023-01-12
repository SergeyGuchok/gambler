import mongoClient from 'backend/mongoclient'
import CasinoModel from 'backend/schemas/casino'
import responseStatusType from 'backend/common/responseStatusTypes'
import { ObjectId } from 'mongodb'

class CasinoService {
  createResponse (status, message, errors = [], data) {
    return {
      status,
      message,
      errors,
      data
    }
  }

  async getCasinoCollection () {
    const client = await mongoClient
    const db = await client.db('thegamblr')
    return await db.collection('casinos')
  }

  async addCasino (data) {
    try {
      const collection = await this.getCasinoCollection()
      const casino = new CasinoModel(data)

      await collection.insertOne(casino)

      return this.createResponse(responseStatusType.OK, 'Casino added')
    } catch (e) {
      return this.createResponse(responseStatusType.FAIL, 'Something went wrong', [e])
    }
  }

  async deleteCasino (casinoId) {
    try {
      const collection = await this.getCasinoCollection()
      await collection.deleteOne({ _id: ObjectId(casinoId) })

      return this.createResponse(responseStatusType.OK, 'Casino deleted')
    } catch (e) {
      return this.createResponse(responseStatusType.FAIL, 'Something went wrong',  [e])
    }
  }

  async getCasinosByCategory (category) {
    try {
      const collection = await this.getCasinoCollection()
      const casinos = await collection.find({ page_category: category }).sort({ ranking: 1 }).toArray()

      return this.createResponse(responseStatusType.OK, 'Casinos retrieved', [], casinos)
    } catch (e) {
      return this.createResponse(responseStatusType.FAIL, 'Something went wrong',  [e])
    }
  }

  async getTopCasinos () {
    try {
      const collection = await this.getCasinoCollection()
      const casinos = await collection.find().sort({ ranking: 1 }).toArray()

      return this.createResponse(responseStatusType.OK, 'Casinos retrieved', [], casinos.slice(0, 3))
    } catch (e) {
      return this.createResponse(responseStatusType.FAIL, 'Something went wrong',  [e])
    }
  }

  async getCasinosList () {
    try {
      const collection = await this.getCasinoCollection()
      const casinos = await collection.find().sort({ ranking: 1 }).toArray()

      return this.createResponse(responseStatusType.OK, 'Casinos retrieved', [], casinos.slice(3))
    } catch (e) {
      return this.createResponse(responseStatusType.FAIL, 'Something went wrong',  [e])
    }
  }
}

module.exports = new CasinoService()
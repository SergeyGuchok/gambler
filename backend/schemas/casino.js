import mongoose from 'mongoose'

const { Schema } = mongoose

const CasinoSchema = new Schema({
  name: String,
  imageSrc: String,
  winRate: Number,
  payoutTime: [{ locale: String, content: String }],
  categories: [String],
  ranking: Number,
  pros: [String],
  cons: [String],
  about: [String],
  mainCategory: String,
  paymentOptions: [String],
  refLink: String,
})

const CasinoModel = mongoose.model('Casino', CasinoSchema)

export default mongoose.models.Casino || CasinoModel

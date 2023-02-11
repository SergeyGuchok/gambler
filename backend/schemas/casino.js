import mongoose from 'mongoose';

const { Schema } = mongoose;

const CasinoSchema = new Schema({
  name: String,
  imageSrc: String,
  winRate: Number,
  payoutTime: [{ locale: String, content: String }],
  categories: [String],
  ranking: Number,
  pros: [String],
  cons: [String],
  mainCategory: String,
  paymentOptions: [String],
  refLink: String,
  pageCategory: [String],
  displayName: String,
  bonus: '',
});

CasinoSchema.pre('save', async function () {
  try {
    const Casino = this.constructor;
    const casinoExists = await Casino.find({
      name: this.get('name'),
    })
      .lean()
      .exec();
    if (casinoExists.length > 0) {
      console.log('fail');
    }
  } catch (err) {
    console.log('fail');
  }
});

export default mongoose.models.Casino || mongoose.model('Casino', CasinoSchema);

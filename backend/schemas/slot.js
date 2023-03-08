import mongoose from 'mongoose';

const { Schema } = mongoose;

const SlotSchema = new Schema({
  name: String,
  description: {
    title: String,
    reels: String,
    rows: String,
    maxWin: String,
    volatility: String,
    minmax: String,
    date: String,
    paylines: String,
    rtp: String,
  },
  displayName: String,
  provider: String,
  imageSrc: String,
  metaKeywords: String,
  metaDescription: String,
});

SlotSchema.pre('save', async function () {
  try {
    const Description = this.constructor;
    const descriptionExists = await Description.find({
      name: this.get('name'),
    })
      .lean()
      .exec();
    if (descriptionExists.length > 0) {
      console.log('fail');
    }
  } catch (err) {
    console.log('fail');
  }
});

export default mongoose.models.Slot || mongoose.model('Slot', SlotSchema);

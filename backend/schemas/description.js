import mongoose from 'mongoose';

const { Schema } = mongoose;

const DescriptionSchema = new Schema({
  name: String,
  main: [String],
  additional: [String],
  title: String,
  metaKeywords: String,
  metaDescription: String,
});

DescriptionSchema.pre('save', async function () {
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

export default mongoose.models.Description ||
  mongoose.model('Description', DescriptionSchema);

import mongoose from 'mongoose';

const { Schema } = mongoose;

const DeveloperSchema = new Schema({
  name: String,
  displayName: String,
  imageSrc: String,
  facts: [],
});

DeveloperSchema.pre('save', async function () {
  try {
    const Developer = this.constructor;
    const developerExists = await Developer.find({
      name: this.get('name'),
    })
      .lean()
      .exec();
    if (developerExists.length > 0) {
      console.log('fail');
    }
  } catch (err) {
    console.log('fail');
  }
});

export default mongoose.models.Developer ||
  mongoose.model('Developer', DeveloperSchema);

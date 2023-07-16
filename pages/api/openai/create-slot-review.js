import OpenAiService from 'backend/services/OpenAiService';
import SlotsService from 'backend/services/SlotsService';
import S3Service from 'backend/services/S3';
import nc from 'next-connect';

const handler = nc({
  onNoMatch: (req, res) => {
    res.status(501).json('Route not found');
  },
});

const upgradeMarkdown = (md, imageSrc) => {
  console.log(md);
  return '---\n' + `imageSrc: ${imageSrc}\n` + '---\n\n' + md;
};

handler.post(async (req, res) => {
  try {
    const {
      name,
      images,
      exampleSrc,
      slot,
      developer,
      imageSrc,
      facts: exampleFacts,
    } = req.body;

    const json = await OpenAiService.generateMarkdownReview(
      exampleSrc,
      images,
      slot,
      developer,
      exampleFacts,
    );

    const parsed = JSON.parse(json);
    const { result, keywords, description, facts } = parsed;
    const resultMD = upgradeMarkdown(
      result,
      `https://ams3.digitaloceanspaces.com/thegamblr-storage/slots-review-images/${images[0]}`,
    );

    const params = {
      Bucket: process.env.CLOUD_SPACE_BUCKET_NAME,
      ACL: 'private',
      Key: `slots-review/${name}.md`,
      Body: resultMD,
      ContentType: 'text/markdown',
    };

    await S3Service.upload(params);
    await SlotsService.updateSlot({
      name,
      description: { ...facts },
      tags: 'popular | new | unique | rtp | buy | upcoming',
      displayName: slot,
      provider: developer,
      imageSrc,
      metaKeywords: keywords,
      metaDescription: description,
    });

    return res.status(200).json('asd');
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: JSON.stringify(e) });
  }
});

export default handler;

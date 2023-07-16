const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

class OpenAiService {
  async generateMarkdownReview(exampleSrc, images, slot, developer, facts) {
    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: `
        I want you to create a review of ${slot} gambling slot made by ${developer}. You can find reference about this slot (including its settings, bonus buys, quick facts, etc. here: ${exampleSrc}.
        The result should be written in a human-like stile. You can see the examples of the way to write those reviews on this three webpages: 
        https://www.thegamblr.com/slot/holy-hand-grenade-print-studios-review
        https://www.thegamblr.com/slot/money-cart-3-relax-gaming-review
        https://www.thegamblr.com/slot/beellionaires-dream-drop-relax-gaming-slot-review.
        Put the result into markdown format and use all the markdown format features to make the result look good.
        It is important to highlight text that is SEO-friendly (i.e. bold text, lists, etc) with markdown features as well.
        Do not use h1 headings (#), start with h2 heading (##).
        The review itself should be at least 600 words long. Do not generate wrong data about the slot (i.e. in quick facts, check the reference and you will find the right data there)
        The review should contain couple of required sections - features, free spins, pros & cons, gameplay, bonus buy (if its available for the slot) and final verdict. Add some more if you think that is required. 
        Every section should start with '${slot}:' section - i.e. ${slot}: pros & cons
        These are images names: ${images}. 
        I will refer to imageName as one element of array, and imageAlt as imageName, but without the '-'.
        Using imageAlt you can decide where to put it in those sections, but u have to use all the images no matter what. The result markdown image element should look like this:
        ![imageAlt](https://ams3.digitaloceanspaces.com/thegamblr-storage/slots-review-images/imageName)
        Inside the result markdown file create a markdown image. Input these image after the first paragraph (i.e. block of some text) in the section.  
        Also generate appropriate keywords and description for the page that will contain this review. 
        Put keywords as value of keywords property, and description as value of description property.
        Here is the quick facts string that you should use to generate below prompt: ${facts}
        You should also generate quick facts about the slot. The values of these properties should be according to the ones that i provided above.
        Return quick facts as value of facts object property.
        Return everything as appropriate JSON-string.
        Here is the example of returned JSON format:
        {
          "result": "markdown string"
          "facts": {
            "rtp": "rtp"
          },
          "description": "description string",
          "keywords": "keywords string"
        }
      `,
        },
      ],
      max_tokens: 3800,
      temperature: 0.8,
    });

    // fs.writeFileSync('./test-sync.md', response.data.choices[0].message.content);

    const content = response.data.choices[0].message.content;
    const firstChar = content.indexOf('{');
    const lastChar = content.lastIndexOf('}');

    return content.slice(firstChar, lastChar + 1);

    // return response.data.choices[0].message.content
    //   .replaceAll('`', '')
    //   .replaceAll('json', '');
  }
}

module.exports = new OpenAiService();

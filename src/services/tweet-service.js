const { TweetRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    try {
      const content = data.content;
      const tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extract hashtag from the content
      tags = tags.map((tag) => tag.substring(1));
      console.log(tags);
      const tweet = await this.tweetRepository.create(data);
      //   todo create hashtags and add here
      /**
       *  1. bulkcreate in mongoose
       *  2. filter title of hashtag based on multiple tags
       *  3. how to add tweet id inside all the hashtags
       */
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetService;

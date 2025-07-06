const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({ path: "comments" })
        .lean(); // lean() is used to convert the mongoose object to a plain javascript object.
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async update(tweetId, data) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(tweetId, data, { new: true }); // new: true returns the updated document instead of the previous one.
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      const tweet = await Tweet.findByIdAndRemove(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      const tweets = await Tweet.find().skip(offset).limit(limit);//skip and limit are used to paginate the results.
      return tweets;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;

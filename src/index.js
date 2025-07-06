const express = require("express");
const connect = require("./config/database");
const app = express();

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("Mongo db connected");
  // const tweet = await Tweet.create({
  //     content: 'Third tweet',
  // });
  // const tweets = await Tweet.find({userEmail: 'a@b.com'});
  const tweetRepo = new TweetRepository();
  const tweet = await tweetRepo.getWithComments("6869e1b8d46f825d27bfbb6d");
  console.log(tweet);
});

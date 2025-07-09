import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      maxlength: [250, "Tweet cannot be more than 250 characters"],
    },
    hashtags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hashtag",
      },
    ],
  },
  { timestamps: true } // timestamps is a mongoose middleware that adds createdAt and updatedAt fields to the schema.
);

// Tweet is the name of the collection in the database and it pluralizes to tweets and lowercases to tweet.
// mongoose.model is constructor function that creates a new model.

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;

// schema is a blueprint for creating a object.
// model is a constructor function that creates a new objects.

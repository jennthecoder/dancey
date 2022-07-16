const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const reviewTypes = [
  "release",
  "personnel",
  "product",
  "seller",
  "track",
  "buyer",
];

const ReviewSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    body: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comments: [
      {
        type: ObjectId,
        ref: "Comment",
      },
    ],
    likes: {
      type: Map,
      of: Boolean,
    },
    resourceType: {
      type: String,
      enum: reviewTypes,
      required: true,
    },
    resourceId: {
      type: ObjectId,
      ref: "Resource",
      required: true,
    },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;

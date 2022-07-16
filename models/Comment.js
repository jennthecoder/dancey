const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const commentTypes = [
  "release",
  "personnel",
  "product",
  "seller",
  "track",
  "review",
  "buyer",
];

const CommentSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    parentCommentId: {
      type: ObjectId,
      ref: "Comment",
      default: null,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: Map,
      of: Boolean,
    },
    resourceType: {
      type: String,
      enum: commentTypes,
      required: true,
    },
    resourceId: {
      type: ObjectId,
      ref: "Resource",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;

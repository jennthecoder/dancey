const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const currencies = require("../validation/currencies");
const mediaCondition = require("../validation/mediaCondition");

const ProductSchema = new Schema(
  {
    releaseId: {
      type: ObjectId,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      enum: Object.keys(currencies),
      required: true,
    },
    condition: {
      type: String,
      enum: Object.keys(mediaCondition),
      required: true,
    },
    sellerId: {
      type: ObjectId,
      required: true,
    },
    description: String,
    sold: {
      type: Boolean,
      default: false,
    },
    comments: [
      {
        type: ObjectId,
        ref: "Comment",
      },
    ],
    images: [
      {
        description: String,
        imageUrl: {
          type: String,
        },
        mainImage: {
          type: Boolean,
          default: false,
        },
      },
    ],
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const  Product = mongoose.model("Product", ProductSchema)
module.exports = Product;

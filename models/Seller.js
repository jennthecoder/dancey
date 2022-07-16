const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const countries = require("../validation/countries");
const ObjectId = Schema.Types.ObjectId;

const SellerSchema = new Schema(
  {
    sellerName: {
      type: String,
      required: true,
    },
    adminUserIds: [
      {
        type: ObjectId,
        required: true,
        ref: "User",
      },
    ],
    location: {
      type: String,
      enum: Object.keys(countries),
    },
    comments: [
      {
        type: ObjectId,
        ref: "Comment",
      },
    ],
    reviews: [
      {
        type: ObjectId,
        ref: "Review",
      },
    ],
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const Seller = mongoose.model("Seller", SellerSchema)
module.exports = Seller;

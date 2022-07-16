const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const countries = require("../validation/countries");

const PersonnelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    alsoKnownAs: [{ type: String }],
    associated: [
      {
        type: ObjectId,
      },
    ],
    dateOfBirth: {
      type: Date,
    },
    countryOfOrigin: {
      type: String,
      enum: Object.keys(countries),
    },
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
  {
    timestamps: true,
  }
);

//compile model
const Personnel = mongoose.model("Personnel", PersonnelSchema);
module.exports = Personnel;

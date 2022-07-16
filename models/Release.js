const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const countries = require("../validation/countries");
const formats = require("../validation/formats");

const ReleaseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    mainArtists: [
      {
        type: ObjectId,
        ref: "Personnel",
      },
    ],
    personnel: [
      {
        personnelIds: [
          {
            type: ObjectId,
            ref: "Personnel",
          },
        ],
        role: {
          type: String,
        },
      },
    ],
    trackListing: [
      {
        order: Number,
        sideOrDisc: { type: Number, default: null },
        trackId: {
          type: ObjectId,
          ref: "Track",
        },
      },
    ],
    label: [
      {
        catalogueNumber: String,
        labelIds: [
          {
            type: ObjectId,
            ref: "Personnel",
          },
        ],
      },
    ],
    description: String,
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
    videos: [
      {
        title: String,
        videoUrl: String,
        description: String,
      },
    ],
    releaseYear: {
      type: Number,
      min: 1890,
      max: 2030,
    },
    format: {
      type: String,
      enum: formats,
    },
    releaseCountry: {
      type: String,
      enum: Object.keys(countries),
    },
    originalReleaseCountry: {
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
  {
    timestamps: true,
  }
);

const Release  = mongoose.model("Release", ReleaseSchema);
module.exports = Release;

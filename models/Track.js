const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const TrackSchema = new Schema(
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
            type:ObjectId,
            ref: "Personnel",
          },
        ],
        role: String,
      },
    ],
    originalVersion:
     {
      type: ObjectId,
      ref: "Track",
     },
    duration: Number,
    writers: [
      {
       ObjectId,
       ref: "Personnel",
      }],
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

const Track = mongoose.model("Track", TrackSchema);
module.exports = Track;

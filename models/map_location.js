import mongoose from "mongoose";

const MapLocationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    NOcar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const MapLocation = mongoose.model("MapLocation", MapLocationSchema);

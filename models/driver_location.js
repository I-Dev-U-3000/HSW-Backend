import mongoose from "mongoose";

const driverLocationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    licenseNo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const DriverLocation = mongoose.model("DriverLocation", driverLocationSchema);

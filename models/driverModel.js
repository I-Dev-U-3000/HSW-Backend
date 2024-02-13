import mongoose from "mongoose";

const driverSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    licenseNo: {
      type: String,
      required: true,
    },
    NRC: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Driver = mongoose.model("Driver", driverSchema);

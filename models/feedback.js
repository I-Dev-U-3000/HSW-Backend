import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    suggestion: {
      type: String,
      required: true,
    },
    how_know: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Feedback = mongoose.model("Feedback", feedbackSchema);

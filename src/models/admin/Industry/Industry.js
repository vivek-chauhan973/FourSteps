import mongoose from "mongoose";
const IndustrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim:true,
      unique:true
    },
    filename: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
   
    contentsummary: {
      type: String,
    },
    path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Industry = mongoose.models.Industry || mongoose.model("Industry", IndustrySchema);

export default Industry;
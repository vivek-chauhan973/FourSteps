import mongoose from "mongoose";
import "./Why4Steps";
const IndustrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    heading: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    editorHtmlDescription: {
      type: String,
      required: true,
    },

    link: {
      type: String,
    }, 
    path: {
      type: String,
      required: true,
    },
    industry: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Industry1",
    },
  },
  { timestamps: true }
);

const IndustrySolution =
  mongoose.models.IndustrySolution || mongoose.model("IndustrySolution", IndustrySchema);

export default IndustrySolution;
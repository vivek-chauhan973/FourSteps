import mongoose from "mongoose";
import "../solutionHero";
import  "./solutionItem";
const IndustrySchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    mainEditorHtmlDescription:{
        type:String,
        required:true
    },
    industry: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SolutionHero",
    },
    successItem:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SolutionSolutionItem",
      }]
  },
  { timestamps: true }
);

const SolutionSolution =
  mongoose.models.SolutionSolution || mongoose.model("SolutionSolution", IndustrySchema);

export default SolutionSolution;

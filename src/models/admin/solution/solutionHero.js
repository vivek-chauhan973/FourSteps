import mongoose from "mongoose";
import "./success/success";
import "./Why4StepS";
import "./solution/solution";
const SolutionHeroSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  solutionName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },

  contentsummary: {
    type: String,
    required: true,
  },
  solutionType: {
    type: String,
    required: true,
  },
  Why4StepS: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Why4StepSolution",
  },
  success: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SolutionSuccess",
  },
  solution: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SolutionSolution",
  },
});

const SolutionHero =
  mongoose.models.SolutionHero ||
  mongoose.model("SolutionHero", SolutionHeroSchema);

export default SolutionHero;

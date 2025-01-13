import mongoose from "mongoose";

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
  file: {
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
});

export default mongoose.models.SolutionHero ||
  mongoose.model("SolutionHero", SolutionHeroSchema);

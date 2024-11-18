const mongoose = require("mongoose");

const caseStudySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    service: { type: String, required: true },
    industry: { type: String, required: true },
    path: { type: String, required: true },
    filename: { type: String, required: true },
    altText: { type: String },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.CaseStudy || mongoose.model("CaseStudy", caseStudySchema);

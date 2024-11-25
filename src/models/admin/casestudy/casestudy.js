import mongoose from "mongoose";
import "./Faq";
import "./Overview";
import "./Screenshot";
import "./Highlights";
import "./Seo";
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
    },
    faq:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"CaseFaq"
    },
    seo:{
       type:mongoose.Schema.Types.ObjectId,
      ref:"CaseSeo"
    },
    chalenges:{
       type:mongoose.Schema.Types.ObjectId,
      ref:"CaseChalenge"
    },
    overview:{
      type:mongoose.Schema.Types.ObjectId,
     ref:"CaseOverview"
   },
   visuals:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"CaseVisuals"
   }]
  },
  { timestamps: true }
);

const CaseStudy= mongoose.models.CaseStudy || mongoose.model("CaseStudy", productSchema);
export default CaseStudy;

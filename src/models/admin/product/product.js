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
      ref:"ProductFaq"
    },
    seo:{
       type:mongoose.Schema.Types.ObjectId,
      ref:"ProductSeo"
    },
    highlight:{
       type:mongoose.Schema.Types.ObjectId,
      ref:"ProductHighLights"
    },
    overview:{
      type:mongoose.Schema.Types.ObjectId,
     ref:"ProductOverview"
   },
   screenshot:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ProductScreenshot"
   }]
  },
  { timestamps: true }
);

const Product= mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
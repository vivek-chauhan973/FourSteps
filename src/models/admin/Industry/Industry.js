import mongoose from "mongoose";
import "./Why4Steps";
import "./Success";
import "./InSolution"
import "./IndustrySolution"
import "./Product/InSolution";
import  "./Services/InSolution";
import "./Benefits/Benefits";
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
    why4step:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Why4Steps"
    }
    ,
    success:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Success"
    }],
    solution:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"InSolution"
    },
    product:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"InProduct"
    },
    service:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"InService"
    },
    benefit:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Benefits"
    }

  },
  { timestamps: true }
);

const Industry1 = mongoose.models.Industry1 || mongoose.model("Industry1", IndustrySchema);

export default Industry1;

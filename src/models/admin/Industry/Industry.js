import mongoose from "mongoose";
import "./Why4Steps";
import "./Success";
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
    solution:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"IndustrySolution"
    }]
  },
  { timestamps: true }
);

const Industry1 = mongoose.models.Industry1 || mongoose.model("Industry1", IndustrySchema);

export default Industry1;

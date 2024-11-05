const { default: mongoose } = require("mongoose");

const webinarSchema=new mongoose.Schema({
    webinarImage:{
        type:String,
        required:true
    },
    imgAlt:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    videoLink:{
        type:String,
        required:true
    },
    sublitile:{
        type:String,
        required:true
    },
    webinarType:{
        type:String,
        required:true
    },
    toolsAndSoftware:{
        type:String,
        required:true
    },
    topics:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    industry:{
        type:String,
        required:true
    },
    languages:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
    ,
    speaker:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    overview:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Overview"
    },
    highlights:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"KeyAndHighLights"
    }

},{timestamps:true});

const Webinar=mongoose.models.Webinar||mongoose.model("Webinar",webinarSchema);
export default Webinar;
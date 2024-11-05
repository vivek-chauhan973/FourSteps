const { default: mongoose } = require("mongoose");
const keyAndHighLightsSchema=new mongoose.Schema({
    description:{
        type:String
    }
},{timestamps:true});

const KeyAndHighLights=mongoose.models.KeyAndHighLights||mongoose.model("KeyAndHighLights",keyAndHighLightsSchema);
export default KeyAndHighLights;
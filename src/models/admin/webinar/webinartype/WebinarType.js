import mongoose from 'mongoose';

const WebinarTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

 const WebinarType= mongoose.models.WebinarType || mongoose.model('WebinarType', WebinarTypeSchema);
 export default WebinarType;

import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  link1: {
    type: String,
    required: true,
  },
  link2: {
    type: String,
    required: true,
  },
});

// Check if the model already exists to avoid overwriting
const Teammember =
  mongoose.models.Teammember || mongoose.model("Teammember", teamMemberSchema);

export default Teammember;

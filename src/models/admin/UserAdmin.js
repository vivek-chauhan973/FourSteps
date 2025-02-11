import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accessToken: { type: String },
  accessTokenExpiry: { type: Date }, 
  refreshToken: { type: String }, 
  refreshTokenExpiry: { type: Date },
}, { timestamps: true });
const UserAdmin = mongoose.models.UserAdmin||mongoose.model("UserAdmin", userSchema);
module.exports = UserAdmin;

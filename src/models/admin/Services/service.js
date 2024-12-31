// models/admin/Services/service.js
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
      trim: true,
      unique: true, // Ensure the service name is unique
    },
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true, // Ensure the title is unique
    },
    filename: {
      type: String,
      required: true, // Store the filename (e.g., the image filename or the uploaded file)
    },
    description: {
      type: String,
      required: true, // Store a short description of the service
    },
    contentsummary: {
      type: String, // Optional summary or extended description of the service
    },
    path: {
      type: String,
      required: true, // Store the path to the uploaded file (e.g., image or asset)
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create or retrieve the Service model
const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;

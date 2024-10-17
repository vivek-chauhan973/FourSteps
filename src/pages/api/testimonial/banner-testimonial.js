import dbConnect from "@/utils/db"; // Ensure this is correctly importing your db connection
import multer from "multer";
import fs from "fs";
import TestimonialBanner from "@/models/admin/Testimonial/TestimonialBanner";
// Set up storage configuration for multer
const uploadDirectory = "./public/uploads/Testimonialbanner";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Save the original file name
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing
  },
};

// Use multer middleware to handle file uploads
export default async function handler(req, res) {
  await dbConnect(); // Connect to the MongoDB database

  const { method } = req;

  if (method === "POST") {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        console.error("Multer Error:", err);
        return res
          .status(500)
          .json({ error: "Error uploading image", details: err.message });
      }

      try {
        // Check if req.file exists
        if (!req.file) {
          return res.status(400).json({ error: "No file uploaded" });
        }

        // Destructure alt text from req.body
        const { alt } = req.body;

        const filename = req.file.filename; // Use the original filename

        // Create a new testimonial entry
        const newTestimonial = new TestimonialBanner({
          path: `/uploads/Testimonialbanner/${filename}`, // Save the image filename
          filename,
          alt,
        });

        // Save the testimonial to the database
        const savedTestimonial = await newTestimonial.save();

        res.status(201).json(savedTestimonial); // Return the saved testimonial
      } catch (error) {
        console.error("Error saving testimonial:", error);
        res
          .status(500)
          .json({ error: "Error saving testimonial", details: error.message });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

// import Testimonial from "@/models/admin/Testimonial/Testimonialmodel";
// import dbConnect from "@/utils/db";
// import multer from "multer";
// import path from "path";
// import fs from "fs";

// // Set up storage configuration for multer
// const uploadDirectory = './public/uploads/TeamImages';
// if (!fs.existsSync(uploadDirectory)) {
//   fs.mkdirSync(uploadDirectory, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDirectory);
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname); // Save the original file name
//   },
// });

// const upload = multer({ storage });

// export const config = {
//   api: {
//     bodyParser: false, // Disable default body parsing
//   },
// };

// // Use multer middleware to handle file uploads
// export default async function handler(req, res) {
//   await dbConnect(); // Connect to the MongoDB database

//   if (req.method === "POST") {
//     upload.single("image")(req, res, async (err) => {
//       if (err) {
//         console.error("Multer Error:", err);
//         return res.status(500).json({ error: "Error uploading image", details: err.message });
//       }

//       try {
//         const { name, alt, designation, description } = req.body;
//         const { path: imagePath, filename } = req.file; // Access the file info

//         // Create a new testimonial entry
//         const newTestimonial = new Testimonial({
//           name,
//           alt,
//           designation,
//           description,
//           path: imagePath, // Save the image path
//           filename, // Save the image filename
//         });

//         // Save the testimonial to the database
//         const savedTestimonial = await newTestimonial.save();

//         res.status(201).json(savedTestimonial); // Return the saved testimonial
//       } catch (error) {
//         console.error("Error saving testimonial:", error);
//         res.status(500).json({ error: "Error saving testimonial", details: error.message });
//       }
//     });
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }

import Testimonial from "@/models/admin/Testimonial/Testimonialmodel";
import dbConnect from "@/utils/db";
import multer from "multer";
import path from "path";
import fs from "fs";

// Set up storage configuration for multer
const uploadDirectory = "./public/uploads/Testimonial";
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

  if (req.method === "POST") {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        console.error("Multer Error:", err);
        return res
          .status(500)
          .json({ error: "Error uploading image", details: err.message });
      }

      try {
        // Destructure the fields from req.body
        const { name, alt, designation, description } = req.body;

        // Check if req.file exists
        if (!req.file) {
          return res.status(400).json({ error: "No file uploaded" });
        }

        // Access the file info
        // Use the file's path
        const filename = req.file.filename; // Use the original filename

        // Create a new testimonial entry
        const newTestimonial = new Testimonial({
          name,
          alt,
          designation,
          description,
          filename,
          path: `/uploads/Testimonial/${filename}`, // Save the image filename
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
  } else if (req.method === "GET") {
    try {
      const testimonials = await Testimonial.find({});
      res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fethhing the testimonials:", error);
      res.status(500).json({
        error: "Errorn fetching the testimonials ",
        details: error.message,
      });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

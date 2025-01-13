// import dbConnect from "@/utils/db";
// import multer from "multer";
// import path from "path";
// import fs from "fs";
// import solutionHero from "@/models/admin/solution/solutionHero";

// // Set up storage configuration for multer
// const uploadDirectory = "./public/uploads/solutionHero";
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

// export default async function CreateSolution(req, res) {
//   await dbConnect();

//   const { method } = req;
//   if (method === "POST") {
//     upload.single("image")(req, res, async (err) => {
//       if (err) {
//         console.error("Multer Error:", err);
//         return res
//           .status(500)
//           .json({ error: "Error uploading image", details: err.message });
//       }

//       try {
//         // Destructure the fields from req.body

//         const {
//           title,
//           solutionName,
//           description,

//           solutionType,
//           contentsummary,
//         } = req.body;

//         // Check if req.file exists
//         if (!req.file) {
//           return res.status(400).json({ error: "No file uploaded" });
//         }

//         const filename = req.file.filename; // Use the original filename

//         // Create a new testimonial entry
//         const newSolutionHero = new solutionHero({
//           title,
//           solutionName,
//           description,

//           solutionType,
//           contentsummary,
//           path: `/uploads/solutionHero/${filename}`, // Save the image filename
//         });

//         // Save the testimonial to the database
//         const savedSolutionHero = await newSolutionHero.save();

//         res.status(201).json(savedSolutionHero); // Return the saved testimonial
//       } catch (error) {
//         console.error("Error saving SolutionHero:", error);
//         res
//           .status(500)
//           .json({ error: "Error saving SolutionHero", details: error.message });
//       }
//     });
//   }
// }
import dbConnect from "@/utils/db";
import multer from "multer";
import path from "path";
import fs from "fs";
import SolutionHero from "@/models/admin/solution/solutionHero";

const uploadDirectory = "./public/uploads/solutionHero";
if (!fs.existsSync(uploadDirectory))
  fs.mkdirSync(uploadDirectory, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDirectory),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });
export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    upload.single("file")(req, res, async (err) => {
      if (err)
        return res.status(500).json({ error: "Upload failed", details: err });

      const { title, solutionName, description, contentsummary, solutionType } =
        req.body;
      const filePath = `/uploads/solutionHero/${req.file.filename}`;
  console.log("req body data is here --> ",req.body)
      try {
        const solution = await SolutionHero.create({
          title,
          solutionName,
          solutionType,
          description,
          file: req.file.filename,
          path: filePath,
          contentsummary,
        });
        res.status(201).json(solution);
      } catch (error) {
        res
          .status(500)
          .json({ error: "Database error", details: error.message });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
export const config = { api: { bodyParser: false } };
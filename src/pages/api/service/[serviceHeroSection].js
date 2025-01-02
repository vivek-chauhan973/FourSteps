// import multer from "multer";
// import path from "path";
// import fs from "fs";
// import dbConnect from "@/utils/db";

// import Service from "@/models/admin/ServicesModel/service";

// const uploadDirectory = "./public/uploads/service/herosection";

// // Ensure the upload directory exists
// if (!fs.existsSync(uploadDirectory)) {
//   fs.mkdirSync(uploadDirectory, { recursive: true });
// }

// // Configure multer storage
// const storage = multer.diskStorage({
//   destination: uploadDirectory,
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     const fileName = `${file.fieldname}-${Date.now()}${ext}`;
//     cb(null, fileName);
//   },
// });

// const upload = multer({ storage });

// // API Route Handler
// const apiRoute = async (req, res) => {
//   await dbConnect();
//   const { serviceHeroSection } = req.query;

//   if (req.method === "PUT") {
//     // Handle file upload for PUT request
//     upload.single("file")(req, res, async (err) => {
//       if (err instanceof multer.MulterError) {
//         console.error("Multer error:", err);
//         return res.status(500).json({ error: "File upload failed" });
//       } else if (err) {
//         console.error("Unknown error during file upload:", err);
//         return res.status(500).json({ error: "File upload failed" });
//       }

//       const { title, description, serviceName, contentsummary } = req.body;
//       const fileData = req.file && {
//         title,
//         contentsummary,
//         serviceName,
//         description,
//         filename: req.file.filename,
//         path: `/uploads/service/herosection/${req.file.filename}`,
//       };

//       try {
//         const existingFile = await Service.findOne({ _id: serviceHeroSection });
//         if (existingFile) {
//           // Delete the previous image if it exists
//           if (existingFile.filename) {
//             const previousFilePath = path.join(
//               uploadDirectory,
//               existingFile.filename
//             );
//             if (fs.existsSync(previousFilePath)) {
//               fs.unlinkSync(previousFilePath);
//             }
//           }

//           // Update the file with the new data
//           const updatedFile = await Service.findOneAndUpdate(
//             { _id: existingFile._id },
//             { $set: fileData },
//             { new: true }
//           );

//           return res.status(200).json({ data: updatedFile });
//         } else {
//           return res.status(404).json({ error: "File not found" });
//         }
//       } catch (error) {
//         console.error("Error updating or saving file:", error);
//         return res
//           .status(500)
//           .json({ message: "Internal Server Error", error });
//       }
//     });
//   } else if (req.method === "GET") {
//     // Handle GET request
//     try {
//       const files = await Service.findOne({ _id: serviceHeroSection });
//       return res.status(200).json({ data: files });
//     } catch (error) {
//       return res.status(500).json({ message: "Internal Server Error", error });
//     }
//   } else {
//     // Handle other methods (e.g., POST, DELETE)
//     res.setHeader("Allow", ["POST", "GET", "DELETE"]);
//     return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//   }
// };

// export default apiRoute;

// // Disable body parser for handling file uploads
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

import dbConnect from "@/utils/db";
import Industry from "@/models/admin/Industry/Industry";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDirectory = "./public/uploads/industry/herosection";

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

const apiRoute = async (req, res) => {
  await dbConnect();
  const { serviceHeroSection } = req.query; // This is where the dynamic parameter is captured

  if (!serviceHeroSection) {
    return res
      .status(400)
      .json({ error: "serviceHeroSection parameter is missing in the URL" });
  }

  if (req.method === "POST") {
    // Handle POST request for file upload or other logic
    upload.single("file")(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error("Multer error:", err);
        return res.status(500).json({ error: "File upload failed" });
      } else if (err) {
        console.error("Unknown error during file upload:", err);
        return res.status(500).json({ error: "File upload failed" });
      }

      try {
        // You can now use the `serviceHeroSection` in your logic
        console.log("Received serviceHeroSection:", serviceHeroSection);
        const { file } = req;
        // Further logic with `serviceHeroSection` and `file`
        res
          .status(200)
          .json({ message: "File uploaded successfully", data: file });
      } catch (error) {
        console.error("Error in file upload or processing:", error);
        res.status(500).json({ message: "Internal Server Error", error });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disable body parser for file uploads
  },
};

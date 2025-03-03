import multer from "multer";
import path from "path";
import fs from "fs";
import dbConnect from "@/utils/db";
import SolutionHero from "@/models/admin/solution/solutionHero";

const uploadDirectory = "./public/uploads/solution/solutionHero";

// Ensure the upload directory exists
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// API Route Handler
const apiRoute = async (req, res) => {
  await dbConnect();
  const { solution } = req.query;

  if (req.method === "PUT") {
    // Handle file upload for PUT request
    upload.single("file")(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error("Multer error:", err);
        return res.status(500).json({ error: "File upload failed" });
      } else if (err) {
        console.error("Unknown error during file upload:", err);
        return res.status(500).json({ error: "File upload failed" });
      }

      const { title, description, solutionName,solutionType } = req.body;
      const fileData = req.file && {
        title,
        
        solutionName,
        description,
        filename: req.file.filename,
        solutionType,
        path: `/uploads/solution/solutionHero/${req.file.filename}`,
      };

      try {
        const existingFile = await SolutionHero.findOne({ _id: solution });
        if (existingFile) {
          // Delete the previous image if it exists
          if (existingFile.filename) {
            const previousFilePath = path.join(
              uploadDirectory,
              existingFile.filename
            );
            if (fs.existsSync(previousFilePath)) {
              fs.unlinkSync(previousFilePath);
            }
          }

          // Update the blog post with the new file
          const updatedFile = await SolutionHero.findOneAndUpdate(
            { _id: existingFile._id },
            { $set: fileData },
            { new: true }
          );

          return res.status(200).json({ data: updatedFile });
        } else {
          return res.status(404).json({ error: "Blog post not found" });
        }
      } catch (error) {
        console.error("Error updating or saving file:", error);
        return res
          .status(500)
          .json({ message: "Internal Server Error", error });
      }
    });
  } else if (req.method === "GET") {
    // Handle GET request
    try {
      const files = await SolutionHero.findOne({ _id: solution })
        .populate("Why4StepS benefit faq").populate({ path: "success", populate: { path: "successItem" } }).populate({ path: "solution", populate: { path: "solutionItem" } }).populate({ path: "product", populate: { path: "productItem" } }).populate({ path: "service", populate: { path: "serviceItem" } })
        .populate({ path: "overview", populate: { path: "overviewItem" } })
      return res.status(200).json({ data: files });
    } catch (error) {
      // console.error("Error fetching files:", error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    // Handle other methods (e.g., POST, DELETE)
    res.setHeader("Allow", ["PUT", "GET"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default apiRoute;

// Disable body parser for handling file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

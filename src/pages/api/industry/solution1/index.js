import multer from "multer";
import path from "path";
import fs from "fs";
import dbConnect from "@/utils/db";
import Success from "@/models/admin/Industry/Success";
import Industry1 from "@/models/admin/Industry/Industry";
import IndustrySolution from "@/models/admin/Industry/IndustrySolution";

const uploadDirectory = "./public/uploads/industry/industrysolution";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Multer storage configuration
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

  if (req.method === "POST") {
    upload.single("file")(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: "File upload failed due to Multer error" });
      } else if (err) {
        return res.status(500).json({ error: "Unknown error during file upload" });
      }

      const { title, heading, link, editorHtmlDescription, industry } = req.body;

      // Validate required fields
      if (!title || !heading || !industry) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const fileData = req.file
        ? {
            title,
            filename: req.file.filename,
            editorHtmlDescription,
            heading,
            link,
            industry,
            path: `/uploads/industry/industrysolution/${req.file.filename}`,
          }
        : null;

      try {
        const newFile = await IndustrySolution.create(fileData);

        if (!newFile) {
          return res.status(400).json({ message: "Failed to create file entry" });
        }

        await Industry1.findByIdAndUpdate(
          industry,
          { $push: { solution: newFile._id } },
          { new: true }
        );

        return res.status(200).json({ message: "File uploaded successfully", data: newFile });
      } catch (error) {
        console.error("Error creating file:", error);
        return res.status(500).json({ message: "Internal Server Error", error });
      }
    });
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Missing file ID" });
    }

    try {
      const file = await IndustrySolution.findById(id);
      if (!file) {
        return res.status(404).json({ error: "File not found" });
      }

      // Delete file from filesystem if it exists
      const filePath = path.join(uploadDirectory, file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      // Remove reference from Industry model
      await Industry1.findByIdAndUpdate(file.industry, {
        $pull: { solution: id },
      });

      // Remove file from IndustrySolution collection
      await IndustrySolution.findByIdAndDelete(id);

      return res.status(200).json({ message: "File deleted successfully" });
    } catch (error) {
      console.error("Error deleting file:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Missing industry ID" });
    }

    try {
      const files = await IndustrySolution.find({ industry: id });
      return res.status(200).json({ data: files });
    } catch (error) {
      console.error("Error fetching files:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET", "DELETE"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};

import multer from "multer";
import path from "path";
import fs from "fs";
import dbConnect from "@/utils/db";
import Success from "@/models/admin/Industry/Success";
import Industry1 from "@/models/admin/Industry/Industry";
const uploadDirectory = "./public/uploads/industry/industrysuccess";
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
        // console.error("Multer error:", err);
        return res.status(500).json({ error: "File upload failed" });
      } else if (err) {
        // console.error("Unknown error during file upload:", err);
        return res.status(500).json({ error: "File upload failed" });
      }
      const {
        title,
        description,
        heading,
        link,
        backgroundColor,
        keyword,
        industry,
      } = req.body;

      const fileData = req.file && {
        title,
        filename: req.file.filename,
        description,
        heading,
        link,
        backgroundColor,
        keyword,
        industry,
        path: `/uploads/industry/industrysuccess/${req.file.filename}`,
      };

      try {
        const updatedFile = await Success.create(fileData);

        if (!updatedFile) {
          return res.status(400).json({ message: "Something went wrong" });
        }

        await Industry1.findOneAndUpdate(
          { _id: industry },
          { $push: { success: updatedFile._id } }
        );

        return res.status(200).json({ data: updatedFile });
      } catch (error) {
        console.error("Error creating file:", error);
        return res.status(500).json({ message: "Internal Server Error", error });
      }
    });
  } else if (req.method === "DELETE") {
    const { id } = req.query;
  
    try {
      // Fetch the file document from the database
      const file = await Success.findById(id);
      if (!file) {
        return res.status(404).json({ error: "File not found" });
      }
  
      // Delete the file from the filesystem
      const filePath = path.join(uploadDirectory, file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      } else {
        console.warn(`File not found on the server: ${filePath}`);
      }
  
      // Remove the file reference from the associated industry
      const industry = await Industry1.findById(file.industry);
      if (!industry) {
        return res.status(404).json({ error: "Associated industry not found" });
      }
  
      const updatedSuccess = industry.success.filter(
        (itemId) => itemId.toString() !== id
      );
  
      await Industry1.findByIdAndUpdate(file.industry, { success: updatedSuccess });
  
      // Delete the file document from the database
      await Success.findByIdAndDelete(id);
  
      return res.status(200).json({ message: "File and associated references deleted successfully" });
    } catch (error) {
      console.error("Error deleting file:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    const { id } = req.query;
    try {
      const files = await Success.find({industry:id});
      return res.status(200).json({ data: files });
    } catch (error) {
      // console.error("Error fetching files:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET", "DELETE"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed`, error });
  }
};

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
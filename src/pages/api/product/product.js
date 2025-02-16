import dbConnect from "@/utils/db";
import Product from "@/models/admin/product/product";
import multer from "multer";
import fs from "fs";
import path from "path";

// Ensure the upload directory exists
const uploadDirectory = "./public/uploads/product";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  },
});

const upload = multer({ storage });

async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    upload.single("image")(req, {}, async (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res
          .status(500)
          .json({ success: false, message: "File upload failed" });
      }

      try {
        const { title, subtitle, description, service, industry, altText,topics,tools } =
          req.body;

        // Validate the required fields
        if (
          !title ||
          !subtitle ||
          !description ||
          !service ||
          !industry ||
          !topics||
          !tools||
          !req.file
        ) {
          return res
            .status(400)
            .json({ success: false, message: "All fields are required" });
        }

        const newProduct = await Product.create({
          title,
          subtitle,
          description,
          service,
          industry,
          path: `/uploads/product/${req.file.filename}`,
          filename: req.file.filename,
          altText,
          topics,tools
        });
        res.status(201).json({
          success: true,
          message: "Product created successfully",
          newProduct,
        });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: "Internal server error", error });
      }
    });
  } else if (req.method === "GET") {
    try {
      const products = await Product.find().sort({ createdAt: -1 });

      if (!products || products.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No products found",
        });
      }

      res.status(200).json({ success: true, data: products });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

export default handler;
export const config = {
  api: { bodyParser: false }, // Disable Next.js default body parsing
};

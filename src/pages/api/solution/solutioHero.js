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
      console.log("req body data is here --> ", req.body);
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
    // not workig the GET METhOD HERE
  } else if (req.method === "GET") {
    // Handle the GET request to retrieve a solution by ID
    const { id } = req.query; // Assuming ID is passed as a query parameter

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    try {
      const solution = await SolutionHero.findById(id);
      if (!solution) {
        return res.status(404).json({ error: "Solution not found" });
      }
      res.status(200).json(solution);
    } catch (error) {
      res.status(500).json({ error: "Database error", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export const config = { api: { bodyParser: false } };

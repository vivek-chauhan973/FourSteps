// src/pages/api/user/user.js
import dbConnect from "@/utils/db";
import User from "@/models/admin/user";
import multer from "multer";
import path from "path";
import fs from "fs";

// Create the uploads directory if it doesn't exist
const uploadsDir = "./public/uploads/UserImages";
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, as multer will handle it
  },
};

const handler = upload.single("image"); // Expecting a single image field named 'image'

const userHandler = async (req, res) => {
  await dbConnect(); // Connect to your MongoDB database

  if (req.method === "POST") {
    handler(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: "Image upload failed." });
      }

      const { name, email, phone, description, role, jobProfile, alt } =
        req.body;

      // Create a new user instance
      const newUser = new User({
        name,
        email,
        phone,
        description,
        role,
        jobProfile,
        image: {
          filename: req.file.filename,
          path: `/uploads/UserImages/${req.file.filename}`,
        },
        alt,
      });

      try {
        await newUser.save();
        return res.status(201).json({ message: "User created successfully!" });
      } catch (error) {
        return res.status(500).json({ error: "Failed to save user data." });
      }
    });
  } else if (req.method === "GET") {
    // Handle GET request for fetching user data
    try {
      const users = await User.find({}); // Fetch all users
      return res.status(200).json(users); // Respond with the list of users
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch users." });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]); // Allow methods
    return res.status(405).end(`Method ${req.method} Not Allowed`); // Handle unsupported methods
  }
};

export default userHandler;

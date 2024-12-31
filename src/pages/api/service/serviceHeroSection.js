import fs from "fs";
import path from "path";
import dbConnect from "@/utils/db";
import Service from "@/models/admin/Services/service";

const uploadDirectory = path.resolve("./public/uploads/service/herosection");

// Ensure the upload directory exists
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Next.js config to disable body parsing
export const config = {
  api: {
    bodyParser: false, // Disable the default body parser for file uploads
  },
};

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const boundary = req.headers["content-type"].split("boundary=")[1];
    let data = "";
    let fileData = null;
    let fileName = "";
    let filePath = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", async () => {
      const parts = data.split(`--${boundary}`);
      for (const part of parts) {
        if (part.includes("Content-Disposition: form-data")) {
          const [contentDisposition, ...content] = part.split("\r\n");
          const contentData = content.join("\r\n").trim();

          // Check if the part is a file
          if (contentDisposition.includes("filename")) {
            const fileHeaders = contentDisposition.split(";");
            const fileNameMatch = fileHeaders.find((header) =>
              header.includes("filename")
            );
            if (fileNameMatch) {
              fileName = fileNameMatch.split("=")[1].replace(/"/g, "").trim();
              fileData = contentData;
            }
          }

          // Check if it's form data like serviceName, title, etc.
          else {
            const match = contentDisposition.match(/name="([^"]+)"/);
            if (match) {
              const fieldName = match[1];
              if (fieldName === "serviceName") {
                serviceName = contentData;
              } else if (fieldName === "title") {
                title = contentData;
              } else if (fieldName === "description") {
                description = contentData;
              } else if (fieldName === "contentsummary") {
                contentsummary = contentData;
              } else if (fieldName === "editorHtmlDescription") {
                editorHtmlDescription = contentData;
              }
            }
          }
        }
      }

      if (!fileData) {
        return res.status(400).json({ message: "File is required" });
      }

      try {
        // Save the file
        filePath = `/uploads/service/herosection/${fileName}`;
        const fileLocation = path.join(uploadDirectory, fileName);
        fs.writeFileSync(fileLocation, Buffer.from(fileData, "binary"));

        // Save the service data to the database
        const newService = new Service({
          serviceName,
          title,
          description,
          contentsummary,
          filename: fileName,
          path: filePath,
        });

        await newService.save();

        return res.status(200).json({
          message: "Service Hero Section saved successfully!",
          data: newService,
        });
      } catch (error) {
        console.error("Error saving service:", error);
        return res.status(500).json({ message: "Error saving service", error });
      }
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

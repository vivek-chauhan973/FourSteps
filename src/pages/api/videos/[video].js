import dbConnect from "@/utils/db";

import Videos from "@/models/admin/videos/videomain";

async function handler(req, res) {
  const { video } = req.query;
  if (req.method === "PUT") {
  } else if (req.method === "DELETE") {
  } else {
    try {
      const videos = await Videos.find({ _id: video });

      if (!videos) {
        return res.status(404).json({
          success: false,
          message: "No videos found found",
        });
      }

      res.status(200).json({ success: true, data: videos });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

export default handler;
export const config = {
  api: { bodyParser: false }, // Disable Next.js default body parsing
};

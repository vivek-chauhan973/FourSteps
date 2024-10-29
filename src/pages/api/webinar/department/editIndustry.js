import dbConnect from "@/utils/db";
import Department from "@/models/admin/webinar/department/Department";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "PUT") {
    const { id } = req.query; // Get ID from query parameters
    const { name } = req.body; // Get the updated name from the request body

    try {
      const updatedIndustry = await Department.findByIdAndUpdate({_id:id},{$set:{name}},{upsert:true});
      if (!updatedIndustry) {
        return res
          .status(404)
          .json({ success: false, message: "Industry not found" });
      }

      res.status(200).json({ success: true, data: updatedIndustry });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

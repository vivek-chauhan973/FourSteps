import dbConnect from "@/utils/db";
import Department from "@/models/admin/webinar/department/Department";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name } = req.body;
      const newIndustry = await Department.create({ name });
      res.status(201).json({ success: true, data: newIndustry });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

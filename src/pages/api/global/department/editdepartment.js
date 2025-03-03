// src/pages/api/admin/webinar/departments/editdepartment.js
import dbConnect from "@/utils/db";
import Depatment from "@/models/admin/global/department";
export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "PUT") {
    try {
      const { id, name } = req.body;
      const updatedDepartment = await Depatment.findByIdAndUpdate(
        id,
        { name },
        { new: true } // Return the updated document
      );
      return res.status(200).json(updatedDepartment);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

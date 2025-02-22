import Depatment from "@/models/admin/global/department";
import dbConnect from "@/utils/db";


export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const newDepartment = new Depatment({ name: req.body.name });
      const savedDepartment = await newDepartment.save();
      return res.status(201).json(savedDepartment);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

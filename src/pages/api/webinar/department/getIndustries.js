import dbConnect from '@/utils/db';
import Department from '@/models/admin/webinar/department/Department';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const industries = await Department.find({});
      res.status(200).json({ success: true, data: industries });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}

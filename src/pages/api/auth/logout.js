import UserAdmin from "@/models/admin/UserAdmin";
import dbConnect from "@/utils/db";


export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  await dbConnect();

  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(400).json({ error: 'Refresh token is required' });

  const user = await UserAdmin.findOne({ refreshToken });
  if (!user) return res.status(404).json({ error: 'User not found' });

  // Remove refresh token from the database
  user.refreshToken = null;
  await user.save();

  res.json({ message: 'Logged out successfully' });
}

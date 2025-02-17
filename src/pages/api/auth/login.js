import bcrypt from 'bcrypt';
import dbConnect from '@/utils/db';
import { generateAccessToken, generateRefreshToken } from '@/utils/generateTokens';
import UserAdmin from '@/models/admin/UserAdmin';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  await dbConnect();
  const { username, password } = req.body;
  const user = await UserAdmin.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  res.json({ accessToken, refreshToken });
}

import jwt from 'jsonwebtoken';
import User from '../../../models/User';
import { connectDB } from '../../../utils/db';
import { generateAccessToken } from '../../../utils/generateTokens';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  await connectDB();

  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ error: 'Unauthorized' });

  const user = await User.findOne({ refreshToken });
  if (!user) return res.status(403).json({ error: 'Invalid refresh token' });

  try {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  } catch (error) {
    res.status(403).json({ error: 'Invalid refresh token' });
  }
}

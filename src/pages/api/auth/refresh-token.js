import dbConnect from "@/utils/db";
import cookie from "cookie";
import UserAdmin from "@/models/admin/UserAdmin";
import { generateTokens, verifyRefreshToken } from "@/utils/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await dbConnect();

  const cookies = cookie.parse(req.headers.cookie || "");
  const refreshToken = cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token found" });
  }

  const decoded = verifyRefreshToken(refreshToken);
  if (!decoded) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }

  const user = await UserAdmin.findById(decoded.userId);
  if (!user || user.refreshToken !== refreshToken) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }

  const { accessToken } = generateTokens(user._id);
  user.accessToken = accessToken;
  user.accessTokenExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

  await user.save();

  res.json({ accessToken });
}

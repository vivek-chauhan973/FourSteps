import bcrypt from "bcrypt";
import cookie from "cookie";
import dbConnect from "@/utils/db";
import UserAdmin from "@/models/admin/UserAdmin";
import { generateTokens } from "@/utils/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await dbConnect();

    const { username, password } = req.body;
    console.log("req body is here ----> ",req.body)
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await UserAdmin.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const { accessToken, refreshToken } = generateTokens(user._id);
    if (!accessToken || !refreshToken) {
      return res.status(500).json({ message: "Token generation failed" });
    }

    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    user.accessTokenExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
    user.refreshTokenExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await user.save();

    res.setHeader(
      "Set-Cookie",
      cookie?.serialize("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        path: "/",
      })
    );

    return res.status(200).json({ accessToken });

  } catch (error) {
    console.error("Error in login API:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

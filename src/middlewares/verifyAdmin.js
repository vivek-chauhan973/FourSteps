import { authMiddleware } from "./authMiddleware";
export const verifyAdmin = (handler) => authMiddleware(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access only' });
  }
  return handler(req, res);
});

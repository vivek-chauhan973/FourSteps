import { verifyAdmin } from "@/middlewares/verifyAdmin";
export default verifyAdmin(async function handler(req, res) {
  res.json({ message: 'Admin API accessed successfully' });
});

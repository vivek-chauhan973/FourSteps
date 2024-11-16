import dbConnect from "@/utils/db";
import Product from "@/models/admin/product/product";




async function handler(req, res) {

const {product}=req.query;
  if (req.method === "PUT") {
    
  } else if (req.method === "DELETE") {
    
  } else {
    try {
        const products = await Product.find({_id:product});
  
        if (!products) {
          return res.status(404).json({
            success: false,
            message: "No products found",
          });
        }
  
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
  }
}

export default handler;
export const config = {
  api: { bodyParser: false }, // Disable Next.js default body parsing
};

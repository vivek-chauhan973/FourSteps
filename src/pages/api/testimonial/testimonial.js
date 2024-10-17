import Testimonial from "@/models/admin/Testimonial/Testimonialmodel";
import dbConnect from "@/utils/db";

export default async function handler(req, res) {
  await dbConnect(); // Connect to the MongoDB database

  if (req.method === "POST") {
    try {
      const { name, alt, designation, description } = req.body;

      // Create a new testimonial entry
      const newTestimonial = new Testimonial({
        name,
        alt,
        designation,
        description,
      });

      // Save the testimonial to the database
      const savedTestimonial = await newTestimonial.save();

      res.status(201).json(savedTestimonial); // Return the saved testimonial
    } catch (error) {
      console.error("Error saving testimonial:", error); // Log the error for debugging
      res
        .status(500)
        .json({ error: "Error saving testimonial", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

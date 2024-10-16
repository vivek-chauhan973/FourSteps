// import Testimonial from "@/Component/Testimonial/Testimonial";
// import dbConnect from "@/utils/db";

// export default async function handler(req, res) {
//   await dbConnect();
//   if (req.method === "POST") {
//     try {
//       const { name, alt, designation, description } = req.body;

//       //   const path = `/uploads/${imageFile.name}`;
//       //create a new testimonial
//       const newTestimonial = new Testimonial({
//         name,
//         alt,
//         designation,
//         description,
//         // path,
//       });
//       await newTestimonial.save();
//       res.status(201).json({ message: " testimonial created succeffully" });
//     } catch (error) {
//       res.status(400).json({ message: "Error creating testimonial", error });
//     }
//   } else {
//     res.status(405).json({ message: "method not alowed" });
//   }
// }

// import Testimonial from "@/models/admin/Testimonial/Testimonialmodel";
// import dbConnect from "@/utils/db";
// export default async function handler(req, res) {
//   await dbConnect(); // Connect to the MongoDB database

//   if (req.method === "POST") {
//     try {
//       const { name, alt, designation, description } = req.body;

//       // Create a new testimonial entry
//       const newTestimonial = new Testimonial({
//         name,
//         alt,
//         designation,
//         description,
//       });

//       // Save the testimonial to the database
//       const savedTestimonial = await newTestimonial.save();

//       res.status(201).json(savedTestimonial);
//     } catch (error) {
//       res.status(500).json({ error: "Error saving testimonial" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
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

// import mongoose from "mongoose";

// const testimonialSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   alttext: {
//     type: String,
//     required: true,
//   },
//   designation: {
//     type: String,
//     requird: true,
//   },
//   description: {
//     type: String,
//     requird: true,
//   },
// //   path: {
// //     type: String,
// //     required: true,
// //   },
// });

// const Testimonial =
//   mongoose.models.Testimonial ||
//   mongoose.model("Testimonial", testimonialSchema);

// export default Testimonial;
import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Testimonialmodel =
  mongoose.models.Testimonial || mongoose.model("Testimonial", testimonialSchema);

export default Testimonialmodel;

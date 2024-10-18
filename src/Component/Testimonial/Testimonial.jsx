// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import { TbWorldWww } from "react-icons/tb";

// const Testimonial = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     arrows: false,
//     autoplaySpeed: 5000,
//     cssEase: "linear",
//   };
//   // for testimonial data here
//   const [testimonial, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       const response = await fetch("/api/testimonial/testimonial");
//       const data = await response.json();
//       console.log("-----testimonajnjbcdcvvsdkvkg--->", data);
//       setTestimonials(data);
//       setLoading(false); // Set loading to false after data fetch
//     };

//     fetchTestimonials();
//   }, []);
//   if (loading) return <p>Loading testimonials...</p>;

//   //   for testimonial banner background image  here

//   const [banner, setBanner] = useState([]);
//   useEffect(() => {
//     const handleBanner = async () => {
//       const image = await fetch("/api/testimonial/banner-testimonial");
//       const result = await image.json();

//       console.log("print banner here->>>>>>>>>", result);
//       setBanner(result);
//     };

//     handleBanner();
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div
//           className="relative bg-cover bg-center text-white justify-center items-center"
//           style={{ backgroundImage: `url('/image/bg.jpg')` }}
//         >
//           <div className="container py-12">
//             <Slider {...settings}>
//               {testimonial.map((item) => (
//                 <div key={item._id} className="">
//                   <div className="flex flex-col items-center justify-center py-2 rounded-lg shadow-lg max-w-md mx-auto">
//                     <h2 className="md:text-4xl text-lg text-white font-bold tracking-wide mb-3">
//                       Testimonial
//                     </h2>
//                     <img
//                       src={item?.path}
//                       alt={item?.name}
//                       className="rounded-full mt-3 object-cover mb-2 h-32 w-32 border-4 border-gray-400"
//                     />
//                     <div className="flex gap-2">
//                       <h3 className="text-xl font-semibold">{item.name}</h3>
//                       {/* <p className="">{item.role}</p> */}
//                     </div>
//                     <p className="italic">{item.designation}</p>
//                     <p className="text-center mt-2">{item.description}</p>
//                     {/* <div className="flex absolute top-16 ml-28">
//                       <div className="flex gap-2">
//                         <div className="bg-blue-600 h-6 w-6 items-center justify-center p-1 rounded-full">
//                           <FaFacebookF />
//                         </div>
//                         <div className="bg-[#1DA1F2] text-white h-6 w-6 items-center justify-center p-1 rounded-full">
//                           <FaTwitter />
//                         </div>
//                         <div className="bg-[#FFC0CB] text-white h-6 w-6 items-center justify-center p-1 rounded-full">
//                           <TbWorldWww />
//                         </div>
//                       </div>
//                     </div> */}
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonial;
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  // State for testimonials and loading status
  const [testimonial, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch testimonials on mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/api/testimonial/testimonial");
      const data = await response.json();
      console.log("-----testimonials--->", data);
      setTestimonials(data);
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  // State for banner images
  const [banner, setBanner] = useState([]);

  // Fetch banner images on mount
  useEffect(() => {
    const handleBanner = async () => {
      const response = await fetch("/api/testimonial/banner-testimonial");
      const result = await response.json();
      console.log("Banner images->>>>>>>>>", result);
      setBanner(result);
    };

    handleBanner();
  }, []);
  const backgroundImage =
    banner.length > 0 ? `url('${banner[0].path}')` : "url('/image/bg.jpg')"; // Fallback image

  // Render loading state
  if (loading) return <p>Loading testimonials...</p>;

  return (
    <div className="container">
      <div
        className="relative bg-cover w-full h-full bg-center text-white justify-center items-center"
        style={{ backgroundImage }} // Set the dynamic background image
      >
        <div className="container py-12">
          <Slider {...settings}>
            {testimonial.map((item) => (
              <div key={item._id}>
                <div className="flex flex-col items-center justify-center py-2   max-w-md mx-auto">
                  <h2 className="md:text-4xl text-lg text-white font-bold tracking-wide mb-3">
                    Testimonial
                  </h2>
                  <img
                    src={item?.path}
                    alt={item?.name}
                    className="rounded-full mt-3 object-cover mb-2 h-36 w-36 border-4 border-gray-400"
                  />
                  <div className="flex gap-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                  </div>
                  <p className="italic">{item.designation}</p>
                  <p className="text-center text-md mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

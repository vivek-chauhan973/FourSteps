// import React from "react";
// import Slider from "react-slick";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
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

//   return (
//     <>
//       <div className="container">
//         <div
//           className="relative bg-cover bg-center   text-white justify-center items-center"
//           style={{ backgroundImage: `url('/image/bg.jpg')` }}
//         >
//           <div className="  container py-12">
//             <Slider {...settings}>
//               <div className="">
//                 <div className="flex  flex-col items-center justify-center py-6   rounded-lg shadow-lg max-w-md mx-auto">
//                   <h2 className="text-4xl text-white font-bold tracking-wide mb-4">
//                     Testimonial
//                   </h2>
//                   <img
//                     src="/image/ab.webp"
//                     alt="Esmeralda"
//                     className="rounded-full mt-3  object-cover mb-4 h-24 w-24 border-4 border-gray-400"
//                   />
//                   <div className=" flex gap-2 ">
//                     <h3 className="text-xl font-semibold">Esmeralda111111</h3>
//                     <p className="">Customer</p>
//                   </div>

//                   <p className=" italic">United States</p>
//                   <p className="text-center mt-4">
//                     Maecenas interdum, metus vitae tincidunt porttitor, magna
//                     quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin
//                     eget gravida odio. Donec ullamcorper est eu accumsan cursus.
//                   </p>
//                   <div className="flex absolute top-20   ml-28">
//                     <div className="  flex gap-2 ">
//                       <div className=" bg-blue-600 h-6 w-6 items-center justify-center p-1 rounded-full">
//                         <span>
//                           <FaFacebookF />
//                         </span>
//                       </div>
//                       <div className=" bg-[#1DA1F2]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
//                         <span>
//                           <FaTwitter />
//                         </span>
//                       </div>
//                       <div className=" bg-[#FFC0CB]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
//                         <span>
//                           <TbWorldWww />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex  flex-col items-center justify-center   rounded-lg shadow-lg max-w-md mx-auto">
//                   <h2 className="text-4xl text-white font-bold tracking-wide mb-4">
//                     Testimonial
//                   </h2>
//                   <img
//                     src="/image/ab.webp"
//                     alt="Esmeralda"
//                     className="rounded-full mt-3  object-cover mb-4 h-24 w-24 border-4 border-gray-400"
//                   />
//                   <div className=" flex gap-2 ">
//                     <h3 className="text-xl font-semibold">Esmeralda111111</h3>
//                     <p className="">Customer</p>
//                   </div>

//                   <p className=" italic">United States</p>
//                   <p className="text-center mt-4">
//                     Maecenas interdum, metus vitae tincidunt porttitor, magna
//                     quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin
//                     eget gravida odio. Donec ullamcorper est eu accumsan cursus.
//                   </p>
//                   <div className="flex absolute top-20   ml-28">
//                     <div className="  flex gap-2 ">
//                       <div className=" bg-blue-600 h-6 w-6 items-center justify-center p-1 rounded-full">
//                         <span>
//                           <FaFacebookF />
//                         </span>
//                       </div>
//                       <div className=" bg-[#1DA1F2]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
//                         <span>
//                           <FaTwitter />
//                         </span>
//                       </div>
//                       <div className=" bg-[#FFC0CB]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
//                         <span>
//                           <TbWorldWww />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex  flex-col items-center justify-center p-6   rounded-lg shadow-lg max-w-md mx-auto">
//                   <h2 className="text-4xl text-white font-bold tracking-wide mb-4">
//                     Testimonial
//                   </h2>
//                   <img
//                     src="/image/ab.webp"
//                     alt="Esmeralda"
//                     className="rounded-full mt-3  object-cover mb-4 h-24 w-24 border-4 border-gray-400"
//                   />
//                   <div className=" flex gap-2 ">
//                     <h3 className="text-xl font-semibold">Esmeralda111111</h3>
//                     <p className="">Customer</p>
//                   </div>

//                   <p className=" italic">United States</p>
//                   <p className="text-center mt-4">
//                     Maecenas interdum, metus vitae tincidunt porttitor, magna
//                     quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin
//                     eget gravida odio. Donec ullamcorper est eu accumsan cursus.
//                   </p>
//                   <div className="flex absolute top-20   ml-28">
//                     <div className="  flex gap-2 ">
//                       <div className=" bg-blue-600 h-6 w-6 items-center justify-center p-1 rounded-full">
//                         <span>
//                           <FaFacebookF />
//                         </span>
//                       </div>
//                       <div className=" bg-[#1DA1F2]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
//                         <span>
//                           <FaTwitter />
//                         </span>
//                       </div>
//                       <div className=" bg-[#FFC0CB]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
//                         <span>
//                           <TbWorldWww />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonial;

import React from "react";
import Slider from "react-slick";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

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

  // Dynamic data for testimonials (this can come from an API)
  const testimonials = [
    {
      name: "Esmeralda111111",
      role: "Customer",
      designation: "ceo",
      description:
        "Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.",
      image: "/image/try.jpeg",
    },
    {
      name: "John Doe",
      role: "Client",
      designation: "Ceo of abc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.",
      image: "/image/ab.webp",
    },
    {
      name: "Jane Smith",
      role: "User",
      designation: "ceo of abc",
      description:
        "Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo.",
      image: "/image/ab.webp",
    },
  ];

  return (
    <>
      <div className="container">
        <div
          className="relative bg-cover bg-center text-white justify-center items-center"
          style={{ backgroundImage: `url('/image/bg.jpg')` }}
        >
          <div className="container py-12">
            <Slider {...settings}>
              {testimonials.map((item) => (
                <div key={item.id} className="">
                  <div className="flex flex-col items-center justify-center py-2 rounded-lg shadow-lg max-w-md mx-auto">
                    <h2 className="md:text-4xl text-lg text-white font-bold tracking-wide mb-3">
                      Testimonial
                    </h2>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-full mt-3 object-cover mb-2 h-32 w-32 border-4 border-gray-400"
                    />
                    <div className="flex gap-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      {/* <p className="">{item.role}</p> */}
                    </div>
                    <p className="italic">{item.designation}</p>
                    <p className="text-center mt-2">{item.description}</p>
                    {/* <div className="flex absolute top-16 ml-28">
                      <div className="flex gap-2">
                        <div className="bg-blue-600 h-6 w-6 items-center justify-center p-1 rounded-full">
                          <FaFacebookF />
                        </div>
                        <div className="bg-[#1DA1F2] text-white h-6 w-6 items-center justify-center p-1 rounded-full">
                          <FaTwitter />
                        </div>
                        <div className="bg-[#FFC0CB] text-white h-6 w-6 items-center justify-center p-1 rounded-full">
                          <TbWorldWww />
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

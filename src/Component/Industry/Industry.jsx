// import React, { useState, useEffect } from "react";

// const Industry = () => {
//   const businesses = [
//     { img: "/image/1.png", alt: "Abc", name: "E-Commerce Industry" },
//     { img: "/image/2.png", alt: "Abc", name: "Real-Estate Industry" },
//     { img: "/image/3.png", alt: "Abc", name: "Education Industry" },
//     { img: "/image/4.png", alt: "Abc", name: "HealthCare Industry" },
//     { img: "/image/5.png", alt: "Abc", name: "Tour & Travel Industry" },
//     { img: "/image/6.png", alt: "Abc", name: "IT Industry" },
//     { img: "/image/7.png", alt: "Abc", name: "Sales & Marketing Industry" },
//     { img: "/image/8.png", alt: "Abc", name: "Distribution Industry" },
//     { img: "/image/9.png", alt: "Abc", name: "Manufacturing Industry" },
//   ];

//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const displayCount = isSmallScreen ? 9 : businesses.length;

//   return (
//     <div className="container md:p-10  p-5">
//       <div>
//         <h2 className="text-3xl font-bold text-center">
//           Industries <span className="text-primary">We Serve</span>
//         </h2>
//         <p className="text-gray-600 mb-6 text-center">
//           Businesses trust us because we provide them with the highest quality
//           services
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2 md:p-10">
//           {businesses.slice(0, displayCount).map((business, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 border border-gray-100"
//             >
//               <img
//                 src={business.img}
//                 alt={business.alt}
//                 className="w-24 h-24 md:w-28 md:h-28  object-cover cursor-pointer rounded-lg hover-zoom"
//               />
//               <p className="text-center md:text-lg my-2 text-xs font-semibold">
//                 {business.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Industry;

// import Image from "next/image";
// import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  faArrowRight } from "@fortawesome/free-solid-svg-icons";

// const Industry = () => {
//   const cardData = [
//     {
//       imgSrc: "/image/ser.png",
//       title: "Consulting Meeting",
//     },
//     {
//       imgSrc: "/image/ser.png",
//       title: "Gap Analysis",
//     },
//     {
//       imgSrc: "/image/ser.png",
//       title: " Proposal Approval",
//     },
//     {
//       imgSrc: "/image/ser.png",
//       title: " Project Onboarding",
//     },
//     {
//       imgSrc: "/image/ser.png",
//       title: " Launch Website",
//     },
//     {
//       imgSrc: "/image/ser.png",
//       title: "Training & Support",
//     },
//   ];

//   return (
//     <>
//       <div className=" container-wrapper md:my-10 my-5  ">
//         <div className="flex py-2 ">
//           <div>
//             <h2 className="text-3xl text-primary font-semibold pb-5">
//               <span className=" bg-orange-50 px-2 py-2 ">Our </span>
//               Industry Expertise
//             </h2>
//             <p className=" text-base md:text-lg pb-3">
//               We have excelled our experience in a wide range of industries to
//               bring valuable insights and provide our clients with the truly
//               beneficial solutions.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {cardData.map((card, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center cursor-pointer bg-white border border-gray-300  p-6 shadow group transition-transform hover:scale-105 hover:shadow-md relative"
//             >
//               {/* Icon Background */}
//               <div className="bg-gray-200 rounded-full p-4 mb-4 flex items-center justify-center">
//                 <Image
//                   src={card.imgSrc}
//                   alt={`${card.title} Icon`}
//                   className="w-12 h-12 md:w-16 md:h-16 max-w-full"
//                   height={100}
//                   width={100}
//                 />
//               </div>
//               {/* Rotating Arrow */}
//               <span className="absolute right-4 top-4 transform rotate-[-50deg] group-hover:rotate-0 transition-transform duration-300">
//                 <FontAwesomeIcon
//                   icon={faArrowRight}
//                   className="text-primary text-xl"
//                 />
//               </span>
//               {/* Card Title */}
//               <h3 className="text-lg font-medium text-center text-gray-700 group-hover:text-primary">
//                 {card.title}
//               </h3>
//               {/* Hover Bottom Bar */}
//               <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-orange-500 group-hover:w-full transition-all duration-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Industry;

import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Industry = () => {
  const cardData = [
    { imgSrc: "/image/8.png", title: "Consulting Meeting" },
    { imgSrc: "/image/8.png", title: "Gap Analysis" },
    { imgSrc: "/image/8.png", title: "Proposal Approval" },
    { imgSrc: "/image/8.png", title: "Project Onboarding" },
    { imgSrc: "/image/8.png", title: "Launch Website" },
    { imgSrc: "/image/8.png", title: "Training & Support" },
  ];

  // Array of background colors
  const bgColors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-red-100",
    "bg-purple-100",
    "bg-pink-100",
  ];

  return (
    <div className="container-wrapper md:my-10 px-4 md:px-0 my-5">
      <div className="flex py-2">
        <div>
          <h2 className="md:text-3xl text-xl  text-primary font-semibold pb-5">
            <span className="bg-orange-50 px-2 py-2">Our </span>
            Industry Expertise
          </h2>
          <p className="text-sm md:text-lg pb-3">
            We have excelled our experience in a wide range of industries to
            bring valuable insights and provide our clients with truly
            beneficial solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer bg-white border border-gray-300 p-4 shadow group transition-transform hover:scale-105 hover:shadow-md relative"
          >
              {/* Icon Background with dynamic color */}
              <div
                className={`rounded p-3 mb-4 flex items-center justify-center ${
                  bgColors[index % bgColors.length]
                }`}
              >
                <Image
                  src={card.imgSrc}
                  alt={`${card.title} Icon`}
                  className="w-12 h-12 md:w-16 md:h-16 max-w-full"
                  height={100}
                  width={100}
                />
              </div>
              {/* Rotating Arrow */}
              <span className="absolute right-3 top-2 transform rotate-[-50deg] group-hover:rotate-0 transition-transform duration-300">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-primary text-lg"
                />
              </span>
              {/* Card Title */}
              <h3 className="text-lg font-medium text-center text-gray-700 group-hover:text-primary">
                {card.title}
              </h3>
         
            {/* Hover Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-orange-500 group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;

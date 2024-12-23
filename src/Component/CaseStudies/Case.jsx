// import React, { useState, useRef, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleRight,
//   faAngleLeft,
//   faArrowRight,
// } from "@fortawesome/free-solid-svg-icons";

// const Case = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const data = [
//     {
//       title: "Bizare Xpendition tour & travel",
//       information:
//         "Bizare Xpendition offers unparalleled travel experiences, blending adventure and luxury. Explore unique destinations with our expertly curated tours, ensuring unforgettable journeys and exceptional service every step of the way.",
//       image: "/image/bg.jpg",
//       link: "/case-studies/tour-travel", // Add page link
//     },
//     {
//       title: "IBC Super30",
//       information:
//         "ljkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk Experience the future of business management with Zoho's all-in-one suite. Our innovative solutions streamline your operations, enhance productivity, and drive growth. From CRM and project management to finance and HR, Zoho empowers your business to achieve more with less effort.",
//       image: "/image/bg.jpg",
//       link: "/case-studies/zoho", // Add page link
//     },
//     {
//       title: "Rescom Solar",
//       information: "Zoho One Implementation for Rescom Solar",
//       image: "/image/bg.jpg",
//       link: "/case/rescomsolar", // Add page link
//     },
//     {
//       title: "Best Time",
//       information: "I had the best time of my life! Everything was.",
//       image: "/image/bg.jpg",
//       link: "/case/besttime", // Add page link
//     },
//   ];

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   const carouselRef = useRef(null);

//   const scrollNext = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: carouselRef.current.clientWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   const scrollPrev = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: -carouselRef.current.clientWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         carouselRef.current.style.overflowX = "scroll";
//       } else {
//         carouselRef.current.style.overflowX = "hidden";
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleReadMore = (link) => {
//     window.location.href = link; // redirect to link
//   };

//   return (
//     <div className="bg-gray-300 my-5 container">
//       <div className="carousel-container relative container-wrapper">
//         <div className="text-center md:text-left py-4 mt-6 md:mt-0 order-2 md:order-1">
//           <h2 className="text-sm md:text-md font-bold text-gray-600">
//             Case Studies
//           </h2>
//           <h1 className="text-2xl md:text-2xl font-semibold mb-3 text-gray-800">
//             Some Successfully Completed Projects
//           </h1>
//           <p>
//             Let us become an enabler to your business growth. Partner with us to
//             build your own success story.
//           </p>
//         </div>

//         <div className="carousel gap-5 pb-10" ref={carouselRef}>
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="relative bg-white min-w-80 h-auto rounded-lg mb-4 group"
//             >
//               <div className="px-4 py-2 relative">
//                 {/* Image with color overlay on hover */}
//                 <a href={item.link} className="block relative">
//                   <img
//                     src={item.image}
//                     alt="Project"
//                     className="w-full h-auto rounded"
//                   />
//                   {/* Color overlay on hover */}
//                   <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded"></div>
//                   {/* Arrow appears on hover */}
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <FontAwesomeIcon
//                       icon={faArrowRight}
//                       className="text-md text-white"
//                     />
//                   </div>
//                 </a>
//               </div>
//               <div className="px-3 py-1">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="mt-1 line-clamp-5 text-sm  transition duration-400 ease-in-out hover:text-pi-300 py-1 ">
//                   {item.information}
//                 </p>
//                 {/* Read More Button */}
//                 <button
//                   onClick={() => handleReadMore(item.link)}
//                   className="group relative my-3 cursor-pointer overflow-hidden rounded-md border-2 border-orange-500 w-full px-3 py-2 font-mono text-center"
//                 >
//                   <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-orange-500 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
//                   <span className="ease relative text-orange-500 transition duration-300 group-hover:text-white">
//                     Read Full Story
//                   </span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="hidden md:block absolute top-[55%] -translate-y-[60px] justify-between w-full">
//           <div className="justify-between flex pl-1">
//             <button
//               onClick={scrollPrev}
//               className="rounded-full h-10 w-10 bg-black/50 hover:bg-black p-3 text-white"
//             >
//               <FontAwesomeIcon icon={faAngleLeft} className="" />
//             </button>
//             <button
//               onClick={scrollNext}
//               className="rounded-full bg-black/50 h-10 w-10 hover:bg-black p-3 text-white"
//             >
//               <FontAwesomeIcon icon={faAngleRight} className="" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Case;

import React, { useState } from "react";
import SideCard from "./SideCard";

const Case = () => {
  const [statePackage, setStatePackage] = useState([]);

  const data = {
    states: [
      { _id: "1", name: "Tour & Travels " },
      { _id: "2", name: "Hubspot" },
      { _id: "3", name: "Markrting" },
      { _id: "4", name: "Zoho" },
      { _id: "5", name: "Bitrix" },
    ],
  };

  return (
    <div className=" my-1 mt-6 md:mt-10 container-wrapper">
      <div className="">
        <div className="container-wrapper text-center">
          <h2 className="md:text-3xl text-lg text-primary font-semibold pb-5">
            Our Success Stories
          </h2>
          <p className="md:text-lg text-base font-normal">
            Success is not accidental it is the result of bold ideas and
            relentless execution. Here is how we made it happen.
          </p>
        </div>
        <div className="container-wrapper grid grid-cols-5 gap-3 overflow-hidden">
          <div className="flex xl:flex-col md:mt-14 md:gap-5 gap-2 py-5 xl:col-auto col-span-5 xl:overflow-x-hidden overflow-x-scroll">
            {data?.states?.length > 0 &&
              data?.states?.slice(0, 5)?.map((title) => (
                <div key={title._id}>
                  <div className="">
                    <button
                      className="cursor-pointer capitalize shadow-md bg-gradient-to-r from-orange-500 to-red-500 xl:w-52 w-40 text-white md:text-[16px] text-para md:py-2.5 py-1.5 px-4 rounded-md"
                      // onClick={() => handleStatePackages(title._id)}
                    >
                      {title.name}
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="relative xl:col-span-4 col-span-5 w-full overflow-auto">
            <div className="flex gap-4">
              {/* for sharing the data
              <SideCard statePackage={statePackage} /> */}
              <SideCard />
            </div>
            <div className="bg-gradient-to-l from-white opacity-100 w-8 h-full right-0 absolute z-30 top-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;

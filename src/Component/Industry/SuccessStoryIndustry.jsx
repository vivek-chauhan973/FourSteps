// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowRight,
// } from "@fortawesome/free-solid-svg-icons";
// import Image from 'next/image';

// const SuccessStoryIndustry = () => {
//   return (
//     <section className="relative w-full mb-20 mt-5 bg-gray-100">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/image/bg.jpg" // Replace with your image path
//           alt="Background"
//           className="w-[75%] h-[450px] object-cover"
//           height={500}
//           width={500}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-end max-w-7xl mx-auto ">
//         {/* Left Placeholder (Keeps layout consistent) */}
//         <div className="hidden md:block md:w-1/2"></div>

//         {/* Right Content */}
//         <div className="bg-[#FFF0F5] shadow-lg  p-6 md:p-8 h-auto md:w-1/2 z-10">
//           <div className="flex items-center space-x-2 mb-4">
//             <span className="bg-white  text-black text-sm px-2 py-2 rounded">Insurance</span>
//             <span className="bg-white  text-black text-sm px-2 py-2 rounded">BFSI</span>
//             <span className="bg-white  text-black text-sm px-2 py-2 rounded">Software products</span>
//           </div>
//           <h2 className="text-xl md:text-xl font-semibold text-gray-800 mb-4">
//             Underwriting Automation Software for a Global Aviation Insurer with $30B in Assets
//           </h2>
//           <p className="text-gray-600 text-sm md:text-base mb-6">
//             A custom underwriting system automates risk assessment, insurance pricing, policy administration,
//             task management, and compliance control. The new software helped increase underwriter productivity,...
//           </p>
//           <div className="mt-6 flex justify-center">
//                   <button className=" bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm md:text-base lg:text-lg py-2 px-6  inline-flex items-center transition-transform duration-300">
//                     Request details
//                     <FontAwesomeIcon
//                       icon={faArrowRight}
//                       className="ml-2 transform hover:translate-x-1"
//                     />
//                   </button>
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStoryIndustry;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const SuccessStoryIndustry = ({ stories }) => {
  // console.log("stories is here ----> ",stories)
  return (
    <>
      {/* section 1 */}
      {stories?.successItem?.map((item, i) => (
        <div key={i}>
          {i % 2 === 0 ? (
            <div className="relative w-full md:pb-20  pb-2 mt-5  bg-gray-100">
              {/* Background Image */}
              <div className="relative w-full md:absolute md:inset-0 md:w-[75%] h-[250px] md:h-[450px]">
                <Image
                  src={item?.path} // Replace with your image path
                  alt="Background"
                  className="w-full h-full md:h-[70vh] md:w-[70vw] object-cover"
                  height={500}
                  width={500}
                />
              </div>

              {/* Content */}
              <div className="relative mt-1  flex flex-col md:flex-row items-center justify-center md:justify-end max-w-7xl mx-auto">
                {/* Left Placeholder (Keeps layout consistent on desktop) */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Right Content */}
                <div
                  className={`bg-[#FFF0F5] shadow-lg   p-4 md:p-8 h-auto md:w-1/2 z-10`}
                >
                  <div className="flex items-center space-x-2 mb-4">
                    {item?.keyword?.split(",")?.map((item, i) => (
                      <span
                        key={i}
                        className="bg-white text-black text-sm px-2 py-2 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg md:text-[22px] font-semibold text-gray-800 mb-4">
                    {item?.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-6">
                    {item?.description}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <button className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm md:text-base lg:text-lg py-2 px-6 inline-flex items-center transition-transform duration-300">
                      Request details
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 transform hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative  w-full md:pb-16 pb-0 ">
              {/* Background Image */}
              <div className="relative w-full md:absolute md:inset-y-0 md:right-0 md:w-[75%] h-[250px] md:h-[450px]">
                <Image
                  src={item?.path}
                  alt="Background"
                  className="w-full h-full md:h-[70vh] md:w-[70vw] object-cover"
                  height={500}
                  width={500}
                />
              </div>
              {/* Content */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-center md:justify-between max-w-7xl mx-auto">
                <div className="hidden md:block md:w-1/2"></div>

                {/* Right Content */}
                <div className="bg-[#FFF0F5] shadow-lg p-4 md:p-8 h-auto md:w-1/2 ">
                  <div className="flex items-center space-x-2 mb-4">
                    {item?.keyword?.split(",")?.map((item, i) => (
                      <span
                        key={i}
                        className="bg-white text-black text-sm px-2 py-2 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg md:text-[22px] font-semibold text-gray-800 mb-4">
                    {item?.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-6">
                    {item?.description}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <button className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm md:text-base lg:text-lg py-2 px-6 inline-flex items-center transition-transform duration-300">
                      Request details
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 transform hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SuccessStoryIndustry;

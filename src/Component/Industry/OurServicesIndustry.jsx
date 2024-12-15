import Image from "next/image";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const OurServicesIndustry = () => {
  const data = [
    {
      imageSrc: "/image/1.png",
      imageAlt: "Consulting Image 1",
      title: "Advanced technology consulting",
      description: "ScienceSoft's consultants advise on the use of",
      points: [
        "Insurance data aggregation and processing.",
        "Claim-related decision-making.",
        "Insurance fraud detection.",
        "Risk management.",
        "Advanced operational analytics.",
        "Demand forecasting and spend planning.",
        "End-to-end traceability of reimbursement transactions, and more.",
      ],
    },
    // Add more data objects as needed
    {
      imageSrc: "/image/2.png",
      imageAlt: "Consulting Image 2",
      title: "Innovative solutions advisory",
      description: "Expert advice on implementing",
      points: [
        "Blockchain integration.",
        "AI-driven analytics.",
        "Cybersecurity enhancements.",
        "IoT connectivity.",
        "Cloud infrastructure optimization.",
        "Machine learning models.",
        "Data-driven decision-making.",
      ],
    },
    {
      imageSrc: "/image/2.png",
      imageAlt: "Consulting Image 2",
      title: "Innovative solutions advisory",
      description: "Expert advice on implementing",
      points: [
        "Blockchain.",
        "AI-driven analytics.",
        "Cybeity enhancements.",
        "IoT connectivity.",
        "Cloud infrastructure optimon.",
        "Machine learning ",
        "Data-driven decision-making.",
      ],
    },
    // You can add more objects here
  ];

  return (
    // <div>
    //   <div className="">
    //     <h3 className="font-semibold text-primary text-3xl pb-7">
    //       IT Services for Insurance Companies
    //     </h3>
    //   </div>

    //   <div className="">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    //       {data.map((item, index) => (
    //         <div
    //           key={index}
    //           className="mx-auto border-t-[10px] hover:shadow border-primary border-b-[1px] border-l-[1px] border-r-[1px] border-b-gray-300 border-l-gray-300 border-r-gray-300"
    //         >
    //           <div className="md:flex">
    //             <div className="w-full py-10">
    //               <div className="flex justify-center items-center mb-4">
    //                 <div className="w-20 h-20  rounded-full flex items-center justify-center">
    //                   <Image
    //                     src={item.imageSrc}
    //                     alt={item.imageAlt}
    //                     className="w-20 h-20"
    //                     height={200}
    //                     width={200}
    //                   />
    //                 </div>
    //               </div>

    //               <div className="text-center ">
    //                 <h2 className="text-xl font-bold">{item.title}</h2>
    //                 <p className="mt-2 font-semibold text-gray-600">
    //                   {item.description}
    //                 </p>
    //               </div>

    //               <ul className="mt-4 text-gray-600 custom-list  px-10">
    //                 {item.points?.map((point, idx) => (
    //                   <li key={idx}>{point}</li>
    //                 ))}
    //               </ul>

    //               <div class="mt-6 flex justify-center">
    //                 <button class="bg-gray-800 text-primary hover:bg-primary hover:text-white font-semibold text-sm md:text-base lg:text-lg py-2 md:py-3 px-4 md:px-6 bg-transparent border rounded-lg inline-flex items-center transition-all duration-300">
    //                   Request details
    //                   <FontAwesomeIcon
    //                     icon={faArrowRight}
    //                     className="ml-2 transition-transform duration-300 transform hover:translate-x-1 hover:text-white"
    //                   />
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <>
      <div className=" ">
        <h3 className="font-semibold text-primary text-3xl pb-7">
          IT Services 
        </h3>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg border-t-[8px] border-primary hover:shadow-lg transition-all duration-300 mx-auto w-full max-w-md h-auto  border-b-[1px] border-l-[1px] border-r-[1px] border-b-gray-300 border-l-gray-300 border-r-gray-300"
            >
              <div className="p-6">
                <div className="flex justify-center items-center mb-6">
                  <div className="w-24 h-24 overflow-hidden flex items-center justify-center">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="object-cover"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-600 font-medium">
                    {item.description}
                  </p>
                </div>

                <ul className="mt-4 text-gray-600 custom-list  px-4">
                  {item.points?.map((point, idx) => (
                    <li key={idx} className="mb-[2px]">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex justify-center">
                  <button className=" bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm md:text-base lg:text-lg py-2 px-6  inline-flex items-center transition-transform duration-300">
                    Request details
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 transform hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServicesIndustry;

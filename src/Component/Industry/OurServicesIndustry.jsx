import Image from "next/image";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const OurServicesIndustry = ({ services }) => {
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
  // console.log("all service present here ", services);
  return (
    <>
      <div className="">
        <p
          className=" text-sm md:text-base"
          dangerouslySetInnerHTML={{
            __html: services?.mainEditorHtmlDescription,
          }}
        />
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services?.serviceItem?.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg border-t-[8px] border-primary hover:shadow-lg transition-all duration-300 mx-auto w-full max-w-md h-auto  border-b-[1px] border-l-[1px] border-r-[1px] border-b-gray-300 border-l-gray-300 border-r-gray-300"
            >
              <div className="md:px-6 px-3 py-6">
                <div className="flex justify-center items-center mb-6">
                  <div className="w-24 h-24 overflow-hidden flex items-center justify-center">
                    <Image
                      src={item?.path || "/image/2.png"}
                      alt="services"
                      className="object-cover"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="md:text-2xl text-lg font-semibold mb-2">
                    {item?.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base  font-medium">
                    {item?.subTitle}
                  </p>
                </div>

                <ul className="mt-4 text-gray-600 custom-list  px-4">
                  {item?.editorHtmlDescription?.map((point, idx) => (
                    <li
                      key={idx}
                      className="mb-[2px] text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: point.content, // Render HTML content inside list item
                      }}
                    ></li>
                  ))}
                </ul>

                {/* <div className="mt-6 flex justify-center">
                  <button className=" bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm md:text-base lg:text-lg py-2 px-6  inline-flex items-center transition-transform duration-300">
                    Request details
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 transform hover:translate-x-1"
                    />
                  </button>
                </div> */}

                <div className="mt-6 flex justify-center">
                  <Link
                    href={item?.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm md:text-base lg:text-lg py-2 px-6 inline-flex items-center transition-transform duration-300"
                  >
                    Request details
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 transform hover:translate-x-1"
                    />
                  </Link>
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

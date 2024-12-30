import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const OurServices = () => {
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
      imageSrc: "/image/3.png",
      imageAlt: "Consulting Image 3",
      title: "Innovative solutions advisory",
      description: "Expert advice on implementing",
      points: [
        "Blockchain.",
        "AI-driven analytics.",
        "Cybersecurity enhancements.",
        "IoT connectivity.",
        "Cloud infrastructure optimization.",
        "Machine learning.",
        "Data-driven decision-making.",
      ],
    },
  ];

  return (
    <>
      <div>
        <div>
          <p className="md:text-base py-2 text-sm">
            IT solutions ScienceSoft creates help insurance companies improve
            overall business efficiency and introduce excellent customer
            experience. We can engineer one or several of these targeted
            insurance solutions, as well as build a full-featured insurance
            business automation system:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {data?.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg border-t-[8px] border-primary hover:shadow-lg transition-all duration-300 mx-auto w-full max-w-md h-auto border-b-[1px] border-l-[1px] border-r-[1px] border-b-gray-300 border-l-gray-300 border-r-gray-300"
            >
              <div className="md:px-6 px-3 py-6">
                <div className="flex justify-center items-center mb-6">
                  <div className="mb-4">
                    <Image
                      src={item?.imageSrc || "/image/bg.jpg"} // Assuming the filename is a path to an image
                      alt={item?.imageAlt || "Service Image"}
                      className="w-full h-32 md:h-36 md:w-36 object-cover rounded"
                      height={500}
                      width={500}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="md:text-2xl text-lg font-semibold mb-2">
                    {item?.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base font-medium">
                    {item?.description}
                  </p>
                </div>

                <ul className="mt-4 text-gray-600 custom-list px-4">
                  {item?.points?.map((point, idx) => (
                    <li key={idx} className="mb-[2px] text-sm md:text-base">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex justify-center">
                  <Link
                    href="#"
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

export default OurServices;

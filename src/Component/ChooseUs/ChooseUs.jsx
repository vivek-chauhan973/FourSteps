import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ChooseUs = () => {
  const data = [
    "Customer-centric approach in business.",
    "Boost ROI and Brand Awareness.",
    "End-to-end support for services.",
    "Build and Improve Brand reputation.",
    "Track results through performance tracking.",
    "Technology-driven services.",
    "Technology-driven services.",
    "Affordable pricing & maintenance .",
  ];
  return (
    <div className="container mx-auto py-10 px-5 md:px-10">
      <div className="text-center mb-8">
        <h2 className="md:text-3xl  text-xl font-semibold capitalize mb-3">
          Why choose <span className="text-primary">Four Steps Digital</span>?
        </h2>
        <p className="md:text-lg text-sm text-gray-700">
          Win over your customers with result-driven digital strategies. Choose
          <span className="text-primary"> Four Steps Digital</span> to elevate
          your business.
        </p>
      </div>

      <div className="md:flex items-center gap-8">
        <div className="md:w-1/2 rounded-md overflow-hidden">
          <Image
            src="/image/yyy.png"
            alt="Four Steps Digital"
            className="w-full h-auto object-cover"
            height={500}
            width={500}
          />
        </div>

        <div className="md:w-1/2  md:mt-0">
          <ul className="space-y-4">
            {data.map((item, index) => (
              <li
                key={index}
                className="flex md:text-lg text-sm items-start gap-3"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-primary mt-1"
                />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

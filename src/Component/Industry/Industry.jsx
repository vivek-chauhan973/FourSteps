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
    <div className=" bg-white">
      <div className="container-wrapper  md:py-10 py-5  px-4 md:px-0 my-5">
        <div className="flex py-2">
          <div>
            <h2 className="md:text-3xl text-xl  text-heading font-semibold pb-5">
              <span className=" px-2 py-2">Our </span>
              Industry Expertise
            </h2>
            <p className="text-sm text-gray-900 md:text-lg pb-3">
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
    </div>
  );
};

export default Industry;

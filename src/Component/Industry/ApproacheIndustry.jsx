import Image from "next/image";
import React from "react";

const ApproacheIndustry = () => {
  const cardData = [
    {
      imgSrc: "/image/ser.png",
      title: "Consulting Meeting",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Gap Analysis",
    },
    {
      imgSrc: "/image/ser.png",
      title: " Proposal Approval",
    },
    {
      imgSrc: "/image/ser.png",
      title: " Project Onboarding",
    },
    {
      imgSrc: "/image/ser.png",
      title: " Launch Website",
    },
    {
      imgSrc: "/image/ser.png",
      title: "Training & Support",
    },
  ];

  return (
    <>
      <div>
        <div className="flex ">
          <div>
            <h2 className="md:text-3xl  text-lg text-primary font-semibold pb-3">
              Every successful strategy starts with an insightful conversation
            </h2>
            <p className=" pb-3 md:text-base   text-sm">
              Click on the cards below to explore the perks of our mature
              approach to service delivery and understand the benefits of
              trusting your insurance IT initiative to us
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-row  md:flex-col hover:text-primary items-center cursor-pointer border-[1px] bg-transparent p-4 shadow-md group relative"
            >
              <Image
                src={card?.imgSrc}
                alt={`${card?.title} Icon`}
                className="w-16 h-16 md:mb-4 md:w-20 md:h-20"
                height={100}
                width={100}
              />
              <h3 className=" md:text-lg text-base font-medium ml-4 md:ml-0 md:pb-1 text-center">
                {card?.title}
              </h3>
              <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-orange-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ApproacheIndustry;

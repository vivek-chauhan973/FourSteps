import React, { useState } from "react";
import Calltoaction from "../Web/Calltoaction";

const BenifitsIndustry = ({ benefits }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };
  // console.log("here is all the benifits data ", benefits);
  return (
    <>
      <div className="">
        <h2
          className="text-base pb-5"
          dangerouslySetInnerHTML={{ __html: benefits?.description }}
        ></h2>

        {/* Mobile view with slider */}
        <div className="block md:hidden text-center">
          <div className="border-l-[3px] p-6 inline-block">
            <div className="text-primary text-4xl font-semibold">
              {benefits?.items[currentIndex]?.title}
            </div>
            <div className="text-gray-700 mt-2">
              {benefits?.items[currentIndex]?.description}
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {benefits?.items?.map((_, index) => (
              <button
                key={index}
                className={`h-1 w-8 ${
                  currentIndex === index ? "bg-orange-500" : "bg-gray-300"
                } rounded-md transition-all duration-300`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop view with grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {benefits?.items?.map((stat, index) => (
            <div key={index} className="border-l-[3px] p-6">
              <div className="text-primary text-4xl font-semibold">
                {stat?.title}
              </div>
              <div className="text-gray-700 mt-2">{stat?.description}</div>
            </div>
          ))}
        </div>

        <Calltoaction />
      </div>
    </>
  );
};

export default BenifitsIndustry;

import React from "react";
import OverviewToggle from "./OverviewToggle";
import Image from "next/image";
const WebinarHero = () => {
  return (
    <div className="container">
      <div className="bg-gray-50">
        {/* Container */}
        <div className="w-full mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg p-6 rounded-md">
            {/* Left side: Text content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Automation Developer Associate zoho Training (v2023.10)
              </h1>
              <p className="text-gray-600 mb-6">
                If you want to contribute to building a better business world
                through developing enterprise automation projects, the UiPath
                Automation Developer Associate Training plan is for you!
              </p>

              {/* Progress section */}
              <div className="flex items-center space-x-2">
                emoji
                <span className="text-gray-600">Not Started</span>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex justify-center lg:justify-end">
              <Image
               src="/image/1.png"
                alt="Automation Training"
                className="rounded-md w-48 lg:w-60 object-cover"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>

      {/*  toggle section */}
      <div className=" relative">
        <OverviewToggle />
      </div>
    </div>
  );
};

export default WebinarHero;

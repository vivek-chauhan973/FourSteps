import React from "react";

const WebinarHero = () => {
  return (
    <div className="container">
      <div className="">
        <div className="container mx-auto flex gap-5 text-white bg-[#10364f] flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0">
          {/* Left section - Course Info */}
          <div className="lg:w-3/5 p-5 order-2 lg:order-1">
            <h1 className="text-3xl py-5 font-bold mb-2">
              Webinar Corner: Your Source for Industry Knowledge
            </h1>
            <p className="text-md-4">
              Success is not the key to happiness. Happiness is the key to
              success. If you love what you are doing, you will be successful.
            </p>
            <div className="text-gray-400 py-5">
              <p>
                Created by
                <span className="text-blue-400 ml-2 hover:underline cursor-pointer">
                  Abc...
                </span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex md:pt-5 flex-col items-center order-1 lg:order-2">
            <div className="h-48 sm:h-64 md:mb-4 flex justify-center items-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/LsoLEjrDogU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarHero;

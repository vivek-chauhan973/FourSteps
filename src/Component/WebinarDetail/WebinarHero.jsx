import React from "react";

const WebinarHero = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-96 text-white bg-[#10364f] items-center justify-between py-8 lg:py-0">
        {/* Left section - Course Info */}
        <div className="w-full lg:w-3/5 p-4 order-1 lg:order-1 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl py-5 font-bold mb-2">
            Webinar Corner: Your Source for Industry Knowledge
          </h1>
          <p className="text-md sm:text-lg mb-4">
            Success is not the key to happiness. Happiness is the key to
            success. If you love what you are doing, you will be successful.
          </p>
          <div className="text-gray-400 py-2">
            <p>
              Created by
              <span className="text-blue-400 ml-2 hover:underline cursor-pointer">
                Abc...
              </span>
            </p>
          </div>
        </div>

        {/* Right section - Video */}
        <div className="w-full lg:w-2/5 flex md:pt-5 flex-col items-center order-2 lg:order-2">
          <div className="w-full h-48 sm:h-64 md:h-80 lg:h-48 xl:h-64 2xl:h-80 mb-4 flex justify-center items-center">
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
  );
};

export default WebinarHero;
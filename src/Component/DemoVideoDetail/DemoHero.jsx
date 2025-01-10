import React from "react";
import Image from "next/image";
import Link from "next/link";

const DemoHero = ({ videoPackageData }) => {
  const { title, description, videoLink } = videoPackageData || {};
  console.log("-----------videolink", videoLink?.split("="));
  return (
    <>
      <div className=" bg-background ">
        <div className="container md:px-5 px-2 md:pt-0  pt-20">
          <div className="flex flex-col lg:flex-row h-auto items-center  justify-between  rounded-lg overflow-hidden py-8 lg:py-12 gap-8 lg:gap-5">
            {/* Left section - Course Info */}
            <div className="w-full lg:w-3/5 px-4 md:text-center lg:text-left">
              <h1 className="text-xl sm:text-xl text-heading capitalize md:text-xl lg:text-3xl font-semibold md:mb-4 mb-1">
                {title}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg md:mb-6 mb-3 capitalize leading-relaxed">
                {description}
              </p>
              <div class="flex  gap-3 justify-center md:justify-start">
                <Link href="#">
                  <button class=" border text-sm md:text-base border-primary  hover:text-primary hover:bg-transparent  py-2 md:py-2 px-4 md:px-5 rounded-full bg-primary text-white">
                    Book A Discovery Meeting
                  </button>
                </Link>
              </div>
            </div>

            {/* 
        {/* Right section - Video */}
            <div className="w-full lg:w-2/5 flex justify-center overflow-hidden items-center">
              <div className="w-full px-2 h-48 sm:h-64 md:h-80 lg:h-64 xl:h-80 2xl:h-96 rounded-lg md:overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                <iframe
                  src={`https://www.youtube.com/embed/${
                    videoLink?.split("=")?.[1]
                  }`} // Extract video ID
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoHero;

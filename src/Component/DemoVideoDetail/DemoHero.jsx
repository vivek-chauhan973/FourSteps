import React from "react";
import Image from "next/image";
import Link from "next/link";

const DemoHero = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row h-auto items-center justify-between bg-gradient-to-r from-blue-100 to-teal-50 rounded-lg overflow-hidden shadow-lg py-8 lg:py-12 gap-8 lg:gap-5">
          {/* Left section - Course Info */}
          <div className="w-full lg:w-3/5 px-4 md:text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl capitalize md:text-3xl lg:text-4xl font-bold md:mb-4 mb-1">
              Product 1
            </h1>

            <p className="text-sm sm:text-base lg:text-base md:mb-6 mb-3 capitalize leading-relaxed">
              product description
            </p>

            <div className="text-sm sm:text-base lg:text-lg">
              <button></button>

              <div class="flex ">
                <Link href="/">
                  <button class="bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-sm hover:bg-orange-500 transition duration-300 transform hover:scale-105">
                    Book A Discovery Meeting
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* 
        {/* Right section - Video */}
          <div className="w-full lg:w-2/5 flex justify-center overflow-hidden items-center">
            <div className="w-full px-2 h-48 sm:h-64 md:h-80 lg:h-64 xl:h-80 2xl:h-96 rounded-lg md:overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
              <Image
                src="/image/ab.webp"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoHero;

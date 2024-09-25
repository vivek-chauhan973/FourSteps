import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Button } from "flowbite-react";

const Calltoaction = () => {
  return (
    <div>
      <div className="relative container mb-10">
        <div className="absolute inset-0 bg-gradient-to-t mx-4 from-orange-500 to-transparent"></div>
        <div className="relative text-white py-3">
          <div className="container mx-auto ">
            <div className="flex flex-col gap-10 md:flex-row items-center justify-between bg-gray-800 p-8 z-10 relative">
              <div className="md:w-1/3  mb-4 md:mb-0">
                <img
                  src="/image/ab.webp"
                  alt="Consultant"
                  className="w-full h-full  object-cover "
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 w-full md:w-2/3">
                  Get expert insights with a free consultation book today!
                </h2>

                <p className="md:text-lg mb-6 text-md w-full md:w-2/3">
                  We help you see the world differently, discover opportunities
                  you may never have imagined.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-start">
                  {/* WhatsApp Icon and Phone Number */}
                  <div className="flex items-center space-x-1 mb-4 md:mb-0">
                    <span className="text-orange-500 text-3xl">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </span>
                    <span className="text-2xl">+980 876 765 654</span>
                  </div>

                  {/* Button centered */}
                  <div className="flex justify-center w-full md:w-auto">
                    <button className="bg-orange-500 text-white text-lg py-2 px-6 rounded hover:bg-orange-600">
                      meeting Link  
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Calltoaction = () => {
  return (
    <div>
      <div className="relative container mb-10">
        <div className="absolute inset-0 bg-gradient-to-t mx-4 from-orange-500 to-transparent"></div>
        <div className="relative text-black py-3">
          <div className="container mx-auto ">
            <div className="flex flex-col gap-10 md:flex-row items-center justify-between bg-gray-100 p-8 z-10 relative">
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

                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:justify-start">
                  {/* WhatsApp Icon and Phone Number */}
                  <div className="flex items-center space-x-1 mb-4 md:mb-0">
                    <span className="text-[#35D366] text-3xl">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </span>
                    <span className="text-xl"> +980 876 765 654</span>
                  </div>

                  {/* Button centered */}
                  <div className="flex justify-center w-full md:w-auto">
                    <button className=" border border-orange-500  hover:text-primary hover:bg-white  py-2 md:py-3 px-4 md:px-5 rounded-xl bg-primary text-white">
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
{
  /* <div class="max-w-6xl my-10 mx-auto p-6  shadow-md rounded-lg relative overflow-hidden">
        <div class="absolute inset-y-0 left-0 w-1 bg-orange-500"></div>

        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 p-5 items-center">
          <div>
            <h2 class="text-2xl py-6 md:text-3xl font-bold text-gray-800">
              Onboarding and Unleash the Power of Zoho for{" "}
              <span class="text-orange-500">Your Business</span>
            </h2>
            <p class="py-4 text-sm md:text-base text-gray-600">
              Transform your business through tailored guidance and training to
              fully leverage the capabilities of Zoho for growth.
            </p>
          </div>
          <div class="flex justify-center">
            <button class="mt-6 md:mt-0 w-56 h-14 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition">
              CONNECT WITH US
            </button>
          </div>
        </div>
      </div> */
}

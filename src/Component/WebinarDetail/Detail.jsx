import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link as ScrollLink } from "react-scroll";
import SideForm from "./SideForm";
import WebinarHero from "./WebinarHero";
import OverView from "./OverView";

import React from "react";
import Features from "./Features";
import Implimentation from "./Implimentation";
import Product from "./Product";

const Detail = () => {
  return (
    <div className="">
      {/* hero section */}
      <div>
        <WebinarHero />
      </div>

      <div className=" bg-gray-100">
        <div
          id="OverviewSection"
          className="bg-white shadow-lg py-1 sticky top-0 z-30"
        >
          <div className="container-wrapper gap-3 md:gap-10 xs:pb-5 md:pb-0 hide-scrollbar flex justify-start overflow-x-auto ">
            <div>
              <ScrollLink
                to="OverviewContent" // Updated to point to the correct id
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className=" text-para cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">
                  Overview
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="agenda"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Key & Highlights
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="speakerSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Speaker
                </p>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="px-5  grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
          <div>
            {/* Overview section */}
            <div
              id="OverviewContent" // Changed id here to be unique
              className="flex  justify-between mt-5 mb-3"
            >
              <div className="px-10">
                <div className=" font-semibold py-2 text-xl  ">Overview</div>
                <OverView />
              </div>
            </div>
            {/* key and highlight section */}
            <div id="agenda" className="flex  justify-between mt-5 mb-3">
              <div className="px-10">
                <div className=" font-semibold py-2 text-xl  ">
                  Key & highlights
                </div>
                <Features />
              </div>
            </div>
            {/* speaker  section */}
            <div
              id="speakerSection"
              className="flex  justify-between mt-5 mb-3"
            >
              <div className="px-10">
                <div className=" font-semibold py-2 text-xl  ">Speaker</div>
                <Implimentation />
              </div>
            </div>
          </div>
          <div className=" mt-10">
            <div className="sticky top-[50px] z-10">
              <div className="flex gap-1 justify-center items-center"></div>
              {/* side registration form */}
              <div className=" md:px-5">
                <SideForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

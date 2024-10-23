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
                to="OverviewSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className=" text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Overview
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="FeatureSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Features
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="ImplementationSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Implementation
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="productSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[140px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  product information
                </p>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="px-5  grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
          <div>
            {/* Overview section */}
            <div
              id="OverviewSection"
              className="flex  justify-between mt-5 mb-3"
            >
              <div className="px-10">
                <div className=" font-semibold py-2 text-xl  ">Overiew</div>
                <OverView />
              </div>
            </div>
            {/* features section */}
            <div
              id="FeatureSection"
              className="flex  justify-between mt-5 mb-3"
            >
              <div className="px-10">
                <div className=" font-semibold py-2 text-xl  ">Feartures</div>
                <Features />
              </div>
            </div>
            {/* implimentation section */}
            <div
              id="ImplementationSection"
              className="flex  justify-between mt-5 mb-3"
            >
              <div className="px-10">
                <div className=" font-semibold py-2 text-xl  ">
                  Implimentation
                </div>
                <Implimentation />
              </div>
            </div>
            {/* product */}
            <div
              id="productSection"
              className="flex  justify-between py-5 mb-3"
            >
              <div className="px-10">
                <div className=" font-semibold py-2 text-xl  ">Product</div>
                <Product />
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

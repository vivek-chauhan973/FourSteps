import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import SideForm from "./SideForm";
import WebinarHero from "./WebinarHero";
import OverView from "./OverView";

import React from "react";

const Detail = () => {
  return (
    <div className="">
      {/* hero section */}
      <div>
        <WebinarHero />
      </div>

      <div>
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
                to="informationSection"
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
              <div className="">
                <span className=" font-semibold text-xl ">Overiew</span>
                <OverView />
              </div>
            </div>
            {/* features section */}
            <div
              id="FeatureSection"
              className="flex  justify-between mt-5 mb-3"
            >
              <div className="">
                <h4 className=" font-semibold text-xl ">Features section</h4>
                Features
              </div>
            </div>
            {/* implimentation section */}

            <div
              id="ImplementationSection"
              className="flex  justify-between mt-5 mb-3"
            >
              <div className="">
                <h3 className=" font-semibold text-xl ">
                  ImplementationSection
                </h3>
                Implementation content
              </div>
            </div>
            {/* product */}
            <div
              id="informationSection"
              className="flex  justify-between mt-5 mb-3"
            >
              <div className="">
                <h1 className=" font-semibold text-xl ">information section</h1>
                information comonents{" "}
              </div>
            </div>

            <div className="pt-7">
              <h2 className="md:text-lg text-md font-semibold text-graytext">
                Be Responsible Traveller
              </h2>
              <ol className="text-para ml-6 list-disc px-2 pt-3">
                <li>
                  <span className="font-semibold">
                    Plant Trees Whenever Possible :{" "}
                  </span>{" "}
                  Participate in local tree-planting initiatives or plant trees
                  in your own community. Trees absorb carbon dioxide, provide
                  oxygen, and help support biodiversity, making them vital for a
                  healthy environment.
                </li>
              </ol>
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

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import IndustrySideForm from "../Industry/IndustrySideForm";

import ApproacheIndustry from "../Industry/ApproacheIndustry";
import SolutionAbout from "./SolutionAbout";
import SuccessStorySolution from "./SuccessStorySolution";
import ServiceSolution from "./ServiceSolution";
import ProductSolution from "./ProductSolution";
import BenifitSolution from "./BenifitSolution";
import Why4stepSolution from "./Why4stepSolution";
import OurServiceSolution from "./OurServiceSolution";
import SolutionDeliver from "./SolutionDeliver";
const TableofSolution = ({ industryName }) => {
  return (
    <div className="">
      <div className="bg-[#F1F5F9] ">
        <div className="md:px-5 gap-4 grid grid-cols-1 md:grid-cols-[2fr,0.6fr]">
          {/* Main Content */}
          <div className="px-5 grid grid-cols-1 bg-white">
            {/* Solution About section */}
            <div>
              {/* {industryName?.contentsummary && (
                <IndustryAbout about={industryName?.contentsummary} />
              )} */}

              <SolutionAbout />
            </div>

            {/* Reliable partners  */}
            <div
              id="OverviewContent"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div className="md:px-2">
                <h2
                  className="font-semibold text-primary text-lg md:text-3xl py-7 md:py-10"
                  dangerouslySetInnerHTML={{
                    __html:
                      industryName?.why4step?.heading || "Why 4Step Solution ",
                  }}
                />

                <Why4stepSolution />
              </div>
            </div>

            {/* Success story section */}
            <div id="agenda" className="flex flex-col justify-between  mb-3">
              <div>
                {/* Heading */}
                <div className="font-semibold text-primary text-lg md:text-3xl">
                  {industryName?.success?.heading || "Success Story"} main
                  heading Success Story Solution
                </div>
                <div>
                  {/* Description */}
                  <p
                    className="md:text-base py-2 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: industryName?.success?.mainEditorHtmlDescription,
                    }}
                  />
                  Each item has fields like path, backgroundColor, keyword,
                  title, description, and link.
                </div>

                <SuccessStorySolution />
              </div>
            </div>

            {/* Solution we deliver Section */}
            <div
              id="speakerSection"
              className="flex flex-col justify-between md:mt-20 mb-3"
            >
              <div>
                <div className="font-semibold py-2 text-xl">
                  <h3 className="font-semibold text-primary text-lg md:text-3xl">
                    {industryName?.solution?.heading || " Solution We Deliver"}
                    main heading Deliver
                  </h3>
                </div>

                <SolutionDeliver />
              </div>
            </div>

            {/* Our Services Section */}
            <div
              id="ourServices"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div>
                <div className="font-semibold text-primary text-lg md:text-3xl">
                  {industryName?.service?.heading || "Our Services"} main
                  heading Services
                </div>

                <OurServiceSolution />
              </div>
            </div>

            {/* Product Section */}
            <div
              id="product"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              {/* heading section  */}
              <h3 className="font-semibold text-primary text-lg md:text-3xl">
                {industryName?.product?.heading || "Our Products"} main heading
                Products
              </h3>

              <ProductSolution />
            </div>

            {/* Approaches Section */}
            <div
              id="approaches"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div>
                {/* <div className="font-semibold py-2 text-xl">Approaches</div> */}
                <ApproacheIndustry />
              </div>
            </div>

            {/* Benefits Section */}
            <div
              id="benefits"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div className="md:px-2">
                <div>
                  <h2 className="font-semibold text-primary text-lg md:text-3xl">
                    {industryName?.benefit?.heading || "Our Benifits"} main
                    heading Benifits
                  </h2>
                </div>

                <BenifitSolution />
              </div>
            </div>
          </div>

          {/* Table of content */}
          <div className="pl-3 md:pl-0 order-first md:order-none">
            <div className="sticky top-0 z-10">
              <h2 className="font-bold text-lg mb-4">Table of contents</h2>
              <div className="relative">
                {/* Vertical Line */}
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"></span>

                {/* Table of Content Items */}
                <div className="flex flex-col gap-4 pl-4">
                  <ScrollLink
                    to="OverviewContent"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                  >
                    <p className="text-gray-700 hover:text-black cursor-pointer">
                      Why 4Steps
                    </p>
                  </ScrollLink>

                  <ScrollLink
                    to="agenda"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                  >
                    <p className="text-gray-700 hover:text-black cursor-pointer">
                      Success stories
                    </p>
                  </ScrollLink>

                  <ScrollLink
                    to="speakerSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                  >
                    <p className="text-gray-700 hover:text-black cursor-pointer">
                      Solutions we deliver
                    </p>
                  </ScrollLink>

                  <ScrollLink
                    to="ourServices"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                  >
                    <p className="text-gray-700 hover:text-black cursor-pointer">
                      Our Services
                    </p>
                  </ScrollLink>

                  <ScrollLink
                    to="product"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                  >
                    <p className="text-gray-700 hover:text-black cursor-pointer">
                      Product
                    </p>
                  </ScrollLink>

                  <ScrollLink
                    to="approaches"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                  >
                    <p className="text-gray-700 hover:text-black cursor-pointer">
                      Approaches
                    </p>
                  </ScrollLink>

                  <ScrollLink
                    to="benefits"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                  >
                    <p className="text-gray-700 hover:text-black cursor-pointer">
                      Benefits
                    </p>
                  </ScrollLink>
                </div>
              </div>
              {/* Side form section */}
              <div className=" mt-2">
                <IndustrySideForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableofSolution;

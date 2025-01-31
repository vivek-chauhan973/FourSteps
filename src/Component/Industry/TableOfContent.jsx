import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Why4steps from "./Why4steps";
import SuccessStoryIndustry from "./SuccessStoryIndustry";
import SolutionIndustry from "./SolutionIndustry";
import BenifitsIndustry from "./BenifitsIndustry";
import ApproacheIndustry from "./ApproacheIndustry";
import ProductIndustry from "./ProductIndustry";
import OurServicesIndustry from "./OurServicesIndustry";
import IndustrySideForm from "./IndustrySideForm";
import IndustryAbout from "./IndustryAbout";

const TableOfContent = ({ industryName }) => {
  const [highlightedText, setHighlightedText] = useState("");
  function highlightSection(highlightId, hightValue) {
    // Reset all highlights
    const highlights = document.querySelectorAll('[id^="highlight"]');
    highlights.forEach((highlight) => {
      highlight.style.height = "0px";
    });
    setHighlightedText(highlightId);
    // Apply highlight to the selected section
    const activeHighlight = document.getElementById(highlightId);
    if (activeHighlight) {
      activeHighlight.style.height = hightValue; // Adjust height dynamically based on the heading position
    }
  }

  return (
    <div className="">
      <div className="bg-white py-7">
        <div className="md:px-5 gap-4 grid grid-cols-1 lg:grid-cols-[2fr,0.6fr]">
          {/* Main Content */}
          <div className="px-5 grid grid-cols-1">
            {/* Industry About section */}
            <div>
              {industryName?.contentsummary && (
                <IndustryAbout about={industryName?.contentsummary} />
              )}
            </div>

            {/* Reliable partners  */}
            <div
              id="OverviewContent"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div className="md:px-2">
                <h2
                  className="font-semibold text-heading text-xl md:text-3xl py-5"
                  dangerouslySetInnerHTML={{
                    __html: industryName?.why4step?.heading || "Why 4Step",
                  }}
                />
                {industryName?.why4step && (
                  <Why4steps why4step={industryName?.why4step} />
                )}
              </div>
            </div>

            {/* Success story section */}
            <div id="agenda" className="flex flex-col justify-between  mb-3">
              <div>
                {/* Heading */}
                <div className="font-semibold text-heading text-lg md:text-3xl">
                  {industryName?.success?.heading || "Success Story"}
                </div>
                <div>
                  {/* Description */}
                  <p
                    className="md:text-base py-2 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: industryName?.success?.mainEditorHtmlDescription,
                    }}
                  />
                </div>
                {industryName?.success && (
                  <SuccessStoryIndustry stories={industryName?.success} />
                )}
              </div>
            </div>

            {/* Solution we deliver Section */}
            <div
              id="speakerSection"
              className="flex flex-col justify-between md:mt-20 mb-3"
            >
              <div>
                <div className="font-semibold py-2 text-xl">
                  <h3 className="font-semibold text-heading text-xl md:text-3xl">
                    {industryName?.solution?.heading || " Solution We Deliver"}
                  </h3>
                </div>
                {industryName?.solution && (
                  <SolutionIndustry solution={industryName?.solution} />
                )}
              </div>
            </div>

            {/* Our Services Section */}
            <div
              id="ourServices"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div>
                <div className="font-semibold text-heading text-xl md:text-3xl">
                  {industryName?.service?.heading || "Our Services"}
                </div>
                {industryName?.service && (
                  <OurServicesIndustry services={industryName?.service} />
                )}
              </div>
            </div>

            {/* Product Section */}
            <div
              id="product"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              {/* heading section  */}
              <h3 className="font-semibold text-heading text-xl md:text-3xl">
                {industryName?.product?.heading || "Our Products"}
              </h3>
              {industryName?.product && (
                <ProductIndustry products={industryName?.product} />
              )}
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
                  <h2 className="font-semibold text-heading text-xl md:text-3xl">
                    {industryName?.benefit?.heading || "Our Benifits"}
                  </h2>
                </div>
                {industryName?.benefit && (
                  <BenifitsIndustry benefits={industryName?.benefit} />
                )}
              </div>
            </div>
          </div>

          {/* Table of content */}
          <div className="px-1 order-first md:order-second  lg:order-none">
            <div className="sticky top-32 z-3">
              <h2 className="font-bold text-lg mb-4">Table of contents</h2>
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-300">
                  {/* Highlight sections */}
                  <div
                    id="highlight1"
                    className="bg-heading transition-all duration-300 h-0"
                  ></div>
                  <div
                    id="highlight2"
                    className="bg-heading transition-all duration-300 h-0"
                  ></div>
                  <div
                    id="highlight3"
                    className="bg-heading transition-all duration-300 h-0"
                  ></div>
                  <div
                    id="highlight4"
                    className="bg-heading transition-all duration-300 h-0"
                  ></div>
                  <div
                    id="highlight5"
                    className="bg-heading transition-all duration-300 h-0"
                  ></div>
                  <div
                    id="highlight6"
                    className="bg-heading transition-all duration-300 h-0"
                  ></div>
                  <div
                    id="highlight7"
                    className="bg-heading transition-all duration-300 h-0"
                  ></div>
                </div>

                {/* Table of Content Items */}
                <div className="flex flex-col gap-4 pl-4">
                  <ScrollLink
                    to="OverviewContent"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                    onSetActive={() => highlightSection("highlight1", "20px")}
                  >
                    <p
                      className={`text-gray-700 ${
                        highlightedText === "highlight1" ? " text-heading" : ""
                      }  hover:text-black cursor-pointer`}
                    >
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
                    onSetActive={() => highlightSection("highlight2", "55px")}
                  >
                    <p
                      className={`text-gray-700 ${
                        highlightedText === "highlight2" ? " text-heading" : ""
                      }  hover:text-black cursor-pointer`}
                    >
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
                    onSetActive={() => highlightSection("highlight3", "95px")}
                  >
                    <p
                      className={`text-gray-700 ${
                        highlightedText === "highlight3" ? " text-heading" : ""
                      }  hover:text-black cursor-pointer`}
                    >
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
                    onSetActive={() => highlightSection("highlight4", "135px")}
                  >
                    <p
                      className={`text-gray-700 ${
                        highlightedText === "highlight4" ? " text-heading" : ""
                      }  hover:text-black cursor-pointer`}
                    >
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
                    onSetActive={() => highlightSection("highlight5", "175px")}
                  >
                    <p
                      className={`text-gray-700 ${
                        highlightedText === "highlight5" ? " text-heading" : ""
                      }  hover:text-black cursor-pointer`}
                    >
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
                    onSetActive={() => highlightSection("highlight6", "215px")}
                  >
                    <p
                      className={`text-gray-700 ${
                        highlightedText === "highlight6" ? " text-heading" : ""
                      }  hover:text-black cursor-pointer`}
                    >
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
                    onSetActive={() => highlightSection("highlight7", "270px")}
                  >
                    <p
                      className={`text-gray-700 ${
                        highlightedText === "highlight7" ? " text-heading" : ""
                      }  hover:text-black cursor-pointer`}
                    >
                      Benefits
                    </p>
                  </ScrollLink>
                </div>
              </div>
              {/* Side form section */}
              <div className=" mt-2  ">
                <IndustrySideForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;

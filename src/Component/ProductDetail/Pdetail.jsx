import { Link as ScrollLink } from "react-scroll";
import React from "react";
import ProductHero from "./ProductHero";
import ProductOverview from "./ProductOverview";
import ProductTechnology from "./ProductTechnology";
import ProductSideForm from "./ProductSideForm";
import { Footer } from "../Footer/Footer";
import ProductHightlight from "./ProductHightlight";
import ScreenShot from "./ScreenShot";
import ProductFaqs from "./ProductFaqs";

const Pdetail = () => {
  return (
    <>
      {/* hero section */}
      <div>
        <ProductHero />
      </div>

      <div className="bg-[#F1F5F9]">
        <div
          id="OverviewSection"
          className="shadow-lg py-1 bg-white sticky top-0 z-30 hidden md:block"
        >
          <div className="container-wrapper gap-3 md:gap-10 xs:pb-5 md:pb-0 hide-scrollbar flex justify-start overflow-x-auto">
            <div>
              <ScrollLink
                to="productOverviewSection" // Updated to match unique ID
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-para cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">
                  Overview
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="productHighlightSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">
                  Key & Highlights
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="productTechnologySection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">
                  Technology
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="productScreenshot"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">
                  Screenshot
                </p>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="px-5 grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
          <div>
            {/* Overview section */}
            <div
              id="productOverviewSection"
              className="flex justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className="font-semibold py-2 text-xl">Overview</div>
                <ProductOverview />
              </div>
            </div>
            {/* key and highlight section */}
            <div
              id="productHighlightSection"
              className="flex justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className="font-semibold py-2 text-xl">
                  Key & Highlights
                </div>
                <ProductHightlight />
              </div>
            </div>
            {/* technology section */}
            <div
              id="productTechnologySection"
              className="flex justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className="font-semibold py-2 text-xl">Technology</div>
                <ProductTechnology />
              </div>
            </div>
            <div
              id="productScreenshot"
              className="flex justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className="font-semibold py-2 text-xl">SrceenShot</div>
                <ScreenShot />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="sticky top-[50px] z-10">
              <div className="flex gap-1 justify-center items-center"></div>
              {/* side registration form */}
              <div className="md:px-5">
                <ProductSideForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faqs and suggestetd */}
      <div>
        <ProductFaqs />
      </div>
      {/* Footer section here */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Pdetail;

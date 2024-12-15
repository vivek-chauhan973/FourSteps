// import React, { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import Why4steps from "./Why4steps";
// import SuccessStoryIndustry from "./SuccessStoryIndustry";
// import SolutionIndustry from "./SolutionIndustry";

// const TableOfContent = () => {
//   return (
//     <div className=" conatiner-wrapper">
//       <div className="bg-[#F1F5F9]">
//         {/* <div className="grid grid-cols-[1fr,200px] gap-5"> */}
//         <div className="px-5  grid grid-cols-1 xl:grid-cols-[2fr,0.5fr]">
//           {/* Main Content */}
//           <div className="px-5 grid grid-cols-1 bg-red-400">
//             {/* Overview Section */}
//             <div
//               id="OverviewContent"
//               className="flex flex-col justify-between mt-5 mb-3"
//             >
//               <div className="md:px-2">
//                 <div className="font-semibold py-2 text-xl">Why 4Steps</div>

//                 <Why4steps />
//               </div>
//             </div>

//             {/* Key & Highlights Section */}
//             <div
//               id="agenda"
//               className="flex flex-col justify-between mt-5 mb-3"
//             >
//               <div className="md:px-2">
//                 <div className="font-semibold py-2 text-xl">Success Story</div>

//                 <SuccessStoryIndustry />
//               </div>
//             </div>

//             {/* Speaker Section */}
//             <div
//               id="speakerSection"
//               className="flex flex-col justify-between mt-5 mb-3"
//             >
//               <div className="md:px-2">
//                 <div className="font-semibold py-2 text-xl">
//                   Solution We Deliver
//                 </div>

//                 <SolutionIndustry />
//               </div>
//             </div>
//           </div>

//           <div className="sticky top-0 z-30 h-auto px-3 py-5">
//             <h2 className="font-bold text-lg mb-4">Table of contents</h2>
//             <div className="relative">
//               {/* Vertical Line */}
//               <span className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"></span>

//               {/* Table of Content Items */}
//               <div className="flex flex-col gap-4 pl-4">
//                 <ScrollLink
//                   to="OverviewContent"
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                   activeClass="active"
//                 >
//                   <p className="text-gray-700 hover:text-black cursor-pointer">
//                     Why 4Steps
//                   </p>
//                 </ScrollLink>

//                 <ScrollLink
//                   to="agenda"
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                   activeClass="active"
//                 >
//                   <p className="text-gray-700 hover:text-black cursor-pointer">
//                     Success stories
//                   </p>
//                 </ScrollLink>

//                 <ScrollLink
//                   to="speakerSection"
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                   activeClass="active"
//                 >
//                   <p className="text-gray-700 hover:text-black cursor-pointer">
//                     Solutions we deliver
//                   </p>
//                 </ScrollLink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TableOfContent;

// import React, { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import Why4steps from "./Why4steps";
// import SuccessStoryIndustry from "./SuccessStoryIndustry";
// import SolutionIndustry from "./SolutionIndustry";
// import BenifitsIndustry from "./BenifitsIndustry";
// import ApproacheIndustry from "./ApproacheIndustry";
// import ProductIndustry from "./ProductIndustry";
// import OurServicesIndustry from "./OurServicesIndustry";
// import IndustrySideForm from "./IndustrySideForm";
// import IndustryAbout from "./IndustryAbout";

// const TableOfContent = () => {
//   return (
// <>
//     <div className=" ">
//        <div className="bg-[#F1F5F9] py-7">
//          <div className="px-5 gap-4  grid grid-cols-1 xl:grid-cols-[2fr,0.6fr]">
//            {/* Main Content */}
//            <div className="px-5 grid grid-cols-1 bg-white">
//              {/* industry abot section  */}
//              <div>
//               <IndustryAbout />
//              </div>
//             {/* Overview Section */}

//              <div
//               id="OverviewContent"
//               className="flex flex-col justify-between mt-5 mb-3"
//             >
//               <div className="md:px-2">
//                 <div className="font-semibold py-2 text-xl">Why 4Steps</div>
//                 <div>
//                   <Why4steps />
//                 </div>
//               </div>
//             </div>

//             {/* Key & Highlights Section */}
//             <div
//               id="agenda"
//               className="flex flex-col justify-between mt-5 mb-3"
//             >
//               <div className="md:px-2">
//                 <div className="font-semibold py-2 text-xl">Success Story</div>

//                 <SuccessStoryIndustry />
//               </div>
//             </div>

//             {/* Speaker Section */}
//             <div
//               id="speakerSection"
//               className="flex flex-col justify-between mt-5 mb-3"
//             >
//               <div className="md:px-2">
//                 <div className="font-semibold py-2 text-xl">
//                   Solution We Deliver
//                 </div>

//                 <SolutionIndustry />
//               </div>
//             </div>

//             {/* Our Services Section */}
//             <div
//               id="ourServices"
//               className="flex flex-col justify-between mt-5 mb-3"
//             >
//               <div className="md:px-2">
//                 <div className="font-semibold py-2 text-xl">Our Services</div>

//                 <OurServicesIndustry />
//               </div>
//             </div>

//             {/* Product Section */}
//             <div
//               id="product"
//               className="flex flex-col justify-between mt-5 mb-3"
//             >
//               <div className="md:px-2">
//                 <div className="font-semibold py-2 text-xl">Product</div>

//                 <ProductIndustry />
//               </div>
//             </div>

//             {/* Approaches Section */}
//             <div
//               id="approaches"
//               className="flex flex-col justify-between mt-5 mb-3"
//             >
//               <div className="md:px-2">
//                 <div className="font-semibold py-2 text-xl">Approaches</div>

//                 <ApproacheIndustry />
//               </div>
//             </div>

//             {/* Benefits Section */}
//             <div
//               id="benefits"
//               className="flex flex-col justify-between mt-5 mb-3"
//             >
//               <div className="md:px-2">
//                 <div className="font-semibold py-2 text-xl">Benefits</div>

//                 <BenifitsIndustry />
//               </div>
//             </div>
//           </div>
//           {/* table of content  */}
//           <div className=" px-1">
//             <div className="sticky top-0 z-10">
//               {/* side form section */}
//               <div>
//                 <IndustrySideForm />
//               </div>
//               <h2 className="font-bold text-lg mb-4">Table of contents</h2>
//               <div className="relative">
//                 {/* Vertical Line */}
//                 <span className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"></span>

//                 {/* Table of Content Items */}
//                 <div className="flex flex-col gap-4 pl-4">
//                   <ScrollLink
//                     to="OverviewContent"
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                     activeClass="active"
//                   >
//                     <p className="text-gray-700 hover:text-black cursor-pointer">
//                       Why 4Steps
//                     </p>
//                   </ScrollLink>

//                   <ScrollLink
//                     to="agenda"
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                     activeClass="active"
//                   >
//                     <p className="text-gray-700 hover:text-black cursor-pointer">
//                       Success stories
//                     </p>
//                   </ScrollLink>

//                   <ScrollLink
//                     to="speakerSection"
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                     activeClass="active"
//                   >
//                     <p className="text-gray-700 hover:text-black cursor-pointer">
//                       Solutions we deliver
//                     </p>
//                   </ScrollLink>

//                   <ScrollLink
//                     to="ourServices"
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                     activeClass="active"
//                   >
//                     <p className="text-gray-700 hover:text-black cursor-pointer">
//                       Our Services
//                     </p>
//                   </ScrollLink>

//                   <ScrollLink
//                     to="product"
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                     activeClass="active"
//                   >
//                     <p className="text-gray-700 hover:text-black cursor-pointer">
//                       Product
//                     </p>
//                   </ScrollLink>

//                   <ScrollLink
//                     to="approaches"
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                     activeClass="active"
//                   >
//                     <p className="text-gray-700 hover:text-black cursor-pointer">
//                       Approaches
//                     </p>
//                   </ScrollLink>

//                   <ScrollLink
//                     to="benefits"
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                     activeClass="active"
//                   >
//                     <p className="text-gray-700 hover:text-black cursor-pointer">
//                       Benefits
//                     </p>
//                   </ScrollLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

// </>
//   );
// };

// export default TableOfContent;

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

const TableOfContent = () => {
  return (
    <div className=" ">
      <div className="bg-[#F1F5F9] py-7">
        <div className="px-5 gap-4 grid grid-cols-1 md:grid-cols-[2fr,0.6fr]">
          {/* Main Content */}
          <div className="px-5 grid grid-cols-1 bg-white">
            {/* Industry About section */}
            <div>
              <IndustryAbout />
            </div>
            {/* Overview Section */}
            <div
              id="OverviewContent"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div className="md:px-2">
                <div className="font-semibold py-2 text-xl">Why 4Steps</div>
                <div>
                  <Why4steps />
                </div>
              </div>
            </div>

            {/* Key & Highlights Section */}
            <div
              id="agenda"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div className="md:px-2">
                <div className="font-semibold py-2 text-xl">Success Story</div>
                <SuccessStoryIndustry />
              </div>
            </div>

            {/* Speaker Section */}
            <div
              id="speakerSection"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div className="md:px-2">
                <div className="font-semibold py-2 text-xl">
                  Solution We Deliver
                </div>
                <SolutionIndustry />
              </div>
            </div>

            {/* Our Services Section */}
            <div
              id="ourServices"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div className="md:px-2">
                <div className="font-semibold py-2 text-xl">Our Services</div>
                <OurServicesIndustry />
              </div>
            </div>

            {/* Product Section */}
            <div
              id="product"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div className="md:px-2">
                <div className="font-semibold py-2 text-xl">Product</div>
                <ProductIndustry />
              </div>
            </div>

            {/* Approaches Section */}
            <div
              id="approaches"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div className="md:px-2">
                <div className="font-semibold py-2 text-xl">Approaches</div>
                <ApproacheIndustry />
              </div>
            </div>

            {/* Benefits Section */}
            <div
              id="benefits"
              className="flex flex-col justify-between mt-5 mb-3"
            >
              <div className="md:px-2">
                <div className="font-semibold py-2 text-xl">Benefits</div>
                <BenifitsIndustry />
              </div>
            </div>
          </div>

          {/* Table of content */}
          <div className="px-1 order-first md:order-none">
            <div className="sticky top-0 z-10">
              {/* Side form section */}
              <div>
                <IndustrySideForm />
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;

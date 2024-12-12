// import React, { useState, useEffect, useRef } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import IndustrySideForm from "./IndustrySideForm";
// import IndustryAbout from "./IndustryAbout";

// const TableOfContent = () => {
//   const [activeTitle, setActiveTitle] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const itemRefs = useRef([]);

//   useEffect(() => {
//     if (blogPackageData?.blogQuestions?.length > 0) {
//       setActiveTitle(blogPackageData.blogQuestions[0]._id);
//       setActiveIndex(0);
//     }
//   }, []);

//   const handleTitleClick = (id, index) => {
//     setActiveTitle(id);
//     setActiveIndex(index);
//   };
//   // Static data for the blog package
//   const blogPackageData = {
//     blogQuestions: [
//       {
//         _id: "section1",
//         title: "Why 4Steps",
// information: `Blogging is a great way to share your thoughts.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.`,
//       },
//       {
//         _id: "section2",
//         title: "Success Stories",
//         information: `Blogging helps you build an audience and share knowledge.

//         The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power. a reflection of how society has adapted to and harnessed its power`,
//       },
//       {
//         _id: "section3",
//         title: "Solutions we deliver ",
//         information:
//           "The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power..",
//       },
//       {
//         _id: "sectio43",
//         title: "Our Services ",
//         information:
//           "The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power..",
//       },
//       {
//         _id: "section5",
//         title: "Our Product ",
//         information:
//           "The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power..",
//       },
//       {
//         _id: "section6",
//         title: "Our approach ",
//         information:
//           "The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power..",
//       },
//       {
//         _id: "section7",
//         title: "Benefits/Results",
//         information:
//           "The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power..",
//       },
//     ],
//   };

//   return (
//     <div className="">
//       {/* Blog Description section start */}
//       <div className="px-7 py-9">
//         <div className="grid grid-cols-1 xl:grid-cols-[2fr,0.8fr]">
//           <div className=" px-4 py-4">
//             <IndustryAbout />
//             {blogPackageData?.blogQuestions?.map((item, i) => (
//               <div key={i} className="pt-3" id={`${item?._id}`}>
//                 <h3 className="text-[25px] font-medium mb-2">{item?.title}</h3>
//                 <p className="text-base leading-relaxed">{item?.information}</p>
//               </div>
//             ))}
//           </div>
//           {/* Sidebar Section */}

//           <div className="px-6">
//             <div className="sticky top-0 z-10">
//               <IndustrySideForm />
//               <p className="text-xl pb-6 font-semibold">Table of Content</p>
//               <div className="overflow-y-scroll h-[300px] relative">
//                 {/* Persistent Vertical Line */}
//                 <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-300"></div>
//                 {/* Active Indicator Line */}
//                 <div
//                   className="absolute bg-blue-600 w-[2px] transition-all duration-300 ease-in-out"
//                   style={{
//                     height: itemRefs.current[activeIndex]?.offsetHeight || 0,
//                     top: itemRefs.current[activeIndex]?.offsetTop || 0,
//                     left: 0,
//                   }}
//                 ></div>
//                 <ul className="space-y-4 pl-6 list-none">
//                   {blogPackageData?.blogQuestions?.map((item, i) => (
//                     <li
//                       key={i}
//                       className="relative cursor-pointer"
//                       ref={(el) => (itemRefs.current[i] = el)}
//                     >
//                       <ScrollLink
//                         to={item?._id}
//                         spy={true}
//                         smooth={true}
//                         offset={-100}
//                         duration={500}
//                         onClick={() => handleTitleClick(item?._id, i)}
//                         className={`pl-2 ${
//                           activeTitle === item?._id
//                             ? "text-blue-600 font-bold"
//                             : "text-gray-800"
//                         }`}
//                       >
//                         {item?.title}
//                       </ScrollLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TableOfContent;

{
  /* <div className="px-6  test-base">
            <div className="sticky top-0 z-10">
              <IndustrySideForm />
              <p className="text-xl pb-6 font-semibold">Table of Content</p>
              <div className="overflow-y-scroll h-[300px]">
                <table className="min-w-full table-auto border-collapse">
                  <tbody>
                    {blogPackageData?.blogQuestions?.map((item, i) => (
                      <tr className="border-b" key={i}>
                        <td className="px-4 py-2 text-md font-medium">
                          <ScrollLink
                            to={`${item?._id}`}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                          >
                            {item?.title}
                          </ScrollLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div> */
}

// // Section 1 Component
// const Section1 = () => {
//   return (
//     <Element name="section1" className="min-h-screen p-8 bg-gray-50">
//       <h2 className="text-2xl font-bold">Section 1</h2>
//       <p className="mt-4">Content for Section 1 goes here...</p>
//     </Element>
//   );
// };

// // Section 2 Component
// const Section2 = () => {
//   return (
//     <Element name="section2" className="min-h-screen p-8 bg-gray-200">
//       <h2 className="text-2xl font-bold">Section 2</h2>
//       <p className="mt-4">Content for Section 2 goes here...</p>
//     </Element>
//   );
// };

// // Section 3 Component
// const Section3 = () => {
//   return (
//     <Element name="section3" className="min-h-screen p-8 bg-gray-300">
//       <h2 className="text-2xl font-bold">Section 3</h2>
//       <p className="mt-4">Content for Section 3 goes here...</p>
//     </Element>
//   );
// };

// // Main App Component
// const App = () => {
//   return (
//     <div className="flex">
//       <TableOfContent />
//       <div className="ml-64 w-full">
//         <Section1 />
//         <Section2 />
//         <Section3 />
//       </div>
//     </div>
//   );
// };

// export default App;

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
        <div className="px-5 gap-4  grid grid-cols-1 xl:grid-cols-[2fr,0.6fr]">
          {/* Main Content */}
          <div className="px-5 grid grid-cols-1 bg-white">
            {/* industry abot section  */}
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
          <div className=" px-1">
            <div className=" sticky top-0 z-10">
              {/* side form section */}
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

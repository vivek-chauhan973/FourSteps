// import React from "react";

// const MobileNav = ({
//   isMobileMenuOpen,
//   setIsMobileMenuOpen,
//   isMegaMenuOpen,
//   setIsMegaMenuOpen,
// }) => {
//   // Define categories and subcategories
//   const categories = [
//     {
//       name: "Website Development",
//       subcategories: [
//         "Custome website",
//         "Subcategory 1.2",
//         "Subcategory 1.3",
//         "Subcategory 1.4",
//       ],
//     },
//     {
//       name: "Category 2",
//       subcategories: [
//         "Subcategory 2.1",
//         "Subcategory 2.2",
//         "Subcategory 2.3",
//         "Subcategory 2.4",
//       ],
//     },
//     {
//       name: "Category 3",
//       subcategories: [
//         "Subcategory 3.1",
//         "Subcategory 3.2",
//         "Subcategory 3.3",
//         "Subcategory 3.4",
//       ],
//     },
//     {
//       name: "Category 4",
//       subcategories: [
//         "Subcategory 4.1",
//         "Subcategory 4.2",
//         "Subcategory 4.3",
//         "Subcategory 4.4",
//       ],
//     },
//   ];

//   // Function to render categories and subcategories
//   const renderCategories = () => {
//     return categories.map((category) => (
//       <div key={category.name}>
//         <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
//         <ul>
//           {category.subcategories.map((subcategory) => (
//             <li key={subcategory}>
//               <a
//                 href={`$/{subcategory}`}
//                 className="text-sm text-gray-600 hover:text-gray-800"
//               >
//                 {subcategory}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ));
//   };

//   return (
//     <div className="lg:hidden">
//       {/* Mobile Menu Links */}
//       <a
//         href="#"
//         className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium"
//       >
//         Home
//       </a>
//       <button
//         className="block w-full text-left text-gray-700 hover:text-black px-4 py-2 text-sm font-medium"
//         onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
//       >
//         Categories
//       </button>

//       {isMegaMenuOpen && (
//         <div className="mt-2 space-y-2 px-4">{renderCategories()}</div>
//       )}

//       <a
//         href="#"
//         className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium"
//       >
//         About Us
//       </a>
//   <a
//     href="#"
//     className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium"
//   >
//     Services
//   </a>
//   <a
//     href="#"
//     className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium"
//   >
//     Blog
//   </a>
//   <a
//     href="#"
//     className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium"
//   >
//     Pricing
//   </a>
//   <a
//     href="#"
//     className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium"
//   >
//     Contact
//   </a>
//     </div>
//   );
// };

// export default MobileNav;
// import React, { useState, useRef } from "react";
// import Link from "next/link"; // Import Link from Next.js
// import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons
// import MobileResource from "./MobileResource";

// const MobileNav = ({ isMobileMenuOpen }) => {
//   const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
//   // category ==services
//   const categories = [
//     {
//       name: "Website Development",
//       subcategories: [
//         { name: "Custome website", path: "/servicesDetail/website/cmsdetail" },
//         "Subcategory 1.2",
//         "Subcategory 1.3",
//         "Subcategory 1.4",
//       ],
//     },
//     {
//       name: "Category 2",
//       subcategories: [
//         "Subcategory 2.1",
//         "Subcategory 2.2",
//         "Subcategory 2.3",
//         "Subcategory 2.4",
//       ],
//     },
//     // Add other categories here...
//   ];
// };

// const renderCategories = () => {
//   return categories.map((category) => (
//     <div key={category.name}>
//       <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
//       <ul>
//         {category.subcategories.map((subcategory) => (
//           <li key={subcategory.name || subcategory}>
//             {typeof subcategory === "string" ? (
//               <span className="text-sm text-gray-600">{subcategory}</span>
//             ) : (
//               <Link href={subcategory.path}>
//                 <p className="text-sm text-gray-600 hover:text-gray-800 transition">
//                   {subcategory.name}
//                 </p>
//               </Link>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   ));
// };

// const toggleCategories = () => {
//   setIsCategoriesVisible(!isCategoriesVisible);
// };

// return (
//   <div
//     className={`container md:hidden  fixed top-20 left-0 h-full w-full bg-gray-100 shadow-lg transform transition-transform duration-500 ${
//       isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//     }`}
//   >
//     <Link href="/">
//       <p className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium">
//         Home
//       </p>
//     </Link>

//     <Link href="/about">
//       <p className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium">
//         About Us
//       </p>
//     </Link>

//     <button
//       className=" w-full text-left text-gray-700 hover:text-black px-4 py-2 text-sm font-medium flex items-center justify-between"
//       onClick={toggleCategories}
//     >
//       Our Services
//       <span>{isCategoriesVisible ? <FaChevronUp /> : <FaChevronDown />}</span>
//     </button>

//     {isCategoriesVisible && (
//       <div className="mt-2 space-y-2 px-4">{renderCategories()}</div>
//     )}

//     <Link href="/Training">
//       <p className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium cursor-pointer">
//         Training
//       </p>
//     </Link>
//     <Link href="/">
//       <MobileResource />
//     </Link>
//     <Link href="/Career">
//       <p className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium cursor-pointer">
//         Career
//       </p>
//     </Link>
//     <Link href="/contact">
//       <p className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium cursor-pointer">
//         Contact Us
//       </p>
//     </Link>
//     {/* Repeat for other links */}
//   </div>
// );

// export default MobileNav;

// import React, { useState } from "react";
// import Link from "next/link";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import MobileResource from "./MobileResource";

// const MobileNav = ({ isMobileMenuOpen }) => {
//   const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

//   // Category structure with services
//   const categories = [
//     {
//       name: "Website Development",
//       subcategories: [
//         { name: "Custome website", path: "/servicesDetail/website/cmsdetail" },
//         "Subcategory 1.2",
//         "Subcategory 1.3",
//         "Subcategory 1.4",
//       ],
//     },
//     {
//       name: "Category 2",
//       subcategories: [
//         "Subcategory 2.1",
//         "Subcategory 2.2",
//         "Subcategory 2.3",
//         "Subcategory 2.4",
//       ],
//     },
//     // Add other categories here...
//   ];

//   // Render categories and subcategories
//   const renderCategories = () => {
//     return categories.map((category) => (
//       <div key={category.name}>
//         <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
//         <ul>
//           {category.subcategories.map((subcategory) => (
//             <li
//               key={
//                 typeof subcategory === "string" ? subcategory : subcategory.name
//               }
//             >
//               {typeof subcategory === "string" ? (
//                 <span className="text-sm text-gray-600">{subcategory}</span>
//               ) : (
//                 <Link href={subcategory.path}>
//                   <p className="text-sm text-gray-600 hover:text-gray-800 transition">
//                     {subcategory.name}
//                   </p>
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     ));
//   };
//   // Toggle categories visibility
//   const toggleCategories = () => {
//     setIsCategoriesVisible(!isCategoriesVisible);
//   };

//   return (
//     <div
//       className={`container md:hidden  top-24  left-0 h-screen w-full bg-gray-100 shadow-lg transform transition-transform duration-500 ${
//         isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       <Link href="/">
//         <p className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium">
//           Home
//         </p>
//       </Link>
//       <Link href="/about">
//         <p className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium">
//           About Us
//         </p>
//       </Link>
//       <button
//         className="w-full text-left text-gray-700 hover:text-black px-4 py-2 text-sm font-medium flex items-center justify-between"
//         onClick={toggleCategories}
//       >
//         Our Services
//         <span>{isCategoriesVisible ? <FaChevronUp /> : <FaChevronDown />}</span>
//       </button>
//       {isCategoriesVisible && (
//         <div className="mt-2 space-y-2 px-4">{renderCategories()}</div>
//       )}
//       <Link href="/Training">
//         <p className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium cursor-pointer">
//           Training
//         </p>
//       </Link>
//       <Link href="/">
//         <MobileResource />
//       </Link>
//       <Link href="/Career">
//         <p className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium cursor-pointer">
//           Career
//         </p>
//       </Link>
//       <Link href="/contact">
//         <p className="block text-gray-700 hover:text-black px-4 py-2 text-sm font-medium cursor-pointer">
//           Contact Us
//         </p>
//       </Link>
// </div>
//   );
// };
//trail
// className={`fixed  inset-y-0 left-0 z-50 w-64 bg-gray-800 transform ${
//       isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//     } transition-transform duration-100 ease-in-out lg:hidden`}
// export default MobileNav;

// // make hero section and done mobile responsive

import React, { useState } from "react";
import Link from "next/link";
import MobileResource from "./MobileResource";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MobileNav = ({ isMobileMenuOpen }) => {
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section

  // Category structure with services
  const categories = [
    {
      name: "Website Development",
      subcategories: [
        { name: "CMS", path: "/servicesDetail/website/cmsdetail" },
        {
          name: "Custom Web Development",
          path: "/servicesDetail/website/customeweb",
        },
        { name: "E-Commerce", path: "/servicesDetail/website/e-commerce" },
      ],
    },
    {
      name: "Zoho services",
      subcategories: [
        {
          name: "Zoho Setup and Implementation",
          path: "/servicesDetail/zoho/zoho-setup/",
        },
        {
          name: " Zoho Managed Services",
          path: "/servicesDetail/zoho/zoho-manage/",
        },
        {
          name: "Zoho Custom Development",
          path: "/servicesDetail/zoho/zoho-custom/",
        },
        {
          name: "Zoho Training and Consulting",
          path: "/servicesDetail/zoho/zoho-training",
        },
      ],
    },
    {
      // Zoho CRM For Real Estate

      name: "Zoho Industry Solution",
      subcategories: [
        {
          name: "Zoho CRM For Real Estate",
          path: "/servicesDetail/zohoindustry/zoho-real-estate",
        },
        {
          name: "Zoho CRM For Travel Agency",
          path: "/servicesDetail/zohoindustry/zoho-travel-agency",
        },
      ],
    },
    {
      name: "Hubspot Services ",
      subcategories: [
        {
          name: "Hubsport Setup and Implementation",
          path: "/servicesDetail/hubspot/setup",
        },
        {
          name: "Hubsport Development",
          path: "/servicesDetail/hubspot/development",
        },
        {
          name: "Hubsport Managed Services",
          path: "/servicesDetail/hubspot/manage",
        },
        {
          name: "Hubsport Training and Consulting",
          path: "/servicesDetail/hubspot/training",
        },
      ],
    },
    {
//       
// 
// 
// 
      name: "Digital marketing ",
      subcategories: [
        {
          name: "PPC Management",
          path: "/servicesDetail/digitalmarketing/ppc-management",
        },
        {
          name: "Search Engine Optimization",
          path: "/servicesDetail/digitalmarketing/seo",
        },
        {
          name: "Social Media Management",
          path: "/servicesDetail/digitalmarketing/socialmedia-management",
        },
        {
          name: "Content Marketing",
          path: "/servicesDetail/digitalmarketing/content-marketing",
        },
     
      ],
    },
    {
      name: "Other Crm Services",
      subcategories: [
        {
          name: "Bitrix24 Services",
          path: "/servicesDetail/zohoindustry/bitrix24",
        },
        {
          name: "Salesforce Services",
          path: "/servicesDetail/zohoindustry/salseforce",
        },
      ],
    },
  ];

  // Handle section click and set the active section
  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  // Render categories and subcategories
  const renderCategories = () => {
    return categories.map((category) => (
      <div key={category.name}>
        <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
        <ul>
          {category.subcategories.map((subcategory) => (
            <li
              key={
                typeof subcategory === "string" ? subcategory : subcategory.name
              }
              onClick={() =>
                handleSectionClick(
                  typeof subcategory === "string"
                    ? subcategory
                    : subcategory.name
                )
              }
              className={`cursor-pointer py-1`}
            >
              {typeof subcategory === "string" ? (
                <span
                  className={`text-sm text-gray-600 inline-block ${
                    activeSection === subcategory
                      ? "border-b-2 border-blue-500"
                      : ""
                  }`}
                >
                  {subcategory}
                </span>
              ) : (
                <Link href={subcategory.path}>
                  <p
                    className={`text-sm text-gray-600 inline-block hover:text-gray-800 transition ${
                      activeSection === subcategory.name
                        ? "border-b-2 border-blue-500"
                        : ""
                    }`}
                  >
                    {subcategory.name}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  // Toggle categories visibility
  const toggleCategories = () => {
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  return (
    <div
      className={`fixed md:hidden top-24 left-0 h-screen w-full bg-gray-100 shadow-lg ${
        isMobileMenuOpen ? "menu-open" : "menu-close"
      }`}
    >
      <Link href="/">
        <p
          className={`block text-gray-700  hover:text-black px-5 mt-5 text-md font-medium ${
            activeSection === "Home"
              ? "inline-block border-b-2  border-blue-500"
              : ""
          }`}
          onClick={() => handleSectionClick("Home")}
        >
          Home
        </p>
      </Link>
      <Link href="/about">
        <p
          className={`block text-gray-700 hover:text-black px-5  mt-5 text-md font-medium ${
            activeSection === "About Us"
              ? "inline-block border-b-2 border-blue-500"
              : ""
          }`}
          onClick={() => handleSectionClick("About Us")}
        >
          About Us
        </p>
      </Link>
      <button
        className="w-full text-left text-gray-700 hover:text-black px-5 mt-5 text-md font-medium flex items-center justify-between"
        onClick={toggleCategories}
      >
        Our Services
        {/* <span>{isCategoriesVisible ? <FaChevronUp /> : <FaChevronDown />}</span> */}
        {isCategoriesVisible ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>
      {isCategoriesVisible && (
        <div className="mt-2 space-y-2 px-4 max-h-56 overflow-y-auto scrollbar-thick  ">
          {renderCategories()}
        </div>
      )}
      <Link href="/Training">
        <p
          className={`block text-gray-700 hover:text-black px-5 mt-5 text-md font-medium cursor-pointer ${
            activeSection === "Training"
              ? "inline-block border-b-2 border-blue-500"
              : ""
          }`}
          onClick={() => handleSectionClick("Training")}
        >
          Training
        </p>
      </Link>
      <Link href="/">
        <div className="">
          <MobileResource />
        </div>
      </Link>
      <Link href="/Career">
        <p
          className={`block text-gray-700 hover:text-black px-5 mt-5 text-md font-medium cursor-pointer ${
            activeSection === "Career"
              ? "inline-block border-b-2 border-blue-500"
              : ""
          }`}
          onClick={() => handleSectionClick("Career")}
        >
          Career
        </p>
      </Link>
      <Link href="/contact">
        <p
          className={`block text-gray-700 hover:text-black px-5 mt-5 text-md font-medium cursor-pointer ${
            activeSection === "Contact Us"
              ? "inline-block border-b-2 border-blue-500"
              : ""
          }`}
          onClick={() => handleSectionClick("Contact Us")}
        >
          Contact Us
        </p>
      </Link>
    </div>
  );
};

export default MobileNav;



// import React, { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import both icons
// import Link from "next/link";

// const categoryData = [
//   {
//     title: "Zoho Services",
//     subcategories: [
//       {
//         name: "Zoho Setup and Implementation",
//         path: "/servicesDetail/zoho/zoho-setup",
//       },
//       {
//         name: "Zoho Managed Services",
//         path: "/servicesDetail/zoho/zoho-manage",
//       },
//       {
//         name: "Zoho Custom Development",
//         path: "/servicesDetail/zoho/zoho-custom",
//       },
//       {
//         name: "Zoho Training & Consulting",
//         path: "/servicesDetail/zoho/zoho-training",
//       },
//     ],
//   },
//   {
//     title: "HubSpot Services",
//     subcategories: [
//       {
//         name: "Hubspot Setup and Implementation",
//         path: "/servicesDetail/hubspot/hubspot-setup",
//       },
//       {
//         name: "Hubspot Development",
//         path: "/servicesDetail/hubspot/hubspot-development",
//       },
//       {
//         name: "Hubspot Training & Consulting",
//         path: "/servicesDetail/hubspot/hubspot-training",
//       },
//       {
//         name: "Hubspot Managed Services",
//         path: "/servicesDetail/hubspot/hubspot-managed",
//       },
//     ],
//   },
//   {
//     title: "Website Development",
//     subcategories: [
//       { name: "CMS Development", path: "/servicesDetail/web/cms-development" },
//       {
//         name: "Custom Web Development",
//         path: "/servicesDetail/web/custom-web-development",
//       },
//       { name: "E-commerce Store", path: "/servicesDetail/web/ecommerce-store" },
//     ],
//   },
//   {
//     title: "Zoho Industry Solution",
//     subcategories: [
//       {
//         name: "Zoho CRM For Real Estate",
//         path: "/servicesDetail/zoho/real-estate",
//       },
//       {
//         name: "Zoho CRM For Travel Agency",
//         path: "/servicesDetail/zoho/travel-agency",
//       },
//     ],
//   },
//   {
//     title: "Other CRM Services",
//     subcategories: [
//       { name: "Bitrix24 Services", path: "/servicesDetail/crm/bitrix24" },
//       { name: "Salesforce Service", path: "/servicesDetail/crm/salesforce" },
//     ],
//   },
//   {
//     title: "Digital Marketing",
//     subcategories: [
//       { name: "SEO Services", path: "/servicesDetail/marketing/seo" },
//       {
//         name: "Social Media Marketing",
//         path: "/servicesDetail/marketing/social-media",
//       },
//     ],
//   },
// ];

// const Categories = () => {
//   const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

//   const handleMouseEnter = () => setIsServiceMenuOpen(true);
//   const handleMouseLeave = () => setIsServiceMenuOpen(false);

//   return (
//     <div
//       className="inline-block container text-base font-medium px-3 py-2 text-gray-800"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="cursor-pointer hover:text-orange-500 flex items-center relative group">
//         Our Services
//         {isServiceMenuOpen ? (
//           <FaChevronUp
//             className="ml-1 transition-transform duration-300"
//             size={15}
//           />
//         ) : (
//           <FaChevronDown
//             className="ml-1 transition-transform duration-300"
//             size={15}
//           />
//         )}
//         <span className="absolute left-0 bottom-[-6px] h-0.5 w-full bg-orange-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
//       </div>

//       {isServiceMenuOpen && (
//         <div className="absolute left-0 right-0 mt-3 bg-white px-7 py-5 shadow-lg border rounded-[17px] border-gray-100 z-50 mx-40">
//           <div className="max-w-screen-lg mx-auto p-4">
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
//               {categoryData.map((category) => (
//                 <div
//                   key={category.title}
//                   className="border-r border-orange-400 last:border-r-0"
//                 >
//                   <h3 className="text-md uppercase font-semibold text-gray-900 mb-2">
//                     {category.title}
//                   </h3>
//                   <div className="mt-2 space-y-1">
//                     {category.subcategories.map((subcategory) => (
//                       <div key={subcategory.name}>
//                         <Link href={subcategory.path}>
//                           <p className="text-sm text-gray-600  hover:text-orange-500 transition duration-200 group">
//                             <span className="border-b-[2px] border-transparent group-hover:border-orange-500 transition duration-200 p-1">
//                               {subcategory.name}
//                             </span>
//                           </p>
//                         </Link>

//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

const categoryData = [
  {
    title: "Zoho Services",
    subcategories: [
      {
        name: "Zoho Setup and Implementation",
        path: "/servicesDetail/zoho/zoho-setup",
      },
      {
        name: "Zoho Managed Services",
        path: "/servicesDetail/zoho/zoho-manage",
      },
      {
        name: "Zoho Custom Development",
        path: "/servicesDetail/zoho/zoho-custom",
      },
      {
        name: "Zoho Training & Consulting",
        path: "/servicesDetail/zoho/zoho-training",
      },
    ],
  },
  {
    title: "HubSpot Services",
    subcategories: [
      {
        name: "Hubspot Setup and Implementation",
        path: "/servicesDetail/hubspot/setup",
      },
      {
        name: "Hubspot Development",
        path: "/servicesDetail/hubspot/development",
      },
      {
        name: "Hubspot Training & Consulting",
        path: "/servicesDetail/hubspot/training",
      },
      {
        name: "Hubspot Managed Services",
        path: "/servicesDetail/hubspot/managed",
      },
    ],
  },
  {
    title: "Website Development",
    subcategories: [
      { name: "CMS Development", path: "/servicesDetail/website/cmsdetail" },
      {
        name: "Custom Web Development",
        path: "/servicesDetail/website/customeweb",
      },
      { name: "E-commerce Store", path: "/servicesDetail/website/e-commerce" },
    ],
  },
  {
    title: "Zoho Industry Solution",
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
    title: "Other CRM Services",
    subcategories: [
      {
        name: "Bitrix24 Services",
        path: "/servicesDetail/zohoindustry/bitrix24",
      },
      {
        name: "Salesforce Service",
        path: "/servicesDetail/zohoindustry/salseforce",
      },
    ],
  },
  {
    title: "Digital Marketing",
    subcategories: [
      { name: "SEO Services", path: "/servicesDetail/digitalmarketing/seo" },
      {
        name: "Social Media Marketing",
        path: "/servicesDetail/digitalmarketing/socialmedia-management",
      },

      {
        name: "Content Marketing",
        path: "/servicesDetail/digitalmarketing/content-marketing",
      },
      {
        name: "PPC Management",
        path: "/servicesDetail/digitalmarketing/ppc-management",
      },
    ],
  },
];

const Categories = () => {
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

  const handleMouseEnter = () => setIsServiceMenuOpen(true);
  const handleMouseLeave = () => {
    setIsServiceMenuOpen(false);
    setHoveredSubcategory(null); // Reset when menu closes
  };

  return (
    <div
      className="inline-block container text-base font-medium px-3 py-2 text-gray-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer hover:text-orange-500 flex items-center relative group">
        Our Services
        {isServiceMenuOpen ? (
          <FaChevronUp
            className="ml-1 transition-transform duration-300"
            size={15}
          />
        ) : (
          <FaChevronDown
            className="ml-1 transition-transform duration-300"
            size={15}
          />
        )}
        <span className="absolute left-0 bottom-[-6px] h-0.5 w-full bg-orange-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
      </div>

      {isServiceMenuOpen && (
        <div className="absolute left-0 right-0 mt-3 bg-white px-7 py-5 shadow-lg border rounded-[17px] border-gray-100 z-50 mx-40">
          <div className="max-w-screen-lg mx-auto p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {categoryData.map((category) => (
                <div
                  key={category.title}
                  className="border-r border-gray-400 last:border-r-0"
                >
                  <h3 className="text-md  uppercase font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <div className="mt-1 ">
                    {category.subcategories.map((subcategory) => (
                      <div
                        key={subcategory.name}
                        onMouseEnter={() =>
                          setHoveredSubcategory(subcategory.name)
                        }
                        onMouseLeave={() => setHoveredSubcategory(null)}
                        className="relative"
                      >
                        <Link href={subcategory.path}>
                          <p className="text-sm slide  text-gray-600 hover:text-orange-500 transition duration-200 group">
                            <span className="inline-block relative pb-1">
                              {subcategory.name}
                            </span>
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;

// import React from "react";

// const MobileResource = () => {
//   return (
//     <div>
//       <h1>welcome to mobile resource</h1>
//     </div>
//   );
// };

// export default MobileResource;

// import React from "react";
// import Link from "next/link";

// const MobileResource = () => {
//   const resources = [
//     { title: "Resource 1", path: "/resources/resource1" },
//     { title: "Resource 2", path: "/resources/resource2" },
//     { title: "Resource 3", path: "/resources/resource3" },
//     { title: "Resource 4", path: "/resources/resource4" },
//     // Add other resources here...
//   ];

//   return (
//     <div className="container mx-auto px-4 ">
//       <p className="block text-gray-700 hover:text-black  py-2 text-sm font-medium cursor-pointer">
//         Resource
//       </p>
//       <ul className="space-y-4">
//         {resources.map((resource) => (
//           <li key={resource.title}>
//             <Link href={resource.path}>
//               <p className="text-lg text-gray-700 hover:text-black cursor-pointer">
//                 {resource.title}
//               </p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MobileResource;

// import React, { useState } from "react";
// import Link from "next/link";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons

// const MobileResource = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const resources = [
//     { title: "Blog", path: "/resources/resource1" },
//     { title: "Case Study", path: "/resources/resource2" },
//     { title: "YouTube Video", path: "/resources/resource3" },
//     { title: "Webinar", path: "/resources/resource4" },
//     // Add other resources here...
//   ];

//   const toggleResources = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="container mx-auto px-5 mt-5 ">
//       <button
//         onClick={toggleResources}
//         className=" text-gray-700 hover:text-black  text-md font-medium cursor-pointer flex items-center justify-between w-full"
//       >
//         Resource
//         <span>
//           {isOpen ? (
//             <FaChevronUp className=" text-emerald-800" />
//           ) : (
//             <FaChevronDown />
//           )}
//         </span>
//       </button>
//       {isOpen && (
//         <ul className="space-y-4 mt-4">
//           {resources.map((resource) => (
//             <li key={resource.title}>
//               <Link href={resource.path}>
//                 <p className="text-sm text-gray-700 hover:text-black cursor-pointer">
//                   {resource.title}
//                 </p>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MobileResource;
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MobileResource = ({ activeSection, handleSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const resources = [
    { title: "Blog", path: "/resources/resource1" },
    { title: "YouTube Video & Demo", path: "/resources/resource3" },
    { title: "Webinar", path: "/resources/resource4" },
  ];

  const toggleResources = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto px-5 mt-5 ">
      <button
        onClick={toggleResources}
        className="text-gray-700 hover:text-black text-md  font-semibold cursor-pointer flex items-center justify-between w-full"
      >
        Resource
        <span>
          {isOpen ? (
            <FaChevronUp className="text-emerald-800" />
          ) : (
            <FaChevronDown />
          )}
        </span>
      </button>
      {isOpen && (
        <ul className="space-y-4 mt-4">
          {resources.map((resource) => (
            <li key={resource.title}>
              <Link href={resource.path}>
                <p
                  className={`text-sm text-gray-700 hover:text-black cursor-pointer ${
                    activeSection === resource.title
                      ? "border-b-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleSectionClick(resource.title)} // Handle click
                >
                  {resource.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileResource;

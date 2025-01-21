// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesome icons

// const fetchAllSoutionType = async () => {
//   const res = await fetch("/api/solution/masterS", { method: "GET" });
//   return await res.json();
// };
// // The services data remains the same static data dont use
// const solution = [
//   {
//     name: "Zoho Based Solution",
//     content: {
//       heading: "Zoho Based Solution",

//       links: [
//         { name: "Zoho Travel Agency CRM", link: "/zoho-travel-agency-crm" },
//         {
//           name: "Zoho RealEstate Agency CRM",
//           link: "/zoho-realestate-agency-crm",
//         },
//         {
//           name: "Zoho RealEstate Developer CRM",
//           link: "/zoho-realestate-developer-crm",
//         },
//         { name: "Zoho Finance Agency CRM", link: "/zoho-finance-agency-crm" },
//         { name: "Zoho Healthcare CRM", link: "/zoho-healthcare-crm" },
//       ],
//     },
//   },
//   {
//     name: "Our Hubspot  Products",
//     content: {
//       heading: "Our Custom Products",

//       links: [
//         {
//           name: "Tour & Package Management System",
//           link: "/tour-package-management-system",
//         },
//         {
//           name: "Car Rental Booking System",
//           link: "/car-rental-booking-system",
//         },
//         {
//           name: "Hotel Booking Management System",
//           link: "/hotel-booking-management-system",
//         },
//         {
//           name: "Hospital/Clinics Management System",
//           link: "/hospital-clinics-management-system",
//         },
//       ],
//     },
//   },
//   {
//     name: "Our Custom Products",
//     content: {
//       heading: "Our Custom Products",

//       links: [
//         {
//           name: "Tour & Package Management System",
//           link: "/tour-package-management-system",
//         },
//         {
//           name: "Car Rental Booking System",
//           link: "/car-rental-booking-system",
//         },
//         {
//           name: "Hotel Booking Management System",
//           link: "/hotel-booking-management-system",
//         },
//         {
//           name: "Hospital/Clinics Management System",
//           link: "/hospital-clinics-management-system",
//         },
//         {
//           name: "Learning Management System",
//           link: "/learning-management-system",
//         },
//         {
//           name: "Finance Agency Management System (Upcoming Product)",
//           link: "/finance-agency-management-system-upcoming",
//         },
//       ],
//     },
//   },
// ];

// const DesktopSolution = ({ activeLink, handleLinkClick }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeService, setActiveService] = useState(solution[0]);
//   const [solutionType, setSolutionType] = useState([]);
//   console.log("...................vivek--->", solutionType);
//   useEffect(() => {
//     fetchAllSoutionType()
//       .then((res) => {
//         console.log("all slution types abc is here ---> ", res);
//         setSolutionType(res.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching solution types:", error);
//       });
//   }, []);
//   // Set default to the first service

//   return (
//     <li
//       className="relative inline-block "
//       onMouseEnter={() => setIsDropdownOpen(true)}
//       onMouseLeave={() => setIsDropdownOpen(false)}
//     >
//       <Link
//         href="#"
//         onClick={() => handleLinkClick("/#")}
//         className={`relative inline-block text-base font-medium px-3 py-2 ${
//           activeLink === "/#" ? "text-orange-500" : "text-gray-800"
//         } hover:text-orange-500`}
//       >
//         Solution
//         <span
//           className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
//             activeLink === "/#" ? "scale-x-100" : "scale-x-0"
//           }`}
//         ></span>
//       </Link>

//       {/* Dropdown Menu */}
//       {isDropdownOpen && (
//         <div className="absolute left-[-10vw]  w-[65vw]  bg-background  border  ">
//           <div className="flex max-w-7xl mx-auto">
//             {/* Sidebar Menu */}
//             <div className="w-1/4  border-r py-2 ">
//               <h2 className="text-lg  border-b  py-2 pl-2 font-semibold">
//                 Solutions
//               </h2>

//               {solutionType?.map((solution) => (
//                 <div
//                   key={solution._id} // Use _id as a unique key
//                   className="py-3 text-md rounded font-normal px-4 cursor-pointer bg-white hover:bg-background flex justify-between transition-colors"
//                   onMouseEnter={() => setActiveService(solution)}
//                   onClick={() => setActiveService(solution)}
//                 >
//                   <span>{solution?.name}</span>
//                   <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
//                 </div>
//               ))}
//             </div>
//             {/* Content Area */}

//             <div className="flex-1 pl-10 py-4">
//               <h2 className="text-xl font-semibold  border-b  transition duration-200">
//                 {activeService.content.heading}

//               </h2>

//               {/* <div className=" space-y-2">
//                 {activeService.content.links.map((link) => (
//                   <Link key={link.name} href={link.link}>
//                     <p className=" text-gray-800 text-sm py-1  hover:text-orange-500 transition duration-200">
//                       {link.name}
//                     </p>
//                   </Link>
//                 ))}
//               </div> */}
//             </div>
//           </div>
//         </div>
//       )}
//     </li>
//   );
// };

// export default DesktopSolution;

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesome icons

const fetchAllSoutionType = async () => {
  const res = await fetch("/api/solution/masterS", { method: "GET" });
  return await res.json();
};

const DesktopSolution = ({ activeLink, handleLinkClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [solutionType, setSolutionType] = useState([]);

  useEffect(() => {
    fetchAllSoutionType()
      .then((res) => {
        setSolutionType(res.data);
        // Set the first solution as the active service by default
        if (res.data && res.data.length > 0) {
          setActiveService(res.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching solution types:", error);
      });
  }, []);

  return (
    <li
      className="relative inline-block"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <Link
        href="#"
        onClick={() => handleLinkClick("/#")}
        className={`relative inline-block text-base font-medium px-3 py-2 ${
          activeLink === "/#" ? "text-orange-500" : "text-gray-800"
        } hover:text-orange-500`}
      >
        Solution
        <span
          className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
            activeLink === "/#" ? "scale-x-100" : "scale-x-0"
          }`}
        ></span>
      </Link>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-[-10vw] w-[65vw] bg-background border">
          <div className="flex max-w-7xl mx-auto">
            {/* Sidebar Menu */}
            <div className="w-1/4 border-r py-2">
              <h2 className="text-lg border-b py-2 pl-2 font-semibold">
                Solutions
              </h2>

              {solutionType?.map((solution) => (
                <div
                  key={solution?._id}
                  className="py-3 text-md rounded font-normal px-4 cursor-pointer bg-white hover:bg-background flex justify-between transition-colors"
                  onMouseEnter={() => setActiveService(solution)}
                  onClick={() => setActiveService(solution)}
                >
                  <span>{solution?.name}</span>
                  <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                </div>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 pl-10 py-4">
              {/* Show the solution name on hover */}
              <h2 className="text-xl font-semibold border-b transition duration-200">
                {activeService ? activeService.name : "Select a solution type"}
              </h2>

              {/* Show the links when a solution is selected */}
              <div className="space-y-2">
                {activeService?.content?.links?.map((link) => (
                  <Link key={link.name} href={link.link}>
                    <p className="text-gray-800 text-sm py-1 hover:text-orange-500 transition duration-200">
                      {link.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default DesktopSolution;

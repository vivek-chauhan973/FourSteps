// import React, { useState } from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// const MobileSolutions = ({ activeSection, handleSectionClick }) => {
//   const [isSolutionsVisible, setIsSolutionsVisible] = useState(false);

//   const solutions = [
//     {
//       name: "Zoho Based Solutions",
//       subcategories: [
//         {
//           name: "Zoho Travel Agency CRM",
//           path: "/solutions/zoho-travel-agency-crm",
//         },
//         {
//           name: "Zoho RealEstate Agency CRM",
//           path: "/solutions/zoho-realestate-agency-crm",
//         },
//         {
//           name: "Zoho RealEstate Developer CRM",
//           path: "/solutions/zoho-realestate-developer-crm",
//         },
//         {
//           name: "Zoho Finance Agency CRM",
//           path: "/solutions/zoho-finance-agency-crm",
//         },
//         { name: "Zoho Healthcare CRM", path: "/solutions/zoho-healthcare-crm" },
//       ],
//     },
//     {
//       name: "Custom Solutions",
//       subcategories: [
//         {
//           name: "Tour & Package Management System",
//           path: "/solutions/tour-package-management",
//         },
//         {
//           name: "Car Rental Booking System",
//           path: "/solutions/car-rental-booking",
//         },
//         {
//           name: "Hotel Booking Management System",
//           path: "/solutions/hotel-booking-management",
//         },
//         {
//           name: "Hospital/Clinics Management System",
//           path: "/solutions/hospital-management",
//         },
//         {
//           name: "Learning Management System",
//           path: "/solutions/learning-management",
//         },
//         {
//           name: "Finance Agency Management System (Upcoming Product)",
//           path: "/solutions/finance-agency-management",
//         },
//       ],
//     },
//   ];

//   const toggleSolutions = () => {
//     setIsSolutionsVisible(!isSolutionsVisible);
//   };

//   const renderSolutions = () => {
//     return solutions.map((solution) => (
//       <div key={solution.name}>
//         <h3 className="font-semibold text-gray-900">{solution.name}</h3>
//         <ul className=" list-none">
//           {solution.subcategories.map((subcategory) => (
//             <li
//               key={subcategory.name}
//               onClick={() => handleSectionClick(subcategory.name)}
//               className="cursor-pointer py-[2px]"
//             >
//               <Link href={subcategory.path}>
//                 <p
//                   className={`text-sm text-gray-600 inline-block hover:text-gray-800 transition ${
//                     activeSection === subcategory.name
//                       ? "border-b-2 border-heading"
//                       : ""
//                   }`}
//                 >
//                   {subcategory.name}
//                 </p>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <button
//         className="w-full text-left text-gray-700 hover:text-black px-5 mt-5 text-md font-semibold flex items-center justify-between"
//         onClick={toggleSolutions}
//       >
//         Solutions
//         {isSolutionsVisible ? (
//           <FontAwesomeIcon icon={faChevronUp} />
//         ) : (
//           <FontAwesomeIcon icon={faChevronDown} />
//         )}
//       </button>

//       {isSolutionsVisible && (
//         <div className="mt-2 space-y-2 px-4 max-h-56 overflow-y-auto scrollbar-thick">
//           {renderSolutions()}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobileSolutions;

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const fetchAllSolutionTypes = async () => {
  const res = await fetch("/api/solution/masterS", { method: "GET" });
  return await res.json();
};

const fetchSolutionsByType = async (id) => {
  const res = await fetch(`/api/solution/get-solution?solutionType=${id}`);
  return await res.json();
};

const MobileSolutions = ({ activeSection, handleSectionClick }) => {
  const [isSolutionsVisible, setIsSolutionsVisible] = useState(false);
  const [solutionTypes, setSolutionTypes] = useState([]);
  const [solutionsByType, setSolutionsByType] = useState({});

  useEffect(() => {
    // Fetch solution types on mount
    fetchAllSolutionTypes()
      .then((res) => {
        setSolutionTypes(res.data || []);
      })
      .catch((err) => console.error("Error fetching solution types:", err));
  }, []);

  const toggleSolutions = () => {
    setIsSolutionsVisible(!isSolutionsVisible);
  };

  const fetchAndSetSolutions = (typeId) => {
    if (!solutionsByType[typeId]) {
      fetchSolutionsByType(typeId)
        .then((res) => {
          setSolutionsByType((prev) => ({
            ...prev,
            [typeId]: res.data || [],
          }));
        })
        .catch((err) =>
          console.error("Error fetching solutions for type:", typeId, err)
        );
    }
  };

  const renderSolutions = () => {
    return solutionTypes.map((type) => (
      <div key={type?._id} className=" pl-2">
        <h3
          className="  font-semibold text-gray-600 text-base  cursor-pointer"
          onClick={() => fetchAndSetSolutions(type._id)}
        >
          {type?.name}
        </h3>
        <ul className="list-none">
          {(solutionsByType[type?._id] || []).map((solution) => (
            <li
              key={solution?._id}
              onClick={() => handleSectionClick(solution.title)}
              className="cursor-pointer "
            >
              <Link href={`/solution/${solution.title.split(" ").join("-")}`}>
                <p
                  className={`text-sm text-gray-600 inline-block hover:text-gray-800 transition ${
                    activeSection === solution.title
                      ? "border-b-2 border-heading"
                      : ""
                  }`}
                >
                  {solution?.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div>
      <button
        className="w-full text-left text-gray-700  px-5  mt-5 text-md font-semibold flex items-center justify-between"
        onClick={toggleSolutions}
      >
        Solutions
        {isSolutionsVisible ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>

      {isSolutionsVisible && (
        <div className="mt-2 space-y-2 px-4 max-h-56 overflow-y-auto scrollbar-thick">
          {renderSolutions()}
        </div>
      )}
    </div>
  );
};

export default MobileSolutions;

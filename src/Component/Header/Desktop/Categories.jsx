// import React, { useState, useEffect } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronDown,
//   faChevronUp,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// const fetchServiceTypes = async () => {
//   const res = await fetch("/api/service/master-service", { method: "GET" });
//   return await res.json();
// };

// // Fetch Services by Type
// const fetchServicesByType = async (id) => {
//   const res = await fetch(`/api/service/get-service?serviceType=${id}`);
//   return await res.json();
// };

// const Categories = () => {
//   const [serviceTypes, setServiceTypes] = useState([]);
//   const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState();

//  // To store the list of service types
//   const [serviceList, setServiceList] = useState([]); // To store the services based on selected type
//   const [activeServiceType, setActiveServiceType] = useState(null); // To track the active service type
//   const [loading, setLoading] = useState(false); // To track the loading state
//   const [serviceTypeId, setServiceTypeId] = useState(null);

//   // Effect to fetch services based on active service typeco
//   useEffect(() => {
//     if (serviceTypeId) {
//       setLoading(true); 
//       fetchServicesByType(serviceTypeId)
//         .then((data) => {

//           setServiceList(data?.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching services:", error);
//         })
//         .finally(() => {
//           setLoading(false); // Stop loading
//         });
//     }
//   }, [serviceTypeId]);

//   // Effect to fetch all service types on initial load
//   useEffect(() => {
//     setLoading(true); // Start loading
//     fetchServiceTypes()
//       .then((res) => {
//         console.log("service type--------->", res.data);
//         setServiceTypes(res.data);
//         if (res.data && res.data.length > 0) {
//           setActiveServiceType(res.data[0]);
//           setServiceTypeId(res.data[0]?.id); // Set the first service type as the active type
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching service types:", error);
//       })
//       .finally(() => {
//         setLoading(false); // Stop loading
//       });
//   }, []);

//   const handleMouseEnter = () => setIsServiceMenuOpen(true);
//   const handleMouseLeave = () => setIsServiceMenuOpen(false);

//   return (
//     <div
//       className="inline-block text-base font-medium px-3 py-2   text-gray-800"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="cursor-pointer  hover:text-orange-500 flex items-center relative group">
//         Services
//         {isServiceMenuOpen ? (
//           <FontAwesomeIcon
//             icon={faChevronUp}
//             className="ml-1  mt-[2px] text-sm  inline-block transition-transform duration-300"
//           />
//         ) : (
//           <FontAwesomeIcon
//             icon={faChevronDown}
//             className="ml-1 text-sm mt-[2px] inline-block transition-transform duration-300"
//           />
//         )}
//         <span className="absolute left-0 bottom-[-6px] h-0.5 w-full bg-orange-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
//       </div>

//       {isServiceMenuOpen && (
//         <div className="absolute left-0 right-0 mt-2 bg-background  py-5 shadow-lg border rounded-[17px] border-gray-100 z-50 md:mx-20 lg:mx-40">
//           <div className="mx-auto">
//             <div className="flex flex-col md:flex-row">
//               {/* Sidebar Menu */}

//               <div className="md:w-1/3 md:border-r pr-4">
//                 <h2 className="text-lg px-2 border-b font-semibold">
//                   Main Services
//                 </h2>
//                 {serviceTypes?.length>0&&serviceTypes?.map((category) => (
//                   <div
//                     key={category._id}
//                     className="py-3  px-5 cursor-pointer font-normal hover:bg-background bg-white rounded transition-colors duration-200  flex justify-between items-center"
//                     onMouseEnter={() => setActiveCategory(category)}
//                     onClick={() => setActiveCategory(category)}
//                   >
//                     <span>{category.name}</span>
//                     <FontAwesomeIcon
//                       icon={faChevronRight}
//                       className=" text-sm"
//                       size="sm"
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* Content Area */}
//               <div className="flex-1 mt-4 md:mt-0 md:pl-10">
//                 <h2 className="text-xl md:text-xl font-semibold transition duration-200">
//                   {activeCategory?.name}
//                 </h2>
//                 {/* <p className="mb-3 text-sm border-b text-gray-600">
//                   {activeCategory.content.description}
//                 </p> */}
//                 <div className="space-y-2">
//                   {/* {activeCategory.content.subcategories.map((subcategory) => (
//                     <Link key={subcategory.name} href={subcategory.path}>
//                       <p className="text-gray-800 text-sm py-1 hover:text-orange-500 transition duration-200">
//                         {subcategory.name}
//                       </p>
//                     </Link>
//                   ))} */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;


import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesome icons
import Skeleton, { AnotherComponent } from "@/Component/Web/Skeleton";
import Loading from "@/Component/Web/Loading";

const fetchAllSolutionType = async () => {
  const res = await fetch("/api/service/master-service", { method: "GET" });
  return await res.json();
};

const fetchSolutionAccordingType = async (id) => {
  const res = await fetch(`/api/service/get-service?serviceType=${id}`);
  return await res.json();
};

const DesktopSolution = ({ activeLink, handleLinkClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [solutionType, setSolutionType] = useState([]);
  const [solutionList, setSolutionList] = useState([]);
  const [solutionId, setSolutionId] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading

  useEffect(() => {
    if (solutionId) {
      setLoading(true); // Start loading
      fetchSolutionAccordingType(solutionId)
        .then((data) => {
          setSolutionList(data?.data);
        })
        .catch((error) => {
          console.error("Error fetching solutions:", error);
        })
        .finally(() => {
          setLoading(false); // Stop loading
        });
    }
  }, [solutionId]);

  useEffect(() => {
    setLoading(true); // Start loading
    fetchAllSolutionType()
      .then((res) => {
        // console.log("Fetched solution types-------->:", res.data);
        setSolutionType(res.data);
        if (res.data && res.data.length > 0) {
          setActiveService(res.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching solution types:", error);
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  }, []);

  return (
    <li
      className="inline-block text-base font-medium px-3 py-2   text-gray-800"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div
        className={`cursor-pointer  hover:text-orange-500 flex items-center relative group`}
      >
        Services
        <span
          className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
            activeLink === "/#" ? "scale-x-100" : "scale-x-0"
          }`}
        ></span>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-background  py-5 shadow-lg border rounded-[17px] border-gray-100 z-50 md:mx-20 lg:mx-40">
          <div className="flex max-w-7xl mx-auto">
            {/* Sidebar Menu */}
            <div className="w-1/4 border-r py-2">
              <h2 className="text-lg border-b py-2 pl-2 font-semibold">
                Services
              </h2>

              {solutionType?.map((solution) => (
                <div
                  key={solution?._id}
                  className="py-3 text-md rounded font-normal px-4 cursor-pointer bg-white hover:bg-background flex justify-between transition-colors"
                  onMouseEnter={() => {
                    setActiveService(solution);
                    setSolutionId(solution?._id);
                  }}
                  onClick={() => {
                    setActiveService(solution);
                    setSolutionId(solution?._id);
                  }}
                >
                  <span>{solution?.name}</span>

                  <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                </div>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 pl-10 py-4">
              <h2 className="text-xl font-semibold border-b transition duration-200">
                {activeService ? activeService.name : "Select a solution type"}
              </h2>

              {/* Loading State */}
              {loading ? (
                <Skeleton />
              ) : (
                // Show loading message or spinner
                <div className="">
                  {solutionList?.map((link) => {
                    return (
                      <Link
                        key={link?._id}
                        href={`/services/${link?.title?.split(" ")?.join("-")}`}
                      >
                        <p className="text-gray-800 text-[15px] py-1 flex gap-1 items-center hover:text-orange-500 transition duration-200">
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="text-[10px]"
                            size={10}
                          />
                          {link?.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default DesktopSolution;


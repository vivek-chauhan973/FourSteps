// import language from "@/models/admin/global/language";
// import React, { useState, useEffect } from "react";
// const fetchWebinarTypes = async () => {
//   const res = await fetch("/api/webinar/webinartype/getwebinar");
//   const data = await res.json();
//   return data;
// };
// const fetchDepartments = async () => {
//   const res = await fetch("/api/webinar/department/getdepartment");
//   const data = await res.json();
//   return data;
// };

// const Filter = ({ filterGlobalData, Heading }) => {
//   const [filterSection1, setFilterSection1] = useState([]);
//   const [filterSection2, setFilterSection2] = useState([]);

//   useEffect(() => {
//     if (Heading === "webinar") {
//       fetchWebinarTypes().then((res) => {
//         setFilterSection1(res || []);
//       });
//       fetchDepartments().then((res) => {
//         setFilterSection2(res || []);
//       });
//     }
//   }, [Heading]);

//   const [showMoreIndustries, setShowMoreIndustries] = useState(false);
//   const [showMoreDepartments, setShowMoreDepartments] = useState(false);
//   const [showSection1, setShowSection1] = useState(false);
//   const [showSection2, setShowSection2] = useState(false);
//   const [showTopics, setShowTopics] = useState(false);
//   const [showLanguage, setShowLanguage] = useState(false);

//   return (
//     <div className="">
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-sm font-semibold mb-2">FILTER BY:</h2>

//         {/* Industries */}
//         <div className="mb-2 border border-gray-300 rounded p-2">
//           <h3 className="md:text-[16px] text-[14px] font-medium ">
//             Industries
//           </h3>

//           {/* Display first 3 industries by default */}
//           {filterGlobalData?.industries
//             .slice(
//               0,
//               showMoreIndustries ? filterGlobalData?.industries?.length : 3
//             )
//             .map((industry, index) => (
//               <label className="flex items-center " key={index}>
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-4 w-4 text-blue-600"
//                 />
//                 <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
//                   {industry?.name}
//                 </span>
//               </label>
//             ))}

//           {/* Show More/Less button */}
//           <button
//             className="text-blue-500 mt-1"
//             onClick={() => setShowMoreIndustries(!showMoreIndustries)}
//           >
//             {showMoreIndustries ? "Show less" : "Show more"}
//           </button>
//         </div>

//         {/* Departments */}

//         <div className="mb-2 border border-gray-300 rounded p-2">
//           <h3 className="md:text-[16px] text-[14px] font-medium ">
//             Tools And Softwares
//           </h3>

//           {/* Display first 3 departments by default */}
//           {filterGlobalData?.tool
//             .slice(0, showMoreDepartments ? filterGlobalData?.tool?.length : 3)
//             .map((department, index) => (
//               <label className="flex items-center " key={index}>
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-4 w-4 text-blue-600"
//                 />
//                 <span className="ml-2 capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
//                   {department?.name}
//                 </span>
//               </label>
//             ))}

//           {/* Show More/Less button */}
//           <button
//             className="text-blue-500 mt-2"
//             onClick={() => setShowMoreDepartments(!showMoreDepartments)}
//           >
//             {showMoreDepartments ? "Show less" : "Show more"}
//           </button>
//         </div>

//         <div className="mb-2 border border-gray-300 rounded p-2">
//           <h3 className="font-semibold text-md ">Topics</h3>

//           {/* Display first 3 departments by default */}
//           {filterGlobalData?.topic
//             .slice(0, showTopics ? filterGlobalData?.topic?.length : 3)
//             .map((department, index) => (
//               <label className="flex items-center" key={index}>
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-4 w-4 text-blue-600"
//                 />
//                 <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
//                   {department?.name}
//                 </span>
//               </label>
//             ))}

//           {/* Show More/Less button */}
//           <button
//             className="text-blue-500 mt-2"
//             onClick={() => setShowTopics(!showTopics)}
//           >
//             {showTopics ? "Show less" : "Show more"}
//           </button>
//         </div>

//         {/* Other filters */}
//         {(Heading === "webinar" || Heading === "all") && (
//           <>
//             <div className="mb-2 border border-gray-300 rounded p-2">
//               <h3 className="md:text-[16px] text-[14px] font-medium ">
//                 Webinar Type
//               </h3>

//               {/* Display other section and show only 3 departments */}
//               {filterSection1
//                 ?.slice(0, showSection1 ? filterSection1?.length : 3)
//                 .map((otherItem, index) => (
//                   <label className="flex items-center" key={index}>
//                     <input
//                       type="checkbox"
//                       className="form-checkbox h-4 w-4 text-blue-600"
//                     />
//                     <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
//                       {otherItem?.name}
//                     </span>
//                   </label>
//                 ))}

//               <button
//                 className="text-blue-500 mt-2"
//                 onClick={() => setShowSection1(!showSection1)}
//               >
//                 {showSection1 ? "Show less" : "Show more"}
//               </button>
//             </div>

//             <div className="mb-2 border border-gray-300 rounded p-2">
//               <h3 className="md:text-[16px] text-[14px] font-medium ">
//                 Departments
//               </h3>

//               {/* Display other section and show only 3 departments */}
//               {filterSection2
//                 ?.slice(0, showSection2 ? filterSection2?.length : 3)
//                 .map((otherItem, index) => (
//                   <label className="flex items-center" key={index}>
//                     <input
//                       type="checkbox"
//                       className="form-checkbox h-4 w-4 text-blue-600"
//                     />
//                     <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
//                       {otherItem?.name}
//                     </span>
//                   </label>
//                 ))}

//               <button
//                 className="text-blue-500 mt-2"
//                 onClick={() => setShowSection2(!showSection2)}
//               >
//                 {showSection2 ? "Show less" : "Show more"}
//               </button>
//             </div>
//           </>
//         )}

//         <div className="mb-2 border border-gray-300 rounded p-2">
//           <h3 className="md:text-[16px] text-[14px] font-medium ">Languages</h3>
//           {/* Display other section and show only 3 departments */}
//           {filterGlobalData?.langauge
//             ?.slice(0, showLanguage ? filterGlobalData?.langauge?.length : 3)
//             .map((item, index) => (
//               <label className="flex items-center" key={index}>
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-4 w-4 text-blue-600"
//                 />
//                 <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
//                   {item?.name}
//                 </span>
//               </label>
//             ))}

//           <button
//             className="text-blue-500 mt-2"
//             onClick={() => setShowLanguage(!showLanguage)}
//           >
//             {showLanguage ? "Show less" : "Show more"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;

import language from "@/models/admin/global/language";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
// API fetch functions
const fetchWebinarTypes = async () => {
  const res = await fetch("/api/webinar/webinartype/getwebinar");
  const data = await res.json();
  return data;
};

const fetchDepartments = async () => {
  const res = await fetch("/api/webinar/department/getdepartment");
  const data = await res.json();
  return data;
};

const Filter = ({ filterGlobalData, Heading }) => {
  const [filterSection1, setFilterSection1] = useState([]);
  const [filterSection2, setFilterSection2] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal state for mobile
  const [showMoreIndustries, setShowMoreIndustries] = useState(false);
  const [showMoreDepartments, setShowMoreDepartments] = useState(false);
  const [showSection1, setShowSection1] = useState(false);
  const [showSection2, setShowSection2] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  useEffect(() => {
    if (Heading === "webinar") {
      fetchWebinarTypes().then((res) => {
        setFilterSection1(res || []);
      });
      fetchDepartments().then((res) => {
        setFilterSection2(res || []);
      });
    }
  }, [Heading]);

  const renderFilters = () => (
    <div className="bg-white rounded-lg overflow-y-auto   shadow-md p-4">
      <h2 className="text-sm font-semibold mb-2">FILTER BY:</h2>
      {/* Filter sections */}

      {/* Industries */}
      <div className="mb-2 border border-gray-300 rounded p-2">
        <h3 className="md:text-[16px] text-[14px] font-medium">Industries</h3>
        {filterGlobalData?.industries
          .slice(
            0,
            showMoreIndustries ? filterGlobalData?.industries?.length : 3
          )
          .map((industry, index) => (
            <label className="flex items-center" key={index}>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
              <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                {industry?.name}
              </span>
            </label>
          ))}
        <button
          className="text-blue-500 mt-1"
          onClick={() => setShowMoreIndustries(!showMoreIndustries)}
        >
          {showMoreIndustries ? "Show less" : "Show more"}
        </button>
      </div>

      {/* Departments */}
      <div className="mb-2 border border-gray-300 rounded p-2">
        <h3 className="md:text-[16px] text-[14px] font-medium">
          Tools And Softwares
        </h3>
        {filterGlobalData?.tool
          .slice(0, showMoreDepartments ? filterGlobalData?.tool?.length : 3)
          .map((department, index) => (
            <label className="flex items-center" key={index}>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
              <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                {department?.name}
              </span>
            </label>
          ))}
        <button
          className="text-blue-500 mt-1"
          onClick={() => setShowMoreDepartments(!showMoreDepartments)}
        >
          {showMoreDepartments ? "Show less" : "Show more"}
        </button>
      </div>

      {/* Topics */}
      <div className="mb-2 border border-gray-300 rounded p-2">
        <h3 className="md:text-[16px] text-[14px] font-medium">Topics</h3>
        {filterGlobalData?.topic
          .slice(0, showTopics ? filterGlobalData?.topic?.length : 3)
          .map((topic, index) => (
            <label className="flex items-center" key={index}>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              {/* <span className="ml-2 capitalize cursor-pointer text-sm"> */}
              <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                {topic?.name}
              </span>
            </label>
          ))}
        <button
          className="text-blue-500 mt-1"
          onClick={() => setShowTopics(!showTopics)}
        >
          {showTopics ? "Show less" : "Show more"}
        </button>
      </div>

      {/* Webinar Types */}
      {Heading === "webinar" && (
        <div className="mb-2 border border-gray-300 rounded p-2">
          <h3 className="md:text-[16px] text-[14px] font-medium">
            Webinar Type
          </h3>
          {filterSection1
            .slice(0, showSection1 ? filterSection1?.length : 3)
            .map((webinarType, index) => (
              <label className="flex items-center" key={index}>
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 capitalize cursor-pointer text-sm">
                  {webinarType?.name}
                </span>
              </label>
            ))}
          <button
            className="text-blue-500 mt-1"
            onClick={() => setShowSection1(!showSection1)}
          >
            {showSection1 ? "Show less" : "Show more"}
          </button>
        </div>
      )}

      {/* langauges */}

      <div className="mb-2 border border-gray-300 rounded p-2">
        <h3 className="md:text-[16px] text-[14px] font-medium ">Languages</h3>
        {/* Display other section and show only 3 departments */}
        {filterGlobalData?.langauge
          ?.slice(0, showLanguage ? filterGlobalData?.langauge?.length : 3)
          .map((item, index) => (
            <label className="flex items-center" key={index}>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                {item?.name}
              </span>
            </label>
          ))}

        <button
          className="text-blue-500 mt-2"
          onClick={() => setShowLanguage(!showLanguage)}
        >
          {showLanguage ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {/* Mobile Filter Button */}
      {/* <button
        className="md:hidden  bg-red-600 text-white p-3 boredr float-end rounded-lg shadow-lg"
        onClick={() => setShowModal(true)}
      > */}
      <button
        className="ml-4 border border-orange-500   float-end  text-primary  py-2 md:py-3 px-4 md:px-5 rounded-xl hover:bg-primary hover:text-white"
        onClick={() => setShowModal(true)}
      >
        Filter
      </button>

      {/* <button className="ml-4 border border-orange-500  text-primary  py-2 md:py-3 px-4 md:px-5 rounded-xl hover:bg-primary hover:text-white">
        Connect Now
      </button> */}

      {/* Modal for Mobile Devices */}

      {showModal && (
        <div className="fixed top-16 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex justify-center z-20 overflow-y-auto">
          <div className="relative w-full md:w-2/3 lg:w-1/3    bg-gray-200 p-5 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center justify-start">
                <button
                  className="px-2 py-1 bg-blue-600 text-white text-sm rounded-lg shadow-md"
                  onClick={() => setShowModal(false)}
                >
                  Apply Filters
                </button>
              </div>

              <button
                className="text-gray-500 hover:text-gray-700 text-lg"
                onClick={() => setShowModal(false)}
              >
                <FontAwesomeIcon icon={faXmarkCircle} />
              </button>
            </div>

            {/* Scrollable Filters */}
            <div className="space-y-4 max-h-[450px] overflow-y-auto">
              {renderFilters()}
            </div>
          </div>
        </div>
      )}

      {/* Inline Filters for Larger Devices */}
      <div className="hidden md:block">{renderFilters()}</div>
    </div>
  );
};

export default Filter;

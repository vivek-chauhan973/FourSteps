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
// main content upper ||||

import language from "@/models/admin/global/language";
import React, { useState, useEffect } from "react";

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

  // Function to render the filters
  const renderFilters = () => (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-sm font-semibold mb-2">FILTER BY:</h2>

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
              <span className="ml-2 capitalize cursor-pointer text-sm">
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
              <span className="ml-2 capitalize cursor-pointer text-sm">
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
              <span className="ml-2 capitalize cursor-pointer text-sm">
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
      <button
        className="md:hidden  bg-red-600 text-white p-3 float-end rounded-lg shadow-lg"
        onClick={() => setShowModal(true)}
      >
        Filter
      </button>

      {/* Modal for Mobile Devices */}
      {showModal && (
        <div className="fixed inset-0 mt-72 items-center flex  justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/3 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filter</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">{renderFilters()}</div>
            <div className="flex justify-end mt-6">
              <button
                className="px-2 py-1 bg-blue-600 text-white rounded-lg shadow-md"
                onClick={() => setShowModal(false)}
              >
                Apply Filters
              </button>
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

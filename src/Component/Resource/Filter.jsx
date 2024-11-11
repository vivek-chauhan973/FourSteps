import language from "@/models/admin/global/language";
import React, { useState, useEffect } from "react";
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

  const [showMoreIndustries, setShowMoreIndustries] = useState(false);
  const [showMoreDepartments, setShowMoreDepartments] = useState(false);
  const [showSection1, setShowSection1] = useState(false);
  const [showSection2, setShowSection2] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-sm font-semibold mb-2">FILTER BY:</h2>

        {/* Industries */}
        <div className="mb-2 border border-gray-300 rounded p-2">
          <h3 className="md:text-[16px] text-[14px] font-medium ">
            Industries
          </h3>

          {/* Display first 3 industries by default */}
          {filterGlobalData?.industries
            .slice(
              0,
              showMoreIndustries ? filterGlobalData?.industries?.length : 3
            )
            .map((industry, index) => (
              <label className="flex items-center " key={index}>
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                  {industry?.name}
                </span>
              </label>
            ))}

          {/* Show More/Less button */}
          <button
            className="text-blue-500 mt-1"
            onClick={() => setShowMoreIndustries(!showMoreIndustries)}
          >
            {showMoreIndustries ? "Show less" : "Show more"}
          </button>
        </div>

        {/* Departments */}

        <div className="mb-2 border border-gray-300 rounded p-2">
          <h3 className="md:text-[16px] text-[14px] font-medium ">
            Tools And Softwares
          </h3>

          {/* Display first 3 departments by default */}
          {filterGlobalData?.tool
            .slice(0, showMoreDepartments ? filterGlobalData?.tool?.length : 3)
            .map((department, index) => (
              <label className="flex items-center " key={index}>
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                  {department?.name}
                </span>
              </label>
            ))}

          {/* Show More/Less button */}
          <button
            className="text-blue-500 mt-2"
            onClick={() => setShowMoreDepartments(!showMoreDepartments)}
          >
            {showMoreDepartments ? "Show less" : "Show more"}
          </button>
        </div>

        <div className="mb-2 border border-gray-300 rounded p-2">
          <h3 className="font-semibold text-md ">Topics</h3>

          {/* Display first 3 departments by default */}
          {filterGlobalData?.topic
            .slice(0, showTopics ? filterGlobalData?.topic?.length : 3)
            .map((department, index) => (
              <label className="flex items-center" key={index}>
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                  {department?.name}
                </span>
              </label>
            ))}

          {/* Show More/Less button */}
          <button
            className="text-blue-500 mt-2"
            onClick={() => setShowTopics(!showTopics)}
          >
            {showTopics ? "Show less" : "Show more"}
          </button>
        </div>

        {/* Other filters */}
        {(Heading === "webinar" || Heading === "all") && (
          <>
            <div className="mb-2 border border-gray-300 rounded p-2">
              <h3 className="md:text-[16px] text-[14px] font-medium ">
                Webinar Type
              </h3>

              {/* Display other section and show only 3 departments */}
              {filterSection1
                ?.slice(0, showSection1 ? filterSection1?.length : 3)
                .map((otherItem, index) => (
                  <label className="flex items-center" key={index}>
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                      {otherItem?.name}
                    </span>
                  </label>
                ))}

              <button
                className="text-blue-500 mt-2"
                onClick={() => setShowSection1(!showSection1)}
              >
                {showSection1 ? "Show less" : "Show more"}
              </button>
            </div>

            <div className="mb-2 border border-gray-300 rounded p-2">
              <h3 className="md:text-[16px] text-[14px] font-medium ">
                Departments
              </h3>

              {/* Display other section and show only 3 departments */}
              {filterSection2
                ?.slice(0, showSection2 ? filterSection2?.length : 3)
                .map((otherItem, index) => (
                  <label className="flex items-center" key={index}>
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2  capitalize cursor-pointer label-text md:text-[14px] text-[12px]">
                      {otherItem?.name}
                    </span>
                  </label>
                ))}

              <button
                className="text-blue-500 mt-2"
                onClick={() => setShowSection2(!showSection2)}
              >
                {showSection2 ? "Show less" : "Show more"}
              </button>
            </div>
          </>
        )}

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
    </div>
  );
};

export default Filter;

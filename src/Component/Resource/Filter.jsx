import React, { useState } from "react";

const Filter = () => {
  const industries = [
    "Banking and Financial Services",
    "Customer Experience",
    "Energy and Utilities",
    "Healthcare",
    "Hospitality",
  ];

  const departments = [
    "Contact Center",
    "Finance and Accounting (F&A)",
    "Human Resources (HR)",
    "Information Technology (IT)",
    "Other",
  ];

  const other = ["Marketing", "Sales", "abc", "abcd", "abcde"];

  const [showMoreIndustries, setShowMoreIndustries] = useState(false);
  const [showMoreDepartments, setShowMoreDepartments] = useState(false);
  const [showOther, setOther] = useState(false);

  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">FILTER BY:</h2>

        {/* Industries */}
        <div className="mb-6 border border-gray-300 rounded p-2">
          <h3 className="font-semibold text-md mb-2">Industries</h3>

          {/* Display first 3 industries by default */}
          {industries
            .slice(0, showMoreIndustries ? industries.length : 3)
            .map((industry, index) => (
              <label className="flex items-center mb-1" key={index}>
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2">{industry}</span>
              </label>
            ))}

          {/* Show More/Less button */}
          <button
            className="text-blue-500 mt-2"
            onClick={() => setShowMoreIndustries(!showMoreIndustries)}
          >
            {showMoreIndustries ? "Show less" : "Show more"}
          </button>
        </div>

        {/* Departments */}
        <div className="mb-6 border border-gray-300 rounded p-4">
          <h3 className="font-semibold text-md mb-2">Departments</h3>

          {/* Display first 3 departments by default */}
          {departments
            .slice(0, showMoreDepartments ? departments.length : 3)
            .map((department, index) => (
              <label className="flex items-center mb-1" key={index}>
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2">{department}</span>
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

        {/* Other filters */}
        <div className="mb-6 border border-gray-300 rounded p-4">
          <h3 className="font-semibold text-md mb-2">Other Section</h3>
          {/* Display other section and show only 3 departments */}
          {other
            .slice(0, showOther ? other.length : 3)
            .map((otherItem, index) => (
              <label className="flex items-center mb-1" key={index}>
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2">{otherItem}</span>
              </label>
            ))}

          <button
            className="text-blue-500 mt-2"
            onClick={() => setOther(!showOther)}
          >
            {showOther ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

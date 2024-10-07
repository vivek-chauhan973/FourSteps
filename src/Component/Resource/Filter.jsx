import React from "react";
import Link from "next/link";
const Filter = () => {
  return (
    <div>
      <div className=" container px-4 w-[320px]  py-4">
        <div className="bg-white rounded-lg border    shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">FILTER BY:</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-md mb-2">Industries</h3>
            <label className="flex items-center mb-1">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Banking and Financial Services</span>
            </label>
            <label className="flex items-center mb-1">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Customer Experience</span>
            </label>
            <label className="flex items-center mb-1">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Energy and Utilities</span>
            </label>
            <label className="flex items-center mb-1">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Healthcare</span>
            </label>
            <button className="text-blue-500 mt-2">Show more</button>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-md mb-2">Departments</h3>
            <label className="flex items-center mb-1">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Contact Center</span>
            </label>
            <label className="flex items-center mb-1">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Finance and Accounting (F&A)</span>
            </label>
            <label className="flex items-center mb-1">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Human Resources (HR)</span>
            </label>
            <label className="flex items-center mb-1">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Information Technology (IT)</span>
            </label>
            <button className="text-blue-500 mt-2">Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

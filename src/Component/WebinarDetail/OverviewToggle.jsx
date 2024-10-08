import React, { useState } from "react";
import OverviewContent from "./OverviewContent";
import OverviewData from "./OverviewData";

const OverviewToggle = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <div>
        <div className="container  mx-auto px-4 py-10 md:px-0">
          <div className="flex flex-col md:flex-row  px-1 w-full">
            {/* OverviewToggle Section */}
            <div className="flex-grow md:w-9/12 px-4  md:px-7 py-5">
              <div className="flex border-b">
                <button
                  className={`px-4 py-2 ${
                    activeTab === "overview"
                      ? "border-b-2 border-orange-500"
                      : ""
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  OVERVIEW
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeTab === "overViewPlan"
                      ? "border-b-2 border-orange-500"
                      : ""
                  }`}
                  onClick={() => setActiveTab("overViewPlan")}
                >
                  LEARNING PLAN CURRICULUM
                </button>
              </div>
              <div className="mt-4 w-full">
                {activeTab === "overview" && <OverviewContent />}
                {activeTab === "overViewPlan" && <OverviewData />}
              </div>
            </div>

            {/* Login Form Section */}
            <div className="md:w-4/12 flex  right-10  top-[100px] z-10 px-5  mt-4 md:mt-0">
              <div className="w-full max-w-sm p-6 bg-gray-100  border h-80 rounded-lg shadow-md">
                <h2 className="text-xl mb-4 text-center">Login Form</h2>
                <form>
                  <div className="mb-4">
                    <label className="block mb-2">Username</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewToggle;

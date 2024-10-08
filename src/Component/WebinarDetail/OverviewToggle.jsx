// import React, { useState } from "react";
// import OverviewContent from "./OverviewContent";
// import OverviewData from "./OverviewData";

// const OverviewToggle = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   return (
//     <>
//       <div>
//         <div className="container  mx-auto px-4 py-10 md:px-0">
//           <div className="flex flex-col md:flex-row  px-1 w-full">
//             {/* OverviewToggle Section */}
//             <div className="flex-grow md:w-9/12 px-4  md:px-7 py-5">
//               <div className="flex border-b">
//                 <button
//                   className={`px-4 py-2 ${
//                     activeTab === "overview"
//                       ? "border-b-2 border-orange-500"
//                       : ""
//                   }`}
//                   onClick={() => setActiveTab("overview")}
//                 >
//                   OVERVIEW
//                 </button>
//                 <button
//                   className={`px-4 py-2 ${
//                     activeTab === "overViewPlan"
//                       ? "border-b-2 border-orange-500"
//                       : ""
//                   }`}
//                   onClick={() => setActiveTab("overViewPlan")}
//                 >
//                   LEARNING PLAN CURRICULUM
//                 </button>
//               </div>
//               <div className="mt-4 w-full">
//                 {activeTab === "overview" && <OverviewContent />}
//                 {activeTab === "overViewPlan" && <OverviewData />}
//               </div>
//             </div>

//             {/* Login Form Section */}
//             <div className="md:w-4/12 flex top-[00px] mt-40 z-10 px-5  md:mt-0">
//               <div className="w-full max-w-sm p-6 bg-gray-100  border h-80 rounded-lg shadow-md">
//                 <h2 className="text-xl mb-4 text-center">Login Form</h2>
//                 <form>
//                   <div className="mb-4">
//                     <label className="block mb-2">Username</label>
//                     <input type="text" className="w-full p-2 border rounded" />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block mb-2">Password</label>
//                     <input
//                       type="password"
//                       className="w-full p-2 border rounded"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full py-2 bg-blue-500 text-white rounded"
//                   >
//                     Login
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OverviewToggle;

import React, { useState, useEffect } from "react";
import OverviewContent from "./OverviewContent";
import OverviewData from "./OverviewData";
import Image from "next/image";

const OverviewToggle = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const loginForm = document.querySelector("#loginForm");
      const scrollableSection = document.querySelector("#scrollableSection");

      const rect = scrollableSection.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight) {
        setIsStuck(false); // Allow login form to scroll
      } else {
        setIsStuck(true); // Fix the login form
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className="bg-gray-50">
          {/* Container */}
          <div className="w-full mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg p-6 rounded-md">
              {/* Left side: Text content */}
              <div className="w-full lg:w-2/3">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Automation Developer Associate zoho Training (v2023.10)
                </h1>
                <p className="text-gray-600 mb-6">
                  If you want to contribute to building a better business world
                  through developing enterprise automation projects, the UiPath
                  Automation Developer Associate Training plan is for you!
                </p>

                {/* Progress section */}
                <div className="flex items-center space-x-2">
                  emoji
                  <span className="text-gray-600">Not Started</span>
                </div>
              </div>

              {/* Right side: Image */}
              <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex justify-center lg:justify-end">
                <Image
                  src="/image/try.jpeg"
                  alt="Automation Training"
                  className="rounded-md w-48 lg:w-60 object-cover"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto  px-4 py-10 md:px-0">
          <div className="flex flex-col md:flex-row px-1 w-full">
            {/* OverviewToggle Section */}
            <div
              id="scrollableSection"
              className="flex-grow md:w-9/12 px-4 md:px-7 py-5"
            >
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
            <div
              id="loginForm"
              className={`md:w-4/12 flex z-10 px-5 md:mt-36 transition-all duration-300 ${
                isStuck ? "sticky top-1/2" : ""
              }`}
            >
              <div className="w-full max-w-sm p-6 bg-gray-100 border h-80 rounded-lg shadow-md">
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

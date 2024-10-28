

import { useState } from "react";
import Overview from "@/Component/admin/WebinarCreate/Overview";
import BasicInfo from "@/Component/admin/WebinarCreate/BasicInfo";
import Highlight from "@/Component/admin/WebinarCreate/Highlight";
import AdminLayout from "@/Component/admin/AdminLayout";

export default function CreateWebinar() {
  const [webinarData, setWebinarData] = useState();
  const [activeTab, setActiveTab] = useState("Tab1");
  const [isBasicInfoSubmitted, setIsBasicInfoSubmitted] = useState(false);

  // Function to switch to the next tab
  const handleTabChange = () => {
    if (activeTab === "Tab1") {
      setActiveTab("Tab2");
    } else if (activeTab === "Tab2") {
      setActiveTab("Tab3");
    }
  };

  // Function to activate all tabs after Basic Info submission
  const handleBasicInfoSubmit = () => {
    setIsBasicInfoSubmitted(true);
    handleTabChange(); // Switch to the Overview tab
  };

  // Function to handle Overview submission
  const handleOverviewSubmit = () => {
    handleTabChange(); // Switch to the Highlight tab
  };

  return (
    <AdminLayout>
      <div className="flex items-center gap-5 text-primary pb-3">
        <p className="md:text-[28px] text-2xl text-black">Create Webinar</p>
      </div>
      <div className="border-b border-slate-300 mb-5">
        <div className="flex gap-2 text-[14px] pt-3 pb-2 flex-wrap">
          <button
            onClick={() => setActiveTab("Tab1")}
            className={`${
              activeTab === "Tab1"
                ? "border-b-2 scale-105 border-black text-black"
                : "border-black text-slate-500"
            } px-3 py-1`}
          >
            Basic Information
          </button>
          {isBasicInfoSubmitted && (
            <>
              <button
                onClick={() => setActiveTab("Tab2")}
                className={`${
                  activeTab === "Tab2"
                    ? "border-b-2 scale-105 border-black text-black"
                    : "border-black text-slate-500"
                } px-3 py-1`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("Tab3")}
                className={`${
                  activeTab === "Tab3"
                    ? "border-b-2 scale-105 border-black text-black"
                    : "border-black text-slate-500"
                } px-3 py-1`}
              >
                Highlight
              </button>
            </>
          )}
        </div>
      </div>

      {/* Render each tab's content conditionally */}
      <div
        className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}
      >
        <BasicInfo onSubmit={handleBasicInfoSubmit} webinarData={webinarData} />
      </div>
      {isBasicInfoSubmitted && (
        <>
          <div
            className={`tab-content ${
              activeTab === "Tab2" ? "block" : "hidden"
            }`}
          >
            <Overview
              onSubmit={handleOverviewSubmit}
              webinarData={webinarData}
            />
          </div>
          <div
            className={`tab-content ${
              activeTab === "Tab3" ? "block" : "hidden"
            }`}
          >
            <Highlight webinarData={webinarData} />
          </div>
        </>
      )}
    </AdminLayout>
  );
}

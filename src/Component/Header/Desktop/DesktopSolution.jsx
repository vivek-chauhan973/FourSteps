import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesome icons

const fetchAllSoutionType = async () => {
  const res = await fetch("/api/solution/masterS", { method: "GET" });
  return await res.json();
};
const fetchSolutionAccordingType = async (id) => {
  const res = await fetch(`/api/solution/get-solution?solutionType=${id}`);
  return await res.json();
};
const DesktopSolution = ({ activeLink, handleLinkClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [solutionType, setSolutionType] = useState([]);
  const [solutionList, setSolutionList] = useState([]);
  const [solutionId, setSolutionId] = useState(null);
  useEffect(() => {
    if (solutionId) {
      fetchSolutionAccordingType(solutionId).then((data) => {
        console.log("data--->", data);
        setSolutionList(data?.data);
      });
    }
  }, [solutionId]);

  useEffect(() => {
    fetchAllSoutionType()
      .then((res) => {
        setSolutionType(res.data);
        // Set the first solution as the active service by default
        if (res.data && res.data.length > 0) {
          setActiveService(res.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching solution types:", error);
      });
  }, []);

  return (
    <li
      className="relative inline-block"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div
        className={`relative inline-block text-base font-medium px-3 py-2 hover:text-orange-500`}
      >
        Solution
        <span
          className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
            activeLink === "/#" ? "scale-x-100" : "scale-x-0"
          }`}
        ></span>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-[-10vw] w-[65vw] bg-background border">
          <div className="flex max-w-7xl mx-auto">
            {/* Sidebar Menu */}
            <div className="w-1/4 border-r py-2">
              <h2 className="text-lg border-b py-2 pl-2 font-semibold">
                Solutions
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
              {/* Show the solution name on hover */}
              <h2 className="text-xl font-semibold border-b transition duration-200">
                {activeService ? activeService.name : "Select a solution type"}
              </h2>

              {/* Show the links when a solution is selected */}
              <div className="space-y-2">
                {solutionList?.map((link) => {
                  return (
                    <Link key={link?._id} href={`/solution/${(link?.title)?.split(" ")?.join("-")}`}>
                      <p className="text-gray-800 text-sm py-1 hover:text-orange-500 transition duration-200">
                        {link.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default DesktopSolution;

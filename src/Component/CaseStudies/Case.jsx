import React, { useEffect, useState } from "react";
import SideCard from "./SideCard";

const Case = () => {
  const [statePackage, setStatePackage] = useState([]);

  const data = {
    states: [
      { _id: "1", name: "Tour & Travels " },
      { _id: "2", name: "Hubspot" },
      { _id: "3", name: "Markrting" },
      { _id: "4", name: "Zoho" },
      { _id: "5", name: "Bitrix24" },
    ],
  };
  const fetchAllCaseStudies = async () => {
    try {
      const response = await fetch("/api/casestudy/casestudy", {
        method: "GET",
      });
      const data = await response.json();
      setStatePackage(data);

      // console.log(".....>>>>>>>>>>>>>>>>statePackage",data,statePackage)
    } catch (error) {
      console.error("error fetching the case study data", error);
      return [];
    }
  };

  useEffect(() => {
    fetchAllCaseStudies();
  }, []);

  return (
    <div className=" bg-background">
      <div className=" my-1 mt-6 py-10 container-wrapper">
        <div className="">
          <div className=" text-center">
            <h2 className="md:text-3xl text-xl text-heading font-semibold pb-3">
              Our Success Stories
            </h2>

            <p className="text-sm md:text-lg text-gray-900  max-w-5xl">
              Success is not accidental it is the result of bold ideas and
              relentless execution. Here is how we made it happen...
            </p>
          </div>
          <div className="container-wrapper grid grid-cols-5 gap-3 overflow-hidden">
            <div className="flex xl:flex-col md:mt-14 md:gap-5 gap-2 py-5 xl:col-auto col-span-5 xl:overflow-x-hidden overflow-x-scroll">
              {data?.states?.length > 0 &&
                data?.states?.slice(0, 5)?.map((title) => (
                  <div key={title._id}>
                    <div className="">
                      <button
                        className="cursor-pointer capitalize shadow-md bg-gradient-to-r from-orange-500 to-red-500 xl:w-52 w-40 text-white md:text-[16px] text-para md:py-2.5 py-1.5 px-4 rounded-md"
                        // onClick={() => handleStatePackages(title._id)}
                      >
                        {title.name}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="relative xl:col-span-4 col-span-5 w-full overflow-auto">
              <div className="flex gap-4">
                {/* for sharing the data */}
                <SideCard statePackage={statePackage} />
                {/* <SideCard /> */}
              </div>
              <div className="bg-gradient-to-l from-white opacity-100 w-8 h-full right-0 absolute z-30 top-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;

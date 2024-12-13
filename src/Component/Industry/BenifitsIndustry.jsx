// import React from "react";

// const BenifitsIndustry = () => {
//   const statistics = [
//     {
//       value: "20–50%",
//       description:
//         "reduction in application launch time due to mature processes",
//     },
//     {
//       value: "5–35%",
//       description:
//         "decrease in IT operating costs due to gaining access to professional expertise",
//     },
//     {
//       value: "99.99%",
//       description:
//         "IT service availability due to proactive IT maintenance and 24/7 support",
//     },
//     {
//       value: "50%",
//       description: "faster claim processing due to workflow automation",
//     },
//     {
//       value: "80–90%",
//       description:
//         "increase in the accuracy of insurance processes due to eliminated manual errors",
//     },
//     {
//       value: "100%",
//       description: "regulatory compliance due to robust security features",
//     },
//   ];

//   return (
//     <div>
//       <h2 className="text-3xl text-primary font-semibold pb-5">
//         Every successful strategy starts with an insightful conversation some
//         pending cheak the science soft
//       </h2>
//       <div className="">welcome to night worls</div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//         {statistics.map((stat, index) => (
//           <div key={index} className="border-l-[3px] p-6 ">
//             <div className="text-primary text-4xl  font-semibold">
//               {stat.value}
//             </div>
//             <div className="text-gray-700  mt-2">{stat.description}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BenifitsIndustry;

import React, { useState } from "react";
import Calltoaction from "../Web/Calltoaction";

const BenifitsIndustry = () => {
  const statistics = [
    {
      value: "20–50%",
      description:
        "reduction in application launch time due to mature processes",
    },
    {
      value: "5–35%",
      description:
        "decrease in IT operating costs due to gaining access to professional expertise",
    },
    {
      value: "99.99%",
      description:
        "IT service availability due to proactive IT maintenance and 24/7 support",
    },
    {
      value: "50%",
      description: "faster claim processing due to workflow automation",
    },
    {
      value: "80–90%",
      description:
        "increase in the accuracy of insurance processes due to eliminated manual errors",
    },
    {
      value: "100%",
      description: "regulatory compliance due to robust security features",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="">
        <h2 className=" md:text-3xl text-lg text-primary font-semibold pb-5">
          Every successful strategy starts with an insightful conversation some
          pending cheak the science soft
        </h2>

        {/* Mobile view with slider */}
        <div className="block md:hidden text-center">
          <div className="border-l-[3px] p-6 inline-block">
            <div className="text-primary text-4xl font-semibold">
              {statistics[currentIndex].value}
            </div>
            <div className="text-gray-700 mt-2">
              {statistics[currentIndex].description}
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {statistics.map((_, index) => (
              <button
                key={index}
                className={`h-1 w-8 ${
                  currentIndex === index ? "bg-orange-500" : "bg-gray-300"
                } rounded-md transition-all duration-300`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop view with grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {statistics.map((stat, index) => (
            <div key={index} className="border-l-[3px] p-6">
              <div className="text-primary text-4xl font-semibold">
                {stat.value}
              </div>
              <div className="text-gray-700 mt-2">{stat.description}</div>
            </div>
          ))}
        </div>

        <Calltoaction />
      </div>
    </>
  );
};

export default BenifitsIndustry;

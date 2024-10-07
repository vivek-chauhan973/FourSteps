import React from "react";

const MainData = () => {
  const cardData = [
    {
      title: "Stat Report 2024",
      description: "Discovin the UiPath Community industry report.",
      type: "FEATURED | ANALYST REPORT",
      image: "/image/1.png", // Add the image URL
    },
    {
      title: "2024 Robotic Process Automation",
      description: "UiPath for Robotic Process Automation.",
      type: "FEATURED | ANALYST REPORT",
      image: "/image/1.png", // Add the image URL
    },
    {
      title: "Everest Group Assessment 2024",
      description:
        "According to their market impact, vision, and capabilities.",
      type: "FEATURED | ANALYST REPORT",
      image: "/image/1.png", // Add the image URL
    },
    {
      title: "Everest Group Assessment 2024",
      description:
        "According to their market impact, vision, and capabilities.",
      type: "FEATURED | ANALYST REPORT",
      image: "/image/1.png", // Add the image URL
    },
  ];

  return (
    <div className="container px-4 py-4">
      <div>
        <div>
          <div className="grid grid-cols-1 bg-gray-100 sm:grid-cols-2  px-5 py-5 gap-5 md:grid-cols-3  lg:grid-cols-3">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg  cursor-pointer shadow-md px-3 py-4    transition-transform transform hover:scale-105"
              >
                <div className="flex items-center justify-center ">
                  <img src={item.image} alt={item.type} className="w-40 h-40" />
                </div>
                <div className="font-semibold text-xs pt-5 pb-1 text-blue-600">
                  {item.type}
                </div>
                <h3 className="text-md md:text-lg font-bold mb-2 break-words">
                  {item.title}
                </h3>
                <p className="text-xs md:text-md text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainData;

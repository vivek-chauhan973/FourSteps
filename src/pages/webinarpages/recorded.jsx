import Webinarcard from "@/Component/WebinarCard/Webinarcard";
import React, { useState } from "react";

import { Footer } from "@/Component/Footer/Footer";
const Recorded = () => {
  const data = [
    {
      title: "Ultra HD streaming",
      description:
        "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Add YouTube video URL
    },
    {
      title: "Smart scheduling",
      description:
        "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
      video: "https://www.youtube.com/embed/2Vv-BfVoq4g", // Add YouTube video URL
    },
    {
      title: "Workshops & webinars",
      description:
        "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
      video: "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Add YouTube video URL
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (

    <div>  <Webinarcard /> 
    <div className="container mx-auto p-4">
     
      <div className="text-center my-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
          Unlock knowledge at your own pace with our recorded webinars
        </h2>

        <p className=" py-2 px-20  text-sm">
          Are you looking to streamline your
          business operations and boost productivity? Join us for an insightful
          webinar led by <b>Amarjeet Singh</b>, a seasoned Zoho consultant and
          automation expert. In this session, Amarjeet will share his extensive
          knowledge of Zoho’s suite of applications and how they can transform
          your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            {/* Embedded YouTube Video */}
            <div className="w-full h-48 mb-3">
              <iframe
                className="w-full h-full rounded-lg"
                src={item.video}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Feature Title */}
            <div className="bg-gray-200 text-black font-semibold rounded-full py-1 px-4 flex justify-center">
              <span className="text-center">{item.title}</span>
            </div>

            {/* Description with Read More/Less */}
            <div className="mt-2 text-gray-700 text-center">
              <div className={`text-sm`}>
                {/* Show truncated description if not expanded */}
                {expandedIndex === index
                  ? item.description
                  : item.description.length > 100 // Adjust the number of characters to truncate
                  ? item.description.slice(0, 100) + "..." // Truncated version
                  : item.description}
              </div>
              <span
                className="text-blue-500 cursor-pointer mt-2"
                onClick={() => toggleReadMore(index)}
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Recorded;











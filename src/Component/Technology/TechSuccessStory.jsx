import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const TechSuccessStory = () => {
  // Static data (replace with your actual static data structure)
  const stories = {
    successItem: [
      {
        path: "/image/ab.webp",
        backgroundColor: "#FFF0F5",
        keyword: "Innovation, Growth, Strategy",
        title: "Innovative Strategy for Growth",
        description:
          "We vwhe wuef wefw iwuhefk woiwf iowef whfw w8e wuwe9 wwu wewue helped a startup implement cutting-edge strategies to scale their business exponentially, with a strong focus on technology and market adaptation.",
        link: "#",
      },
      {
        path: "/image/about.jpg",
        backgroundColor: "#FAF0E6",
        keyword: "Efficiency, Technology, Success",
        title: "Tech-Driven Efficiency",
        description:
          "A multinational corporation streamlined their operations using advanced technologies, driving both productivity and profitability.",
        link: "#",
      },
      {
        path: "/image/bg.jpg",
        backgroundColor: "#E6F0F8",
        keyword: "Digital, Transformation, Impact",
        title: "Digital Transformation Journey",
        description:
          "Our team assisted a traditional business in its digital transformation journey, reshaping their customer experience and expanding market reach.",
        link: "#",
      },
      {
        path: "/image/3.png",
        backgroundColor: "#F0FFF0",
        keyword: "Leadership, Vision, Excellence",
        title: "Leadership in Action",
        description:
          "Through visionary leadership, we guided a company to new heights, positioning them as an industry leader and expanding their market share.",
        link: "#",
      },
    ],
  };

  return (
    <>
      {/* section 1 */}
      {stories?.successItem?.map((item, i) => (
        <div key={i}>
          {i % 2 === 0 ? (
            <div className="relative w-full  mt-5 ">
              {/* Background Image */}
              <div className="relative w-full md:absolute md:inset-0 md:w-[75%] h-[250px] md:h-[400px]">
                <Image
                  src={item?.path} // Replace with your image path
                  alt="Background"
                  className="w-full md:w-[100%] h-[250px] md:h-[400px] object-cover"
                  height={500}
                  width={500}
                />
              </div>
              {/* Content */}
              <div className="relative  flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end max-w-7xl mx-auto ">
                {/* Left Placeholder (Keeps layout consistent on desktop) */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Right Content */}
                <div
                  className=" shadow-lg p-4 md:p-8 w-full md:w-1/2"
                  style={{
                    backgroundColor: item?.backgroundColor || "#FFF0F5",
                  }}
                >
                  <div className="flex flex-wrap items-center space-x-2 mb-4">
                    {item?.keyword?.split(",")?.map((keyword, i) => (
                      <span
                        key={i}
                        className="bg-white text-black text-xs md:text-sm px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                    {item?.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3 text-sm md:text-base mb-6">
                    {item?.description}
                  </p>

                  {/* Request Details Button */}
                  <div className="mt-6 flex justify-center md:justify-start">
                    <Link
                      href={item?.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm md:text-base lg:text-lg py-2 px-6 inline-flex items-center transition-transform duration-300"
                    >
                      Request details
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 transform hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full pb-5 mt-2 md:mt-24">
              {/* Background Image */}
              <div className="relative w-full md:absolute md:inset-y-0 md:right-0 md:w-[75%] h-[250px] md:h-[450px]">
                <Image
                  src={item?.path} // Replace with your image path
                  alt="Background"
                  className="w-full md:w-[100%] h-[250px] md:h-[400px] object-cover"
                  height={500}
                  width={500}
                />
              </div>

              {/* Content */}
              <div className="relative flex flex-col md:flex-row-reverse items-center md:items-start justify-center md:justify-between max-w-7xl mx-auto">
                {/* Left Placeholder (Keeps layout consistent on desktop) */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Right Content */}
                <div
                  className="shadow-lg p-4 md:p-8 w-full md:w-1/2"
                  style={{
                    backgroundColor: item?.backgroundColor || "#FFF0F5",
                  }}
                >
                  <div className="flex flex-wrap items-center space-x-2 mb-4">
                    {item?.keyword?.split(",")?.map((keyword, i) => (
                      <span
                        key={i}
                        className="bg-white text-black text-xs md:text-sm px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                    {item?.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3 text-sm md:text-base mb-6">
                    {item?.description}
                  </p>

                  {/* Request Details Button */}
                  <div className="mt-6 flex justify-center md:justify-start">
                    <Link
                      href={item?.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm md:text-base lg:text-lg py-2 px-6 inline-flex items-center transition-transform duration-300"
                    >
                      Request details
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 transform hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default TechSuccessStory;

import Image from "next/image";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const TechService = () => {
  const services = {
    mainEditorHtmlDescription: `
      <p>We offer a range of tech services designed to help you achieve your business goals with ease and efficiency. Explore our solutions below to learn more:</p>
    `,
    serviceItem: [
      {
        path: "/image/bg.jpg",
        title: "Service Title 1",
        subTitle: "A brief description of Service 1",
        editorHtmlDescription: [
          { content: "Feature 1 of Service 1" },
          { content: "Feature 2 of Service 1" },
          { content: "Feature 3 of Service 1" },
        ],
        link: "/service-details/1",
      },
      {
        path: "/image/auth.png",
        title: "Service Title 2",
        subTitle: "A brief description of Service 2",
        editorHtmlDescription: [
          { content: "Feature 1 of Service 2" },
          { content: "Feature 2 of Service 2" },
          { content: "Feature 3 of Service 2" },
        ],
        link: "/service-details/2",
      },
      {
        path: "/images/service3.png",
        title: "Service Title 3",
        subTitle: "A brief description of Service 3",
        editorHtmlDescription: [
          { content: "Feature 1 of Service 3" },
          { content: "Feature 2 of Service 3" },
          { content: "Feature 3 of Service 3" },
        ],
        link: "/service-details/3",
      },
    ],
  };
  return (
    <>
      <div className="">
        <p
          className="md:text-base py-3 text-sm"
          dangerouslySetInnerHTML={{
            __html: services?.mainEditorHtmlDescription,
          }}
        />
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services?.serviceItem?.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg border-t-[8px] border-heading hover:shadow-lg transition-all duration-300 mx-auto w-full max-w-md h-auto  border-b-[1px] border-l-[1px] border-r-[1px] border-b-gray-300 border-l-gray-300 border-r-gray-300"
            >
              <div className="md:px-6 px-3 py-6 md:py-0">
                <div className="flex justify-center items-center">
                  <div className="mb-4">
                    <Image
                      src={item?.path || "/image/bg.jpg"} // Assuming the filename is a path to an image
                      alt="welcome"
                      className="w-full h-32  md:h-36 md:w-36 object-contain rounded"
                      height={500}
                      width={500}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="md:text-2xl text-lg font-semibold mb-2">
                    {item?.title}
                  </h2>
                  <p className="text-gray-900 text-sm md:text-base  font-medium">
                    {item?.subTitle}
                  </p>
                </div>

                <ul className="mt-4 text-gray-800 custom-list  px-4">
                  {item?.editorHtmlDescription?.map((point, idx) => (
                    <li
                      key={idx}
                      className="mb-[2px] text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: point.content, // Render HTML content inside list item
                      }}
                    ></li>
                  ))}
                </ul>

                {/* <div className="mt-6 flex justify-center">
                  <button className=" bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm md:text-base lg:text-lg py-2 px-6  inline-flex items-center transition-transform duration-300">
                    Request details
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 transform hover:translate-x-1"
                    />
                  </button>
                </div> */}

                <div className="mt-6 md:mb-6  flex justify-center">
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
          ))}
        </div>
      </div>
    </>
  );
};

export default TechService;

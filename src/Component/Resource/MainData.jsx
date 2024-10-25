import React from "react";
import Image from "next/image";
const MainData = () => {
  const cardData = [
    {
      title: "Stat Report 20249999999",
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
        {/* horizontal cards starts */}
        {/* card 1 */}

        <div className="flex justify-center max-w-3xl pb-8  items-center ">
          <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Section 1: Image */}
            <div className="flex justify-center sm:col-span-2 md:col-span-1">
              <Image
                src="/image/try.jpeg"
                alt="Service"
                height={220}
                width={220}
                className="rounded object-cover"
              />
            </div>

            {/* Section 2: Text */}
            <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
              <h2 className="text-lg font-bold">ABCD</h2>
              <div className="flex text-gray-500 mt-2">
                <span className="mr-2">Subtitle</span>
              </div>
              <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                A paragraph is defined as “a group of sentences or a single
                sentence that forms a...
              </p>
            </div>

            {/* Section 3:  Button */}
            <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
              <div className="text-center md:text-left">
                <div className="text-green-600 text-lg font-semibold">
                  Title
                </div>
                <div className="text-2xl font-bold text-gray-800">Subtitle</div>
                <div className="text-sm text-gray-500">Description</div>
              </div>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded self-center md:self-start">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>

        {/* card-2 upcoming webinar  */}
        <div className="flex relative justify-center max-w-3xl  items-center  pb-8">
          <div className="bg-white shadow-lg items-center rounded-lg p-3 mt-5 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
            {/* Section 1: "Upcoming Webinars" Badge */}
            <div className="absolute top-2">
              <div className="rounded-r-sm px-2 bg-black">
                <p className="py-1 text-xs text-white">Upcoming Webinars</p>
              </div>
            </div>
            {/* Section 2: Image */}
            <div className="flex justify-center sm:col-span-2 md:col-span-1">
              <Image
                src="/image/try.jpeg"
                alt="Service"
                height={220}
                width={220}
                className="rounded object-cover"
              />
            </div>

            {/* Section 3: Text */}
            <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
              <h2 className="text-lg font-bold">ABCD</h2>
              <div className="flex text-gray-500 mt-2">
                <span className="mr-2">Subtitle</span>
              </div>
              <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                A paragraph is defined as “a group of sentences or a single
                sentence that forms a...
              </p>
            </div>

            {/* Section 4:Button */}
            <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
              <div className="text-center md:text-left">
                <div className="text-green-600 text-lg font-semibold">
                  Title
                </div>
                <div className="text-2xl font-bold text-gray-800">Subtitle</div>
                <div className="text-sm text-gray-500">Description</div>
              </div>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded self-center md:self-start">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>

        {/* horizontal cards ends  */}
      </div>
    </div>
  );
};

export default MainData;

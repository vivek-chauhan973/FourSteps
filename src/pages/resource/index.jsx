import react, { useState } from "react";
import Nav from "@/Component/Header/Nav";
import Link from "next/link";
import Image from "next/image";
// import { resources } from "@/Component/data/SwitchData";
export default function Resource() {
  const [showMoreIndustries, setShowMoreIndustries] = useState(false);
  const [showMoreDepartments, setShowMoreDepartments] = useState(false);

  const resources = [
    { href: "/resource/all", label: "Show all" },
    { href: "/resource/webinar", label: "Webinar" },
    { href: "/resource/case-studies", label: "Case & studies" },
    { href: "/resource/training", label: "Training" },
    { href: "/resource/demo-videos", label: "Demos & Videos" },
    { href: "/resource/product", label: "Product" },
  ];

  // Data for checkboxes (Industries and Departments)
  const industries = [
    "Banking and Financial Services",
    "Customer Experience",
    "Energy and Utilities",
    "Healthcare",
    "Hospitality",
  ];

  const departments = [
    "Contact Center",
    "Finance and Accounting (F&A)",
    "Human Resources (HR)",
    "Information Technology (IT)",
    "other",
  ];

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
  ];

  return (
    <>
      <div className="bg-slate-100 ">
        <Nav />
        <div className="container-wrapper">
          <div className="flex  items-center justify-center p-6 gap-4 ">
            <div className="max-w-2xl text-center">
              <h1 className="text-4xl font-bold ">All Section Here </h1>
              <p className="mt-4 text-lg ">
                I hated every minute of training, but I said, 'Don't quit. ...
              </p>
            </div>
            <div className="mt-6">
              <Image
                aria-hidden="true"
                alt="animated character"
                src="/image/try.jpeg"
                width={300}
                height={400}
              />
            </div>
          </div>
          <div className="flex items-center justify-center py-10 px-5 ">
            <div className="flex flex-wrap gap-4 justify-center">
              {resources.map((resource, index) => (
                <Link key={index} href={resource.href} className="btn_filter">
                  {resource.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=" px-5 grid grid-cols-1 xl:grid-cols-[320px,2fr] gap-5 relative">
          <div className="relative">
            <div className="">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">FILTER BY:</h2>

                {/* Industries */}
                <div className="mb-6">
                  <h3 className="font-semibold text-md mb-2">Industries</h3>

                  {/* Display first 3 industries by default */}
                  {industries
                    .slice(0, showMoreIndustries ? industries.length : 3)
                    .map((industry, index) => (
                      <label className="flex items-center mb-1" key={index}>
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">{industry}</span>
                      </label>
                    ))}

                  {/* Show More/Less button */}
                  <button
                    className="text-blue-500 mt-2"
                    onClick={() => setShowMoreIndustries(!showMoreIndustries)}
                  >
                    {showMoreIndustries ? "Show less" : "Show more"}
                  </button>
                </div>

                {/* Departments */}
                <div className="mb-6">
                  <h3 className="font-semibold text-md mb-2">Departments</h3>

                  {/* Display first 3 departments by default */}
                  {departments
                    .slice(0, showMoreDepartments ? departments.length : 3)
                    .map((department, index) => (
                      <label className="flex items-center mb-1" key={index}>
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">{department}</span>
                      </label>
                    ))}

                  {/* Show More/Less button */}
                  <button
                    className="text-blue-500 mt-2"
                    onClick={() => setShowMoreDepartments(!showMoreDepartments)}
                  >
                    {showMoreDepartments ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* side main data */}
          <div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2  lg:grid-cols-3">
                {cardData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md px-3 py-4 m-2   transition-transform transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center ">
                      <Image
                        src={item.image}
                        alt={item.type}
                        className="w-40 h-40"
                        width={300}
                        height={400}
                      />
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

        <div className="text-end p-10">Pagination page............</div>
      </div>
    </>
  );
}







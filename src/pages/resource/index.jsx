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
        <div className=" px-10 grid grid-cols-1 xl:grid-cols-[320px,2fr] gap-10 relative">
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
            {/* horizontal cards starts */}
            {/* card 1 */}

            <div className="flex justify-center max-w-3xl pb-8 mx-auto items-center bg-gray-100">
              <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Section 1: Image */}
                <div className="flex justify-center sm:col-span-2 md:col-span-1">
                  <Image
                    src="/image/try.jpeg" // Replace with your image source
                    alt="Service"
                    height={220}
                    width={220}
                    className="rounded object-cover"
                  />
                </div>

                {/* Section 2: Text and Rating */}
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

                {/* Section 3: Pricing and Button */}
                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                  <div className="text-center md:text-left">
                    <div className="text-green-600 text-lg font-semibold">
                      Title
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      Subtitle
                    </div>
                    <div className="text-sm text-gray-500">Description</div>
                  </div>
                  <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded self-center md:self-start">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </div>

            {/* card-2 upcoming webinar  */}
            <div className="flex relative justify-center max-w-3xl mx-auto items-center bg-gray-100 pb-8">
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
                    src="/image/try.jpeg" // Replace with your image source
                    alt="Service"
                    height={220}
                    width={220}
                    className="rounded object-cover"
                  />
                </div>

                {/* Section 3: Text and Rating */}
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

                {/* Section 4: Pricing and Button */}
                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                  <div className="text-center md:text-left">
                    <div className="text-green-600 text-lg font-semibold">
                      Title
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      Subtitle
                    </div>
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

        <div className="text-end p-10">Pagination page... main .........</div>
      </div>
    </>
  );
}

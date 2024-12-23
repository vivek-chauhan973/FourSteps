import React, { useState } from "react";
import Link from "next/link";

// The services data remains the same
const services = [
  {
    name: "Software Development",
    content: {
      heading: "Software Development",
      description:
        "A software development company with 35 years of business excellence, we can engineer reliable, scalable, and secure software solutions for any OS, browser, and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
      links: [
        { name: "Software consulting", link: "abc" },
        { name: "Custom software development", link: "#" },
        { name: "Software development outsourcing", link: "#" },
        { name: "Software product development", link: "#" },
        { name: "Team augmentation", link: "#" },
        { name: "Cloud application development", link: "#" },
        { name: "Legacy software modernization", link: "#" },
        { name: "Post-launch support", link: "#" },
      ],
    },
  },
  {
    name: "Website Development",
    content: {
      heading: "Website Development",
      description:
        "We provide IT consulting services to help businesses transform their operations through strategic technology solutions.",
      links: [
        { name: "Digital Transformation Consulting", link: "#" },
        { name: "Business Process Optimization", link: "#" },
        { name: "IT Strategy Development", link: "#" },
        { name: "Risk Management", link: "#" },
      ],
    },
  },
  {
    name: "IT Consulting",
    content: {
      heading: "IT Consulting",
      description:
        "We provide IT consulting services to help businesses transform their operations through strategic technology solutions.",
      links: [
        { name: "Digital Transformation Consulting", link: "#" },
        { name: "Business Process Optimization", link: "#" },
        { name: "IT Strategy Development", link: "#" },
        { name: "Risk Management", link: "#" },
      ],
    },
  },
  {
    name: "Zoho Services",
    content: {
      heading: "Zoho Services",
      description:
        "We provide IT consulting services to help businesses transform their operations through strategic technology solutions.",
      links: [
        { name: "Digital Transformation Consulting", link: "#" },
        { name: "Business Process Optimization", link: "#" },
        { name: "IT Strategy Development", link: "#" },
        { name: "Risk Management", link: "#" },
        { name: "Risk Management system", link: "#" },
      ],
    },
  },
  {
    name: "Hubspot Services",
    content: {
      heading: "Hubspot Services",
      description:
        "We provide IT consulting services to help businesses transform their operations through strategic technology solutions.",
      links: [
        { name: "Digital Transformation Consulting", link: "#" },
        { name: "Business Process Optimization", link: "#" },
        { name: "IT Strategy Development", link: "#" },
        { name: "Risk Management", link: "#" },
        { name: "Risk Management system", link: "#" },
        { name: "Risk Management  and optimization ", link: "#" },
      ],
    },
  },
  // Add more services here...
];

const ServicesScienceSoft = () => {
  const [activeService, setActiveService] = useState(services[0]); // Set default to the first service

  return (
    <div className="container mx-auto px-4 md:pt-10 pt-5 sm:px-6 lg:px-8">
      <div className=" pb-5">
        <h2 className="md:text-3xl text-xl   text-primary font-semibold pb-5">
          <span className="bg-orange-50 px-2 py-2">Our </span>
          Services
        </h2>
        <p className="text-sm md:text-lg pb-3">
          We have excelled our experience in a wide range of industries to bring
          valuable insights and provide our clients with truly beneficial
          solutions.
        </p>
      </div>

      <div className="w-full bg-white  border rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Menu */}
          <div className="w-full md:w-1/3  bg-blue-50 px-4 py-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`md:py-3 md:px-4 py-2 px-3 md:text-xl text-lg   font-semibold cursor-pointer hover:text-blue-500 transition ${
                  activeService.name === service.name
                    ? "bg-blue-500 text-white hover:text-white"
                    : "text-[#004985]"
                }`}
                onClick={() => setActiveService(service)}
              >
                {service.name}
              </div>
            ))}
          </div>
          {/* Content Area */}
          <div className="w-full md:h-[90vh] overflow-hidden md:flex-1 px-3  md:px-16 py-10">
            <h2 className="text-[22px] text-lg font-semibold mb-4 ">
              {activeService.content.heading}
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              {activeService.content.description}
            </p>
            <div className="grid grid-cols-1 md:px-0 px-3  sm:grid-cols-2 gap-4">
              {activeService.content.links.map((link, index) => (
                <Link key={index} href={link.link}>
                  <ul className=" custom-list">
                    <li className=" md:text-lg text-base   underline decoration-primary cursor-pointer">
                      {link.name}
                    </li>
                  </ul>
                </Link>
              ))}
            </div>
            {/* <div className="mt-6 float-right">
              <Link href="#">
                <span className="text-blue-700 font-medium hover:underline cursor-pointer">
                  Check details →
                </span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesScienceSoft;

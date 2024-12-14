import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Image from "next/image";
import { Footer } from "@/Component/Footer/Footer";
import Nav from "@/Component/Header/Nav";
import TableOfContent from "@/Component/Industry/TableOfContent";
import IndustryFaq from "@/Component/Industry/IndustryFaq";

const Travel = () => {
  return (
    <div>
      {/* headres */}
      <div className=" z-10">
        <Nav />
      </div>

      <div className="font-sans">
        {/* hero section */}
        <div className="flex justify-center items-center w-full bg-[#F8FAFC]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:mt-0 mt-20 gap-8 px-6 sm:px-10   shadow-lg">
            {/* Content Section */}
            <div className="flex flex-col justify-center   text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                IT Solution for Oil Other companies
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                Since 2020, ScienceSoft has been building IT solutions for the
                oil and gas industry by employing cloud, IIoT, big data,
                advanced analysis, virtual and augmented reality. We will gladly
                provide you with a tailored IT solution for improved petroleum
                exploration and production processes and data-driven
                decision-making.
              </p>
              <div className="flex justify-center mt-10 md:justify-start">
                <button className="bg-orange-500 text-white text-sm md:text-base font-medium py-2 px-4 rounded-md shadow-md hover:bg-orange-600 transition-all">
                  Request expert help
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center md:justify-end items-center ">
              <Image
                src="/image/yyy.png"
                alt="About Us"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded  object-cover"
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>

        {/* tabel of content section */}
        <div>
          <TableOfContent />
        </div>

        {/* Client & Testimonials */}

        <div>
          <Testimonial />
        </div>

        {/* Resource Section */}
      </div>

      {/* this is FQA SECTION  */}
      <div>
        <IndustryFaq />
      </div>

      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Travel;

import React from "react";
import Nav from "@/Component/Header/Nav";
import Image from "next/image";
import { Footer } from "@/Component/Footer/Footer";
import Testimonial from "@/Component/Testimonial/Testimonial";
import TableOfTechnology from "@/Component/Technology/TableOfTechnology";
import TechFaqs from "@/Component/Technology/TechFaqs";

const Technology = () => {
  return (
    <div>
      {/* headres */}
      <div className=" top-0 sticky z-10">
        <Nav />
      </div>

      <div className="font-sans">
        {/* hero section */}

        <div className=" bg-background md:mt-0 mt-10 shadow-lg py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row ">
            {/* Left Content */}
            <div className=" md:w-1/2">
              <h1 className="text-2xl md:text-[30px] font-semibold text-heading leading-tight mb-4">
                {/* {industryName?.title || "IT Solution for Oil & Gas Companies"} */}
                Technology name Node.js Like
              </h1>
              <p className="text-sm md:text-lg ">
                {/* {industryName?.description ||
                  "IT Solution for Oil & Gas Companies description....."} */}
                The provided code implements a robust API route for managing
                SolutionHero resources, enabling efficient file uploads and
                dynamic interactions with the database. It handles multiple HTTP
                methods, including POST, PUT, and GET, to create, update, and
                retrieve solutions, respectively. The multer
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <Image
                // src={industryName?.path || "/image/yyy.png"}
                src="/image/yyy.png"
                alt="Hero Section"
                className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>

        {/* tabel of content section */}
        <div>
          {/* <TableOfContent industryName={industryName} /> */}
          <TableOfTechnology />
        </div>

        {/* this is FQA SECTION  */}
        <div>
          {/* <IndustryFaq faqData={industryName?.faq?.faq} /> */}
          <TechFaqs />
        </div>
        {/* Client & Testimonials */}

        <div>
          <Testimonial />
        </div>

        {/* Resource Section */}
      </div>

      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Technology;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Image from "next/image";
import { Footer } from "@/Component/Footer/Footer";
import Nav from "@/Component/Header/Nav";
import { useRouter } from "next/router";
import TableOfServices from "@/Component/Service/TableOfServices";
import ServiceFaq from "@/Component/Service/ServiceFaq";
import TableofSolution from "@/Component/Solution/TableofSolution";
import SolutionFaq from "@/Component/Solution/SolutionFaq";
// const getIndustry = async (item) => {
//   return await (
//     await fetch(
//       `/api/industry/get-industry?industryName=${item?.split("-")?.join(" ")}`,
//       { method: "GET" }
//     )
//   ).json();
// };
const SolutionSection = () => {
  // const router = useRouter();

  // const { industry } = router?.query;
  // const [industryName, setIndustryName] = useState({});

  // useEffect(() => {
  //   if (industry) {
  //     getIndustry(industry).then((res) => {
  //       setIndustryName(res?.data || {});
  //     });
  //   }
  // }, [industry]);

  // console.log("itineary all data one by one industry ---==> ", industryName);
  return (
    <div>
      {/* headres */}
      <div className=" z-10">
        <Nav />
      </div>

      <div className="font-sans">
        {/* hero section */}

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl py-16 px-6 md:px-16 lg:px-20">
          <div className="w-full mx-auto flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-2xl md:text-[36px] font-semibold leading-tight mb-5">
                Heading of a Solution
                {/* {industryName?.title || "IT Solution for Oil & Gas Companies"} */}
              </h1>
              <p className="text-sm md:text-lg ">
                {/* {industryName?.description ||
                  "IT Solution for Oil & Gas Companies description....."} */}
                Some description of services ..... Each service e.g.,
                Underwriting, Billing will display its title, icon, and a list
                of points associated with it. The component will print out the
                data properly and show the items in a clean, card-like
                structure. Let me know if you need more adjustments!
              </p>
              <div className="hidden md:block mt-8">
                <button className="bg-orange-500 text-white hover:bg-orange-600 transition-colors py-3 px-8 rounded-lg shadow-md text-sm md:text-base">
                  Explore Now
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
              <Image
                // src={industryName?.path || "/image/yyy.png"}
                src="/image/aboutt.avif"
                alt="Hero Section"
                className="w-full max-w-md md:max-w-lg rounded-lg shadow"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>

        {/* tabel of content section */}
        <div>
          {/* <TableOfServices /> */}
          <TableofSolution />
        </div>

        {/* Client & Testimonials */}

        <div>
          <Testimonial />
        </div>

        {/* Resource Section */}
      </div>

      {/* this is FQA SECTION  */}
      <div>
        <SolutionFaq />
      </div>

      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SolutionSection;

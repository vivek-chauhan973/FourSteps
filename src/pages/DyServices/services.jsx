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
// const getIndustry = async (item) => {
//   return await (
//     await fetch(
//       `/api/industry/get-industry?industryName=${item?.split("-")?.join(" ")}`,
//       { method: "GET" }
//     )
//   ).json();
// };
const DyServices = () => {
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

        <div className="bg-gradient-to-r md:mt-0 mt-10 from-blue-50 to-purple-50 shadow-lg py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row ">
            {/* Left Content */}
            <div className=" md:w-1/2">
              <h1 className="text-2xl md:text-[36px] font-semibold leading-tight mb-5">
                {/* {industryName?.title || "IT Solution for Oil & Gas Companies"} */}
                Heading of services
              </h1>
              <p className="text-sm md:text-lg ">
                {/* {industryName?.description ||
                  "IT Solution for Oil & Gas Companies description....."} */}
                some description of services ..... Each service e.g.,
                "Underwriting", "Billing" will display its title, icon, and a
                list of points associated with it. The component will print out
                the data properly and show the items in a clean, card-like
                structure. Let me know if you need more adjustments!
              </p>

              <div className=" md:mt-16 hidden">
                <button className="border border-orange-500 bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all py-2 px-6 rounded-lg text-sm md:text-base">
                  Explore Now
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <Image
                // src={industryName?.path || "/image/yyy.png"}
                src="/image/ab.webp"
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
          <TableOfServices />
        </div>

        {/* Client & Testimonials */}

        <div>
          <Testimonial />
        </div>

        {/* Resource Section */}
      </div>

      {/* this is FQA SECTION  */}
      <div>
        <ServiceFaq />
      </div>

      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DyServices;

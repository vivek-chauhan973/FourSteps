import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Image from "next/image";
import { Footer } from "@/Component/Footer/Footer";
import Nav from "@/Component/Header/Nav";
import TableOfContent from "@/Component/Industry/TableOfContent";
import IndustryFaq from "@/Component/Industry/IndustryFaq";
import { useRouter } from "next/router";
const getIndustry = async (item) => {
  return await (
    await fetch(
      `/api/industry/get-industry?industryName=${item?.split("-")?.join(" ")}`,
      { method: "GET" }
    )
  ).json();
};
const Travel = () => {
  const router = useRouter();

  const { industry } = router?.query;
  const [industryName, setIndustryName] = useState({});

  useEffect(() => {
    if (industry) {
      getIndustry(industry).then((res) => {
        setIndustryName(res?.data || {});
      });
    }
  }, [industry]);

  console.log("itineary all data one by one industry ---==> ", industryName);
  return (
    <div>
      {/* headres */}
      <div className=" z-10">
        <Nav />
      </div>

      <div className="font-sans">
        {/* hero section */}
        <div className="flex   h-[90vh] justify-center items-center w-full bg-[#F8FAFC]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:mt-0  mt-24 gap-8 px-6 sm:px-10 shadow-lg">
            {/* Content Section */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h2 className="text-xl sm:text-2xl  md:text-3xl font-semibold text-gray-800">
                {industryName?.title || "IT Solution for Oil & Gas Companies"}
              </h2>
              <p className="text-gray-600  my-4 text-sm sm:text-base leading-relaxed">
                {industryName?.description}
              </p>
            </div>

            {/* Image Section */}
            <div className=" flex w-44 justify-center items-center">
              <Image
                src={industryName?.path || "/image/yyy.png"}
                alt="About Us"
                className="w-full md:w-[40] rounded object-cover"
                height={500} // Reduce height for smaller devices
                width={500} // Adjust width for responsiveness
              />
            </div>
          </div>
        </div>

        {/* tabel of content section */}
        <div>
          <TableOfContent industryName={industryName} />
        </div>

        {/* Client & Testimonials */}

        <div>
          <Testimonial />
        </div>

        {/* Resource Section */}
      </div>

      {/* this is FQA SECTION  */}
      <div>
        <IndustryFaq faqData={industryName?.faq?.faq} />
      </div>

      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Travel;

// <div className="flex justify-center items-center w-full bg-[#F8FAFC] py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4 sm:px-8 md:px-12 shadow-lg rounded-lg bg-white">
//             {/* Content Section */}
//             <div className="flex flex-col justify-center text-center md:text-left space-y-4">
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
//                 {industryName?.title || "IT Solution for Oil & Gas Companies"}
//               </h2>
//               <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
//                 {industryName?.description ||
//                   "Your trusted partner for innovative and scalable IT solutions tailored to the Oil & Gas industry."}
//               </p>
//             </div>

//             {/* Image Section */}
//             <div className="flex justify-center md:justify-end items-center">
//               <Image
//                 src={industryName?.path || "/image/yyy.png"}
//                 alt="About Us"
//                 className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md object-cover"
//                 height={300}
//                 width={300}
//               />
//             </div>
//           </div>
//         </div>

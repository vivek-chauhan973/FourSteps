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

        <div className="bg-gradient-to-r md:mt-0 mt-10 from-blue-50 to-purple-50 shadow-lg py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row ">
            {/* Left Content */}
            <div className=" md:w-1/2">
              <h1 className="text-2xl md:text-[36px] font-semibold leading-tight mb-5">
                {industryName?.title || "IT Solution for Oil & Gas Companies"}
              </h1>
              <p className="text-sm md:text-lg ">
                {industryName?.description ||
                  "IT Solution for Oil & Gas Companies description....."}
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <Image
                src={industryName?.path || "/image/yyy.png"}
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

{
  /* <div className="flex   h-[90vh] justify-center items-center w-full bg-[#F8FAFC]">
<div className="grid grid-cols-1 md:grid-cols-2 md:mt-0  mt-24 gap-8 px-6 sm:px-10 shadow-lg">
  {/* Content Section */
}
//   <div className="flex flex-col justify-center text-center md:text-left">
//     <h2 className="text-xl sm:text-2xl  md:text-3xl font-semibold text-gray-800">
//       {industryName?.title || "IT Solution for Oil & Gas Companies"}
//     </h2>
//     <p className="text-gray-600  my-4 text-sm sm:text-base leading-relaxed">
//       {industryName?.description ||
//         "IT Solution for Oil & Gas Companies"}
//     </p>
//   </div>

//   {/* Image Section */}
//   <div className=" flex w-44 justify-center items-center">
//     <Image
//       src={industryName?.path || "/image/yyy.png"}
//       alt="About Us"
//       className="w-full md:w-[40] rounded object-cover"
//       height={500} // Reduce height for smaller devices
//       width={500} // Adjust width for responsiveness
//     />
//   </div>
// </div>
// </div> */}

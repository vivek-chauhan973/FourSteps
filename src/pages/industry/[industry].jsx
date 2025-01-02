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


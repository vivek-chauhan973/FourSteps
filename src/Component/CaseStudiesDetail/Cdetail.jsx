import { Link as ScrollLink } from "react-scroll";
import React, { useEffect, useState } from "react";

import { Footer } from "../Footer/Footer";
import CaseHero from "./CaseHero";
import ClientOverview from "./ClientOverview";
import Results from "./Results";
import Visuals from "./Visuals";
import Challenge from "./Challenge";
import Testimonial from "../Testimonial/Testimonial";
import { useRouter } from "next/router";
import CaseFaq from "./CaseFaq";
import CaseSuggest from "./CaseSuggest";
import SideForm from "../WebinarDetail/SideForm";

const getCaseStudyData = async (title) => {
  const res = await fetch(`/api/casestudy/getCaseStudy?title=${title}`);
  return await res.json();
};
const getSuggestedCaseStudyPackageData = async (industry, service) => {
  const res = await fetch(
    `/api/casestudy/suggested?industry=${industry}&service=${service}`
  );
  // return await res.json();
  const data = await res.json();
  console.log("API Response Data-->>:", data); // ✅ Check the API response in the console
  return data;
};
const Cdetail = ({ title }) => {
  const [casePackageData, setCasePackageData] = useState({});
  const [suggestedCasePackage, setSuggestedCasePackage] = useState([]);
  const [filterSuggestedCasePackage, setFilterSuggestedCasePackage] = useState(
    []
  );
  const router = useRouter();
  // Fetch data when 'title' changes
  useEffect(() => {
    if (router?.query?.detail) {
      getCaseStudyData(router?.query?.detail?.split("-")?.join(" ")).then(
        (res) => {
          console.log("CaseStudy  data fetche-->", res);
          setCasePackageData(res);
        }
      );
    }
  }, [router?.query?.detail]);

  // Log the updated data when it changes
  useEffect(() => {
    if (casePackageData) {
      getSuggestedCaseStudyPackageData(
        casePackageData?.service,
        casePackageData?.industry
      ).then((res) => {
        setSuggestedCasePackage(res?.data || []);
      });
    }
  }, [casePackageData]);
  useEffect(() => {
    if (suggestedCasePackage?.length > 0) {
      const data = suggestedCasePackage?.filter(
        (item) => item?._id !== casePackageData?._id
      );
      setFilterSuggestedCasePackage(data || []);
    }
  }, [suggestedCasePackage, casePackageData]);

  return (
    <>
      {/* hero section */}
      <div>
        <CaseHero caseHero={casePackageData} />
      </div>

      <div className="bg-[#F1F5F9]">
        <div
          id="OverviewSection"
          className="shadow-lg py-1 bg-white sticky top-20 z-30 hidden md:block"
        >
          <div className="container-wrapper gap-3 md:gap-10 xs:pb-5 md:pb-0 hide-scrollbar flex justify-start overflow-x-auto">
            <div>
              <ScrollLink
                to="productOverviewSection" // Updated to match unique ID
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                <p className="text-para cursor-pointer hover:border-b-2 border-heading py-2 hover:text-heading">
                  Client Overview
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="productHighlightSection"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                <p className="text-center w-[150px] text-para cursor-pointer hover:border-b-2 border-heading py-2 hover:text-heading">
                  challenge & Solution
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="productTechnologySection"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 border-heading py-2 hover:text-heading">
                  Rsults & Matrix
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="productScreenshot"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 border-heading py-2 hover:text-heading">
                  Visuals
                </p>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className=" md:px-0 px-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[2fr,1fr] xl:grid-cols-[2fr,1fr] gap-5">
          <div>
            {/* Overview section */}
            <div
              id="productOverviewSection"
              className="flex justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className="font-semibold py-2 text-xl">
                  Client Overview
                </div>
                <ClientOverview clientData={casePackageData} />
              </div>
            </div>
            {/* key and highlight section */}
            <div
              id="productHighlightSection"
              className="flex justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className="font-semibold py-2 text-xl">
                  Challenges & Solution
                </div>

                <Challenge ChallengeData={casePackageData} />
              </div>
            </div>
            {/* technology section */}
            <div
              id="productTechnologySection"
              className="flex justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className="font-semibold py-2 text-xl">
                  Results & Matrix
                </div>
                <Results resultData={casePackageData} />
              </div>
            </div>
            <div
              id="productScreenshot"
              className="flex justify-between mt-5 mb-3"
            >
              <div className="md:px-10">
                <div className="font-semibold py-2 text-xl">
                  Visual and ScreenShot
                </div>
                <Visuals visualData={casePackageData} />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="sticky top-[130px] z-10">
              <div className="flex gap-1 justify-center items-center"></div>
              {/* side registration form */}
              <div className="md:px-5">
                <SideForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* case suggested */}
      <div>
        <CaseSuggest filterSuggestedCasePackage={filterSuggestedCasePackage} />
      </div>

      {/* faqs and suggestetd */}
      <div>
        <CaseFaq casefaqData={casePackageData} />
      </div>
      {/* Testimonial  section here */}
      <div className=" py-5">
        <Testimonial />
      </div>
      {/* Footer section here */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Cdetail;

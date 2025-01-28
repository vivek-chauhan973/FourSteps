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

const getService = async (title) => {
  const res = await fetch(`/api/service/get-service-by-title?title=${title}`);
  // console.log("-------->>>>ffff", data);
  const data = await res.json();
  return data;
};

const DyServices = () => {
  const router = useRouter();
  const { services } = router?.query;
  console.log("service is dynamic here ---> ", services);
  const [serviceName, setserviceName] = useState({});
  useEffect(() => {
    if (services) {
      getService(services?.split("-")?.join(" ")).then((data) => {
        setserviceName(data?.data);
        // console.log("response is here 123---> ", data);
      });
    }
  }, [services]);
  console.log(
    "here is all the data o service section section---->",
    serviceName
  );

  return (
    // <div>
    //   {/* headres */}
    //   <div className=" z-10">
    //     <Nav />
    //   </div>

    //   <div className="font-sans">
    //     {/* hero section */}

    //     <div className="bg-gradient-to-r md:mt-0 mt-10 from-blue-50 to-purple-50 shadow-lg py-16 px-6 md:px-12">
    //       <div className="max-w-7xl mx-auto flex flex-col md:flex-row ">
    //         {/* Left Content */}
    //         <div className=" md:w-1/2">
    //           <h1 className="text-2xl md:text-[30px] text-heading font-semibold leading-tight mb-5">
    //             {serviceName?.title || "IT Solution for Oil & Gas Companies"}
    //           </h1>
    //           <p className="text-sm md:text-lg ">
    //             {serviceName?.description ||
    //               "IT Solution for Oil & Gas Companies description....."}
    //           </p>

    //           {/* <div className=" md:mt-16 ">
    //             <button className="border border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all py-2 px-6 rounded-lg text-sm md:text-base">
    //               Explore Now
    //             </button>
    //           </div> */}
    //         </div>

    //         {/* Right Image */}
    //         <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
    //           <Image
    //             // src={industryName?.path || "/image/yyy.png"}
    //             src="/image/ab.webp"
    //             alt="Hero Section"
    //             className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
    //             height={500}
    //             width={500}
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     {/* tabel of content section */}
    //     <div>
    //       <TableOfServices />
    //     </div>

    //     {/* Client & Testimonials */}

    //     {/* this is FQA SECTION  */}
    //     <div>
    //       <ServiceFaq />
    //     </div>
    //     <div>
    //       <Testimonial />
    //     </div>

    //     {/* Resource Section */}
    //   </div>

    //   {/* footer section */}
    //   <div>
    //     <Footer />
    //   </div>
    // </div>
    <div>
      {/* headres */}
      <div className=" z-10">
        <Nav />
      </div>

      {/* hero section */}
      <div className=" bg-background md:mt-0 mt-10 shadow-lg py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-col md:items-cente lg:flex-row ">
          {/* Left Content */}
          <div className=" lg:w-1/2 w-full lg:px-5 md:pb-5">
            <h1 className="text-2xl md:text-[30px] font-semibold text-heading leading-tight mb-4">
              {serviceName?.title || "IT Solution for Oil & Gas Companies"}
            </h1>
            <p className="text-sm md:text-base">
              {serviceName?.description ||
                "IT Solution for Oil & Gas Companies description....."}
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex  justify-center mt-6 md:mt-0">
            <Image
              src={serviceName?.path || "/image/yyy.png"}
              alt="Hero Section"
              className="w-full max-w-md md:max-w-lg rounded"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>

      {/* tabel of content section */}
      <div>
        {/* <TableOfServices /> */}
        <TableOfServices serviceName={serviceName} />
      </div>

      {/* Client & Testimonials */}

      <div>
        <Testimonial />
      </div>

      {/* this is FQA SECTION  */}
      <div>
        {/* <SolutionFaq SolutionFaq={solutionName?.faq} /> */}
        <ServiceFaq faq={serviceName?.faq?.faq} />
      </div>

      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DyServices;

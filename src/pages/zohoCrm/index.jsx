import { Footer } from "@/Component/Footer/Footer";
import React from "react";
import Testimonial from "@/Component/Testimonial/Testimonial";
import { useRouter } from "next/router";
import Nav from "@/Component/Header/Nav";

const ZohoCrm = () => {
  const router = useRouter();

  const cards = [
    {
      imgSrc: "/image/pic.jpeg",
      title: "Zoho CRM for Real-Estate",
      description:
        "CMS web development simplifies website management with user-friendly platforms, allowing easy content updates without extensive technical knowledge.",
      buttonText: "Get Started",
      route: "/servicesDetail/zohoindustry/zoho-real-estate",
    },
    {
      imgSrc: "/image/bg.jpg",
      title: "Zoho CRM For Travel Agency",
      description:
        "Custom web development tailors websites to specific business needs, offering unique designs, features, and functionality for optimal user experiences.",
      buttonText: "Get Started",
      route: "/servicesDetail/zohoindustry/zoho-travel-agency",
    },
    {
      imgSrc: "/image/pic.jpeg",
      title: "Bitrix24 Services",
      description:
        "An e-commerce store allows businesses to sell products online, offering customers convenient shopping, secure payments, and fast delivery services.",
      buttonText: "Get Started",
      route: "/servicesDetail/zohoindustry/bitrix24",
    },
    {
      imgSrc: "/image/pic.jpeg",
      title: "Salesforce Services",
      description:
        "An e-commerce store allows businesses to sell products online, offering customers convenient shopping, secure payments, and fast delivery services.",
      buttonText: "Get Started",
      route: "/servicesDetail/zohoindustry/salseforce",
    },
  ];

  const handleButtonClick = (route) => {
    router.push(route);
  };

  return (
    <div className="container">
      <div className=" fixed w-full z-[19] top-0">
        <Nav />
      </div>

      <div
        className="relative w-full h-80 sm:h-96 lg:h-[32rem] flex items-center justify-center bg-cover object-cover text-white"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30549.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center leading-7 pb-2 items-center">
            <div className="w-[2.8px] h-6 bg-orange-500 mr-2"></div>
            <h2 className="text-md">Zoho Industry & Other CRM Services</h2>
          </div>
          <h1 className="text-lg lg:text-4xl font-bold md:mb-1">
            Zoho: Driving industry success through powerful CRM solutions{" "}
          </h1>
        </div>
      </div>

      {/* heading section */}
      <div className="px-5 py-8 sm:px-5 md:px-20">
        <div className="flex pb-2">
          <div className="w-[2.8px] h-6 bg-orange-400 mr-2"></div>
          <h2 className="text-md">Case Studies</h2>
        </div>
        <h1 className="text-2xl font-semibold ">
          My Recent
          <span className="text-orange-500"> Zoho Industry & CRM area</span>
        </h1>
        <p className="max-w-xl text-sm italic mt-3 items-center">
          In today s competitive landscape, Zoho CRM stands out as the ultimate
          solution for industry professionals seeking to optimize their customer
          management strategies. Offering a suite of customizable features, Zoho
          CRM enables businesses to automate workflows, gain deeper customer
          insights, and foster long-lasting relationships that propel growth and
          success.
        </p>
      </div>

      {/* service section */}
      <div className="container mx-auto px-5 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-5 md:px-20 py-2 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600 line-clamp-3">{card.description}</p>

              
                <button
                  
                  className=" mt-5 text-sm px-3 py-2 rounded-full text-white bg-gradient-to-r from-orange-500 to-red-500"
                  onClick={() => handleButtonClick(card.route)}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* testimonial section */}
      <div className="mt-4">
        <Testimonial />
      </div>
      {/* footer section */}
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default ZohoCrm;

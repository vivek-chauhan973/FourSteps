import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ChooseUs = () => {
  // const [expandedIndex, setExpandedIndex] = useState(null);

  // const handleToggle = (i) => {
  //     setExpandedIndex(expandedIndex === i ? null : i);
  // };

  // const faqs = [
  //     {
  //         question: 'What services does Four Steps Digital Consulting Pvt Ltd offer?',
  //         answer: `We provide a range of services, including Zoho consulting to optimize your business processes,
  //            HubSpot consulting to enhance your customer relationship management,
  //            and digital marketing strategies to boost your online presence.`
  //     },
  //     {
  //         question: 'How can Zoho consulting benefit my business?',
  //         answer: `Our Zoho consulting services help you leverage Zoho’s powerful suite of tools
  //            for efficient customer relationship management, process automation, and data analytics,
  //            resulting in improved productivity and better decision-making.`
  //     },
  //     {
  //         question: 'What is the significance of HubSpot consulting for my company?',
  //         answer: `Back when you keep the claims low. Be first to learn insurance
  //            can save you thousands each year and get notified`
  //     },

  // ];

  return (
    <>
      {/* <div className='container'>
            <div className="md:flex md:p-7 p-5">
                <div className="md:w-1/3 rounded-md md:pl-5 md:block hidden">
                    <img
                        src="https://t4.ftcdn.net/jpg/01/41/52/31/360_F_141523101_8umyxdkpKIqFgVImRhcWNwH9Gg5TBu29.jpg"
                        alt=""
                        className="w-full h-[320px] rounded-md object-cover"
                    />
                </div>
                <div className="md:w-2/3 w-full h-auto md:pl-5 md:p-0 py-5">
                    <div className='flex justify-between items-center pb-5 md:px-10'>
                        <h2 className="text-3xl font-semibold mb-2 capitalize">Why choose us?</h2>
                    </div>
                    <div className="w-full mx-auto md:px-10 px-0">
                        {faqs.map((faq, i) => (
                        <div key={i} className="mb-3">
                            <div onClick={() => handleToggle(i)}
                                className="w-full md:h-14 h-16 flex justify-between items-center px-5 py-2 bg-[#f3f3f3] rounded-md hover:bg-gray-200 cursor-pointer">
                                <p className="md:text-[14px] text-sm capitalize font-semibold mr-1">{faq.question}</p>
                                <span>{expandedIndex === i ? '-' : '+'}</span>
                            </div>
                            <div className={`overflow-hidden transition-max-height duration-700 ease-in-out 
                                ${ expandedIndex === i ? 'max-h-screen' : 'max-h-0' }`}>
                                <div className="py-4 xl:px-10 px-7  text-sm">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>              
                </div>
                <div className="md:hidden block w-full rounded-md">
                    <img
                        src="https://t4.ftcdn.net/jpg/01/41/52/31/360_F_141523101_8umyxdkpKIqFgVImRhcWNwH9Gg5TBu29.jpg"
                        alt=""
                        className="w-full h-[320px] rounded-md object-cover"
                    />
                </div>
            </div>
        </div> */}
      {/* ====================================== */}
      <div className="container mt-5">
        <div className="md:flex md:px-10 py-10 px-5 md:mt-5">
          <div className="md:w-1/2 rounded-md md:pl-5 md:block">
            <img
              src="https://t4.ftcdn.net/jpg/01/41/52/31/360_F_141523101_8umyxdkpKIqFgVImRhcWNwH9Gg5TBu29.jpg"
              alt=""
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full h-auto md:pl-5 md:p-0 py-5 md:mt-0 mt-5">
            <div className="md:px-10 mb-5">
              <h2 className="text-3xl font-semibold mb-3 capitalize">
                <span className="">Why choose us</span>?
              </h2>
              <p>
                Trying to win over your customers with result driven digital
                strategies, choose{" "}
                <span className="text-primary">Four Steps Digital</span>
              </p>
            </div>
            <div className="w-full  mx-auto md:px-10 px-0">
              <ul>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Customer-centric approach in business.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Boost ROI and Brand Awareness.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  End-to-end support for services.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Build and Improve Brand reputation.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Track results through performance tracking.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Technology-driven services.
                </li>
                <li className="mb-2 flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" mt-1 text-primary"
                  />
                  Affordable pricing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;

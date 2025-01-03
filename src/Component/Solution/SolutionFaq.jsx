import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SolutionFaq = () => {
  // Example usage of SolutionFaq with dynamic data
  const faqData = [
    {
      title: "What is your refund policy?",
      information: "We offer a 30-day money-back guarantee.",
      answer:
        "If you are not satisfied with our product, you can request a full refund within 30 days of purchase.",
    },
    {
      title: "How can I contact support?",
      information: "You can reach our support team via email or chat.",
      answer:
        "For any inquiries, please contact support@example.com or chat with us directly on our website.",
    },
    {
      title: "Do you offer discounts?",
      information: "Yes, we offer seasonal discounts.",
      answer:
        "Our discounts vary based on the time of year and ongoing promotions. Keep an eye on our website for updates.",
    },
    {
      title: "Do you offer discounts to all product?",
      information: "Yes, we offer seasonal discounts.",
      answer:
        "Our discounts vary based on the time of year and ongoing promotions. Keep an eye on our website for updates.",
    },
  ];
  const [openIndices, setOpenIndices] = useState([]);
  const [isAllOpen, setIsAllOpen] = useState(false);

  // Toggle specific section
  const handleToggle = (i) => {
    if (openIndices.includes(i)) {
      setOpenIndices(openIndices.filter((index) => index !== i));
    } else {
      setOpenIndices([...openIndices, i]);
    }
  };

  // Expand all sections
  const handleExpandAll = () => {
    setOpenIndices(faqData.map((_, i) => i));
    setIsAllOpen(true);
  };

  // Hide all sections
  const handleHideAll = () => {
    setOpenIndices([]);
    setIsAllOpen(false);
  };

  return (
    <div>
      <div className="bg-white">
        {/* section 1 */}
        <div className="flex-col text-center md:pt-10 pb-2 md:pl-10 px-5 w-full">
          <h2 className="text-xl font-semibold text-primary text-center mb-3">
            FAQS
          </h2>
          <p className="text-xl font-bold">
            Frequently Asked Questions for the Industry
          </p>
        </div>
        <div className="md:w-3/4 max-w-4xl mx-auto pb-5">
          <div className="flex justify-end items-center pb-5 md:pr-0 pr-5">
            <button
              className="underline underline-offset-[6px] text-sm px-2 py-1.5 hover:bg-slate-100"
              onClick={isAllOpen ? handleHideAll : handleExpandAll}
            >
              {isAllOpen ? "Hide all" : "Expand all"}
            </button>
          </div>
          <div className="w-full mx-auto md:px-0 px-5">
            {faqData?.length > 0 &&
              faqData.map((faq, i) => (
                <div key={i} className="mb-3">
                  <div
                    onClick={() => handleToggle(i)}
                    className="w-full md:h-14 h-16 flex justify-between items-center px-5 py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
                  >
                    <p className="md:text-[15px] text-[13px] capitalize md:first-line:font-semibold font-medium mr-1">
                      {faq.title}
                    </p>

                    <span>
                      {openIndices.includes(i) ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-100 ease-in-out ${
                      openIndices.includes(i) ? "max-h-[1000px]" : "max-h-0"
                    }`}
                    style={{
                      maxHeight: openIndices.includes(i) ? "1000px" : "0px",
                    }}
                  >
                    <div className="py-4 xl:px-10 px-7 text-xs md:text-sm">
                      <p
                        dangerouslySetInnerHTML={{ __html: faq?.information }}
                      />
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionFaq;
// // Example usage of SolutionFaq with dynamic data
// const faqData = [
//   {
//     title: "What is your refund policy?",
//     information: "We offer a 30-day money-back guarantee.",
//     answer:
//       "If you are not satisfied with our product, you can request a full refund within 30 days of purchase.",
//   },
//   {
//     title: "How can I contact support?",
//     information: "You can reach our support team via email or chat.",
//     answer:
//       "For any inquiries, please contact support@example.com or chat with us directly on our website.",
//   },
//   {
//     title: "Do you offer discounts?",
//     information: "Yes, we offer seasonal discounts.",
//     answer:
//       "Our discounts vary based on the time of year and ongoing promotions. Keep an eye on our website for updates.",
//   },
// ];

// const App = () => {
//   return <SolutionFaq faqData={faqData} />;
// };

// export default App;

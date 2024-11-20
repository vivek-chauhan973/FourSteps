// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";
// import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

// const WebinarFaqs = ({ faqData }) => {
//   const [openIndices, setOpenIndices] = useState([]);
//   const [isAllOpen, setIsAllOpen] = useState(false);

//   // Toggle specific section
//   const handleToggle = (i) => {
//     if (openIndices.includes(i)) {
//       setOpenIndices(openIndices.filter((index) => index !== i));
//     } else {
//       setOpenIndices([...openIndices, i]);
//     }
//   };

//   // Expand all sections
//   const handleExpandAll = () => {
//     setOpenIndices(faqs.map((_, i) => i));
//     setIsAllOpen(true);
//   };

//   // Hide all sections
//   const handleHideAll = () => {
//     setOpenIndices([]);
//     setIsAllOpen(false);
//   };
//   console.log("faq is here ---> ", faqData);

//   const webinarFaq = faqData?.webinarFaq || {};

//   const faqs = [
//     {
//       question: "What is this webinar about?",
//       answer:
//         "This webinar covers [describe the main topics and objectives of the webinar briefly].",
//     },
//     {
//       question: "How can I register for the webinar?",
//       answer:
//         "You can register by provide the registration steps, link, or contact information].",
//     },
//     {
//       question: "Is there a fee to attend the webinar?",
//       answer:
//         "The webinar is [state if free or mention any costs involved and how to pay].",
//     },
//     {
//       question: "Will I receive a certificate after the webinar?",
//       answer:
//         "Yes, participants will receive a certificate upon completion of the webinar.",
//     },
//     {
//       question: "What software do I need to join?",
//       answer:
//         "You will need [mention any specific software or platform required, such as Zoom or Microsoft Teams].",
//     },
//     {
//       question: "Can I access the recording later?",
//       answer:
//         "The recording will be available [mention if and where the recording will be accessible].",
//     },
//   ];

//   // for suggested data

//   const profiles = [
//     {
//       id: 1,
//       title: "Title Here",
//       subtitle: "Subtitle Here",
//       description:
//         "Description goes here. A short summary or bio about the person or event.",
//       name: "ABCD.......",
//       date: "2024-11-04",
//       time: "10:00 AM",
//       imageUrl: "/image/try.jpeg",
//       socialLinks: [
//         {
//           platform: "Facebook",
//           url: "https://facebook.com",
//           icon: "https://via.placeholder.com/24",
//         },
//         {
//           platform: "Twitter",
//           url: "https://twitter.com",
//           icon: "https://via.placeholder.com/24",
//         },
//         {
//           platform: "LinkedIn",
//           url: "https://linkedin.com",
//           icon: "https://via.placeholder.com/24",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Title Here",
//       subtitle: "Subtitle Here",
//       description:
//         "Description goes here. A short summary or bio about the person or event.",
//       name: "ABCD.......",
//       date: "2024-11-04",
//       time: "10:00 AM",
//       imageUrl: "/image/try.jpeg",
//       socialLinks: [
//         {
//           platform: "Facebook",
//           url: "https://facebook.com",
//           icon: "https://via.placeholder.com/24",
//         },
//         {
//           platform: "Twitter",
//           url: "https://twitter.com",
//           icon: "https://via.placeholder.com/24",
//         },
//         {
//           platform: "LinkedIn",
//           url: "https://linkedin.com",
//           icon: "https://via.placeholder.com/24",
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "Title Here",
//       subtitle: "Subtitle Here",
//       description:
//         "Description goes here. A short summary or bio about the person or event.",
//       name: "AABCD.......",
//       date: "2024-11-04",
//       time: "10:00 AM",
//       imageUrl: "/image/try.jpeg",

//       socialLinks: [
//         {
//           platform: "Facebook",
//           url: "https://facebook.com",
//           icon: "https://via.placeholder.com/24",
//         },
//         {
//           platform: "Twitter",
//           url: "https://twitter.com",
//           icon: "https://via.placeholder.com/24",
//         },
//         {
//           platform: "LinkedIn",
//           url: "https://linkedin.com",
//           icon: "https://via.placeholder.com/24",
//         },
//       ],
//     },
//     // Add more profile objects here if needed
//   ];

//   const getIcon = (platform) => {
//     switch (platform) {
//       case "Facebook":
//         return <FaFacebook size={24} />;
//       case "Twitter":
//         return <FaTwitter size={24} />;
//       case "LinkedIn":
//         return <FaLinkedin size={24} />;
//       default:
//         return null;
//     }
//   };
//   return (
//     <>
//       <div className="container py-5">
//         <div className="bg-white">
//           {/* section 1 */}
//           <div className="flex-col  text-center md:pt-10 pb-2 md:pl-10 px-5 w-full">
//             <p className="md:text-2xl  text-lg font-semibold">
//               Frequently Asked Questions (FAQS) for the Webinar
//             </p>
//           </div>
//           <div className=" md:w-3/4 max-w-4xl mx-auto pb-5">
//             <div className="flex justify-end items-center pb-5 md:pr-0 pr-5">
//               <button
//                 className="underline underline-offset-[6px] text-sm px-2 py-1.5  hover:bg-slate-100 "
//                 onClick={isAllOpen ? handleHideAll : handleExpandAll}
//               >
//                 {isAllOpen ? "Hide all" : "Expand all"}
//               </button>
//             </div>
//             <div className="w-full mx-auto md:px-0 px-5">
//               {faqs.map((faq, i) => (
//                 <div key={i} className="mb-3">
//                   <div
//                     onClick={() => handleToggle(i)}
//                     className="w-full md:h-14 h-16 flex justify-between items-center   px-5 py-2 bg-gray-100 rounded  hover:bg-gray-200 cursor-pointer"
//                   >
//                     <p className="md:text-[15px] text-[14px] capitalize md:first-line:font-semibold font-medium mr-1 ">
//                       {faq.question}
//                     </p>

//                     <span>
//                       {openIndices.includes(i) ? (
//                         <FontAwesomeIcon icon={faChevronUp} />
//                       ) : (
//                         <FontAwesomeIcon icon={faChevronDown} />
//                       )}
//                     </span>
//                   </div>
//                   <div
//                     className={`overflow-hidden transition-max-height   duration-700 ease-in-out
//                                 ${
//                                   openIndices.includes(i)
//                                     ? "max-h-[1000px]"
//                                     : "max-h-0"
//                                 }`}
//                     style={{
//                       maxHeight: openIndices.includes(i) ? "1000px" : "0px",
//                     }}
//                   >
//                     <div className="py-4 xl:px-10 px-7 text-xs md:text-sm">
//                       {faq.answer}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/*  suggested section of webinar  */}

//         {/* Social Links */}
//         <div className="md:px-7">
//           <div className=" text-2xl pl-5 pb-2 font-semibold">
//             Suggested Webinars
//           </div>
//           <div className="grid grid-cols-1 px-5 sm:grid-cols-2 bg-gray-50 py-3 md:grid-cols-3 gap-6">
//             {profiles.map((profile) => (
//               <div
//                 key={profile.id}
//                 className="flex flex-col items-center bg-white  px-5 py-5  rounded-lg shadow-md"
//               >
//                 {/* Profile Image */}
//                 <div className="relative w-full h-48 mb-2 overflow-hidden rounded-lg">
//                   <Image
//                     className="object-cover"
//                     src={profile.imageUrl}
//                     alt="Profile Image"
//                     layout="fill"
//                   />
//                 </div>

//                 {/* Title and Subtitle */}
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   {profile.title}
//                 </h2>
//                 <h3 className="text-sm text-gray-500 mb-2">
//                   {profile.subtitle}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-700 line-clamp-3 text-center text-sm mb-3">
//                   {profile.description}
//                 </p>

//                 {/* Name */}
//                 <h4 className="text-lg font-semibold text-gray-900">
//                   {profile.name} optional
//                 </h4>

//                 {/* Time and Date */}
//                 <p className="text-gray-500 text-sm mt-2">
//                   Date: {profile.date}, Time: {profile.time}
//                 </p>

//                 {/* Social Links */}
//                 <div className="flex space-x-4 mt-4">
//                   {profile.socialLinks.map((link, index) => (
//                     <a
//                       key={index}
//                       href={link.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-600 hover:text-blue-500"
//                     >
//                       {getIcon(link.platform)}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WebinarFaqs;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const WebinarFaqs = ({ faqData }) => {
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
    setOpenIndices(faqs.map((_, i) => i));
    setIsAllOpen(true);
  };

  // Hide all sections
  const handleHideAll = () => {
    setOpenIndices([]);
    setIsAllOpen(false);
  };

  const webinarFaq = faqData?.webinarFaq || {};
  const faqs = webinarFaq.questions || [];

  // Profile data
  const profiles = [
    {
      id: 1,
      title: "Title Here",
      subtitle: "Subtitle Here",
      description:
        "Description goes here. A short summary or bio about the person or event.",
      name: "ABCD.......",
      date: "2024-11-04",
      time: "10:00 AM",
      imageUrl: "/image/try.jpeg",
      socialLinks: [
        { platform: "Facebook", url: "https://facebook.com" },
        { platform: "Twitter", url: "https://twitter.com" },
        { platform: "LinkedIn", url: "https://linkedin.com" },
      ],
    },
    {
      id: 2,
      title: "Title Here",
      subtitle: "Subtitle Here",
      description:
        "Description goes here. A short summary or bio about the person or event.",
      name: "ABCD.......",
      date: "2024-11-04",
      time: "10:00 AM",
      imageUrl: "/image/try.jpeg",
      socialLinks: [
        { platform: "Facebook", url: "https://facebook.com" },
        { platform: "Twitter", url: "https://twitter.com" },
        { platform: "LinkedIn", url: "https://linkedin.com" },
      ],
    },
    {
      id: 3,
      title: "Title Here",
      subtitle: "Subtitle Here",
      description:
        "Description goes here. A short summary or bio about the person or event.",
      name: "AABCD.......",
      date: "2024-11-04",
      time: "10:00 AM",
      imageUrl: "/image/try.jpeg",
      socialLinks: [
        { platform: "Facebook", url: "https://facebook.com" },
        { platform: "Twitter", url: "https://twitter.com" },
        { platform: "LinkedIn", url: "https://linkedin.com" },
      ],
    },
  ];

  // Get social media icon
  const getIcon = (platform) => {
    switch (platform) {
      case "Facebook":
        return <FaFacebook size={24} />;
      case "Twitter":
        return <FaTwitter size={24} />;
      case "LinkedIn":
        return <FaLinkedin size={24} />;
      default:
        return null;
    }
  };

  if (!faqData?.webinarFaq) {
    return <div className=" text-center py-2">FAQS Loading...</div>; // Show loading if data is not available
  }

  return (
    <>
      <div className="container py-5">
        {/* Suggested Webinars */}
        <div className="md:px-7">
          <div className="text-2xl pl-5 pb-2 font-semibold">
            Suggested Webinars
          </div>
          <div className="grid grid-cols-1 px-5 sm:grid-cols-2 bg-gray-50 py-3 md:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="flex flex-col items-center bg-white px-5 py-5 rounded-lg shadow-md"
              >
                {/* Profile Image */}
                <div className="relative w-full h-48 mb-2 overflow-hidden rounded-lg">
                  <Image
                    className="object-cover"
                    src={profile.imageUrl}
                    alt="Profile Image"
                    layout="fill"
                  />
                </div>

                {/* Title and Subtitle */}
                <h2 className="text-lg font-semibold text-gray-900">
                  {profile.title}
                </h2>
                <h3 className="text-sm text-gray-500 mb-2">
                  {profile.subtitle}
                </h3>

                {/* Description */}
                <p className="text-gray-700 line-clamp-3 text-center text-sm mb-3">
                  {profile.description}
                </p>

                {/* Name */}
                <h4 className="text-lg font-semibold text-gray-900">
                  {profile.name}
                </h4>

                {/* Time and Date */}
                <p className="text-gray-500 text-sm mt-2">
                  Date: {profile.date}, Time: {profile.time}
                </p>

                {/* Social Links */}
                {profile.socialLinks?.length > 0 && (
                  <div className="flex space-x-4 mt-4">
                    {profile.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        {getIcon(link.platform)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white">
          {/* section 1 */}
          <div className="flex-col text-center md:pt-10 pb-2 md:pl-10 px-5 w-full">
            <p className="md:text-2xl text-lg font-semibold">
              Frequently Asked Questions (FAQS) for the Webinar
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
              {faqs.map((faq, i) => (
                <div key={i} className="mb-3">
                  <div
                    onClick={() => handleToggle(i)}
                    className="w-full md:h-14 h-16 flex justify-between items-center px-5 py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
                    aria-expanded={openIndices.includes(i)}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <p className="md:text-[15px] text-[14px] capitalize md:first-line:font-semibold font-medium mr-1">
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
                    id={`faq-answer-${i}`}
                    className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
                      openIndices.includes(i) ? "max-h-[1000px]" : "max-h-0"
                    }`}
                    style={{
                      maxHeight: openIndices.includes(i) ? "1000px" : "0px",
                    }}
                  >
                    <div className="py-4 xl:px-10 px-7 text-xs md:text-sm">
                      <div
                        dangerouslySetInnerHTML={{ __html: faq?.information }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebinarFaqs;

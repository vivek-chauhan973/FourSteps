// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";
// import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

// const DemoFaqs = () => {
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

//   const faqs = [
//     {
//       question: "What is this Videos about?",
//       answer:
//         "This Videos covers [describe the main topics and objectives of the Videos briefly].",
//     },
//     {
//       question: "How can I register for the Videos?",
//       answer:
//         "You can register by provide the registration steps, link, or contact information].",
//     },
//     {
//       question: "Is there a fee to attend the Videos?",
//       answer:
//         "The Videos is [state if free or mention any costs involved and how to pay].",
//     },
//     {
//       question: "Will I receive a certificate after the Videos?",
//       answer:
//         "Yes, participants will receive a certificate upon completion of the Videos.",
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

//       {/*  suggested section of Product  */}

//         {/* Social Links */}
//         <div className="md:px-7">
//           <div className=" text-2xl pl-5 pb-2 font-semibold">
//             Suggested Videos
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

//         <div className="bg-white">
//           {/* section 1 */}
//           <div className="flex-col  text-center md:pt-10 pb-2 md:pl-10 px-5 w-full">
//             <p className="md:text-2xl  text-lg font-semibold">
//               Frequently Asked Questions (FAQS) for the Videos
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

//         {/*  suggested section of Videos  */}

//       </div>
//     </>
//   );
// };

// export default DemoFaqs;


import React, { useRef,useState, useEffect } from "react";
import Image from "next/image";
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// import React, { useState } from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const DemoFaqs = () => {





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

  const faqs = [
    {
      question: "What is this Videos about?",
      answer:
        "This Videos covers [describe the main topics and objectives of the Videos briefly].",
    },
    {
      question: "How can I register for the Videos?",
      answer:
        "You can register by provide the registration steps, link, or contact information].",
    },
    {
      question: "Is there a fee to attend the Videos?",
      answer:
        "The Videos is [state if free or mention any costs involved and how to pay].",
    },
    {
      question: "Will I receive a certificate after the Videos?",
      answer:
        "Yes, participants will receive a certificate upon completion of the Videos.",
    },
    {
      question: "What software do I need to join?",
      answer:
        "You will need [mention any specific software or platform required, such as Zoom or Microsoft Teams].",
    },
    {
      question: "Can I access the recording later?",
      answer:
        "The recording will be available [mention if and where the recording will be accessible].",
    },
  ];

  const suggestedBlog = [
    {
      img: "/image/ab.webp",
      industry: "zoho ",
      title: "Best app for business & consulting",
      desc: `From dedicated customer support to itinerary tracking to spend management tools, 
            today’s corporate travel tools take the hard work out of the business planning process.`,
    },
    {
      img: "/image/ab.webp",
      industry: "web dev ",
      title: "Best app for business & consulting",
      desc: `From dedicated customer support to itinerary tracking to spend management tools, 
            today’s corporate travel tools take the hard work out of the business planning process.`,
    },
    {
      img: "/image/ab.webp",
      industry: " abc",
      title: "Best app for business & consulting",
      desc: `From dedicated customer support to itinerary tracking to spend management tools, 
            today’s corporate travel tools take the hard work out of the business planning process.`,
    },
    {
      img: "/image/ab.webp",
      industry: " hubspot",
      title: "Best app for business & consulting",
      desc: `From dedicated customer support to itinerary tracking to spend management tools, 
            today’s corporate travel tools take the hard work out of the business planning process.`,
    },
    {
      img: "/image/ab.webp",
      industry: " machine learning ",
      title: "Best app for business & consulting",
      desc: `From dedicated customer support to itinerary tracking to spend management tools, 
            today’s corporate travel tools take the hard work out of the business planning process.`,
    },
  ];
  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Enable mouse scroll for small devices
        carouselRef.current.style.overflowX = "scroll";
      } else {
        // Disable mouse scroll for medium and larger devices
        carouselRef.current.style.overflowX = "hidden";
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (<>

    <div className="md:mt-9 mt-4 bg-slate-100">
      {suggestedBlog?.length > 0 && (
        <div className="container-wrapper py-7">
          <p className="md:text-[25px] text-xl font-medium mb-1 capitalize">
            Suggested demos & Videos
          </p>
        </div>
      )}
      <div className="carousel-container relative container-wrapper ">
        <div className="carousel gap-5" ref={carouselRef}>
          {suggestedBlog?.length > 0 &&
            suggestedBlog?.map((items, i) => {
              return (
                <div
                  key={i}
                  className="carousel-item w-60 md:w-80 mb-11  rounded-md"
                >
                  <div className="shadow-md rounded-lg overflow-hidden">
                    <div className="relative">
                      <div className=" w-full h-52">
                        <Image
                          className=" relative  object-cover "
                          layout="fill"
                          src={items?.img}
                          alt="images"
                        />
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3 px-3 pt-3 pb-5 bg-white">
                      <div className="w-full md:h-7 h-8">
                        <p className="md:text-lg text-base font-semibold">
                          {items?.title}
                        </p>
                      </div>
                      <div className="flex gap-3 w-full justify-between">
                        <p className="font-semibold md:text-base text-sm text-black">
                         industry: {items?.industry}
                        </p>
                        {/* <p className="font-semibold md:text-base text-sm text-black w-[80%]">Started From</p> */}
                      </div>
                      <p className="text-para line-clamp-3 mb-4">
                        {items?.desc}
                      </p>
                      <div>
                        <div className="flex items-center justify-center">
                          <a
                            href="#"
                            className="badge text-sm px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-orange-500 to-red-500"
                          >
                            Know More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* end is here code */}
        </div>
        {suggestedBlog?.length > 0 && (
          <div className=" hidden md:block absolute top-2/4 -translate-y-[80px] justify-between w-full">
            <div className=" justify-between flex pl-2 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollPrev}
                className="h-5 w-5 p-2 rounded-full  bg-black/50 hover:bg-black text-white rotate-180"
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollNext}
                className="h-5 w-5 p-2 rounded-full bg-black/50 hover:bg-black text-white"
              />
            </div>
          </div>
        )}
      </div>
    </div>
{/*  faq sections here */}
    <div className="bg-white">
          {/* section 1 */}
          <div className="flex-col  text-center md:pt-10 pb-2 md:pl-10 px-5 w-full">
            <p className="md:text-2xl  text-lg font-semibold">
              Frequently Asked Questions (FAQS) for the Videos
            </p>
          </div>
          <div className=" md:w-3/4 max-w-4xl mx-auto pb-5">
            <div className="flex justify-end items-center pb-5 md:pr-0 pr-5">
              <button
                className="underline underline-offset-[6px] text-sm px-2 py-1.5  hover:bg-slate-100 "
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
                    className="w-full md:h-14 h-16 flex justify-between items-center   px-5 py-2 bg-gray-100 rounded  hover:bg-gray-200 cursor-pointer"
                  >
                    <p className="md:text-[15px] text-[14px] capitalize md:first-line:font-semibold font-medium mr-1 ">
                      {faq.question}
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
                    className={`overflow-hidden transition-max-height   duration-700 ease-in-out
                                ${
                                  openIndices.includes(i)
                                    ? "max-h-[1000px]"
                                    : "max-h-0"
                                }`}
                    style={{
                      maxHeight: openIndices.includes(i) ? "1000px" : "0px",
                    }}
                  >
                    <div className="py-4 xl:px-10 px-7 text-xs md:text-sm">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  </>
  );
};

export default DemoFaqs;

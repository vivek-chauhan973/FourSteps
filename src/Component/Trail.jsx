// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Trail = () => {
//   const [zoomOut, setZoomOut] = useState(false); // Track the zoom-out state

//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration in milliseconds
//       once: true, // Animation occurs only once when element comes into view
//     });
//   }, []);

//   // Dynamic data
//   const data = [
//     {
//       title: "Zoconut",
//       content: `"What really turned things around for our brand was when we started working with Zaptiv. Their SEO and Creative Design expertise really helped to keep our online visibility and engagement at strong multipliers. Their team is creative, responsive, and always goes overboard. We've seen great development since partnering with them and can't be happier with the results."`,
//       imageUrl: "/image/m1.avif",
//       name: "Paras Garg",
//       designation: "Co-Founder Zoconut",
//     },
//     {
//       title: "ParleG",
//       content: `"Thanks a lot! What really   turned things around for our brand was when we started working with Zaptiv. Their SEO and Creative Design expertise really helped to keep our online visibility and engagement at strong multipliers. Their team is creative, responsive, and always goes overboard. We've seen great development since partnering with them and can't be happier with the results."`,
//       imageUrl: "/image/m2.avif",
//       name: "Rakesh",
//       designation: "CEO ParleG",
//     },
//     {
//       title: "Xyz",
//       content: `"Thanks a lot! What really   turned things around for our brand was when we started working with Zaptiv. Their SEO and Creative Design expertise really helped to keep our online visibility and engagement at strong multipliers. Their team is creative, responsive, and always goes overboard. We've seen great development since partnering with them and can't be happier with the results."`,
//       imageUrl: "/image/m3.avif",
//       name: "Rakesh",
//       designation: "CEO Abcd ",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0); // Track which data item is displayed

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Cycle through the data array
//       setZoomOut(false); // Reset zoom-out effect before starting the next one
//       setTimeout(() => {
//         setZoomOut(true); // Trigger the zoom-out effect after 2 seconds
//       }, 2000); // Start zoom-out after 2 seconds
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [data.length]);

//   useEffect(() => {
//     AOS.refresh(); // Refresh AOS when the content changes
//   }, [currentIndex]);

//   const currentItem = data[currentIndex]; // Get the currently displayed item

//   return (
//     // <div className=" container h-full">
//     //   <div className="flex mx-auto flex-col items-center justify-center  bg-gray-900 text-white">
//     //     <h2 className="md:text-4xl text-lg text-white font-bold tracking-wide mb-3">
//     //       Testimonial
//     //     </h2>

//     //     <div className="flex flex-col md:flex-row items-center justify-center w-full p-4 md:p-8">
//     //       {/* Image Section */}
//     //       <div
//     //         className={`md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0 ${
//     //           zoomOut ? "zoom-out" : ""
//     //         }`}
//     //       >
//     //         <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] max-w-full sm:max-w-[70vw] md:max-w-[40vw] relative overflow-hidden">
//               // <Image
//               //   src={currentItem.imageUrl}
//               //   alt={currentItem.name}
//               //   className="object-cover hover:rounded-lg rounded-lg w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
//               //   height={200}
//               //   width={200}
//               // />
//     //         </div>
//     //       </div>

//     //       {/* Content Section */}
//     //       <div
//     //         className="w-full md:w-1/2 text-center md:text-left border-t border-r border-b  p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg"
//     //         data-aos="fade-up" // Fade-up effect for content
//     //         data-aos-delay="500" // Add a slight delay before the content fades in
//     //       >
//     //         <h3 className="text-2xl md:text-3xl  mb-4">{currentItem.title}</h3>
//     //         <div className="flex justify-center md:justify-start mb-4">
//     //           <span className="flex">
//     //             {[...Array(5)].map((_, i) => (
//     //               <svg
//     //                 key={i}
//     //                 xmlns="http://www.w3.org/2000/svg"
//     //                 fill="currentColor"
//     //                 viewBox="0 0 24 24"
//     //                 className="w-6 h-6 text-yellow-500"
//     //               >
//     //                 <path d="M12 .587l3.668 7.568L24 9.423l-6 5.843L19.335 24 12 20.254 4.665 24 6 15.266 0 9.423l8.332-1.268z" />
//     //               </svg>
//     //             ))}
//     //           </span>
//     //         </div>
//     //         <p
//     //           data-aos="fade-up"
//     //           className="mb-4 font-semibold text-sm md:text-base"
//     //         >
//     //           {currentItem.content}
//     //         </p>
//     //         <p className="font-semibold">{currentItem.name}</p>
//     //         <p className="font-semibold text-gray-400">
//     //           {currentItem.designation}
//     //         </p>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     <div className="container h-full">
//       <div className="flex flex-col py-5 items-center justify-center bg-gray-900 text-white mx-auto">
//         {/* Section Title */}
//         <h2 className="text-lg md:text-4xl font-bold tracking-wide mb-3 text-white">
//           Testimonials
//         </h2>

//         {/* Content Wrapper */}
//         <div className="flex flex-col md:flex-row items-center justify-center w-full p-4 md:p-8">
//           {/* Image Section */}
//           <div
//             className={`md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0 ${
//               zoomOut ? "zoom-out" : ""
//             }`}
//           >
//             <div className="relative overflow-hidden w-full h-[50vh] sm:h-[60vh] md:h-[70vh] max-w-full sm:max-w-[70vw] md:max-w-[40vw]">
//               <Image
//                 src={currentItem.imageUrl}
//                 alt={currentItem.name}
//                 className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
//                 height={200}
//                 width={200}
//               />
//             </div>
//           </div>

//           {/* Text Content Section */}
//           <div
//             className="w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] p-4 md:p-6 border-t border-r border-b-2 bg-gray-800 rounded-lg shadow-lg text-center md:text-left  border-white"
//             data-aos="fade-up"
//             data-aos-delay="500"
//           >
//             {/* Title */}
//             <h3 className="text-2xl md:text-3xl mb-4">{currentItem.title}</h3>

//             {/* Rating Section */}
//             <div className="flex justify-center md:justify-start mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <svg
//                   key={i}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   className="w-6 h-6 text-yellow-500"
//                 >
//                   <path d="M12 .587l3.668 7.568L24 9.423l-6 5.843L19.335 24 12 20.254 4.665 24 6 15.266 0 9.423l8.332-1.268z" />
//                 </svg>
//               ))}
//             </div>

//             {/* Testimonial Content */}
//             <p
//               className="mb-4 text-sm md:text-base font-semibold"
//               data-aos="fade-up"
//             >
//               {currentItem.content}
//             </p>

//             {/* Author Details */}
//             <p className="font-semibold">{currentItem.name}</p>
//             <p className="text-gray-400 font-semibold">
//               {currentItem.designation}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trail;

import React from "react";

import {
  faWhatsapp,
  faFacebook,
  faYoutube,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLeaf,
  faPhone,
  faEnvelope,
  faFile,
  faEarth,
  faLocationDot,
  faHouse,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Trail = () => {
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
          {/* Header */}
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Schedule a Call with ScienceSoft
          </h2>

          {/* Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">ScienceSoft in brief:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-medium">19 years</span> in financial IT.
                </li>
                <li>
                  <span className="font-medium">Over 750 specialists</span> on
                  board.
                </li>
                <li>
                  <span className="font-medium">4,000 success stories</span>{" "}
                  (including projects for RBC Royal Bank, Kapital Bank, Delap,
                  and IBM).
                </li>
                <li>
                  <span className="font-medium">
                    ISO 9001 and ISO 27001-certified
                  </span>{" "}
                  to guarantee service quality and customer data security.
                </li>
              </ul>
              <div className="mt-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt="Microsoft Partner"
                  className="w-32"
                />
              </div>
            </div>

            {/* Form Section */}
            <div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="I'd like to schedule a call with your team. Here's what I want to discuss:"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="example@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm pl-12"
                      placeholder="+91 00000 00000"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <span className="text-gray-500 sm:text-sm px-3">+91</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" container-wrapper">
        <h4>Schedule a Call with ScienceSoft</h4>

        <div className="container mx-auto p-4 bg-[#d6efff]">
          <div className="grid md:grid-cols-[1fr_1fr] sm:grid-cols-[1fr_1fr] gap-4">
            <div className="space-y-8 md:px-5 pt-10">
              {/* Section 1 */}
              <div className="flex items-center  space-x-4">
                <FontAwesomeIcon icon={faEarth} className="text-xl" />

                <div>
                  <h3 className="text-[15px] font-semibold">Quick response</h3>
                  <p className="text-sm text-gray-700">
                    We usually reply within 1 hour on business days to sign an
                    NDA and arrange a discussion.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faClock} className="text-xl" />
                <div>
                  <h3 className="text-[15px] font-semibold">
                    Personalized approach
                  </h3>
                  <p className="text-sm text-gray-700">
                    You will engage directly with specialists who are
                    experienced in your domain.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faLeaf} className="text-xl mr-1 " />
                <div>
                  <h3 className="text-[15px] font-semibold">No pressure</h3>
                  <p className="text-sm text-gray-700">
                    We are here to explore your needs and provide guidance —
                    whenever you are ready to move forward.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white md:p-6 p-3">
              <div>
                <h2 className="md:text-2xl text-lg font-semibold mb-4">
                  Lets discuss your needs!
                </h2>
                <p className="mb-4 md:text-base text-sm">
                  Do you have a question for our specialists, want to discuss
                  your project, or learn more about our expertise? Feel free to
                  send your request using the form below!
                </p>
                <form className="  rounded  pb-8 mb-4">
                  <div className="mb-4">
                    <textarea
                      placeholder="Kindly describe your request"
                      id="description"
                      rows="4"
                      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-1 focus:outline-blue-800 focus:shadow"
                    ></textarea>
                  </div>

                  <div className=" grid md:grid-cols-2  grid-cols-1 gap-5">
                    <div className="mb-4">
                      <input
                        placeholder="Full Name "
                        type="text"
                        id="name"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-1 focus:outline-blue-800 focus:shadow"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Company"
                        id="company"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-1 focus:outline-blue-800 focus:shadow"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        placeholder=" Work Email"
                        type="email"
                        id="email"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-1 focus:outline-blue-800 focus:shadow"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="flex">
                        <select className=" appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                          <option>+91</option>
                          <option>+92</option>
                          {/* Add more country codes as needed */}
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-1 focus:outline-blue-800 focus:shadow"
                          placeholder="00000 00000"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center  pt-5 justify-center">
                    <button
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trail;

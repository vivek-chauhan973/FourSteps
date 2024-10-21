// // import React from "react";
// // import { Link as ScrollLink } from "react-scroll";

// // const Detail = () => {
// //   return (
// //     <div>
// //       <h1>webinar detail secction </h1>

// //       <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4">
// //         <ul className="flex justify-around">
// //           <li>
// //             <ScrollLink
// //               to="section1"
// //               smooth={true}
// //               duration={500}
// //               offset={-70} // Offset for sticky header
// //               className="text-white cursor-pointer hover:text-blue-400"
// //             >
// //               Section 1
// //             </ScrollLink>
// //           </li>
// //           <li>
// //             <ScrollLink
// //               to="section2"
// //               smooth={true}
// //               duration={500}
// //               offset={-70}
// //               className="text-white cursor-pointer hover:text-blue-400"
// //             >
// //               Section 2
// //             </ScrollLink>
// //           </li>
// //           <li>
// //             <ScrollLink
// //               to="section3"
// //               smooth={true}
// //               duration={500}
// //               offset={-70}
// //               className="text-white cursor-pointer hover:text-blue-400"
// //             >
// //               Section 3
// //             </ScrollLink>
// //           </li>
// //         </ul>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Detail;

// import React from "react";
// import { Link as ScrollLink } from "react-scroll";

// const Detail = () => {
//   return (
//     <div>
//       <h1>hero section</h1>
//       <h1>hero section</h1>
//       <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-x-3 ">
//         <div id="departure" className=" hidden xl:block">

//           wifgweyuewfvefeyweyewytkyweyufe uugfe8fg ywegdowe f
//         </div>
//         <div className="">
//           {/* {addPackage?.prices?.addguest === "addGuest" && ( */}
//           {/* <DepartureSection addPackage={addPackage} /> */}
//           {/* )} */}
//           {/* {addPackage?.prices?.departure1 === "fixedDeparture" && (
//                 <DepartureSection
//                   addPackage={addPackage}
//                   setFixedDeparturePopupOpen={setFixedDeparturePopupOpen}
//                   fixedDeparturePopupOpen={fixedDeparturePopupOpen}
//                 />
//               )} */}
//         </div>
//         {/* Pricing */}
//         <div>
//           <div className="hidden xl:block">
//             ihryuefvyuewfwefvew efgewf ef7efe f6ftf
//           </div>
//         </div>
//       </div>
//       <div>
//         {/* Navigation - Using div instead of nav */}
//         <div className=" sticky top-0 left-0 w-full bg-gray-800 p-4 z-10">
//           <ul className="flex justify-around">
//             <li>
//               <ScrollLink
//                 to="section1"
//                 smooth={true}
//                 duration={500}
//                 offset={-70} // Adjust this offset for sticky header
//                 className="text-white cursor-pointer hover:text-blue-400"
//               >
//                 Section 1
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink
//                 to="section2"
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 className="text-white cursor-pointer hover:text-blue-400"
//               >
//                 Section 2
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink
//                 to="section3"
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 className="text-white cursor-pointer hover:text-blue-400"
//               >
//                 Section 3
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink
//                 to="section4"
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 className="text-white cursor-pointer hover:text-red-400"
//               >
//                 Section 3
//               </ScrollLink>
//             </li>
//           </ul>
//         </div>

//         {/* Sections */}
//         <section
//           id="section1"
//           className="h-screen flex justify-center items-center bg-blue-500"
//         >
//           <h1 className="text-white text-5xl">Section 1</h1>
//         </section>

//         <section
//           id="section2"
//           className="h-screen flex justify-center items-center bg-green-500"
//         >
//           <h1 className="text-white text-5xl">Section 2</h1>
//         </section>

//         <section
//           id="section3"
//           className="h-screen flex justify-center items-center bg-purple-500"
//         >
//           <h1 className="text-white text-5xl">Section 3</h1>
//         </section>
//         <section
//           id="section4"
//           className="h-screen flex justify-center items-center bg-red-500"
//         >
//           <h1 className="text-white text-5xl">Section 4</h1>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Detail;

// import React from 'react'

// const Detail = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Detail

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import SideForm from "./SideForm";

export default function Package1() {
  return (
    <div>
      <div className="w-full ">{/* <DesktopHeader /> */}</div>

      <div className="bg-gray-100  mt-[20px] pb-7">
        <div className="container-wrapper mb-4">
          <div className="mb-[20px] pt-[40px]">
            <h1 className="text-lg font-medium text-graytext">
              Choose your departure city, dates, and add guests to secure your
              tour.
            </h1>
            <p className="italic  text-sm">
              Hurry, as seats fill up, prices rise! Book now!
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-x-3 ">
            <div id="departure" className=" hidden xl:block">
              {/* <DepartureSection addPackage={addPackage} /> */}
            </div>
            <div className="xl:hidden">dhbqwduqw</div>
            {/* Pricing */}
            <div>
              <div className="hidden xl:block">
                for the small image section like a video link
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Departure city End */}
      <div>
        <div
          id="ItinerarySection"
          className="bg-white py-1 shadow-md sticky top-0 z-30"
        >
          <div className="container-wrapper gap-3  md:gap-12 xs:pb-5 md:pb-0 hide-scrollbar flex justity-start overflow-x-auto ">
            <div>
              <ScrollLink
                to="ItinerarySubSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className=" text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Itinerary
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="TourDetailsSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Tour Details
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="TourInformationSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Inclusion
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="NeedToKnowSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Exclusion
                </p>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="px-5  grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
          <div>
            <div
              id="ItinerarySubSection"
              className="flex  justify-between mt-5 mb-3"
            >
              <h3 className="text-lg font-semibold text-graytext">
                Itinerary{" "}
                <span className="text-[13px] italic text-slate-600 ">
                  (Day Wise)
                </span>
              </h3>
            </div>
            <div>
              <p className="text-para leading-relaxed  pb-5">
                {/* {addPackage?.dayWiseInformation} */}
              </p>
            </div>
            <div className="mb-7">
              {/* <Itinerary /> */}
              {/* <ItineraryFaq faq={addPackage?.days} /> */}
            </div>

            {/* <!- TOUR DETAILS IS HERE --> */}
            {/* <ItineraryTourDetails /> */}
            {/* Privacy policy Terms */}
            <div id="Policy&TermsSection" className="pt-7">
              {/* <ItineraryPaymentTerms /> */}jbfhfblheb
            </div>
            {/* be responsible */}
            <div className="pt-7">
              <h2 className="md:text-lg text-md font-semibold text-graytext">
                Be Responsible Traveller
              </h2>
              <ol className="text-para ml-6 list-disc px-2 pt-3">
                <li>
                  <span className="font-semibold">Minimize Plastic Use : </span>{" "}
                  Bring a reusable water bottle, shopping bag, and utensils to
                  reduce the need for single-use plastics. Many destinations
                  have water refill stations and eco-friendly stores.
                </li>
                <li>
                  <span className="font-semibold">
                    Support Local and Sustainable Businesses :{" "}
                  </span>{" "}
                  Eat at local restaurants, buy souvenirs from local artisans,
                  and choose tour operators that prioritize sustainable
                  practices and support the local community.
                </li>
                <li>
                  <span className="font-semibold">
                    Respect Wildlife and Natural Habitats :{" "}
                  </span>{" "}
                  Avoid disturbing wildlife or their natural habitats. Stick to
                  designated paths and observe animals from a distance without
                  feeding or touching them.
                </li>
                <li>
                  <span className="font-semibold">
                    Dispose of Waste Properly :{" "}
                  </span>{" "}
                  Follow local guidelines for recycling and waste disposal. If
                  facilities aren&apos;t available, carry your waste with you
                  until you can dispose of it responsibly.
                </li>
                <li>
                  <span className="font-semibold">
                    Educate Yourself and Others :{" "}
                  </span>{" "}
                  Learn about the local environment, culture, and customs.
                  Respect local practices and traditions, and share your
                  knowledge about responsible travel with others.
                </li>
                <li>
                  <span className="font-semibold">
                    Choose Sustainable Activities :{" "}
                  </span>{" "}
                  Engage in eco-friendly activities such as hiking, snorkeling,
                  or visiting national parks. Avoid activities that exploit
                  animals or damage the environment.
                </li>
                <li>
                  <span className="font-semibold">Leave No Trace : </span>{" "}
                  Follow the principle of &quot;Leave No Trace,&quot; which
                  means leaving natural areas as you found them. Pack out all
                  trash, avoid picking plants, and refrain from carving or
                  writing on rocks or trees.
                </li>
                <li>
                  <span className="font-semibold">
                    Plant Trees Whenever Possible :{" "}
                  </span>{" "}
                  Participate in local tree-planting initiatives or plant trees
                  in your own community. Trees absorb carbon dioxide, provide
                  oxygen, and help support biodiversity, making them vital for a
                  healthy environment.
                </li>
              </ol>
            </div>
          </div>
          <div className=" mt-10">
            <div className="sticky top-[50px] z-10">
              <div className="flex gap-1 justify-center items-center">
                <div className="items-center flex flex-col p-2 ml-10 text-center">
                  <span>
                    <svg
                      // onClick={handleSendItinerary}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-whatsapp cursor-pointer hover:text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </span>
                  <p
                    // onClick={handleSendItinerary}
                    className="text-[12px] cursor-pointer"
                  >
                    Send Itinerary
                  </p>
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                  <FontAwesomeIcon
                    icon={faShareNodes}
                    className="font1 cursor-pointer hover:text-primary"
                  />
                  <p className="text-[12px] cursor-pointer">Share Itinerary</p>
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="font1 cursor-pointer hover:text-primary"
                    // onClick={handleEmailRedirect}
                  />

                  <p
                    className="text-[12px] cursor-pointer"
                    // onClick={handleEmailRedirect}
                  >
                    Email Itinerary
                  </p>
                </div>
              </div>
              {/* side registration form */}
              <div>
                <SideForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-12 pb-6">
        {/* <TestingCard addPackage={addPackage} /> */}fbuiyegubeufe
      </div>
    </div>
  );
}

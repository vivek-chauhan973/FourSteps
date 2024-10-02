// import React from "react";

// const Webinars = () => {
//   return (
//     <div className="grid gap-4 text-center">
//       <header className="bg-blue-900 text-white p-8">
//         <h1 className="text-3xl font-bold">Watch recorded webinars</h1>
//       </header>
//       <nav className="flex justify-center gap-8 border-b-2 border-gray-200 py-2">
//         <a
//           href="#upcoming"
//           className="text-gray-600 font-semibold hover:text-blue-900"
//         >
//           Upcoming Webinars
//         </a>
//         <a
//           href="#recorded"
//           className="text-blue-900 font-semibold border-b-2 border-blue-900"
//         >
//           Recorded Webinars
//         </a>
//       </nav>
//     </div>
//   );
// };

// export default Webinars;

// import Link from "next/link";
// import React, { useState } from "react";

// const Webinars = () => {
//   const [activeLink, setActiveLink] = useState("recorded");

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <div className="grid gap-4 text-center">
//       <header className="bg-blue-900 text-white p-8">
//         <h1 className="text-3xl font-bold">Watch recorded webinars</h1>
//       </header>
//       <div className="flex justify-center gap-8 border-b-2 border-gray-200 py-2">
//         <Link
//           href="/webinarpages/upcoming"
//           onClick={() => handleLinkClick("upcoming")}
//           className={`text-gray-600 font-semibold hover:text-blue-900 ${
//             activeLink === "upcoming"
//               ? "text-blue-900 border-b-2 border-blue-900"
//               : ""
//           }`}
//         >
//           Upcoming Webinars
//         </Link>
//         <Link
//           href="/webinarpages/recorded"
//           onClick={() => handleLinkClick("recorded")}
//           className={`text-gray-600 font-semibold hover:text-blue-900 ${
//             activeLink === "recorded"
//               ? "text-blue-900 border-b-2 border-blue-900"
//               : ""
//           }`}
//         >
//           Recorded Webinars
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Webinars;

// import Link from "next/link";
// import React, { useState } from "react";

// const Webinars = () => {
//   const [activeLink, setActiveLink] = useState("recorded");

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <div className="grid gap-4 text-center">
//       <header className="bg-blue-900 text-white p-8">
//         <h1 className="text-3xl font-bold">Watch recorded webinars</h1>
//       </header>
//       <div className="flex justify-center gap-8 border-b-2 border-gray-200 py-2">
//         <Link href="/webinarpages/upcoming" legacyBehavior>
//           <a
//             onClick={() => handleLinkClick("upcoming")}
//             className={`text-gray-600 font-semibold hover:text-blue-900 ${
//               activeLink === "upcoming"
//                 ? "text-blue-900 border-b-2 border-blue-900"
//                 : ""
//             }`}
//           >
//             Upcoming Webinars
//           </a>
//         </Link>
//         <Link href="/webinarpages/recorded" legacyBehavior>
//           <a
//             onClick={() => handleLinkClick("recorded")}
//             className={`text-gray-600 font-semibold hover:text-blue-900 ${
//               activeLink === "recorded"
//                 ? "text-blue-900 border-b-2 border-blue-900"
//                 : ""
//             }`}
//           >
//             Recorded Webinars
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Webinars;

// import Link from "next/link";
// import React, { useState } from "react";

// const Webinars = () => {
//   const [activeLink, setActiveLink] = useState("recorded");

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <div className="grid gap-4 text-center">
//       <header className="bg-blue-900 text-white p-8">
//         <h1 className="text-3xl font-bold">Watch recorded webinars</h1>
//       </header>
//       <div className="flex justify-center gap-8 border-b-2 border-gray-200 py-2">
//         <Link href="/webinarpages/upcoming">
//           <p
//             onClick={() => handleLinkClick("upcoming")}
//             className={`text-gray-600 font-semibold hover:text-blue-900 ${
//               activeLink === "upcoming"
//                 ? "text-blue-900 border-b-2 border-blue-900"
//                 : ""
//             }`}
//           >
//             Upcoming Webinars
//           </p>
//         </Link>
//         <Link href="/webinarpages/recorded">
//           <p
//             onClick={() => handleLinkClick("recorded")}
//             className={`text-gray-600 font-semibold hover:text-blue-900 ${
//               activeLink === "recorded"
//                 ? "text-blue-900 border-b-2 border-blue-900"
//                 : ""
//             }`}
//           >
//             Recorded Webinars
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Webinars;
// import Link from "next/link";
// import React, { useState } from "react";

// const Webinars = () => {
//   const [activeLink, setActiveLink] = useState("recorded");

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <div className="grid gap-4 text-center">
//       <header className="bg-blue-900 text-white p-8">
//         <h1 className="text-3xl font-bold">Watch recorded webinars</h1>
//       </header>
//       <div className="flex justify-center gap-8 border-b-2 border-gray-200 py-2">
//         <Link href="/webinarpages/upcoming">
//           <p
//             onClick={() => handleLinkClick("upcoming")}
//             className={`cursor-pointer text-gray-600 font-semibold hover:text-blue-900 ${
//               activeLink === "upcoming"
//                 ? "text-blue-900 border-b-2 border-blue-900"
//                 : ""
//             }`}
//           >
//             Upcoming Webinars
//           </p>
//         </Link>
//         <Link href="/webinarpages/recorded">
//           <p
//             onClick={() => handleLinkClick("recorded")}
//             className={`cursor-pointer text-gray-600 font-semibold hover:text-blue-900 ${
//               activeLink === "recorded"
//                 ? "text-blue-900 border-b-2 border-blue-900"
//                 : ""
//             }`}
//           >
//             Recorded Webinars
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Webinars;

// import Link from "next/link";
// import React, { useState } from "react";
// import { useRouter } from "next/router";

// const Webinars = () => {
//   const router = useRouter();
//   const [activeLink, setActiveLink] = useState(
//     router.pathname.includes("upcoming") ? "upcoming" : "recorded"
//   );

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <div className="grid gap-4 text-center">
//       <header className="bg-blue-900 text-white p-8">
//         <h1 className="text-3xl font-bold">Watch recorded webinars</h1>
//       </header>
//       <div className="flex justify-center gap-8 border-b-2 border-gray-200 py-2">
//         <Link href="/webinarpages/upcoming">
//           <div
//             onClick={() => handleLinkClick("upcoming")}
//             className={`cursor-pointer text-gray-600 font-semibold hover:text-blue-900 ${
//               activeLink === "upcoming"
//                 ? "text-blue-900 border-b-2 border-blue-900"
//                 : ""
//             }`}
//           >
//             Upcoming Webinars
//           </div>
//         </Link>
//         <Link href="/webinarpages/recorded">
//           <div
//             onClick={() => handleLinkClick("recorded")}
//             className={`cursor-pointer text-gray-600 font-semibold hover:text-blue-900 ${
//               activeLink === "recorded"
//                 ? "text-blue-900 border-b-2 border-blue-900"
//                 : ""
//             }`}
//           >
//             Recorded Webinars
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Webinars;

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "../Header/Nav";

const Webinars = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(
    router.pathname.includes("upcoming") ? "upcoming" : "recorded"
  );

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
    <Nav/>
      <div className=" container ">
        <div className="grid gap-4   text-center">
          <header className="bg-blue-900 h-48 text-white p-8">
            <h1 className="text-3xl font-bold">
              {activeLink === "upcoming"
                ? "Upcoming Webinars"
                : "Watch Recorded Webinars"}
            </h1>
            <div>
              Unlock the secrets of successful conts eager to enhance their
              skills and drive meaningful engagement in the digital age.
            </div>
          </header>
          <div className="flex justify-center gap-8 border-b-2 border-gray-200 py-2">
            <Link href="/webinarpages/upcoming">
              <div
                onClick={() => handleLinkClick("upcoming")}
                className={`cursor-pointer text-gray-600 font-semibold hover:text-blue-900 ${
                  activeLink === "upcoming"
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : ""
                }`}
              >
                Upcoming Webinars
              </div>
            </Link>
            <Link href="/webinarpages/recorded">
              <div
                onClick={() => handleLinkClick("recorded")}
                className={`cursor-pointer text-gray-600 font-semibold hover:text-blue-900 ${
                  activeLink === "recorded"
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : ""
                }`}
              >
                Recorded Webinars
              </div>
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Webinars;

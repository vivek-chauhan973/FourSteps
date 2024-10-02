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
      <Nav />
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
                className={`cursor-pointer text-gray-600 font-semibold hover:text-primary ${
                  activeLink === "upcoming"
                    ? "text-primary border-b-2 border-primary"
                    : ""
                }`}
              >
                Upcoming Webinars
              </div>
            </Link>
            <Link href="/webinarpages/recorded">
              <div
                onClick={() => handleLinkClick("recorded")}
                className={`cursor-pointer text-gray-600 font-semibold hover:text-primary ${
                  activeLink === "recorded"
                    ? "text-primary border-b-2 border-primary"
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

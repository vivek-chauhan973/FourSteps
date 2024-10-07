// import React, { useState } from "react";
// import MobileNav from "./MobileNav"; // Import the new MobileNav component
// import Categories from "./Categories"; // Import the new Categories component
// import DesktopRsource from "./DesktopRsource";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

// const Nav = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

//   const [resourceopen, setResourceopen] = useState(false);
//   const [activeLink, setActiveLink] = useState("/");

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };
//   return (
//     <nav className="bg-gray-100   sticky top-0 py-4 z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex md:justify-around justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img
//               src="/image/logo.png"
//               alt="Brand Logo"
//               className="h-20 w-full object-cover"
//             />
//           </div>

//           {/* Tablet and Desktop Menu */}
//           <div className="hidden md:flex space-x-4 items-center">
//             <ul className="flex space-x-4 cursor-pointer ">
//               <li className="relative inline-block">
//                 <Link
//                   href="/"
//                   onClick={() => handleLinkClick("/")}
//                   className={`relative inline-block text-base font-medium px-3 py-2 ${
//                     activeLink === "/" ? "text-orange-500" : "text-gray-800"
//                   } hover:text-orange-500 cursor-pointer`}
//                 >
//                   Home
//                   <span
//                     className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
//                       activeLink === "/" ? "scale-x-100" : "scale-x-0"
//                     }`}
//                   ></span>
//                 </Link>
//               </li>
//               <li className="relative inline-block">
//                 <Link
//                   href="/about"
//                   onClick={() => handleLinkClick("/about")}
//                   className={`relative inline-block text-base font-medium px-3 py-2 ${
//                     activeLink === "/about"
//                       ? "text-orange-500"
//                       : "text-gray-800"
//                   } hover:text-orange-500 cursor-pointer`}
//                 >
//                   About
//                   <span
//                     className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
//                       activeLink === "/about" ? "scale-x-100" : "scale-x-0"
//                     }`}
//                   ></span>
//                 </Link>
//               </li>
//               <li>
//                 <Categories />
//               </li>
//               <li className="relative inline-block">
//                 <Link
//                   href="/training"
//                   onClick={() => handleLinkClick("/training")}
//                   className={`relative inline-block text-base font-medium px-3 py-2 ${
//                     activeLink === "/training"
//                       ? "text-orange-500"
//                       : "text-gray-800"
//                   } hover:text-orange-500 cursor-pointer`}
//                 >
//                   Training
//                   <span
//                     className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
//                       activeLink === "/training" ? "scale-x-100" : "scale-x-0"
//                     }`}
//                   ></span>
//                 </Link>
//               </li>
//               <li>
//                 <DesktopRsource
//                   resourceopen={resourceopen}
//                   setResourceopen={setResourceopen}
//                 />
//               </li>
//               <li className="relative inline-block">
//                 <Link
//                   href="/#"
//                   onClick={() => handleLinkClick("/career")}
//                   className={`relative inline-block text-base font-medium px-3 py-2 ${
//                     activeLink === "/career"
//                       ? "text-orange-500"
//                       : "text-gray-800"
//                   } hover:text-orange-500 cursor-pointer`}
//                 >
//                   Career
//                   <span
//                     className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
//                       activeLink === "/career" ? "scale-x-100" : "scale-x-0"
//                     }`}
//                   ></span>
//                 </Link>
//               </li>
//               <li className="relative inline-block">
//                 <Link
//                   href="/#"
//                   onClick={() => handleLinkClick("/contact")}
//                   className={`relative inline-block text-base font-medium px-3 py-2 ${
//                     activeLink === "/contact"
//                       ? "text-orange-500"
//                       : "text-gray-800"
//                   } hover:text-orange-500 cursor-pointer`}
//                 >
//                   Contact us
//                   <span
//                     className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
//                       activeLink === "/contact" ? "scale-x-100" : "scale-x-0"
//                     }`}
//                   ></span>
//                 </Link>
//               </li>
//             </ul>

//             <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded inline-flex items-center">
//               Talk to Us
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden">
//             <button
//               isMegaMenuOpen={isMegaMenuOpen}
//               type="button"
//               className="w-full text-left text-gray-700 hover:text-black px-4 py-2 text-sm font-medium flex items-center justify-between"
//               // className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? (
//                 <FontAwesomeIcon icon={faXmark} className=" navicon" />
//               ) : (
//                 <FontAwesomeIcon icon={faBars} className="navicon " />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <MobileNav
//           isMobileMenuOpen={isMobileMenuOpen}
//           setIsMobileMenuOpen={setIsMobileMenuOpen}
//           isMegaMenuOpen={isMegaMenuOpen}
//           setIsMegaMenuOpen={setIsMegaMenuOpen}
//         />
//       )}
//     </nav>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import MobileNav from "./MobileNav"; // Import the new MobileNav component
import Categories from "./Categories"; // Import the new Categories component
import DesktopRsource from "./DesktopRsource";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [resourceopen, setResourceopen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-gray-100 sticky top-0 py-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/image/logo.png"
              alt="Brand Logo"
              className="h-20 w-full object-cover"
            />
          </div>

          {/* Tablet and Desktop Menu */}
          <div className="hidden  md:flex md:space-x-6 lg:space-x-8 items-center">
            <ul className="flex  space-x-4 cursor-pointer">
              <li className="relative inline-block">
                <Link
                  href="/"
                  onClick={() => handleLinkClick("/")}
                  className={`relative inline-block text-base font-medium px-3 py-2 ${
                    activeLink === "/" ? "text-orange-500" : "text-gray-800"
                  } hover:text-orange-500`}
                >
                  Home
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
                      activeLink === "/" ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </Link>
              </li>
              <li className="relative inline-block">
                <Link
                  href="/about"
                  onClick={() => handleLinkClick("/about")}
                  className={`relative inline-block text-base font-medium px-3 py-2 ${
                    activeLink === "/about"
                      ? "text-orange-500"
                      : "text-gray-800"
                  } hover:text-orange-500`}
                >
                  About
                  <span
                    className={` absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
                      activeLink === "/about" ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </Link>
              </li>
              <li>
                <Categories />
              </li>
              <li className="relative inline-block">
                <Link
                  href="/training"
                  onClick={() => handleLinkClick("/training")}
                  className={`relative inline-block text-base font-medium px-3 py-2 ${
                    activeLink === "/training"
                      ? "text-orange-500"
                      : "text-gray-800"
                  } hover:text-orange-500`}
                >
                  Training
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
                      activeLink === "/training" ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </Link>
              </li>

              <li>
                <DesktopRsource
                  resourceopen={resourceopen}
                  setResourceopen={setResourceopen}
                />
              </li>
              <li className="relative inline-block">
                <Link
                  href="/#"
                  onClick={() => handleLinkClick("/career")}
                  className={`relative inline-block text-base font-medium px-3 py-2 ${
                    activeLink === "/career"
                      ? "text-orange-500"
                      : "text-gray-800"
                  } hover:text-orange-500`}
                >
                  Career
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
                      activeLink === "/career" ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </Link>
              </li>
              <li className="relative inline-block">
                <Link
                  href="/#"
                  onClick={() => handleLinkClick("/contact")}
                  className={`relative inline-block text-base font-medium px-3 py-2 ${
                    activeLink === "/contact"
                      ? "text-orange-500"
                      : "text-gray-800"
                  } hover:text-orange-500`}
                >
                  Contact us
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform ${
                      activeLink === "/contact" ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </Link>
              </li>
            </ul>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded inline-flex items-center">
              Talk to Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="w-full text-left text-gray-700 hover:text-black px-4 py-2 text-sm font-medium flex items-center justify-between"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FontAwesomeIcon icon={faXmark} className="navicon" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="navicon" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileNav
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMegaMenuOpen={isMegaMenuOpen}
          setIsMegaMenuOpen={setIsMegaMenuOpen}
        />
      )}
    </nav>
  );
};

export default Nav;

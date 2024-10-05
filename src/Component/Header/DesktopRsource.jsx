import Link from "next/link";
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import the up icon as well
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faBlog,
  faVideo,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"; // Importing the YouTube icon

const DesktopResource = ({ resourceopen, setResourceopen }) => {
  const handleMouseEnter = () => setResourceopen(true);
  const handleMouseLeave = () => setResourceopen(false);

  return (
    <div
      className="relative inline-block text-base font-medium px-3 py-2 text-gray-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="focus:outline-none hover:text-orange-500 flex items-center relative">
        <Link href="/resource">Resources</Link>
        {resourceopen ? (
          <FaChevronUp
            className="ml-1 transition-transform duration-300"
            size={15}
          />
        ) : (
          <FaChevronDown
            className="ml-1 transition-transform duration-300"
            size={15}
          />
        )}
        <span className="absolute left-0 bottom-0 h-0.5 w-full transition-all duration-300 transform scale-x-0 hover:scale-x-100" />
      </button>

      {resourceopen && (
        <div className="absolute left-0 mt-1 w-64 my-2 h-auto rounded-[17px] bg-white shadow-lg z-10">
          <ul className="h-full w-full    ">
            <li className="flex justify-between items-center  s  px-4 py-3  hover:bg-gray-200   border-b border-gray-200  cursor-pointer">
              <div className="flex gap-1   items-center">
                <FontAwesomeIcon icon={faBlog} className=" text-gray-600" />
                <Link href="https://www.google.com">Blog</Link>
              </div>
              <FontAwesomeIcon icon={faCaretRight} className=" text-gray-600" />
            </li>
            <li className="flex justify-between items-center px-4 py-3 border-b border-gray-200 hover:bg-gray-200  cursor-pointer">
              <div className="flex gap-1  items-center">
                <FontAwesomeIcon icon={faFile} className=" text-gray-600" />
                <Link href="#">Case Studies</Link>
              </div>
              <FontAwesomeIcon icon={faCaretRight} className=" text-gray-600" />
            </li>
            <li className="flex justify-between items-center px-4 py-3 border-b border-gray-200  hover:bg-gray-200 cursor-pointer">
              <div className="flex gap-1  items-center">
                <FontAwesomeIcon
                  icon={faYoutubeSquare}
                  className=" text-gray-600"
                />
                <Link href="#juu">YouTube</Link>
              </div>
              <FontAwesomeIcon icon={faCaretRight} className=" text-gray-600" />
            </li>
            <li className="flex justify-between items-center  hover:bg-gray-200  px-4 py-3  cursor-pointer">
              <div className="flex gap-1  items-center">
                <FontAwesomeIcon icon={faVideo} className=" text-gray-600" />
                <Link href="/webinarpages/recorded">Webinar</Link>
              </div>
              <FontAwesomeIcon icon={faCaretRight} className=" text-gray-600" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DesktopResource;

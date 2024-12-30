import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const IndustrySideForm = () => {
  const [show, SetShow] = useState(false);
  const HandleClick = () => {
    SetShow(!show);
  };
  return (
    <>
      <div
        onClick={HandleClick}
        className="w-full justify-center h-auto bg-yellow-50"
      >
        <div className="flex items-center space-x-4 bg-yellow-100 p-4 rounded-md shadow-md group hover:cursor-pointer">
          {/* Calendar Icon */}
          <div className="relative">
            <div className="flex items-center justify-center w-20 h-16 bg-yellow-200 rounded-md ">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-[40px] group-hover:animate-bounce"
              />
            </div>
            {/* Inner Icon */}
            <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          {/* Text */}
          <div className="text-yellow-900 font-bold">Schedule a call</div>
        </div>
      </div>

      {show && (
        <div>
          <ContactForm />
        </div>
      )}
    </>
  );
};

export default IndustrySideForm;

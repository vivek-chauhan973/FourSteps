import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { FaQrcode } from "react-icons/fa";

import Link from "next/link";
export const Footer = () => {
  return (
    <>
      <div className="  py-10">
        {/* gpt response */}

        <div className=" text-black bg-gray-100 py-8">
          {/* Company Info */}
          <div className="bg-gray-300 text-sm p-6 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0">
              <img
                src="/image/logo.png"
                alt="App Store"
                className="w-24 h-16"
              />
              <p>
                Four Steps Digital Consulting(OPC) Pvt Ltd, an Indian digital
                consulting agency, prioritizes honesty, hard work, and results
                for small to medium-sized businesses. Our focus: Transforming
                Businesses Into Digitally-Driven Organizations with expert teams
                optimizing digital presence and efficiency.{" "}
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-end space-x-6">
              <div className="text-center">
                <p className="font-bold mb-2">Download EaseMyTrip App</p>
                <div className="flex space-x-4">
                  <div className="flex justify-center mt-4">
                    <img
                      src="/image/zohologo.jpg"
                      alt="Logo"
                      className="h-20 w-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold mb-2">SCAN QR CODE</p>
                <FaQrcode className="text-6xl" />
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 py-4  px-4 lg:grid-cols-5 gap-4">
              {/* Useful Links */}
              <div className="border-r border-gray-300">
                <h3 className="text-lg font-bold mb-4">Useful Links</h3>
                <ul className="space-y-2 text-sm">
                  <li className="footerHover relative">
                    <a href="#" className="relative  items-center">
                      <span className="icon-circle">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </span>
                      About
                    </a>
                  </li>
                  <li className="footerHover relative">
                    <a href="#" className="relative  items-center">
                      <span className="icon-circle">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </span>
                      Contact
                    </a>
                  </li>
                  <li className="footerHover relative">
                    <a href="#" className="relative  items-center">
                      <span className="icon-circle">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </span>
                      Case Study
                    </a>
                  </li>
                  <li className="footerHover relative">
                    <a href="#" className="relative  items-center">
                      <span className="icon-circle">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </span>
                      Blog
                    </a>
                  </li>
                  <li className="footerHover relative">
                    <a href="#" className="relative  items-center">
                      <span className="icon-circle">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </span>
                      Training
                    </a>
                  </li>
                  <li className="footerHover relative">
                    <a href="#" className="relative  items-center">
                      <span className="icon-circle">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </span>
                      Webinar
                    </a>
                  </li>
                </ul>
              </div>
              <div className="border-r border-gray-300">
                <h3 className="text-lg font-bold mb-4 ">Our Services</h3>
                <ul className="space-y-2  text-sm cursor-pointer">
                  <li className="footerHover relative hover:text-primary">
                    <Link href="#" className=" relative">
                      Website Development
                    </Link>
                  </li>
                  <li className="footerHover relative hover:text-primary">
                    <Link href="#" className=" relative">
                      Zoho Services
                    </Link>
                  </li>
                  <li className="footerHover relative hover:text-primary">
                    <Link href="#" className=" relative">
                      Zoho Industry Solution
                    </Link>
                  </li>
                  <li className="footerHover relative hover:text-primary">
                    <Link href="#" className=" relative">
                      Digital Marketing
                    </Link>
                  </li>
                  <li className="footerHover relative hover:text-primary">
                    <Link href="#" className=" relative">
                      Hubspot Services
                    </Link>
                  </li>
                  <li className="footerHover relative hover:text-primary">
                    <Link href="#" className=" relative">
                      Other Crm Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Our Services */}
              <div className="border-r border-gray-300">
                <h3 className="text-lg font-bold mb-4">other content bro</h3>
                <ul className="text-sm  space-y-2">
                  <li>Zoho Setup and Implementation</li>
                  <li>Hubspot Setup and Implementation</li>
                  <li>Bitrix24 Services</li>
                  <li>Salesforce Services</li>
                </ul>
              </div>

              {/* Website Development */}
              <div className="border-r border-gray-300">
                <h3 className="text-lg font-bold mb-4">Website Development</h3>
                <ul className="space-y-2 text-sm  ">
                  <li className="footerHover relative hover:text-primary">
                    <Link href="#" className=" relative">
                      CMS Web Development
                    </Link>
                  </li>
                  <li className="footerHover relative hover:text-primary">
                    <Link href="#" className=" relative">
                      Custom Web Development
                    </Link>
                  </li>
                  <li className="footerHover relative hover:text-primary">
                    <Link href="#" className=" relative">
                      E-Commerce Store
                    </Link>
                  </li>
                </ul>
              </div>

              {/* General Queries & Social Links */}
              <div>
                <h3 className="text-lg font-bold mb-4">General Queries</h3>
                <div className=" text-sm">
                  <p>Email: info@4stepsdigital.com</p>
                  <p>Phone: +91-9065879989</p>
                </div>
                <h3 className="text-lg font-bold mt-4 mb-2">
                  Social Media Links
                </h3>

                <div className="flex space-x-1">
                  <a
                    href="#"
                    className="flex items-center justify-center w-7 h-7 rounded-full border-blue-600  border text-blue-600   transition duration-200"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-7 h-7 rounded-full  border border-red-500 text-red-600 transition duration-200"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-7 h-7 rounded-full border border-blue-400 text-blue-800  transition duration-200"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-7 h-7 rounded-full border border-pink-600 text-pink-600  transition duration-200"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 py-2 text-end text-sm">
              <p>
                Copyright © 2024 Four Steps Digital Consulting(OPC) Pvt Ltd. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

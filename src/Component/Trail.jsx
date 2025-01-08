import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Trail = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 px-4">
          {/* Logo Section */}
          <div className="col-span-2">
            <div className="lg:w-1/2  mb-4 lg:mb-0">
              <Image
                src="/image/logo.png"
                alt="App Store"
                height={200}
                width={200}
                className="w-20 h-16"
              />
            </div>

            <p className=" md:text-sm pr-3 text-[13px]">
              Four Steps Digital Consulting(OPC) Pvt Ltd, an Indian digital
              consulting agency, prioritizes honesty, hard work, and results for
              small to medium-sized businesses. Our focus: Transforming
              Businesses Into Digitally-Driven Organizations with expert teams
              optimizing digital presence and efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
            <ul className="space-y-1 list-none text-sm">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Alliance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Referral Partner
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 list-none text-sm">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Product
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Webinar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Demos & Video
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-gray-300">
                  Case Study
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <div>
              <h3 className="text-base  font-semibold mb-2">General Queries</h3>
              <div className=" text-sm">
                <p>Email: info@4stepsdigital.com</p>
                <p>Phone: +91-9065879989</p>
              </div>
              <h3 className="text-base  font-semibold mt-4 mb-2">
                Social Media Links
              </h3>

              <div className="flex space-x-1">
                <Link
                  href="#"
                  className="flex items-center justify-center w-8 h-8 rounded-full    transition duration-200   bg-blue-500 text-white"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center w-8 h-8 rounded-full  transition duration-200  bg-red-500 text-white"
                >
                  <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center w-8 h-8 rounded-full  transition duration-200 bg-blue-500 text-white"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center w-8 h-8 rounded-full  transition duration-200 bg-pink-500 text-white"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 mt-16 px-4">
          {/* partners 1 */}
          <div>
            <div className="">
              <p className="font-semibold">Zoho Authorized Partner</p>
              <div className="flex space-x-4">
                <div className="flex justify-center mt-2">
                  <Image
                    src="/image/auth.png"
                    alt="Logo"
                    className="h-full w-full object-cover"
                    height={500}
                    width={500}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* partners2 */}
          <div>
            <div className="">
              <p className="font-semibold mb-2">Bitrix Partners</p>
              <div className="flex justify-center mt-">
                <Image
                  src="/image/bitt-remove.png"
                  alt="Logo"
                  className=" object-cover md:h-[88px] h-auto w-full"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-2">Our Services </h3>
              <ul className="space-y-1 list-none text-sm">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Zoho Services
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Hubspot Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Bitrix Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Solution */}
          <div>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-2">Solution</h3>
              <ul className="space-y-1 list-none text-sm">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Zoho Bassed Solution
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Our Custom Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Hubspot Bassed solution
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Bitrix Bassed solution
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Industry */}
          <div>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-2">Industries</h3>
              <ul className="space-y-1 list-none text-sm">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Tour & Travel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Banking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    System Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Marketing & Sales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-7 border-t text-center justify-center border-gray-700 pt-6 ">
          <p>
            © {new Date().getFullYear()}
            Consulting(OPC) Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Trail;

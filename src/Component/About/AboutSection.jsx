import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faComputer,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  return (
    <div className=" bg-backgroundpri">
      <div className="container-wrapper py-10">
        <div className=" text-center mx-auto pb-3 ">
          <div className="">
            <span className="text-[#BC4242]  bg-[#f5decd] rounded-md px-3 py-1 text-xs">
              About us 4steps Digital
              {/* [#BC4242] */}
            </span>
          </div>
          <h2 className="text-xl md:text-3xl font-semibold mb-3">
            About <span className="text-gradient">4Steps Digital</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image for larger screens */}
          <div className="hidden md:flex  justify-center">
            <Image
              src="/image/yyy.png"
              alt="Tablet Mockup"
              width={500}
              height={500}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }} // optional
            />
          </div>

          <div className="flex flex-col  justify-center">
            <div className="text-[12px] md:text-base ">
              <p className="mb-4 ">
                Four Steps Digital Consulting(OPC) Pvt Ltd is a digital
                consulting agency in India. We are dedicated to honesty, hard
                work, and results, serving small to medium-sized businesses. Our
                primary focus is to transform businesses into digitally-driven
                organizations.
              </p>
              <p className="mb-4">
                We have high-performing teams that help small businesses achieve
                objectives like a optimizing digital presence and increasing
                operational efficiency
              </p>
            </div>

            {/* Image for mobile screens */}
            <div className="md:hidden flex justify-center mb-4">
              <Image
                src="/image/yyy.png"
                alt="Tablet Mockup"
                width={500}
                height={500}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center mb-2 space-x-2">
                <div className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full">
                  <FontAwesomeIcon icon={faPen} className="font" />
                </div>
                <p className="text-xs text-gray-700">Digital Consulting</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full">
                  <FontAwesomeIcon icon={faComputer} className="font" />
                </div>
                <p className="text-xs text-gray-700">
                  Expertise across the Spectrum
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full">
                  <FontAwesomeIcon icon={faHandshake} className="font" />
                </div>
                <p className="text-xs text-gray-700">
                  Proven Results and Partnership
                </p>
              </div>
            </div>

            <Link href="/about">
              {/* <button className="bg-orange-600  cursor-pointer border-none rounded-full text-sm text-white px-4 py-2"> */}
              <button className=" border text-sm md:text-base border-orange-500  hover:text-primary hover:bg-white  py-2 md:py-2 px-4 md:px-5 rounded-full bg-primary text-white">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

// trial both code

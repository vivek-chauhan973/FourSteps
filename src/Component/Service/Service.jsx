import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <div className="container mt-5">
      <div className="md:px-10 container">
        <div className="text-center pb-5">
          <div className="flex justify-center leading-7 pb-4 items-center">
            <div className="w-[2.8px] h-6 bg-primary mr-2"></div>
            <h2 className="text-xl">My Services</h2>
          </div>

          <h1 className="text-2xl font-semibold">
            Get The
            <span className="text-primary"> Concierge</span>
            <span className="block">Treatment With Every Service</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 px-10 sm:grid-cols-2  cursor-pointer lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="py-5 md:px-5 px-2 bg-white rounded-lg shadow-md text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto overflow-hidden rounded-full">
              <img
                aria-hidden="true"
                alt="strategy-icon"
                src="/image/ser.png"
                className="h-full w-full p-2 justify-center mx-auto items-center object-cover"
              />
            </div>
            <h3 className="md:text-xl text-lg py-2 font-semibold">
              Website Development
            </h3>
            <p className="md:text-md text-sm italic break-words">
              Website development is the creation and maintenance of websites to
              ensure they are functional, user-friendly, and visually appealing.
            </p>

            <div className="mt-6">
              <Link href="/websitepage">
                <button className="border border-orange-500 text-primary py-2 md:py-3 px-4 md:px-5 rounded-lg hover:bg-primary hover:text-white">
                 Know More
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="py-5 md:px-5 px-2 bg-white rounded-lg hover:bg-gray-200 shadow-md text-center">
            <div className="w-20 h-20 md:w-24 bg-gray-100 md:h-24 mx-auto overflow-hidden rounded-full">
              <img
                aria-hidden="true"
                alt="strategy-icon"
                src="/image/ser.png"
                className="h-full w-full p-2 justify-center mx-auto items-center object-cover"
              />
            </div>
            <h3 className="text-xl py-2 font-semibold">Zoho Services</h3>
            <p className="md:text-md text-sm italic break-words">
              Zoho services provide a comprehensive suite of cloud-based
              applications to streamline business operations and enhance
              productivity across various functions.
            </p>

            <div className="mt-6">
              <Link href="/zoho">
                <button className="border border-orange-500 text-primary py-2 md:py-3 px-4 md:px-5 rounded-lg hover:bg-primary hover:text-white">
                 Know More
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="py-5 md:px-5 px-2 bg-white rounded-lg hover:bg-gray-200 shadow-md text-center">
            <div className="w-20 h-20 md:w-24 bg-gray-100 md:h-24 mx-auto overflow-hidden rounded-full">
              <img
                aria-hidden="true"
                alt="strategy-icon"
                src="/image/ser.png"
                className="h-full w-full p-2 justify-center mx-auto items-center object-cover"
              />
            </div>
            <h3 className="text-xl py-2 font-semibold">
              Zoho Industry Solution
            </h3>
            <p className="md:text-md text-sm italic break-words">
              Zoho Industry Solutions provide tailored software applications
              that address the unique needs of different industries to enhance
              efficiency and productivity.
            </p>

            <div className="mt-6">
              <Link href="/zohoCrm">
                <button className="border border-orange-500 text-primary py-2 md:py-3 px-4 md:px-5 rounded-lg hover:bg-primary hover:text-white">
                 Know More
                </button>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="py-5 md:px-5 px-2 bg-white rounded-lg hover:bg-gray-200 shadow-md text-center">
            <div className="w-20 h-20 md:w-24 bg-gray-100 md:h-24 mx-auto overflow-hidden rounded-full">
              <img
                aria-hidden="true"
                alt="strategy-icon"
                src="/image/ser.png"
                className="h-full w-full p-2 justify-center mx-auto items-center object-cover"
              />
            </div>
            <h3 className="text-xl py-2 font-semibold">Digital Marketing</h3>
            <p className="md:text-md text-sm italic break-words">
              Digital marketing uses online channels and technologies to promote
              products and services, engage customers, and enhance brand
              visibility.
            </p>

            <div className="mt-6">
              <Link href="/digita">
                <button className="border border-orange-500 text-primary py-2 md:py-3 px-4 md:px-5 rounded-lg hover:bg-primary hover:text-white">
                 Know More
                </button>
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="py-5 md:px-5 px-2 bg-white rounded-lg hover:bg-gray-200 shadow-md text-center">
            <div className="w-20 h-20 md:w-24 bg-gray-100 md:h-24 mx-auto overflow-hidden rounded-full">
              <img
                aria-hidden="true"
                alt="strategy-icon"
                src="/image/ser.png"
                className="h-full w-full p-2 justify-center mx-auto items-center object-cover"
              />
            </div>
            <h3 className="text-xl py-2 font-semibold">Hubspot Services</h3>
            <p className="md:text-md text-sm italic break-words">
              HubSpot services offer a suite of tools for marketing, sales, and
              customer service to help businesses attract and engage customers
              effectively.
            </p>

            <div className="mt-6">
              <Link href="/hubspotIndex">
                <button className="border border-orange-500 text-primary py-2 md:py-3 px-4 md:px-5 rounded-lg hover:bg-primary hover:text-white">
                 Know More
                </button>
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="py-5 md:px-5 px-2 bg-white rounded-lg hover:bg-gray-200 shadow-md text-center">
            <div className="w-20 h-20 md:w-24 bg-gray-100 md:h-24 mx-auto overflow-hidden rounded-full">
              <img
                aria-hidden="true"
                alt="strategy-icon"
                src="/image/ser.png"
                className="h-full w-full p-2 justify-center mx-auto items-center object-cover"
              />
            </div>
            <h3 className="text-xl py-2 font-semibold">Other CRM Services</h3>
            <p className="md:text-md text-sm italic break-words">
              Other CRM services offer tools to manage customer relationships
              and streamline sales processes, enhancing communication and
              driving business growth.
            </p>

            <div className="mt-6">
              <Link href="/zohoCrm">
                <button className="border border-orange-500 text-primary py-2 md:py-3 px-4 md:px-5 rounded-lg hover:bg-primary hover:text-white">
                 Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

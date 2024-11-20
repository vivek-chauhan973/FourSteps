import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const fetchAllWebinar = async () => {
  return await (await fetch("/api/webinar/webinar", { method: "GET" })).json();
};
const MainData = ({ Heading }) => {
  const router = useRouter();
  const [allTypeData, setAllTypeData] = useState([]);

  useEffect(() => {
    fetchAllWebinar().then((res) => {
      console.log("all type data -----> ", res);
      setAllTypeData(res || []);
    });
  }, []);
  return (
    <>
      <div>
        {/* <div className="flex justify-center max-w-3xl pb-2 mx-auto items-center">
        <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         
          <div className="flex justify-center sm:col-span-2 md:col-span-1">
            <Image
              src="/image/try.jpeg" 
              alt="Service"
              height={220}
              width={220}
              className="rounded object-cover"
            />
          </div>

         
          <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
            <h2 className="text-lg font-bold">Webinar Title</h2>
            <div className="flex text-gray-800 font-normal mt-1">
              <span className="mr-2">key points...of webinar</span>
            </div>
            <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
              A paragraph is defined as “a group of sentences or a single
              sentence that forms a...
            </p>
          </div>

          
          <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
            <div className="text-center md:text-left">
              <div className="text-green-600 text-md py-1 font-semibold">
                Speaker...vivek chauhan
              </div>

              <div>
                <p className="text-gray-900 text-sm">Date: 02-10-2024</p>
                <p className="text-gray-900 text-sm">time: 40min</p>
              </div>
            </div>
            <Link href="webinar/pradhumn" className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded self-center md:self-start">
              VIEW DETAILS
            </Link>
          </div>
        </div>
       
      </div> */}

        {/*  for webinar section  done  */}
        {Heading === "webinar" &&
          allTypeData?.map((item, i) => (
            <div
              key={i}
              className="flex relative justify-center max-w-3xl mx-auto items-center  pb-3"
            >
              <div className="bg-white shadow-md items-center rounded-lg p-3 mt-5 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
                {(item?.selectType === "upcoming" ||
                  item?.selectType === "on-demond") && (
                  <div className="absolute top-2">
                    <div className="rounded-r-sm px-2 bg-black">
                      <p className="py-1 text-xs text-white">
                        Upcoming Webinars
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex justify-center sm:col-span-2 md:col-span-1">
                  <Image
                    src={item?.path}
                    alt="Service"
                    height={400}
                    width={400}
                    className="rounded object-cover"
                  />
                </div>

                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                  <h2 className="text-md capitalize font-semibold">
                    {item?.title}
                  </h2>
                  <div className="flex text-gray-800 font-normal mt-1">
                    <span className="mr-1 capitalize py-1 text-[14px] line-clamp-2">
                      {item?.subtitle}
                    </span>
                  </div>
                  <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                    {item?.description}
                  </p>
                </div>

                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                  <div className="text-center md:text-left">
                    <div className="text-green-600 capitalize text-md py-1 font-semibold">
                      {item?.speaker?.name}
                    </div>

                    <div>
                      <p className="text-gray-900 text-sm">
                        Date: {item?.date}
                      </p>
                      <p className="text-gray-900 text-sm">
                        time: {item?.time}
                      </p>
                    </div>
                  </div>
                  <Link href={`/resource/${Heading}/${item.title}`}>
                    <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        {/* for the product section  */}
        {Heading === "product" && (
          <div className="flex justify-center max-w-3xl pb-2 mx-auto items-center">
            <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex justify-center sm:col-span-2 md:col-span-1">
                <Image
                  src="/image/try.jpeg"
                  alt="Service"
                  height={220}
                  width={220}
                  className="rounded object-cover"
                />
              </div>

              <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                <h2 className="text-lg font-bold">Product Title</h2>
                <div className="flex text-gray-800 font-normal mt-1">
                  <span className="mr-2">key points...of Product</span>
                </div>
                <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                  A paragraph is defined as “a group of sentences or a single
                  sentence that forms a...
                </p>
              </div>

              <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                <div className="text-center md:text-left">
                  <div className="text-primary  text-lg base-1 py-2 font-semibold">
                    services: zoho consulting
                  </div>

                  <div>
                    <p className="text-gre-500  text-base">Industry:industry</p>
                  </div>
                </div>

                <Link href="product/pradhumnhhhh">
                  <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-semibold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                    VIEW DETAILS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/*  for the Case-studies section */}

        {Heading === "case-studies" && (
          <div className="flex justify-center max-w-3xl pb-2 mx-auto items-center">
            <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex justify-center sm:col-span-2 md:col-span-1">
                <Image
                  src="/image/try.jpeg"
                  alt="Service"
                  height={220}
                  width={220}
                  className="rounded object-cover"
                />
              </div>

              <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                <h2 className="text-lg font-bold">Case Studies Title</h2>
                <div className="flex text-gray-800 font-normal mt-1">
                  <span className="mr-2">key points...of Case Studies </span>
                </div>
                <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                  A paragraph is defined as “a group of sentences or a single
                  sentence that forms a...
                </p>
              </div>

              <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                <div className="text-center md:text-left">
                  <div className="text-primary  text-lg base-1 py-2 font-semibold">
                    services: zoho consulting
                  </div>

                  <div>
                    <p className="text-gre-500  text-base">Industry:industry</p>
                  </div>
                </div>
                <Link href="case-studies/chauhan">
                  <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                    VIEW DETAILS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/*  for the demoes and videos  */}
        <div>
          {Heading === "demo-videos" && (
            <div className="flex justify-center max-w-3xl pb-2 mx-auto items-center">
              <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex justify-center sm:col-span-2 md:col-span-1">
                  <Image
                    src="/image/try.jpeg"
                    alt="Service"
                    height={220}
                    width={220}
                    className="rounded object-cover"
                  />
                </div>

                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                  <h2 className="text-lg font-bold">Video title</h2>
                  <div className="flex text-gray-800 font-normal mt-1">
                    <span className="mr-2">key points...of videos </span>
                  </div>
                  <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                    A paragraph is defined as “a group of sentences or a single
                    sentence that forms a...
                  </p>
                </div>

                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                  <div className="text-center md:text-left">
                    <div className="text-green-600 text-md py-1 font-semibold">
                      video maker: xyz
                    </div>

                    <div>
                      <p className="text-gre-500  text-base">
                        Industry:industry
                      </p>
                    </div>
                  </div>
                  <Link href="demo-videos/chauhanjeeeeee">
                    <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        {/*  for the blog section   */}
        <div>
          {Heading === "blog" && (
            <div className="flex justify-center max-w-3xl pb-2 mx-auto items-center">
              <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex justify-center sm:col-span-2 md:col-span-1">
                  <Image
                    src="/image/try.jpeg"
                    alt="Service"
                    height={220}
                    width={220}
                    className="rounded object-cover"
                  />
                </div>

                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                  <h2 className="text-lg font-bold">Blog title</h2>
                  <div className="flex text-gray-800 font-normal mt-1">
                    <span className="mr-2">key points...of blog </span>
                  </div>
                  <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                    A paragraph is defined as “a group of sentences or a single
                    sentence that forms a...
                  </p>
                </div>

                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                  <div className="text-center md:text-left">
                    <div className="text-green-600 text-md py-1 font-semibold">
                      Blog Writer name :xyz
                    </div>

                    <div>
                      <p className="text-gray-900 text-sm">Date: 02-10-2024</p>
                    </div>
                  </div>
                  <Link href="blog/chauhanjeeeeee">
                    <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainData;

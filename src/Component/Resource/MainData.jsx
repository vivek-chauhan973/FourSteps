import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

//  for the webinar section api calling
const fetchAllWebinar = async () => {
  return await (await fetch("/api/webinar/webinar", { method: "GET" })).json();
};

// for the product section api calling

const fetchAllProduct = async () => {
  try {
    const response = await fetch("/api/product/product", { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
};
// api calling  for the case&Studies

const fetchAllCaseStudies = async () => {
  try {
    const response = await fetch("/api/casestudy/casestudy", { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching the case study data", error);
    return [];
  }
};

const fetchBlog = async () => {
  try {
    const response = await fetch("/api/blog/blogdetail", { method: "GET" });
    const data = await response.json();
    console.log("++++++++===============>>>>>>>>data blog", data);
    return data;
  } catch (error) {
    console.error("error fetching the case study data", error);
  }
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

  //  for the product section here
  const [allProductData, setAllProductData] = useState([]);

  useEffect(() => {
    fetchAllProduct().then((res) => {
      // console.log("API Response:", res);
      setAllProductData(res.data || res); // Adjust based on API response structure
    });
  }, []);

  // for case study
  const [allCaseStudy, setAllCaseStudy] = useState([]);

  useEffect(() => {
    fetchAllCaseStudies().then((res) => {
      // console.log("API Response:", res);
      setAllCaseStudy(res.data || res);
    });
  }, []);
  //  for the blog section
  const [allBlog, setAllBlog] = useState([]);
  useEffect(() => {
    fetchBlog().then((res) => {
      console.log("API Response:", res);
      setAllBlog(res.data || res);
    });
  }, []);
  return (
    <>
      <div>
        {/*  for webinar section  done  */}
        {Heading === "webinar" &&
          allTypeData?.map((item, i) => (
            <div
              key={i}
              className="flex relative justify-center max-w-3xl mx-auto items-center  pb-3"
            >
              <div className="bg-white shadow-md items-center rounded-lg p-3  h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
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
                    <div className="text-primary capitalize text-md py-1 font-semibold">
                      {item?.speaker?.name}
                    </div>

                    <div className=" ">
                      <p className="text-gray-900 text-sm">
                        Date: {item?.date}
                      </p>
                      <p className="text-gray-900 text-sm">
                        time: {item?.time}min
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
        {Heading === "product" &&
          allProductData?.length > 0 &&
          allProductData?.map((product, i) => (
            <div
              key={i}
              className="flex justify-center max-w-3xl pb-3 mx-auto items-center"
            >
              <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex justify-center sm:col-span-2 md:col-span-1">
                  <Image
                    src={product?.path}
                    alt="Service"
                    height={400}
                    width={400}
                    className="rounded object-cover"
                  />
                </div>

                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                  <h2 className="text-md capitalize font-semibold">
                    {product?.title}
                  </h2>
                  <div className="flex text-gray-800 font-normal mt-1">
                    <span className="mr-1 capitalize py-1 text-[14px] line-clamp-2">
                      {product?.subtitle}
                    </span>
                  </div>
                  <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                    {product?.description}
                  </p>
                </div>

                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                  <div className="text-center md:text-left">
                    <div className="text-primary   text-base  base-1 py-2 font-semibold">
                      {/* services: zoho consulting */}
                      {product.service}
                    </div>

                    <div>
                      <p className="text-gre-500    text-base">
                        {/* Industry:industry */}
                        {product?.industry}
                      </p>
                    </div>
                  </div>

                  <Link href={`/resource/${Heading}/${product.title}`}>
                    <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-semibold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        {/*  for the Case-studies section */}

        {Heading === "case-studies" &&
          allCaseStudy?.length > 0 &&
          allCaseStudy?.map((casestudy, i) => (
            <div
              key={i}
              className="flex justify-center max-w-3xl pb-2 mx-auto items-center"
            >
              <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex justify-center sm:col-span-2 md:col-span-1">
                  <Image
                    src={casestudy?.path}
                    alt="Service"
                    height={220}
                    width={220}
                    className="rounded object-cover"
                  />
                </div>

                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                  <h2 className="text-md capitalize font-semibold">
                    {casestudy?.title}
                  </h2>
                  <div className="flex text-gray-800 font-normal mt-1">
                    <span className="mr-1 capitalize py-1 text-[14px] line-clamp-2">
                      {casestudy?.subtitle}
                    </span>
                  </div>
                  <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                    {casestudy?.description}
                  </p>
                </div>

                <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                  <div className="text-center md:text-left">
                    <div className="text-primary   text-base  base-1 py-2 font-semibold">
                      {/* services: zoho consulting */}
                      {casestudy.service}
                    </div>

                    <div>
                      <p className="text-gre-500    text-base">
                        {/* Industry:industry */}
                        {casestudy?.industry}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/resource/${Heading}/${casestudy.title
                      ?.split(" ")
                      ?.join("-")}`}
                  >
                    <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

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
          {Heading === "blog" &&
            allBlog?.map((blog, i) => (
              <div
                key={i}
                className="flex justify-center max-w-3xl pb-2 mx-auto items-center"
              >
                <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex justify-center sm:col-span-2 md:col-span-1">
                    <Image
                      src={blog?.videoPath}
                      alt="Service"
                      height={220}
                      width={220}
                      className="rounded object-cover"
                    />
                  </div>

                  <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
                    <h2 className="text-md capitalize font-semibold">
                      {blog?.title}
                    </h2>
                    <div className="flex text-gray-800 font-normal mt-1">
                      <span className="mr-1 capitalize py-1 text-[14px] line-clamp-2">
                        {blog?.subTitle}
                      </span>
                    </div>
                    <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
                      {blog?.description}
                    </p>

                    <div>
                      <p className="text-gray-900 pt-3 text-sm">
                        Date: 02-10-2024
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
                    <div className="text-center md:text-left"></div>
                    <Link
                      href={`/resource/${Heading}/${blog.title
                        ?.split(" ")
                        ?.join("-")}`}
                    >
                      <button className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none">
                        VIEW DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MainData;

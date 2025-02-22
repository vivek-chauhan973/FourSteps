import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
const fetchAllWebinar = async () => {
  return await (await fetch("/api/webinar/webinar", { method: "GET" })).json();
};
const SuggestWebinar = ({ filterSuggestedPackage }) => {
  const router = useRouter();
  const [allTypeData, setAllTypeData] = useState([]);

  useEffect(() => {
    fetchAllWebinar().then((res) => {
      // console.log("all type data -----> ", res);
      setAllTypeData(res || []);
    });
  }, []);

  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Enable mouse scroll for small devices
        carouselRef.current.style.overflowX = "scroll";
      } else {
        // Disable mouse scroll for medium and larger devices
        carouselRef.current.style.overflowX = "hidden";
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" bg-white">
      <div class="text-center  py-10">
        <h4 class="text-lg mb-0  text-heading md:mb-5 md:text-xl lg:text-[30px] font-semibold    max-w-3xl mx-auto">
          Suggested Webinars
        </h4>
        <h2 class="text-xs mb-0 text-gray-900  md:text-lg  font-medium    max-w-3xl mx-auto">
          Dont miss out on the opportunity to expand your skillset with our
          latest webinars.
        </h2>
      </div>

      <div className="carousel-container relative container-wrapper ">
        <div className="carousel gap-5" ref={carouselRef}>
          {filterSuggestedPackage?.length > 0 &&
            filterSuggestedPackage?.map((items, i) => {
              return (
                <div
                  key={i}
                  className="carousel-item w-60 md:w-80 mb-11  rounded-md"
                >
                  <div className="shadow-md rounded-lg overflow-hidden">
                    <div className="relative">
                      <div className=" w-full h-52">
                        <Image
                          className=" relative  object-cover "
                          layout="fill"
                          src={items?.path}
                          alt="images"
                        />
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3 px-3 pt-3 pb-5 bg-white">
                      <div className="flex gap-3 w-full justify-between">
                        {/* <p className="font-semibold md:text-base text-sm text-black w-[20%]">
                          {items?.date}
                        </p> */}
                        {/* <p className="font-semibold md:text-base text-sm text-black w-[80%]">Started From</p> */}
                      </div>
                      <div className="w-full md:h-7 h-8">
                        <p className="md:text-lg text-base text-heading font-semibold">
                          {items?.title}
                        </p>
                      </div>
                      <p className="text-sm line-clamp-3 mb-4">
                        {items?.description}
                      </p>
                      <div>
                        <div className="flex gap-5 items-center justify-between pr-4 pt-1">
                          <Link
                            href={`/resource/webinar/${items?.title}`}
                            className="badge text-sm px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-orange-500 to-red-500"
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* end is here code */}
        </div>
        {filterSuggestedPackage?.length > 0 && (
          <div className=" hidden md:block absolute top-2/4 -translate-y-[80px] justify-between w-full">
            <div className=" justify-between flex pl-2 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollPrev}
                className="h-5 w-5 p-2 rounded-full  bg-black/50 hover:bg-black text-white rotate-180"
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollNext}
                className="h-5 w-5 p-2 rounded-full bg-black/50 hover:bg-black text-white"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestWebinar;

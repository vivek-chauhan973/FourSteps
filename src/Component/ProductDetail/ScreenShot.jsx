import React, { useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const ScreenShot = ({ screenshotdata }) => {
  const carouselRef = useRef(null);

  // Extract screenshots array from screenshotdata
  const screenshots = Array.isArray(screenshotdata?.screenshot)
    ? screenshotdata.screenshot
    : [];

  // Log extracted screenshots
  // console.log("Extracted Screenshots:", screenshots);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth, // Scroll by the width of the container
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth, // Scroll back by the width of the container
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        carouselRef.current.style.overflowX = "scroll";
      } else {
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
    <div className="container">
      <div className="max-w-xl">
        {/* <h3 className="font-semibold py-3">Some ScreenShots here</h3> */}
      </div>
      <div className="md:grid md:grid-cols-[730px,auto]">
        <div className="carousel-container relative">
          <div
            className="carousel flex gap-5 overflow-hidden"
            ref={carouselRef}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {/* Loop over screenshots */}
            {screenshots.length > 0 ? (
              screenshots.map((item) => (
                <div
                  key={item._id}
                  className="shrink-0 relative w-full rounded-lg overflow-hidden"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <Image
                    className="relative object-cover h-96  w-full"
                    height={200}
                    width={300}
                    src={item.path} // Use the image path from the API
                    alt={item.title || "Screenshot"}
                  />

                  <div className="absolute bottom-0 px-5 py-2 w-full bg-gradient-to-t from-black/100 to-transparent rounded-md">
                    <p className="text-xl text-white">{item.title}</p>
                    <div className="line-clamp-2 text-para text-white rounded-md">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No screenshots available</p>
            )}
          </div>
          {/* Navigation Arrows */}
          <div className="hidden md:block relative top-[-365px] -translate-y-[60px] justify-between w-full">
            <div className="absolute right-2 gap-3 flex pl-2">
              <button
                onClick={scrollPrev}
                className="rounded-full bg-black/50 hover:bg-black p-2 text-white rotate-180"
              >
                <IoIosArrowForward size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="rounded-full bg-black/50 hover:bg-black p-2 text-white"
              >
                <IoIosArrowForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenShot;

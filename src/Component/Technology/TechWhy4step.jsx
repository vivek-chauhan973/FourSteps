import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const TechWhy4step = () => {
  const carouselRef = useRef(null);

  // Static data
  const staticData = {
    partnersData: [
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
      { src: "/image/1.png", alt: "Partner 1" },
    ],
    overviewData: [
      { content: "Overview Point 1" },
      { content: "Overview Point 2" },
      { content: "Overview Point 3" },
      { content: "Overview Point 4" },
    ],
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" }); // Loop back to start
      } else {
        carouselRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const { scrollLeft } = carouselRef.current;
      if (scrollLeft === 0) {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollWidth,
          behavior: "smooth",
        }); // Loop back to end
      } else {
        carouselRef.current.scrollBy({
          left: -carouselRef.current.clientWidth,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        if (window.innerWidth <= 768) {
          carouselRef.current.style.overflowX = "hidden";
        } else {
          carouselRef.current.style.overflowX = "hidden";
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="my-container mx-auto">
        <div className="relative flex items-center">
          {/* Left button */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex  px-3.5 rounded-full h-10 w-12 text-white items-center justify-center bg-black/70 transition duration-300"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          {/* Image section */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-hidden scroll-smooth w-full md:w-auto"
          >
            {staticData.partnersData.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-24 sm:h-20 md:w-28 md:h-28 flex justify-center items-center"
              >
                <Image
                  height={200}
                  width={200}
                  src={item.src}
                  alt={item.alt || "alt section"}
                  className="w-full h-32 rounded object-contain"
                />
              </div>
            ))}
          </div>
          {/* Right button */}
          <button
            onClick={scrollNext}
            className="hidden md:flex px-3.5 rounded-full h-10 w-12 text-white items-center justify-center bg-black/70 transition duration-300"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>

      <div className="pl-2 py-5">
        <ul className="custom-list">
          {staticData.overviewData.map((item, i) => (
            <li key={i} className="md:text-base text-sm">
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TechWhy4step;

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Why4stepSolution = () => {
  const carouselRef = useRef(null);

  // Static data (replace this with your actual static data structure)
  const partnersData = [
    "/image/1.png",
    "/image/2.png",
    "/image/3.png",
    "/image/4.png",
    "/image/1.png",
    "/image/ab.webp",
    "/image/about.jpg",
    "/image/123.png",
    "/image/bg.jpg",
    "/images/partner2.png",
    "/image/3.png",
  ];

  const overviewData = [
    { content: "<strong>Step 1:</strong> Analyze the market" },
    { content: "<strong>Step 2:</strong> Develop a strategy" },
    { content: "<strong>Step 3:</strong> Implement the solution" },
    { content: "<strong>Step 4:</strong> Review the results" },
    { content: "<strong>Step 4:</strong> Review the results" },
    { content: "<strong>Step 4:</strong> Review the results" },
    { content: "<strong>Step 4:</strong> Review the results" },
    { content: "<strong>Step 4:</strong> Review the results" },
    { content: "<strong>Step 4:</strong> Review the results" },
    { content: "<strong>Step 4:</strong> Review the results" },
  ];

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
        <div className="relative    flex items-center gap-5">
          {/* left button */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex rounded-full h-8 w-16 bg-black/50 text-white items-center justify-center hover:bg-black/70 transition duration-300"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>

          {/* image section */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-hidden scroll-smooth w-full md:w-auto"
          >
            {partnersData?.length > 0 &&
              partnersData?.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full  sm:w-24 sm:h-20 md:w-28 md:h-28 flex justify-center items-center"
                >
                  <Image
                    height={200}
                    width={200}
                    src={item}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-32 rounded object-cover"
                  />
                </div>
              ))}
          </div>

          {/* right button */}
          <button
            onClick={scrollNext}
            className="hidden md:flex rounded-full h-8 w-16 bg-black/50 text-white items-center justify-center hover:bg-black/70 transition duration-300"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>

      <div className="pl-2 py-5">
        <ul className="custom-list">
          {overviewData?.length > 0 &&
            overviewData?.map((item, i) => (
              <li key={i} className="md:text-base text-sm">
                <p dangerouslySetInnerHTML={{ __html: item?.content }} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Why4stepSolution;

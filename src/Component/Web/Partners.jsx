// import React, { useRef, useEffect } from "react";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// const Partners = () => {
//   const data = [
//     { image: "/image/1.png", alt: "Project 1" },
//     { image: "/image/bg.jpg", alt: "Project 2" },
//     { image: "/image/5.png", alt: "Project 3" },
//     { image: "/image/bg.jpg", alt: "Project 4" },
//     { image: "/image/ab.webp", alt: "Project 5" },
//     { image: "/image/bg.jpg", alt: "Project 6" },
//     { image: "/image/about.jpg", alt: "Project 7" },
//     { image: "/image/bit.jpg", alt: "Project 8" },
//     { image: "/image/bg.jpg", alt: "Project 9" },
//   ];

//   const carouselRef = useRef(null);

//   const scrollNext = () => {
//     if (carouselRef.current) {
//       const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
//       if (scrollLeft + clientWidth >= scrollWidth) {
//         carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         carouselRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
//       }
//     }
//   };

//   const scrollPrev = () => {
//     if (carouselRef.current) {
//       const { scrollLeft } = carouselRef.current;
//       if (scrollLeft === 0) {
//         carouselRef.current.scrollTo({
//           left: carouselRef.current.scrollWidth,
//           behavior: "smooth",
//         });
//       } else {
//         carouselRef.current.scrollBy({
//           left: -carouselRef.current.clientWidth,
//           behavior: "smooth",
//         });
//       }
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (carouselRef.current) {
//         carouselRef.current.style.overflowX =
//           window.innerWidth <= 768 ? "scroll" : "hidden";
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(scrollNext, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className=" container-wrapper mx-auto py-10  mt-10">
//       <div className="  text-center pb-6">
//         <h2 className="   py-4 md:px-40 px-4  text-base   md:text-lg">
//           Since 1989. For millions of users. We deliver top-quality, secure, and
//           adaptable digital solutions for the needs of today and the
//           opportunities of tomorrow.
//         </h2>
//       </div>
//       <div className="relative flex   items-center">
//         {/* Left Arrow */}
//         <button
//           onClick={scrollPrev}
//           className="absolute left-0  z-10 hidden md:flex rounded-full h-12 w-12 bg-gray-200 p-2 text-black/50 items-center justify-center"
//         >
//           <FontAwesomeIcon icon={faAngleLeft} className=" text-[20px]" />
//         </button>

//         {/* Carousel */}
//         <div
//           ref={carouselRef}
//           className="flex gap-20 overflow-hidden scroll-smooth max-w-4xl  mx-auto justify-center items-center px-5"
//         >
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-center items-center"
//             >
//               <Image
//                 height={200}
//                 width={200}
//                 src={item.image}
//                 alt={item.alt}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={scrollNext}
//           className="absolute right-0 z-10 hidden md:flex rounded-full h-12 w-12 bg-gray-200 p-2 text-black/50 items-center justify-center"
//         >
//           <FontAwesomeIcon icon={faAngleRight} className=" text-[20px]" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Partners;

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Partners = () => {
  const data = [
    { image: "/image/1.png", alt: "Project 1" },
    { image: "/image/bg.jpg", alt: "Project 2" },
    { image: "/image/5.png", alt: "Project 3" },
    { image: "/image/bg.jpg", alt: "Project 4" },
    { image: "/image/ab.webp", alt: "Project 5" },
    { image: "/image/bg.jpg", alt: "Project 6" },
    { image: "/image/about.jpg", alt: "Project 7" },
    { image: "/image/bit.jpg", alt: "Project 8" },
    { image: "/image/bg.jpg", alt: "Project 9" },
  ];

  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
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
        });
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
        carouselRef.current.style.overflowX =
          window.innerWidth <= 768 ? "hidden" : null;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(scrollNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-wrapper  mx-auto md:py-10    pt-10  md:mt-10 px-4">
      {/* Title Section */}
      <div className="text-center ">
        <h2 className="text-base md:text-lg mb-0 md:mb-10 lg:text-xl font-medium text-gray-600  max-w-3xl mx-auto">
          Since 1989. For millions of users. We deliver top-quality, secure, and
          adaptable digital solutions for the needs of today and the
          opportunities of tomorrow.
        </h2>
      </div>

      {/* Carousel Section */}
      <div className="relative  flex items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute hidden  left-0 z-10  md:flex items-center justify-center h-12 w-12 bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-700 shadow-md transition-all"
        >
          <FontAwesomeIcon icon={faAngleLeft} className="text-lg" />
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex md:gap-20 gap-5  overflow-hidden  max-w-full lg:max-w-4xl md:max-w-3xl mx-auto justify-center items-center px-4"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-center items-center"
            >
              <Image
                height={200}
                width={200}
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="absolute hidden right-0  z-10  md:flex items-center justify-center h-12 w-12 bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-700 shadow-md transition-all"
        >
          <FontAwesomeIcon icon={faAngleRight} className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Partners;

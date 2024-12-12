// import React, { useRef, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

// const Carousel = () => {
//   const data = [
//     { image: "/image/1.png", alt: "Project 1" },
//     { image: "/image/bg.jpg", alt: "Project 2" },
//     { image: "/image/5.png", alt: "Project 3" },
//     { image: "/image/bg.jpg", alt: "Project 4" },
//     { image: "/image/ab.webp", alt: "Project 5" },
//     { image: "/image/bg.jpg", alt: "Project 5" },
//     { image: "/image/about.jpg", alt: "Project 5" },
//     { image: "/image/bit.jpg", alt: "Project 5" },
//     { image: "/image/bg.jpg", alt: "Project 5" },
//   ];

//   const carouselRef = useRef(null);

//   const scrollNext = () => {
//     if (carouselRef.current) {
//       const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
//       if (scrollLeft + clientWidth >= scrollWidth) {
//         carouselRef.current.scrollTo({ left: 0, behavior: "smooth" }); // Loop back to start
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
//         }); // Loop back to end
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
//         if (window.innerWidth <= 768) {
//           carouselRef.current.style.overflowX = "scroll";
//         } else {
//           carouselRef.current.style.overflowX = "hidden";
//         }
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       scrollNext();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className=" my-5 container mx-auto">
//         <h2 className=" font-semibold text-primary text-3xl pb-5">
//           What Makes 4 Steps Reliable Partner
//         </h2>
//         <div className="relative">
//           {/* Carousel */}
//           <div
//             ref={carouselRef}
//             className="flex gap-6 overflow-hidden scroll-smooth"
//           >
//             {data.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-28   h-28 flex justify-center items-center"
//               >
//                 <Image
//                   height={200}
//                   width={200}
//                   src={item.image}
//                   alt={item.alt}
//                   className="w-full h-32 rounded sm:w-24 sm:h-20 md:h-24 object-cover "
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Scroll Buttons */}
//           <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 w-full px-4 justify-between">
//             <button
//               onClick={scrollPrev}
//               className="rounded-full h-10 w-10 bg-black/50  p-2 text-white"
//             >
//               <FontAwesomeIcon icon={faAngleLeft} />
//             </button>
//             <button
//               onClick={scrollNext}
//               className="rounded-full h-10 w-10 bg-black/50  p-2 text-white"
//             >
//               <FontAwesomeIcon icon={faAngleRight} />
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* some key points here  */}
//       <div className="pl-2 py-5">
//         <ul className="custom-list">
//           <li>
//             <b>Since 1989</b> in software consulting and engineering.
//           </li>
//           <li>Since 2012 in IT for insurance.</li>
//           <li>Experience in delivering B2B and B2C insurance solutions.</li>
//           <li>
//             Since 2003 in cybersecurity to ensure world-class protection of
//             insurance software.
//           </li>
//           <li>
//             In-house compliance experts with 5 20 years of experience to
//             guarantee insurance software compliance with FIO, NAIC, SOX, CCPA,
//             NYDFS, GDPR, SAMA, IA, and other required legal standards.
//           </li>
//           <li>
//             For the third year in a row, IAOP features ScienceSoft in its Global
//             Outsourcing 100, the list of the most trusted outsourcing service
//             providers.
//           </li>
//           <li>
//             For the third year in a row, IAOP features ScienceSoft in its Global
//             Outsourcing 100, the list of the most trusted outsourcing service
//             providers.
//           </li>
//         </ul>
//       </div>

//     </>
//   );
// };

// export default Carousel;

import React, { useRef, useEffect } from "react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const Carousel = () => {
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
          carouselRef.current.style.overflowX = "scroll";
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
  useEffect(() => {
    const interval = setInterval(() => {
      scrollPrev();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="my-5 container mx-auto">
        <h2 className="font-semibold text-primary text-3xl pb-5">
          What Makes 4 Steps Reliable Partner
        </h2>
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className=" hidden md:block rounded-full h-10 w-12 bg-black/50 p-2 text-white  items-center justify-center "
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-hidden scroll-smooth"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 h-28 flex justify-center items-center"
              >
                <Image
                  height={200}
                  width={200}
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-32 rounded sm:w-24 sm:h-20 md:h-24 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="rounded-full hidden md:block h-10 w-12 bg-black/50 p-2 text-white  items-center justify-center ml-4"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className="pl-2 py-5">
        <ul className="custom-list">
          <li>
            <b>Since 1989</b> in software consulting and engineering.
          </li>
          <li>Since 2012 in IT for insurance.</li>
          <li>Experience in delivering B2B and B2C insurance solutions.</li>
          <li>
            Since 2003 in cybersecurity to ensure world-class protection of
            insurance software.
          </li>
          <li>
            In-house compliance experts with 5 20 years of experience to
            guarantee insurance software compliance with FIO, NAIC, SOX, CCPA,
            NYDFS, GDPR, SAMA, IA, and other required legal standards.
          </li>
          <li>
            For the third year in a row, IAOP features ScienceSoft in its Global
            Outsourcing 100, the list of the most trusted outsourcing service
            providers.
          </li>
          <li>
            For the third year in a row, IAOP features ScienceSoft in its Global
            Outsourcing 100, the list of the most trusted outsourcing service
            providers.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Carousel;

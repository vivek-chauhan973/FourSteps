// import React, { useRef, useEffect } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import Image from "next/image";

// const Product = () => {
//   const carouselRef = useRef(null);

//   const scrollNext = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: carouselRef.current.clientWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   const scrollPrev = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: -carouselRef.current.clientWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         carouselRef.current.style.overflowX = "scroll";
//       } else {
//         carouselRef.current.style.overflowX = "hidden";
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Initialize on mount

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className=" conatiner">
//       <div className=" max-w-xl">
//         <h3 className=" font-semibold">Some products here </h3>
//         <p className=" text-sm pb-6">
//           The paragraph form refers to its overall structure, which is a group
//           of sentences focusing on a single topic. There are three main parts of
//           a paragraph: Topic sentence - it has the main idea. Supporting
//           sentence - details that relate to and support the
//         </p>
//       </div>
//       <div className="md:grid md:grid-cols-[730px,auto]">
//         <div className="carousel-container relative">
//           <div
//             className="carousel gap-5 overflow-hidden"
//             ref={carouselRef}
//             style={{ scrollSnapType: "x mandatory" }}
//           >
//             {/* Start Carousel Items */}
//             <div
//               className="shrink-0 relative max-w-[290px] rounded-lg overflow-hidden"
//               style={{ scrollSnapAlign: "start" }}
//             >
//               <Image
//                 className="relative object-contain h-96 w-full"
//                 height={200}
//                 width={300}
//                 src="/image/gen.jpeg"
//                 alt=""
//               />
//               <div className="absolute bottom-0 px-5 py-2">
//                 <p className="text-xl text-white">Self Drive welcome</p>
//                 <div className="line-clamp-2 text-para text-white rounded-md">
//                   <p>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Atque aperiam exercitationem aliquid!
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="shrink-0 relative max-w-[290px] rounded-lg overflow-hidden"
//               style={{ scrollSnapAlign: "start" }}
//             >
//               <Image
//                 className="relative object-cover h-96 w-full"
//                 height={200}
//                 width={300}
//                 src="/image/ab.webp"
//                 alt=""
//               />
//               <div className="absolute bottom-0 px-5 py-2">
//                 <p className="text-xl text-white">Self Drive</p>
//                 <div className="line-clamp-2 text-para text-white rounded-md">
//                   <p>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Atque aperiam exercitationem aliquid!
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="shrink-0 relative max-w-[290px] rounded-lg overflow-hidden"
//               style={{ scrollSnapAlign: "start" }}
//             >
//               <Image
//                 className="relative object-cover h-96 w-full"
//                 height={200}
//                 width={300}
//                 src="/image/try.jpeg"
//                 alt=""
//               />
//               <div className="absolute bottom-0 px-5 py-2">
//                 <p className="text-xl text-white">Self Drive</p>
//                 <div className="line-clamp-2 text-para text-white rounded-md">
//                   <p>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Atque aperiam exercitationem aliquid!
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="shrink-0 relative max-w-[290px] rounded-lg overflow-hidden"
//               style={{ scrollSnapAlign: "start" }}
//             >
//               <Image
//                 className="relative object-cover h-96 w-full"
//                 height={200}
//                 width={300}
//                 src="/image/try.jpeg"
//                 alt=""
//               />
//               <div className="absolute bottom-0 px-5 py-2">
//                 <p className="text-xl text-white">Self Drive</p>
//                 <div className="line-clamp-2 text-para text-white rounded-md">
//                   <p>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Atque aperiam exercitationem aliquid!
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* End Carousel Items */}
//           </div>
//           {/* Navigation Arrows */}
//           <div className="hidden md:block relative top-[-365px]  -translate-y-[60px] justify-between w-full">
//             <div className="absolute right-2 gap-3 flex pl-2">
//               <button
//                 onClick={scrollPrev}
//                 className="rounded-full bg-black/50 hover:bg-black p-2 text-white rotate-180"
//               >
//                 <IoIosArrowForward size={20} />
//               </button>
//               <button
//                 onClick={scrollNext}
//                 className="rounded-full bg-black/50 hover:bg-black p-2 text-white"
//               >
//                 <IoIosArrowForward size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
import React, { useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const Product = () => {
  const carouselRef = useRef(null);

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
        <h3 className="font-semibold">Some products here</h3>
        <p className="text-sm pb-6">
          The paragraph form refers to its overall structure, which is a group
          of sentences focusing on a single topic. There are three main parts of
          a paragraph: Topic sentence - it has the main idea. Supporting
          sentence - details that relate to and support the
        </p>
      </div>
      <div className="md:grid md:grid-cols-[730px,auto]">
        <div className="carousel-container relative">
          <div
            className="carousel gap-5 overflow-hidden"
            ref={carouselRef}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {/* Start Carousel Items */}
            <div
              className="shrink-0 relative w-full rounded-lg overflow-hidden" // Full width of the container
              style={{ scrollSnapAlign: "start" }}
            >
              <Image
                className="relative object-cover h-96 w-full"
                height={200}
                width={300}
                src="/image/bg.jpg"
                alt=""
              />
              <div className="absolute bottom-5 px-5 py-2">
                <p className="text-xl text-white">Self Drive</p>
                <div className="line-clamp-2 text-para text-white rounded-md">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque aperiam exercitationem aliquid!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="shrink-0 relative w-full rounded-lg overflow-hidden" // Full width of the container
              style={{ scrollSnapAlign: "start" }}
            >
              <Image
                className="relative object-cover h-96 w-full"
                height={200}
                width={300}
                src="/image/ab.webp"
                alt=""
              />
              <div className="absolute bottom-10 px-5 py-2">
                <p className="text-xl text-white">Self Drive</p>
                <div className="line-clamp-2 text-para text-white rounded-md">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque aperiam exercitationem aliquid!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="shrink-0 relative w-full rounded-lg overflow-hidden" // Full width of the container
              style={{ scrollSnapAlign: "start" }}
            >
              <Image
                className="relative object-cover h-96 w-full"
                height={200}
                width={300}
                src="/image/try.jpeg"
                alt=""
              />
              <div className="absolute bottom-0 px-5 py-2">
                <p className="text-xl text-white">Self Drive</p>
                <div className="line-clamp-2 text-para text-white rounded-md">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque aperiam exercitationem aliquid!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="shrink-0 relative w-full rounded-lg overflow-hidden" // Full width of the container
              style={{ scrollSnapAlign: "start" }}
            >
              <Image
                className="relative object-cover h-96 w-full"
                height={200}
                width={300}
                src="/image/try.jpeg"
                alt=""
              />
              <div className="absolute bottom-0 px-5 py-2">
                <p className="text-xl text-white">Self Drive</p>
                <div className="line-clamp-2 text-para text-white rounded-md">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque aperiam exercitationem aliquid!
                  </p>
                </div>
              </div>
            </div>
            {/* End Carousel Items */}
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

export default Product;

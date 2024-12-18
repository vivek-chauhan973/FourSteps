import Image from "next/image";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Trail = () => {
  const [zoomOut, setZoomOut] = useState(false); // Track the zoom-out state

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation occurs only once when element comes into view
    });
  }, []);

  // Dynamic data
  const data = [
    {
      title: "Zoconut",
      content: `"What really turned things around for our brand was when we started working with Zaptiv. Their SEO and Creative Design expertise really helped to keep our online visibility and engagement at strong multipliers. Their team is creative, responsive, and always goes overboard. We've seen great development since partnering with them and can't be happier with the results."`,
      imageUrl: "/image/m1.avif",
      name: "Paras Garg",
      designation: "Co-Founder Zoconut",
    },
    {
      title: "ParleG",
      content: `"Thanks a lot! What really   turned things around for our brand was when we started working with Zaptiv. Their SEO and Creative Design expertise really helped to keep our online visibility and engagement at strong multipliers. Their team is creative, responsive, and always goes overboard. We've seen great development since partnering with them and can't be happier with the results."`,
      imageUrl: "/image/m2.avif",
      name: "Rakesh",
      designation: "CEO ParleG",
    },
    {
      title: "Xyz",
      content: `"Thanks a lot! What really   turned things around for our brand was when we started working with Zaptiv. Their SEO and Creative Design expertise really helped to keep our online visibility and engagement at strong multipliers. Their team is creative, responsive, and always goes overboard. We've seen great development since partnering with them and can't be happier with the results."`,
      imageUrl: "/image/m3.avif",
      name: "Rakesh",
      designation: "CEO Abcd ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Track which data item is displayed

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Cycle through the data array
      setZoomOut(false); // Reset zoom-out effect before starting the next one
      setTimeout(() => {
        setZoomOut(true); // Trigger the zoom-out effect after 2 seconds
      }, 2000); // Start zoom-out after 2 seconds
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [data.length]);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS when the content changes
  }, [currentIndex]);

  const currentItem = data[currentIndex]; // Get the currently displayed item

  return (
    // <div className=" container h-full">
    //   <div className="flex mx-auto flex-col items-center justify-center  bg-gray-900 text-white">
    //     <h2 className="md:text-4xl text-lg text-white font-bold tracking-wide mb-3">
    //       Testimonial
    //     </h2>

    //     <div className="flex flex-col md:flex-row items-center justify-center w-full p-4 md:p-8">
    //       {/* Image Section */}
    //       <div
    //         className={`md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0 ${
    //           zoomOut ? "zoom-out" : ""
    //         }`}
    //       >
    //         <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] max-w-full sm:max-w-[70vw] md:max-w-[40vw] relative overflow-hidden">
    //           <Image
    //             src={currentItem.imageUrl}
    //             alt={currentItem.name}
    //             className="object-cover hover:rounded-lg rounded-lg w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
    //             height={200}
    //             width={200}
    //           />
    //         </div>
    //       </div>

    //       {/* Content Section */}
    //       <div
    //         className="w-full md:w-1/2 text-center md:text-left border-t border-r border-b  p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg"
    //         data-aos="fade-up" // Fade-up effect for content
    //         data-aos-delay="500" // Add a slight delay before the content fades in
    //       >
    //         <h3 className="text-2xl md:text-3xl  mb-4">{currentItem.title}</h3>
    //         <div className="flex justify-center md:justify-start mb-4">
    //           <span className="flex">
    //             {[...Array(5)].map((_, i) => (
    //               <svg
    //                 key={i}
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 className="w-6 h-6 text-yellow-500"
    //               >
    //                 <path d="M12 .587l3.668 7.568L24 9.423l-6 5.843L19.335 24 12 20.254 4.665 24 6 15.266 0 9.423l8.332-1.268z" />
    //               </svg>
    //             ))}
    //           </span>
    //         </div>
    //         <p
    //           data-aos="fade-up"
    //           className="mb-4 font-semibold text-sm md:text-base"
    //         >
    //           {currentItem.content}
    //         </p>
    //         <p className="font-semibold">{currentItem.name}</p>
    //         <p className="font-semibold text-gray-400">
    //           {currentItem.designation}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container h-full">
      <div className="flex flex-col py-5 items-center justify-center bg-gray-900 text-white mx-auto">
        {/* Section Title */}
        <h2 className="text-lg md:text-4xl font-bold tracking-wide mb-3 text-white">
          Testimonials
        </h2>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full p-4 md:p-8">
          {/* Image Section */}
          <div
            className={`md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0 ${
              zoomOut ? "zoom-out" : ""
            }`}
          >
            <div className="relative overflow-hidden w-full h-[50vh] sm:h-[60vh] md:h-[70vh] max-w-full sm:max-w-[70vw] md:max-w-[40vw]">
              <Image
                src={currentItem.imageUrl}
                alt={currentItem.name}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                height={200}
                width={200}
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div
            className="w-full md:w-1/2 p-4 md:p-6 border-t border-r border-b-2 bg-gray-800 rounded-lg shadow-lg text-center md:text-left  border-white"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {/* Title */}
            <h3 className="text-2xl md:text-3xl mb-4">{currentItem.title}</h3>

            {/* Rating Section */}
            <div className="flex justify-center md:justify-start mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-yellow-500"
                >
                  <path d="M12 .587l3.668 7.568L24 9.423l-6 5.843L19.335 24 12 20.254 4.665 24 6 15.266 0 9.423l8.332-1.268z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Content */}
            <p
              className="mb-4 text-sm md:text-base font-semibold"
              data-aos="fade-up"
            >
              {currentItem.content}
            </p>

            {/* Author Details */}
            <p className="font-semibold">{currentItem.name}</p>
            <p className="text-gray-400 font-semibold">
              {currentItem.designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trail;

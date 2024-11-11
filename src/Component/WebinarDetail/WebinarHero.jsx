// import React from "react";

// const WebinarHero = ({ data }) => {
//   const speaker = data?.speaker || {};
//   const { description, link } = data || {};
//   return (
//     <div className="container mx-auto ">
//       <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-96  bg-[#5363e1] items-center justify-between py-8 lg:py-0">
//         {/* Left section - Course Info */}
//         <div className="w-full lg:w-3/5 p-4 order-1 lg:order-1 text-center lg:text-left">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl py-5 font-bold mb-2">
//             Webinar Corner: Your Source for Industry Knowledge
//             {description?.description}
//           </h1>
//           <p className="text-md sm:text-lg mb-4">
//             Success is not the key to happiness. Happiness is the key to
//             success. If you love what you are doing, you will be successful.
//           </p>
//           <div className=" py-2">
//             <p>
//               Created by:
//               <span className=" ml-2 hover:underline cursor-pointer">
//                 {speaker?.name}
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Right section - Video */}
//         <div className="w-full lg:w-2/5 flex md:pt-5 flex-col items-center order-2 lg:order-2">
//           <div className="w-full h-48 sm:h-64 md:h-80 lg:h-48 xl:h-64 2xl:h-80 mb-4 flex justify-center items-center">
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/LsoLEjrDogU"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WebinarHero;

import React from "react";

const WebinarHero = ({ Herodata }) => {
  const speaker = Herodata?.speaker || {};
  const { description, link, title } = Herodata || {};

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row h-auto items-center justify-between bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg overflow-hidden shadow-lg py-8 lg:py-12 gap-8 lg:gap-5">
        {/* Left section - Course Info */}
        <div className="w-full lg:w-3/5 px-4 md:text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl capitalize md:text-3xl lg:text-4xl font-bold md:mb-4 mb-1">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-md lg:text-lg md:mb-6 mb-3 capitalize leading-relaxed">
              {description}
            </p>
          )}

          <div className="text-sm sm:text-base lg:text-lg">
            <span>Created by: </span>
            <span className="font-semibold  capitalize cursor-pointer">
              {speaker?.name}
            </span>
          </div>
        </div>
        {/* 
        {/* Right section - Video */}
        <div className="w-full lg:w-2/5 flex justify-center overflow-hidden items-center">
          <div className="w-full px-2 h-48 sm:h-64 md:h-80 lg:h-64 xl:h-80 2xl:h-96 rounded-lg md:overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            {link && (
              <iframe
                className="w-full h-full rounded-lg"
                src={link}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarHero;

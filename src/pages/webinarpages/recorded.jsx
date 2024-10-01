// import Webinarcard from "@/Component/WebinarCard/Webinarcard";
// import React from "react";

// const recorded = () => {
//   const features = [
//     {
//       title: "Ultra HD streaming",
//       description: "Video & audio conferencing",
//
//       logos: [
//         "/images/zoom.png",
//         "/images/google-meet.png",
//         "/images/microsoft-teams.png",
//       ],
//     },
//     {
//       title: "Smart scheduling",
//       description: "Calendar sync & booking links",
//
//       logos: [
//         "/images/ion.png",
//         "/images/canendly.png",
//         "/images/acuity-scheduling.png",
//         "/images/chili-piper.png",
//       ],
//     },
//     {
//       title: "Workshops & webinars",
//       description: "Professional registration process",
//
//       logos: [
//         "/images/luma.png",
//         "/images/hopin-events.png",
//         "/images/livestorm.png",
//         "/images/zoom-webinars.png",
//       ],
//     },
//   ];

//   return (
//     <div>
//       <Webinarcard />

//       <div className="container mx-auto py-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md text-center"
//             >
//               <h2 className="text-xl font-bold text-blue-600">
//                 {feature.title}
//               </h2>
//               <p className="text-gray-700">{feature.description}</p>
//               {feature.replacing && (
//                 <div className="my-4 inline-block bg-gray-200 text-gray-700 py-1 px-3 rounded-full">
//                   REPLACING
//                 </div>
//               )}
//               <div className="flex justify-center gap-4 mt-4">
//                 {feature.logos.map((logo, idx) => (
//                   <img
//                     key={idx}
//                     src={logo}
//                     alt="Logo"
//                     className="h-8 object-contain"
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default recorded;

import Webinarcard from "@/Component/WebinarCard/Webinarcard";
import React from "react";

const recorded = () => {
  const features = [
    {
      title: "Ultra HD streaming",
      description:
        "Video & audio conferencing You can apply reusable button styles in your Next.js component using Tailwind CSS utility classes for hover effects and active states. This approach keeps your code clean and efficient without the need for separate CSS files.",

      logos: [
        "/images/zoom.png",
        "/images/google-meet.png",
        "/images/microsoft-teams.png",
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Add YouTube video URL here
    },
    {
      title: "Smart scheduling",
      description: "Calendar sync & booking links",

      logos: [
        "/images/ion.png",
        "/images/canendly.png",
        "/images/acuity-scheduling.png",
        "/images/chili-piper.png",
      ],
      video: "https://www.youtube.com/embed/2Vv-BfVoq4g", // Add YouTube video URL here
    },
    {
      title: "Workshops & webinars",
      description: "Professional registration process",

      logos: [
        "/images/luma.png",
        "/images/hopin-events.png",
        "/images/livestorm.png",
        "/images/zoom-webinars.png",
      ],
      video: "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Add YouTube video URL here
    },
  ];

  return (
    <div>
      <Webinarcard />

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* YouTube Iframe */}
              <div className="w-full h-48 mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={feature.video}
                  title={feature.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-blue-600 mb-2">
                {feature.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700">{feature.description}</p>

              {/* Logos */}
              <div className="flex justify-center gap-4 mt-4">
                {feature.logos.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt="Logo"
                    className="h-8 object-contain"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default recorded;

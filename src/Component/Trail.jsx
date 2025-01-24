// import React from "react";

// const Trail = () => {
//   return (
//     <div>
//       <div className="flex flex-col ">
//         <div className="flex flex-grow">
//           {/* Sidebar */}
//           <aside className="w-1/4 bg-gray-200 p-4 hidden md:block">
//             <div className="p-4 bg-white rounded shadow mb-4">
//               <div className="h-16 w-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
//               <h2 className="text-center font-semibold"></h2>
//               <p className="text-center text-sm text-gray-600"></p>
//             </div>
//             <ul className="space-y-2 list-none">
//               <li className="bg-white p-2 rounded shadow"></li>
//               <li className="bg-white p-2 rounded shadow"></li>
//               <li className="bg-white p-2 rounded shadow"></li>
//             </ul>
//           </aside>

//           {/* Main Content */}
//           <main className="flex-grow p-4">
//             <div className="space-y-4">
//               <div className="p-4 bg-white rounded shadow">
//                 <h3 className="font-semibold text-lg"></h3>
//                 <p className="text-sm text-gray-600"></p>
//               </div>
//               <div className="p-4 bg-white rounded shadow">
//                 <h3 className="font-semibold text-lg"></h3>
//                 <p className="text-sm text-gray-600"></p>
//               </div>
//               <div className="p-4 bg-white rounded shadow">
//                 <h3 className="font-semibold text-lg"></h3>
//                 <p className="text-sm text-gray-600"></p>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trail;

// import Image from "next/image";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedin,
//   faFacebook,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// const Trail = () => {
//   const teams = [
//     {
//       img: "/assets/rakesh.JPG",
//       name: "Rakesh Kumar",
//       postion: "Front End Developer",
//     },
//     {
//       img: "/assets/rakesh.JPG",
//       name: "Rakesh Kumar",
//       postion: "Front End Developer",
//     },
//     {
//       img: "/assets/rakesh.JPG",
//       name: "Rakesh Kumar",
//       postion: "Front End Developer",
//     },
//     {
//       img: "/assets/rakesh.JPG",
//       name: "Rakesh Kumar",
//       postion: "Front End Developer",
//     },
//     {
//       img: "/assets/rakesh.JPG",
//       name: "Rakesh Kumar",
//       postion: "Front End Developer",
//     },
//     {
//       img: "/assets/rakesh.JPG",
//       name: "Rakesh Kumar",
//       postion: "Front End Developer",
//     },
//   ];
//   return (
//     <div className="p-10">
//       <h1 className="text-center text-3xl font-semibold mb-5">
//         Meet Our Teams
//       </h1>
//       <div className="flex justify-center items-center flex-wrap gap-10">
//         {teams &&
//           teams.length > 0 &&
//           teams.map((team, index) => {
//             return (
//               <div
//                 key={index}
//                 className="group before:hover:scale-95 hover:h-72 before:hover:w-72 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-72 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden"
//               >
//                 <div class="w-28 h-28 bg-blue-700 mt-14 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
//                   <Image
//                     className="object-cover rounded-full"
//                     src={team.img}
//                     width={200}
//                     height={200}
//                     alt={team.name}
//                   />
//                 </div>
//                 <div className="z-10 group-hover:-translate-y-10 transition-all duration-500 px-2">
//                   <span className="text-xl font-semibold">{team.name}</span>
//                   <p className="text-sm font-medium leading-6">
//                     {team.postion}
//                   </p>
//                 </div>
//                 <div className="gap-2 flex group-hover:-translate-y-10 transition-all duration-500 px-2">
//                   <Link
//                     className="px-2 py-1 z-10 hover:scale-110 transition-all duration-500"
//                     href="linkedin.com/in/rakesh-kumar-89850b298"
//                   >
//                     <FontAwesomeIcon icon={faLinkedin} size="xl" />
//                   </Link>
//                   <Link
//                     className="px-2 py-1 z-10 hover:scale-110 transition-all duration-500"
//                     href="linkedin.com/in/rakesh-kumar-89850b298"
//                   >
//                     <FontAwesomeIcon icon={faFacebook} size="xl" />
//                   </Link>
//                   <Link
//                     className="px-2 py-1 z-10 hover:scale-110 transition-all duration-500"
//                     href="linkedin.com/in/rakesh-kumar-89850b298"
//                   >
//                     <FontAwesomeIcon icon={faInstagram} size="xl" />
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };
// export default Trail;

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Trail = () => {
  const teams = [
    {
      img: "/assets/rakesh.JPG",
      name: "Rakesh Kumar",
      postion: "Front End Developer",
    },
    {
      img: "/assets/rakesh.JPG",
      name: "Rakesh Kumar",
      postion: "Front End Developer",
    },
    {
      img: "/assets/rakesh.JPG",
      name: "Rakesh Kumar",
      postion: "Front End Developer",
    },
    {
      img: "/image/bg.JPG",
      name: "Rakesh Kumar",
      postion: "Front End Developer",
    },
    {
      img: "/assets/rakesh.JPG",
      name: "Rakesh Kumar",
      postion: "Front End Developer",
    },
    {
      img: "/assets/rakesh.JPG",
      name: "Rakesh Kumar",
      postion: "Front End Developer",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-center text-4xl font-bold mb-10 text-gray-800">
        Meet Our Teams
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-10">
        {teams.map((team, index) => (
          <div
            key={index}
            className="group w-80 h-96 bg-gradient-to-br from-orange-100 to-sky-100 rounded-2xl shadow-lg overflow-hidden relative flex flex-col items-center justify-center text-center transition-transform duration-500 hover:scale-105"
          >
            {/* Image Container */}
            <div className="relative w-32 h-32 mt-8 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 transform group-hover:scale-125">
              <Image
                className="object-cover"
                src={team.img}
                width={200}
                height={200}
                alt={team.name}
              />
            </div>

            {/* Text Section */}
            <div className="mt-6 px-4 transition-all duration-500 group-hover:mt-4">
              <h3 className="text-2xl font-bold text-gray-800">{team.name}</h3>
              <p className="text-sm font-medium text-gray-600">
                {team.postion}
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex gap-4 transition-all duration-500 group-hover:mt-2">
              <Link
                href="https://linkedin.com/in/rakesh-kumar-89850b298"
                className="text-blue-600 hover:scale-125 transition-transform duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-blue-700 hover:scale-125 transition-transform duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-pink-500 hover:scale-125 transition-transform duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </Link>
            </div>

            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-400 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trail;

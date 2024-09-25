// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

// const Team = () => {
//   const members = [
//     {
//       img: "/image/ab.webp",
//       title: "Amarjeet Singh",
//       designation: "Founder | Business Automation Expert",
//       linkedIn: "https://linkedin.com/in/amarjeet",
//       twitter: "https://twitter.com/amarjeet",
//       instagram: "https://instagram.com/amarjeet",
//     },
//     {
//       img: "/image/ab.webp",
//       title: "Di Mishra",
//       designation: "Chief Technical officer",
//       linkedIn: "https://linkedin.com/in/di",
//       twitter: "https://twitter.com/divyanka",
//       instagram: "https://instagram.com/divyanka",
//     },
//     // Add other team members here...
//   ];

//   return (
//     <div className="container">
//       <div className="p-6">
//         <h1 className="text-3xl font-bold text-center mb-5">
//           Our Biggest Asset is Our Team
//         </h1>
//         <p className="text-[15px] leading-6 md:text-center mb-8 md:mx-10 mx-5">
//           Our team thrives on collaboration and is fueled by a diverse array of
//           talent. We actively engage with the creative community, consistently
//           seeking out what's on the horizon, and always maintain a positive and
//           welcoming atmosphere.
//         </p>
//         <div className="grid grid-cols-1 md:px-16 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
//           {members.map((member, i) => (
//             <div
//               key={i}
//               className="w-64 h-80 max-w-72 max-h-96 border rounded shadow-lg overflow-hidden"
//             >
//               <div className="w-full h-3/5 p-4">
//                 <img
//                   className="w-full h-full rounded-md object-cover"
//                   src={member.img}
//                   alt={member.title}
//                 />
//               </div>
//               <div className="w-full h-2/5 px-2">
//                 <div className="w-full h-3/5 px-7">
//                   <div className="font-semibold text-center text-md">
//                     {member.title}
//                   </div>
//                   <p className="text-gray-700 text-center text-base">
//                     {member.designation}
//                   </p>
//                 </div>

//                 <div className="w-full h-2/5 flex justify-center items-center gap-2">
//                   {member.linkedIn && (
//                     <a
//                       href={member.linkedIn}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="h-9 w-9 rounded-full p-1 bg-blue-500 text-white flex justify-center items-center"
//                     >
//                       <FontAwesomeIcon icon={faLinkedin} />
//                     </a>
//                   )}
//                   {member.twitter && (
//                     <a
//                       href={member.twitter}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="h-9 w-9 rounded-full p-1 bg-blue-500 text-white flex justify-center items-center"
//                     >
//                       <FontAwesomeIcon icon={faTwitter} />
//                     </a>
//                   )}
//                   {member.instagram && (
//                     <a
//                       href={member.instagram}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="h-9 w-9 rounded-full p-1 bg-pink-500 text-white flex justify-center items-center"
//                     >
//                       <FontAwesomeIcon icon={faInstagram} />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faLinkedin,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// const Team = () => {
//   const members = [
//     {
//       img: "/image/ab.webp",
//       title: "Amarjeet Singh",
//       designation: "Founder | Business Automation Expert",
//       linkedIn: "https://linkedin.com/in/divyanka",
//       twitter: "https://twitter.com/divyanka",
//       instagram: "https://instagram.com/divyanka",
//     },
//     {
//       img: "/image/ab.webp",
//       title: "Divyanka Mishra",
//       designation: "Chief Technical officer",
//       linkedIn: "https://linkedin.com/in/divyanka",
//       twitter: "https://twitter.com/divyanka",
//       instagram: "https://instagram.com/divyanka",
//     },
//     {
//       img: "/image/ab.webp",
//       title: "Vivek Kumar Chauhan",
//       designation: "Employee | Web Developer",
//       linkedIn: "https://linkedin.com/in/divyanka",
//       twitter: "https://twitter.com/divyanka",
//       instagram: "https://instagram.com/divyanka",
//     },
//     {
//       img: "/image/ab.webp",
//       title: "Rakesh Kumar",
//       designation: "Employee | Web Developer",
//       linkedIn: "https://linkedin.com/in/divyanka",
//       twitter: "https://twitter.com/divyanka",
//       instagram: "https://instagram.com/divyanka",
//     },
//     {
//       img: "/image/ab.webp",
//       title: "Pradhumn",
//       designation: "Employee | Backend Developer",
//       linkedIn: "https://linkedin.com/in/divyanka",
//       twitter: "https://twitter.com/divyanka",
//       instagram: "https://instagram.com/divyanka",
//     },
//     {
//       img: "/image/ab.webp",
//       title: "Naitik Pratap Singh",
//       designation: "Employee | Zoho Developer",
//       linkedIn: "https://linkedin.com/in/divyanka",
//       twitter: "https://twitter.com/divyanka",
//       instagram: "https://instagram.com/divyanka",
//     },
//     {
//       img: "/image/ab.webp",
//       title: "Aparna Raj",
//       designation: "Employee | Zoho Developer",
//       linkedIn: "https://linkedin.com/in/divyanka",
//       twitter: "https://twitter.com/divyanka",
//       instagram: "https://instagram.com/divyanka",
//     },
//   ];

//   return (
//     <div className="container">
//       <div className="p-6">
//         <h1 className="text-3xl font-bold text-center mb-5">
//           Our Biggest Asset is Our Team
//         </h1>
//         <p className="text-[15px] leading-6 md:text-center mb-8 md:mx-10 mx-5">
//           Our team thrives on collaboration and is fueled by a diverse array of
//           talent. We actively engage with the creative community, consistently
//           seeking out what's on the horizon, and always maintain a positive and
//           welcoming atmosphere.
//         </p>
//         <div className="grid grid-cols-1 md:px-16 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
//           {members.map((member, i) => (
//             <div
//               key={i}
//               className="w-64 h-80 max-w-72 max-h-96 border rounded shadow-lg overflow-hidden"
//             >
//               <div className="w-full h-3/5 p-4">
//                 <img
//                   className="w-full h-full rounded-md object-cover"
//                   src={member.img}
//                   alt={member.title}
//                 />
//               </div>
//               <div className="w-full h-2/5 px-2">
//                 <div className="w-full h-3/5 px-7">
//                   <div className="font-semibold text-center text-md">
//                     {member.title}
//                   </div>
//                   <p className="text-gray-700 text-center text-base">
//                     {member.designation}
//                   </p>
//                 </div>

//                 <div className="w-full h-2/5 flex justify-center items-center gap">
//                   {member.linkedIn && (
//                     <a
//                       href={member.linkedIn}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className=" rounded-full p-1 text-blue-500  text-3xl flex justify-center items-center"
//                     >
//                       <FontAwesomeIcon icon={faLinkedin} />
//                     </a>
//                   )}
//                   {member.twitter && (
//                     <a
//                       href={member.twitter}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className=" rounded-full p-1  text- flex text-3xl text-blue-500 justify-center items-center"
//                     >
//                       <FontAwesomeIcon icon={faTwitter} />
//                     </a>
//                   )}
//                   {member.instagram && (
//                     <a
//                       href={member.instagram}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className=" rounded-full p-1  text-pink-500 text-3xl flex justify-center items-center"
//                     >
//                       <FontAwesomeIcon icon={faInstagram} />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const members = [
    {
      img: "/image/ab.webp",
      title: "Amarjeet Singh",
      designation: "Founder | Business Automation Expert",
      linkedIn: "https://linkedin.com/in/divyanka",
      twitter: "https://twitter.com/divyanka",
      instagram: "https://instagram.com/divyanka",
    },
    {
      img: "/image/ab.webp",
      title: "Divyanka Mishra",
      designation: "Chief Technical officer (Technical Head)",
      linkedIn: "https://linkedin.com/in/divyanka",
      twitter: "https://twitter.com/divyanka",
      instagram: "https://instagram.com/divyanka",
    },
    {
      img: "/image/ab.webp",
      title: "Vivek Kumar Chauhan",
      designation: "Employee | Web Developer",
      linkedIn: "https://linkedin.com/in/divyanka",
      twitter: "https://twitter.com/di",
      instagram: "https://instagram.com/a",
    },
    {
      img: "/image/ab.webp",
      title: "Rakesh Kumar",
      designation: "Employee | Web Developer",
      linkedIn: "https://linkedin.com/in/di",
      twitter: "https://twitter.com/di",
      instagram: "https://instagram.com/da",
    },
    {
      img: "/image/ab.webp",
      title: "Pradhumn",
      designation: "Employee | Backend Developer",
      linkedIn: "https://linkedin.com/in/di",
      twitter: "https://twitter.com/di",
      instagram: "https://instagram.com/a",
    },
    {
      img: "/image/ab.webp",
      title: "Naitik Pratap Singh",
      designation: "Employee | Zoho Developer",
      linkedIn: "https://linkedin.com/in/di",
      twitter: "https://twitter.com/di",
      instagram: "https://instagram.com/dka",
    },
    {
      img: "/image/ab.webp",
      title: "Aparna Raj",
      designation: "Employee | Zoho Developer",
      linkedIn: "https://linkedin.com/in/di",
      twitter: "https://twitter.com/di",
      instagram: "https://instagram.com/ka",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-5">
          Our Biggest Asset is Our Team
        </h1>
        <p className="text-sm md:text-base leading-6 text-center mb-8 mx-4 md:mx-16">
          Our team thrives on collaboration and is fueled by a diverse array of
          talent. We actively engage with the creative community, consistently
          seeking out what's on the horizon, and always maintain a positive and
          welcoming atmosphere.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-8 lg:px-16 place-items-center">
          {members.map((member, i) => (
            <div
              key={i}
              className="w-60 md:w-64 h-80 max-w-72 max-h-96 border rounded shadow-lg overflow-hidden"
            >
              <div className="w-full h-3/5 p-4">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src={member.img}
                  alt={member.title}
                />
              </div>
              <div className="w-full h-2/5 px-2">
                <div className="w-full h-3/5 px-5 md:px-7">
                  <div className="font-semibold text-center text-md">
                    {member.title}
                  </div>
                  <p className="text-gray-700 text-center text-base">
                    {member.designation}
                  </p>
                </div>
                <div className="w-full h-2/5 flex justify-center items-center">
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-1 text-blue-500 text-3xl flex justify-center items-center"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-1 text-blue-500 text-3xl flex justify-center items-center"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-1 text-pink-500 text-3xl flex justify-center items-center"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Team Skills */}
      <div className="w-full h-auto md:px-5 px-5 py-5">
        <div className="md:flex block justify-center items-start">
          <div className="flex-col md:py-10 md:pl-10 p-5  md:w-1/2 w-full">
            <p className="text-[12px] text-zinc-500 leading-3 font-bold uppercase">
              Team Skills
            </p>
            <h2 className="mt-4 mb-3 text-2xl font-bold capitalize">
              Digital Consulting Experts
            </h2>
            <h4 className="text-xl text-[#FF7A53] font-semibold capitalize">
              Real people for better results
            </h4>
            <p className="text-[15px] leading-6">
              We have high performing teams for zoho consulting, HubSpot
              consulting, web development, digital marketing & CRM Expert
            </p>
            <button className="capitalize hover:bg-[#0170B9] bg-[#4d7dca] text-white rounded-md shadow-sm px-4 py-3 text-center text-base font-medium my-5">
              Meet our team
            </button>
          </div>
          <div className="flex justify-start items-start gap-7 flex-wrap md:px-0 px-5 md:py-7 md:w-1/2 w-full">
            <div className="w-full md:pr-10">
              <p className="text-[#5294F0]">Zoho Consultant</p>
              <div className="w-full h-8 flex justify-center items-center">
                <div className="w-[92%] h-full bg-[#0170B9] rounded-l-sm text-white flex justify-end items-center px-3 animate-width-blue-zoho">
                  92%
                </div>
                <div className="w-[8%] h-full bg-[#F36B21] rounded-r-sm animate-width-orange-zoho"></div>
              </div>
            </div>
            <div className="w-full md:pr-10">
              <p className="text-[#5294F0]">Website Development</p>
              <div className="w-full h-8 flex justify-center items-center">
                <div className="w-[90%] h-full bg-[#0170B9] rounded-l-sm text-white flex justify-end items-center px-3 animate-width-blue-web">
                  90%
                </div>
                <div className="w-[10%] h-full bg-[#F36B21] rounded-r-sm animate-width-orange-web"></div>
              </div>
            </div>
            <div className="w-full md:pr-10">
              <p className="text-[#5294F0]">HubSpot Consulting</p>
              <div className="w-full h-8 flex justify-center items-center">
                <div className="w-[85%] h-full bg-[#0170B9] rounded-l-sm text-white flex justify-end items-center px-3 animate-width-blue-hub">
                  85%
                </div>
                <div className="w-[15%] h-full bg-[#F36B21] rounded-r-sm animate-width-orange-hub"></div>
              </div>
            </div>
            <div className="w-full md:pr-10">
              <p className="text-[#5294F0]">Digital Marketing</p>
              <div className="w-full h-8 flex justify-center items-center">
                <div className="w-[85%] h-full bg-[#0170B9] rounded-l-sm text-white flex justify-end items-center px-3 animate-width-blue-hub">
                  85%
                </div>
                <div className="w-[15%] h-full bg-[#F36B21] rounded-r-sm animate-width-orange-hub"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Skills End */}
    </div>
  );
};

export default Team;

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// const fetchAllSolutionType = async () => {
//   const res = await fetch("/api/service/master-service", { method: "GET" });
//   return await res.json();
// };

// const fetchSolutionAccordingType = async (id) => {
//   const res = await fetch(`/api/service/get-service?serviceType=${id}`);
//   return await res.json();
// };

// const OverViewSolution = () => {
//   const [services, setServices] = useState([]);
//   const [activeService, setActiveService] = useState([]); // Set default to the first service
//   const [serviceTypeList, setServieTypeList] = useState([]);

//   useEffect(() => {
//     fetchAllSolutionType().then((res) => {
//       setServices(res?.data || []);
//       setActiveService(res?.data?.[0]);
//     });
//   }, []);

//   useEffect(() => {
//     if (activeService) {
//       fetchSolutionAccordingType(activeService?._id).then((res) => {
//         // console.log("res 123456789-------> is here ---> ", res);
//         setServieTypeList(res?.data || []);
//       });
//     }
//   }, [activeService]);

//   return (
//     <div className=" w-full bg-white">
//       <div className="container md:pt-10 pt-5 ">
//         <div className=" pb-5">
//           <h2 className="md:text-3xl text-xl   text-heading font-semibold pb-5">
//             <span className="bg-blue-100 px-2 py-2">Our</span>
//             Services
//           </h2>
//           <p className="text-sm md:text-lg pb-3">
//             We have excelled our experience in a wide range of industries to
//             bring valuable insights and provide our clients with truly
//             beneficial solutions.
//           </p>
//         </div>

//         <div className="w-full   border rounded-lg shadow-md">
//           <div className="flex flex-col md:flex-row">
//             {/* Sidebar Menu */}
//             <div className="w-full md:w-1/3  bg-blue-50 px-4 py-3">
//               {services?.length > 0 &&
//                 services?.map((service, index) => (
//                   <div
//                     key={index}
//                     className={`md:py-3 md:px-4 py-2 px-3 md:text-xl text-lg   font-semibold cursor-pointer hover:text-blue-500 transition ${
//                       activeService?.name === service.name
//                         ? "bg-heading text-white hover:text-white"
//                         : "text-[#004985]"
//                     }`}
//                     onClick={() => setActiveService(service)}
//                   >
//                     {service?.name}
//                   </div>
//                 ))}
//             </div>
//             {/* Content Area */}
//             <div className="w-full lg:h-[90vh] md:h-[65vh] overflow-hidden md:flex-1 px-3  md:px-16 md:py-10 py-8">
//               <h2 className="md:text-2xl text-lg text-heading font-semibold mb-3 ">
//                 {activeService?.name}
//               </h2>
//               <p className="text-gray-700 text-sm line-clamp-3 md:text-lg mb-5">
//                 {activeService?.description}
//               </p>
//               <div className="grid grid-cols-1 md:px-0 px-3  sm:grid-cols-2 gap-4">
//                 {serviceTypeList?.length > 0 &&
//                   serviceTypeList?.map((link, index) => (
//                     <Link
//                       key={link?._id}
//                       href={`/services/${link?.title?.split(" ")?.join("-")}`}
//                     >
//                       <ul className=" custom-list-service ">
//                         <li className=" md:text-lg text-base   underline decoration-heading cursor-pointer">
//                           {link?.title}
//                         </li>
//                       </ul>
//                     </Link>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverViewSolution;

// import React, { useState } from "react";

// const staticServices = [
//   {
//     _id: "1",
//     name: "Web Development",
//     image: "/image/bg.jpg",
//     services: [
//       { _id: "11", title: "Frontend Development" },
//       { _id: "12", title: "Backend Development" },
//     ],
//   },
//   {
//     _id: "2",
//     name: "Mobile App Development",
//     image: "/image/bootstrap.jpg",
//     services: [
//       { _id: "21", title: "iOS Development" },
//       { _id: "22", title: "Android Development" },
//     ],
//   },
// ];

// const OverViewSolution = () => {
//   const [activeService, setActiveService] = useState(staticServices[0]);

//   return (
//     <div className="w-full bg-white">
//       <div className="container md:pt-10 pt-5">
//         <div className="pb-5">
//           <h2 className="md:text-3xl text-xl text-heading font-semibold pb-5">
//             <span className="bg-blue-100 px-2 py-2">Our</span> Services
//           </h2>
//           <p className="text-sm md:text-lg pb-3">
//             We have excelled our experience in a wide range of industries to
//             bring valuable insights and provide our clients with truly
//             beneficial solutions.
//           </p>
//         </div>

//         <div className="w-full border rounded-lg shadow-md">
//           <div className="flex flex-col md:flex-row">
//             {/* Sidebar Menu */}
//             <div className="w-full md:w-1/3 bg-blue-50 px-4 py-3">
//               {staticServices.map((service) => (
//                 <div
//                   key={service._id}
//                   className={`md:py-3 md:px-4 py-2 px-3 md:text-xl text-lg font-semibold cursor-pointer hover:text-blue-500 transition ${
//                     activeService.name === service.name
//                       ? "bg-heading text-white hover:text-white"
//                       : "text-[#004985]"
//                   }`}
//                   onClick={() => setActiveService(service)}
//                 >
//                   {service.name}
//                 </div>
//               ))}
//             </div>
//             {/* Content Area */}
//             <div className="w-full lg:h-[90vh] md:h-[65vh] overflow-hidden md:flex-1 px-3 md:px-16 md:py-10 py-8">
//               <h2 className="md:text-2xl text-lg text-heading font-semibold mb-3">
//                 {activeService.name}
//               </h2>
//               <img
//                 src={activeService.image}
//                 alt={activeService.name}
//                 className="w-full h-64 object-cover mb-5 rounded-lg"
//               />
//               <div className="grid grid-cols-1 md:px-0 px-3 sm:grid-cols-1 gap-">
//                 {activeService.services.map((link) => (
//                   <div>
//                     <ul className="custom-list-service">
//                       <li className="md:text-lg text-base  decoration-heading cursor-pointer">
//                         {link.title}
//                       </li>
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverViewSolution;

import Image from "next/image";
import React, { useState } from "react";

const staticServices = [
  {
    _id: "1",
    name: "Web Development",
    image: "/image/zoho.jpg",
    description:
      "Building modern, responsive, and scalable websites using the latest technologies like HTML, CSS, JavaScript, and frameworks such as React, Vue, and Angular.",
  },
  {
    _id: "2",
    name: "Mobile App Development",
    image: "/image/bootstrap.jpg",
    description:
      "Creating seamless applications for Apple devices and designing user-friendly and scalable Android applications, ensuring performance and smooth user experience.",
  },
  {
    _id: "3",
    name: "UI/UX Design",
    image: "/image/try.jpeg",
    description:
      "Crafting visually appealing and user-friendly designs using tools like Figma and Adobe XD, focusing on accessibility and enhancing user engagement.",
  },
  {
    _id: "4",
    name: "E-Commerce Development",
    image: "/image/sale.jpg",
    description:
      "Developing high-performance e-commerce platforms with secure payment gateways, seamless user experiences, and features like product catalogs and cart management.",
  },
  {
    _id: "5",
    name: "Cybersecurity",
    image: "/image/pic.jpeg",
    description:
      "Implementing security measures such as encryption, firewalls, and secure authentication to protect websites and applications from potential cyber threats.",
  },
];

const OverViewSolution = () => {
  const [activeService, setActiveService] = useState(staticServices[0]);

  return (
    <div className="w-full bg-white">
      <div className="container md:pt-10 pt-5">
        <div className="pb-5">
          <h2 className="md:text-3xl text-xl text-heading font-semibold pb-3">
            Overview of Solution
          </h2>
        </div>

        <div className="w-full border rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Menu */}
            <div className="w-full md:w-1/3 bg-blue-50 px-4 py-3">
              {staticServices.map((service) => (
                <div
                  key={service?._id}
                  className={`md:py-3 md:px-4 py-2 px-3 md:text-xl text-lg  font-semibold cursor-pointer hover:text-blue-500 transition ${
                    activeService.name === service.name
                      ? "bg-heading text-white hover:text-white"
                      : "text-[#004985]"
                  }`}
                  onClick={() => setActiveService(service)}
                >
                  {service?.name}
                </div>
              ))}
            </div>
            {/* Content Area */}
            <div className="w-full lg:h-[90vh] md:h-[50vh] overflow-hidden md:flex-1 px-3 md:px-16 md:py-10 py-8">
              <h2 className="md:text-2xl text-lg text-heading font-semibold mb-3">
                {activeService?.name}
              </h2>
              <Image
                src={activeService?.image}
                alt={activeService?.name}
                className="w-full h-64 object-cover mb-5 rounded-lg"
                height={300}
                width={300}
              />
              <p className="text-sm md:text-base text-gray-600 mt-1">
                {activeService.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverViewSolution;

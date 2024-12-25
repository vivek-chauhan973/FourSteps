// import Image from "next/image";
// import React from "react";

// const SolutionIndustry = () => {
//   const services = [
//     {
//       title: "Underwriting ",
//       icon: "/image/1.png",
//       listItems: [
//         "Insurance application processing.",
//         "Risk assessment.",
//         "Actuarial and pricing.",
//         "Compliance management.",
//       ],
//     },
//     {
//       title: "Billing",
//       icon: "/image/1.png",
//       listItems: [
//         "Personalized premium calculation.",
//         "Automated invoicing.",
//         "E-signature workflow.",
//         "Payment processing.",
//       ],
//     },
//     {
//       title: "Hubspot",
//       icon: "/image/1.png",
//       listItems: [
//         "Personalized premium calculation.",
//         "Automated invoicing.",
//         "E-signature workflow.",
//         "Payment processing.",
//       ],
//     },
//     {
//       title: "Zoho",
//       icon: "/image/1.png",
//       listItems: [
//         "Personalized premium calculation.",
//         "Automated invoicing.",
//         "E-signature workflow.",
//         "Payment processing.",
//       ],
//     },
//     {
//       title: "Content management system",
//       icon: "/image/1.png",
//       listItems: [
//         "Personalized premium calculation.",
//         "Automated invoicing.",
//         "E-signature workflow.",
//         "Payment processing.",
//       ],
//     },
//     {
//       title: "CRM",
//       icon: "/image/1.png",
//       listItems: [
//         "Personalized premium calculation.",
//         "Automated invoicing.",
//         "E-signature workflow.",
//         "Payment processing.",
//       ],
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div>
//         <h3 className="font-semibold text-primary text-3xl pb-5 text-center">
//           IT Solutions for Insurance We Deliver
//         </h3>
//         <p className="text-center text-lg mb-8">
//           IT solutions ScienceSoft creates help insurance companies improve
//           overall business{" "}
//           <span className="underline text-primary">
//             efficiency and introduce excellent
//           </span>{" "}
//           customer experience. We can engineer one or several of these targeted
//           insurance solutions, as well as build a full-featured insurance
//           business automation system:
//         </p>
//       </div>

//       {/* Card Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white border p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//           >
//             <div className="flex flex-col items-center justify-center">
//               <div className="mb-4">
//                 <Image
//                   src={service.icon}
//                   alt={`${service.title} Icon`}
//                   className="w-20 h-20 rounded-full"
//                   height={80}
//                   width={80}
//                 />
//               </div>
//               <h2 className="text-[20px] sm:text-[22px] py-2 decoration-primary underline font-semibold text-center text-lg sm:text-xl">
//                 {service.title}
//               </h2>
//             </div>

//             <ul className="space-y-2 pl-5">
//               {service.listItems.map((item, itemIndex) => (
//                 <li
//                   key={itemIndex}
//                   className="text-sm sm:text-base text-gray-700 transition-colors duration-200 hover:text-primary"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SolutionIndustry;

import Image from "next/image";
import React from "react";

const SolutionIndustry = ({ solution }) => {
  // console.log("all solution data print here", solution);
  return (
    <>
      <div>
        <div>
          {/* 
          <p className=" text-sm md:text-base">
            IT solutions ScienceSoft creates help insurance companies improve
            overall business efficiency and introduce excellent customer
            experience. We can engineer one or several of these targeted
            insurance solutions, as well as build a full-featured insurance
            business automation system:
          </p> */}
          <p
            className=" text-sm md:text-base"
            dangerouslySetInnerHTML={{
              __html: solution?.mainEditorHtmlDescription,
            }}
          />
        </div>
        {/* card section  */}

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:gap-7 gap-3 pt-5">
            {solution?.solutionItem.map((item, index) => (
              <div
                key={index}
                className="bg-white border p-6 rounded-lg  transform transition-transform duration-300 hover:scale-95 cursor-pointer hover:shadow"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-4">
                    <Image
                      src={item.pat || "/image/bg.jpg"} // Assuming the filename is a path to an image
                      alt="welcome"
                      className="w-20 h-20 rounded-full"
                      height={80}
                      width={80}
                    />
                  </div>
                  <h2 className="text-[20px] sm:text-[22px] py-2 decoration-blue-800 hover:text-blue-600 underline font-semibold text-center text-lg sm:text-xl">
                    {item?.title}
                  </h2>
                </div>
                {/* listing ul li  */}
                <ul className="custom-list space-y-2 pl-5">
                  {item?.editorHtmlDescription?.map((descItem, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm sm:text-base text-gray-700 transition-colors duration-200 hover:text-blue-500"
                      dangerouslySetInnerHTML={{
                        __html: descItem.content, // Render HTML content inside list item
                      }}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionIndustry;

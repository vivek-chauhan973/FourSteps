import React from "react";
import Image from "next/image";
const Trail = () => {
  return (
    <div>
      <h1>Trail section</h1>

      <div className=" container">
        <div className=" mx-auto p-4">
          <div className="text-center ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
              Elevate your skills with expert insights at our upcoming webinar
            </h2>

            <p className=" py-2 px-20  text-sm">
              Unlock the secrets of successful content creation in our upcoming
              webinar. Learn how to engage your audience effectively and create
              compelling content that resonates. This session is designed for
              content creators and marketers eager to enhance their skills and
              drive meaningful engagement in the digital age.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5   gap-6 p-6">
              {/* <!-- Card 1 --> */}
              <div className=" bg-white  shadow-md  p-4  border-[1px] rounded-md flex flex-col items-center">
                {/* Title Image Section */}
                <div className="relative w-full  h-48">
                  <Image
                    className="absolute  rounded- object-cover"
                    src="/image/try.jpeg"
                    alt="Image Here"
                    layout="fill"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 rounded-b- bg-black bg-opacity-50">
                    <h2 className="text-xl font-bold text-white mb-1">
                      Zoho Api Integration and Zoho implementation
                    </h2>
                  </div>
                </div>

                {/* Additional Data Section */}
                <div className="mt-2 flex  justify-around items-center w-full">
                  <div className="flex-shrink-0">
                    <Image
                      src="/image/try.jpeg"
                      alt="Profile Pic"
                      className="w-20 h-20 rounded-full object-cover"
                      height={300}
                      width={300}
                    />
                    <h2 className="text-sm font-bold text-black mb-1">
                      Amarjeet Singh
                    </h2>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm">Date: 2024-10-02</p>
                    <p className="text-gray-900 text-sm">time: 40min</p>
                  </div>
                </div>
                <p className="text-black text-xs py-1">
                  Description goes here. This can be a summary or some
                  additional information. Description goes here. This can be a
                  summary or some additional information. Description goes here.
                  This can be a summary or some additional information.
                </p>
              </div>
              {/* <!-- Card 2--> */}
              <div className=" bg-white  shadow-md  p-4  border-[1px] rounded-md flex flex-col items-center">
                {/* Title Image Section */}
                <div className="relative w-full  h-48">
                  <Image
                    className="absolute  rounded- object-cover"
                    src="/image/try.jpeg"
                    alt="Image Here"
                    layout="fill"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 rounded-b- bg-black bg-opacity-50">
                    <h2 className="text-xl font-bold text-white mb-1">
                      Zoho Api Integration and Zoho implementation
                    </h2>
                  </div>
                </div>

                {/* Additional Data Section */}
                <div className="mt-2 flex  justify-around items-center w-full">
                  <div className="flex-shrink-0">
                    <Image
                      src="/image/try.jpeg"
                      alt="Profile Pic"
                      className="w-20 h-20 rounded-full object-cover"
                      height={300}
                      width={300}
                    />
                    <h2 className="text-sm font-bold text-black mb-1">
                      Amarjeet Singh
                    </h2>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm">Date: 2024-10-02</p>
                    <p className="text-gray-900 text-sm">time: 40min</p>
                  </div>
                </div>
                <p className="text-black text-xs py-2">
                  Description goes here. This can be a summary or some
                  additional information. Description goes here. This can be a
                  summary or some additional information. Description goes here.
                  This can be a summary or some additional information.
                </p>
              </div>
              {/* <!-- Card 3 --> */}
              <div className=" bg-white  shadow-md  p-4  border-[1px] rounded-md flex flex-col items-center">
                {/* Title Image Section */}
                <div className="relative w-full  h-48">
                  <Image
                    className="absolute  rounded- object-cover"
                    src="/image/try.jpeg"
                    alt="Image Here"
                    layout="fill"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 rounded-b- bg-black bg-opacity-50">
                    <h2 className="text-xl font-bold text-white mb-1">
                      Zoho Api Integration and Zoho implementation
                    </h2>
                  </div>
                </div>

                {/* Additional Data Section */}
                <div className="mt-2 flex  justify-around items-center w-full">
                  <div className="flex-shrink-0">
                    <Image
                      src="/image/try.jpeg"
                      alt="Profile Pic"
                      className="w-20 h-20 rounded-full object-cover"
                      height={300}
                      width={300}
                    />
                    <h2 className="text-sm font-bold text-black mb-1">
                      Amarjeet Singh
                    </h2>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm">Date: 2024-10-02</p>
                    <p className="text-gray-900 text-sm">time: 40min</p>
                  </div>
                </div>
                <p className="text-black text-xs py-2">
                  Description goes here. This can be a summary or some
                  additional information. Description goes here. This can be a
                  summary or some additional information. Description goes here.
                  This can be a summary or some additional information.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Trail;

// import React from "react";
// import Image from "next/image";

// const upcoming = () => {
//   return (
// <div className=" container">
//   <div className=" mx-auto p-4">
//     <div className="text-center ">
//       <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
//         Elevate your skills with expert insights at our upcoming webinar
//       </h2>

//       <p className=" py-2 px-20  text-sm">
//         Unlock the secrets of successful content creation in our upcoming
//         webinar. Learn how to engage your audience effectively and create
//         compelling content that resonates. This session is designed for
//         content creators and marketers eager to enhance their skills and
//         drive meaningful engagement in the digital age.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5   gap-6 p-6">
//         {/* <!-- Card 1 --> */}
//         <div className=" bg-white  shadow-md  p-4  border-[1px] rounded-md flex flex-col items-center">
//           {/* Title Image Section */}
//           <div className="relative w-full  h-48">
//             <Image
//               className="absolute  rounded- object-cover"
//               src="/image/try.jpeg"
//               alt="Image Here"
//               layout="fill"
//             />
//             <div className="absolute bottom-0 left-0 right-0 px-3 py-2 rounded-b- bg-black bg-opacity-50">
//               <h2 className="text-xl font-bold text-white mb-1">
//                 Zoho Api Integration and Zoho implementation
//               </h2>
//             </div>
//           </div>

//           {/* Additional Data Section */}
//           <div className="mt-2 flex  justify-around items-center w-full">
//             <div className="flex-shrink-0">
//               <Image
//                 src="/image/try.jpeg"
//                 alt="Profile Pic"
//                 className="w-20 h-20 rounded-full object-cover"
//                 height={300}
//                 width={300}
//               />
//               <h2 className="text-sm font-bold text-black mb-1">
//                 Amarjeet Singh
//               </h2>
//             </div>
//             <div>
//               <p className="text-gray-900 text-sm">Date: 2024-10-02</p>
//               <p className="text-gray-900 text-sm">time: 40min</p>
//             </div>
//           </div>
//           <p className="text-black text-xs py-1">
//             Description goes here. This can be a summary or some additional
//             information. Description goes here. This can be a summary or
//             some additional information. Description goes here. This can be
//             a summary or some additional information.
//           </p>
//         </div>
//         {/* <!-- Card 2--> */}
//         <div className=" bg-white  shadow-md  p-4  border-[1px] rounded-md flex flex-col items-center">
//           {/* Title Image Section */}
//           <div className="relative w-full  h-48">
//             <Image
//               className="absolute  rounded- object-cover"
//               src="/image/try.jpeg"
//               alt="Image Here"
//               layout="fill"
//             />
//             <div className="absolute bottom-0 left-0 right-0 px-3 py-2 rounded-b- bg-black bg-opacity-50">
//               <h2 className="text-xl font-bold text-white mb-1">
//                 Zoho Api Integration and Zoho implementation
//               </h2>
//             </div>
//           </div>

//           {/* Additional Data Section */}
//           <div className="mt-2 flex  justify-around items-center w-full">
//             <div className="flex-shrink-0">
//               <Image
//                 src="/image/try.jpeg"
//                 alt="Profile Pic"
//                 className="w-20 h-20 rounded-full object-cover"
//                 height={300}
//                 width={300}
//               />
//               <h2 className="text-sm font-bold text-black mb-1">
//                 Amarjeet Singh
//               </h2>
//             </div>
//             <div>
//               <p className="text-gray-900 text-sm">Date: 2024-10-02</p>
//               <p className="text-gray-900 text-sm">time: 40min</p>
//             </div>
//           </div>
//           <p className="text-black text-xs py-2">
//             Description goes here. This can be a summary or some additional
//             information. Description goes here. This can be a summary or
//             some additional information. Description goes here. This can be
//             a summary or some additional information.
//           </p>
//         </div>
//         {/* <!-- Card 3 --> */}
//         <div className=" bg-white  shadow-md  p-4  border-[1px] rounded-md flex flex-col items-center">
//           {/* Title Image Section */}
//           <div className="relative w-full  h-48">
//             <Image
//               className="absolute  rounded- object-cover"
//               src="/image/try.jpeg"
//               alt="Image Here"
//               layout="fill"
//             />
//             <div className="absolute bottom-0 left-0 right-0 px-3 py-2 rounded-b- bg-black bg-opacity-50">
//               <h2 className="text-xl font-bold text-white mb-1">
//                 Zoho Api Integration and Zoho implementation
//               </h2>
//             </div>
//           </div>

//           {/* Additional Data Section */}
//           <div className="mt-2 flex  justify-around items-center w-full">
//             <div className="flex-shrink-0">
//               <Image
//                 src="/image/try.jpeg"
//                 alt="Profile Pic"
//                 className="w-20 h-20 rounded-full object-cover"
//                 height={300}
//                 width={300}
//               />
//               <h2 className="text-sm font-bold text-black mb-1">
//                 Amarjeet Singh
//               </h2>
//             </div>
//             <div>
//               <p className="text-gray-900 text-sm">Date: 2024-10-02</p>
//               <p className="text-gray-900 text-sm">time: 40min</p>
//             </div>
//           </div>
//           <p className="text-black text-xs py-2">
//             Description goes here. This can be a summary or some additional
//             information. Description goes here. This can be a summary or
//             some additional information. Description goes here. This can be
//             a summary or some additional information.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div></div>
// </div>
//   );
// };

// export default upcoming;

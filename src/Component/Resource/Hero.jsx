// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// const Hero = ({ Heading }) => {
//   const { query } = useRouter();
//   console.log("query", query);
//   return (
//     <div className="container">
//       <div className="flex  items-center  justify-center  gap-4 ">
//         <div className="max-w-2xl text-center">
//           {Heading === "all" ? (
//             <h1 className="text-4xl font-bold ">All Section Here </h1>
//           ) : (
//             <h1 className="text-4xl font-bold  capitalize">{Heading}</h1>
//           )}

//           <p className="mt-4 text-lg ">
//             I hated every minute of training, but I said, 'Don't quit. ...
//           </p>
//         </div>
//         <div className="mt-6">
//           <Image
//             aria-hidden="true"
//             alt="animated character"
//             src="/image/try.jpeg"
//             width={300}
//             height={400}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Hero = ({ Heading }) => {
  const { query } = useRouter();
  console.log("query", query);

  return (
    <div className="container mx-auto px-16 py-16 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-lg space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-orange-600 capitalize leading-tight">
            {Heading === "all" ? "All Section Here" : Heading}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 font-light tracking-wide">
            I hated every minute of said, Don t quit. Suffer now and live the
            rest of your life as a champion.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 transition duration-300 ease-in-out">
            Explore Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mt-8 md:mt-0">
          <Image
            aria-hidden="true"
            alt="abc"
            // src="/image/try.jpeg"
            src="https://images.unsplash.com/photo-1621763540919-1a0477861102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViaW5hcnxlbnwwfHwwfHx8MA%3D%3D"
            width={400}
            height={500}
            className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

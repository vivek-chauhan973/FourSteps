// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// const Hero = ({ Heading }) => {
//   const { query } = useRouter();

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

// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";

// const Hero = ({ Heading }) => {
//   const { query } = useRouter();
//   console.log("query", query);

//   return (
//     <div className="container mx-auto px-16 py-16 md:mt-0  mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Text Section */}
//         <div className="
//          md:text-left md:max-w-lg space-y-4">
//           <h1 className="text-3xl md:text-5xl font-bold text-orange-600 capitalize leading-tight">
//             {Heading === "all" ? "All Section Here" : Heading}
//           </h1>
//           <p className="mt-4 text-base md:text-xl text-gray-700 font-light tracking-wide">
//             I hated every minute of said, Don t quit. Suffer now and live the
//             rest of your life as a champion.
//           </p>
//           <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 transition duration-300 ease-in-out">
//             Explore Now
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="flex justify-center mt-8 md:mt-0">
//           <Image
//             aria-hidden="true"
//             alt="abc"
//             // src="/image/try.jpeg"
//             src="https://images.unsplash.com/photo-1621763540919-1a0477861102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViaW5hcnxlbnwwfHwwfHx8MA%3D%3D"
//             width={400}
//             height={500}
//             className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
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
    <div className="container mx-auto mt-20 md:mt-0 px-4 sm:px-8 lg:px-16 py-12 sm:py-16 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:max-w-xl space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 capitalize leading-tight">
            {Heading === "all" ? "All Section Here" : Heading}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 font-light tracking-wide">
            "I hated every minute of training, but I said, 'Don't quit. Suffer
            now and live the rest of your life as a champion.'"
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 transition duration-300 ease-in-out">
            Explore Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <Image
            aria-hidden="true"
            alt="Inspiring web design"
            src="https://images.unsplash.com/photo-1621763540919-1a0477861102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViaW5hcnxlbnwwfHwwfHx8MA%3D%3D"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

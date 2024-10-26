import Image from "next/image";
import React from "react";

const Implimentation = () => {
  const user = {
    name: "Abcd.....",
    jobRole: "Software Engineer",
    description:
      "Passionate about building scalable web applications and working with modern technologies.",
    imageUrl: "/image/try.jpeg", // Replace with your image URL
  };
  return (
    <div className=" conatiner">
      <div className=" md:border xl:flex flex-col w-full   p-3 relative bg-white shadow-lg h-auto ">
        <div className="grid grid-cols-1 xl:grid-cols-[200px,2fr] border py-2 gap-5 relative">
          {/* Image Side */}
          <div className="flex justify-center items-center">
            <Image
              className="w-40 h-40 rounded-md object-cover"
              src={user.imageUrl}
              alt={user.name}
              height={200}
              width={200}
            />
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">
              Name: {user.name}
            </h2>
            <p className="text-gray-600">Role: {user.jobRole}</p>
            <p className="">Des: {user.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implimentation;

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
    <div className="container mx-auto pb-10">
      <div className="border md:flex flex-col w-full p-3 bg-white shadow-md h-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px,2fr] border px-2 py-2 gap-5">
          {/* Image Side */}
          <div className="flex justify-center md:justify-start">
            <Image
              className="rounded-md object-cover"
              src={user.imageUrl}
              alt={user.name}
              height={200}
              width={200}
            />
          </div>

          {/* Text Side */}
          <div className="flex px-2 flex-col justify-center space-y-2">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Name: {user.name}
            </h2>
            <p className="text-gray-600">Role: {user.jobRole}</p>
            <p className="text-sm ">Des: {user.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implimentation;

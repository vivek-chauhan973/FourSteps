import Image from "next/image";
import React, { useState } from "react";

const TechUse = () => {
  const [expand, SetExpand] = useState(false);

  const members = [
    {
      img: "/image/ab.webp",
      title: "React.js",
      description: " padding to give the section breathing room.",
    },

    {
      img: "/image/mysql.png",
      title: "MySql",
      description: " padding to give the section breathing room.",
    },
    {
      img: "/image/wordpress.png",
      title: "wordpress",
      description: " padding to give the section breathing room.",
    },
    {
      img: "/image/ab.webp",
      title: "Php",
      description: " padding to give the section breathing room.",
    },
    {
      img: "/image/ab.webp",
      title: "Html ",
      description: " padding to give the section breathing room.",
    },
    {
      img: "/image/css.jpg",
      title: "Css",
      description: " padding to give the section breathing room.",
    },
    {
      img: "/image/javascript.jpg ",
      title: "Javascript",
      description: " padding to give the section breathing room.",
    },
    {
      img: "/image/jquery.jpg",
      title: "Jquery",
      description: " padding to give the section breathing room.",
    },
  ];

  return (
    <div className="container ">
      <div class="text-center pt-10  ">
        <h4 class="text-lg mb-0  text-heading md:mb-5 md:text-xl lg:text-[30px] font-semibold    max-w-3xl mx-auto">
          Technologies We Use For Web Development
        </h4>
        <h2 class="text-xs mb-0 text-gray-900 md:mb-5 md:text-lg  font-medium    max-w-3xl mx-auto">
          From robust backend systems to dynamic front-end experiences, our
          stack ensures performance, scalability, and unmatched user engagement.
        </h2>
      </div>

      <div className=" py-10">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 cursor-pointer md:px-16">
          {members.map((member, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-95 transition-transform duration-200"
            >
              <div className="w-full h-44 p-5  relative">
                <Image
                  className="w-full h-full  rounded-md object-cover"
                  src={member.img}
                  alt={member.title || "Member Image"}
                  height={300}
                  width={300}
                />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {member.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                  {member.description || "Description unavailable"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechUse;

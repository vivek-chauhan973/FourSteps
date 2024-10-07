import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const Hero = ({ Heading }) => {
  const { query } = useRouter();
  console.log("query", query);
  return (
    <div className="container">
      <div className="flex  items-center  justify-center  gap-4 ">
        <div className="max-w-2xl text-center">
          {Heading === "all" ? (
            <h1 className="text-4xl font-bold ">All Section Here </h1>
          ) : (
            <h1 className="text-4xl font-bold  capitalize">{Heading}</h1>
          )}

          <p className="mt-4 text-lg ">
            I hated every minute of training, but I said, 'Don't quit. ...
          </p>
        </div>
        <div className="mt-6">
          <Image
            aria-hidden="true"
            alt="animated character"
            src="/image/try.jpeg"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

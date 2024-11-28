

import React from "react";
import Image from "next/image";

const DemoPrentater = () => {
  return (
    <div className="container mx-auto  pb-10">
      <div className="border md:flex rounded flex-col w-full  md:w-[735px] p-3 bg-white shadow-md h-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px,2fr] border px-2 py-2 gap-5">
          <div className="flex justify-center md:justify-start">
            <Image
              className="rounded-md object-cover"
              src="/image/ab.webp"
              alt="wdiwqd"
              height={300}
              width={300}
            />
          </div>

          <div className="flex px-2 flex-col justify-center md:space-y-2">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              video make name
            </h2>
            <p className="text-gray-600"> post of personr</p>
            <p className="text-sm "> Description </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPrentater;

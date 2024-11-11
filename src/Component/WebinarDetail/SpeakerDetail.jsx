import Image from "next/image";
import React from "react";

const Implimentation = ({ speakerdata }) => {
  const speaker = speakerdata?.speaker || {};
  return (
    <div className="container mx-auto  pb-10">
      <div className="border md:flex rounded flex-col w-full  md:w-[735px] p-3 bg-white shadow-md h-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px,2fr] border px-2 py-2 gap-5">
          <div className="flex justify-center md:justify-start">
            {speaker.image && (
              <Image
                className="rounded-md object-cover"
                src={speaker.image.path} // Use the path for the speaker's image
                alt={speaker.alt || "Speaker Image"} // Use the alt text if provided
                height={300}
                width={300}
              />
            )}
          </div>

          <div className="flex px-2 flex-col justify-center md:space-y-2">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Name: {speaker?.name}
            </h2>
            <p className="text-gray-600">{speaker?.jobProfile}</p>
            <p className="text-sm "> {speaker?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implimentation;

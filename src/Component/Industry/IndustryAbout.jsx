import React from "react";

const IndustryAbout = ({ about }) => {
  return (
    <div className=" p-">
      {/* industry about */}
      {/* <div className=" text-xl font-semibold pb-5">About</div> */}
      <div className="  md:px-4 md:text-base text-sm pt-5">
        <p dangerouslySetInnerHTML={{ __html: about }} />
      </div>
    </div>
  );
};

export default IndustryAbout;

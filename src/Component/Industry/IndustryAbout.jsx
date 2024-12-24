import React from "react";

const IndustryAbout = ({about}) => {
  return (
    <div className=" p-">
      {/* industry about */}
      <div className=" text-xl font-semibold pb-5">About</div>
      <p dangerouslySetInnerHTML={{__html:about}}/>
    </div>
  );
};

export default IndustryAbout;

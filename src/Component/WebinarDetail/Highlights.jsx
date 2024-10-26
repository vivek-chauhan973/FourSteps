import React from "react";

const Features = () => {
  return (
    <div className=" conatiner">
      <div className="   md:border xl:flex flex-col w-full gap-4  p-3 relative bg-white shadow-lg h-auto ">
        <div className=" px-2  ">
          <h2 className=" text-lg py-3 font-bold">
            features of webinar section
          </h2>
          <ul className="  text-sm list-decimal md:px-5">
            <li>
              Recording: Many webinar platforms allow for sessions to be
              recorded and shared later, enabling attendees to review content or
              catch up if they missed the live event.
            </li>
            <li>
              Cost-Effective: Webinars eliminate travel and venue costs
              associated with in-person events, making them a cost-effective
              solution for organizations.
            </li>
            <li>
              Audience Reach: They enable organizations to reach a global
              audience without the limitations of physical space.
            </li>
          </ul>
          <div className=" py-2">
            <h3 className=" font-semibold py-3">Webinar features</h3>

            <ul className="  text-sm list-disc md:px-5">
              <li>
                Cost-Effective: Webinars eliminate travel and venue costs
                associated with in-person events, making them a cost-effective
                solution for organizations.
              </li>
              <li>
                Audience Reach: They enable organizations to reach a global
                audience without the limitations of physical space.
              </li>
              <li>
                Audience Reach: They enable organizations to reach a global
                audience without the limitations of physical space.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

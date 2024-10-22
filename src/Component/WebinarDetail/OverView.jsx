import React from "react";

function OverView() {
  return (
    <div className=" conatiner">
      <div className=" custom-scroll-detail  md:border xl:flex flex-col w-full gap-4  p-3 relative bg-white h-[480px] overflow-scroll">
        <div className=" px-2  ">
          <h2 className=" font-bold">Key Features of Webinars</h2>
          <ul className="  text-md list-decimal md:px-4">
            <li>
              Format: Webinars typically include presentations, discussions, and
              interactive sessions, often utilizing slides, videos, or
              demonstrations.
            </li>
            Interactivity: Participants can engage with presenters through Q&A
            sessions, polls, and chat features, enhancing the learning
            experience.
            <li>
              Accessibility: Webinars can be accessed from anywhere with an
              internet connection, making them convenient for both presenters
              and attendees.
            </li>
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
          <div className=" font-semibold py-5">Benefits of Webinars</div>
          <ul className=" list-disc  md:px-5">
            <li>
              Knowledge Sharing: Webinars facilitate the dissemination of
              information and best practices on various topics, from industry
              trends to new technologies.
            </li>
            <li>
              Networking Opportunities: They create opportunities for networking
              among participants, presenters, and industry professionals.
            </li>
            Lead Generation: Businesses often use webinars as a marketing tool
            to attract potential clients and gather contact information from
            participants.
            <li>
              Training and Development: Organizations can utilize webinars for
              employee training and professional development, making learning
              more flexible and accessible.
            </li>
            <li>
              Common Uses Educational Purposes: Institutions and professionals
              use webinars to provide training sessions, workshops, and
              lectures.
            </li>
            Marketing: Companies conduct product demonstrations, launch events,
            and informational sessions to promote their services or products.
            <li>
              Networking: Webinars can serve as networking events for industry
              professionals to connect and share ideas.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OverView;

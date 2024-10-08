import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const CircularProgressBar = ({ percentage, color }) => {
  const radius = 60;
  const stroke = 15;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    // percentag progress bar section
    <svg
      height={radius * 2}
      width={radius * 2}
      className="transform rotate-[-90deg]"
    >
      <circle
        stroke="#e5e7eb" // Gray background for the circle
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={color} // Dynamic stroke color
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={color}
        fontSize="1.2rem"
        fontWeight="bold"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

const Team = () => {
  // for circle bar

  const progressData = [
    { title: "Zoho Consulting", percentage: 90, color: "#FF8A50" },
    { title: "Website Development", percentage: 80, color: " #81C784" },
    { title: "HubSpot Consulting", percentage: 85, color: "#CE93D8" },
    { title: "Digital Marketing", percentage: 50, color: "#AED581" },
  ];
  //  for team member

  const members = [
    {
      id: 1,
      img: "/image/ab.webp",
      title: "Amarjeet Singh",
      designation: "Founder | Business Automation Expert",
      linkedIn: "https://linkedin.com/in/divyanka",
      twitter: "https://twitter.com/divyanka",
      instagram: "https://instagram.com/divyanka",
    },
    {
      id: 2,
      img: "/image/ab.webp",
      title: "Divyanka Mishra",
      designation: "Chief Technical officer (Technical Head)",
      linkedIn: "https://linkedin.com/in/divyanka",
      twitter: "https://twitter.com/divyanka",
      instagram: "https://instagram.com/divyanka_887",
    },
    {
      id: 3,
      img: "/image/ab.webp",
      title: "Vivek Kumar Chauhan",
      designation: "Employee | Web Developer",
      linkedIn: "https://linkedin.com/in/divyanka",
      twitter: "https://twitter.com/di",
      instagram: "https://instagram.com/vivek_chauhan973",
    },
    {
      id: 4,
      img: "/image/ab.webp",
      title: "Rakesh Kumar",
      designation: "Employee | Web Developer",
      linkedIn: "https://www.linkedin.com/in/rakesh-kumar-89850b298/",
      twitter: "https://x.com/Rakesh_Rikki01",
      instagram: "https://instagram.com/rakeshkumarrikki",
    },
    {
      id: 5,
      img: "/image/ab.webp",
      title: "Pradhumn",
      designation: "Employee | Backend Developer",
      linkedIn: "https://linkedin.com/in/",
      twitter: "https://twitter.com/di",
      instagram: "https://instagram.com/pradhumn689",
    },
    {
      id: 6,
      img: "/image/ab.webp",
      title: "Naitik Pratap Singh",
      designation: "Employee | Zoho Developer",
      linkedIn: "https://linkedin.com/in/di",
      twitter: "https://twitter.com/di",
      instagram: "https://instagram.com/naitik_chauhan01",
    },
    {
      id: 7,
      img: "/image/ab.webp",
      title: "Aparna Raj",
      designation: "Employee | Zoho Developer",
      linkedIn: "https://linkedin.com/in/di",
      twitter: "https://twitter.com/di",
      instagram: "https://instagram.com/aparnaraj7890",
    },
    {
      id: 8,
      img: "/image/ab.webp",
      title: "Priya",
      designation: "Employee | Zoho Developer",
      linkedIn: "https://linkedin.com/in/di",
      twitter: "https://twitter.com/di",
      instagram: "https://instagram.com/priya__04_yadav",
    },
  ];

  return (
    <div className="container mx-auto bg-gray-50">
      {/* Team Section */}
      <div className="px-6 py-4 ">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-5">
          Our Biggest Asset is Our Team
        </h1>
        <p className="text-sm md:text-base leading-6  text-center mb-8 mx-4 md:mx-16">
          Our team thrives on collaboration and is fueled by a diverse array of
          talent. We actively engage with the creative community, consistently
          seeking out what's on the horizon, and always maintain a positive and
          welcoming atmosphere.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 md:px-8 lg:px-16 place-items-center">
          {members.map((member) => (
            <div
              key={member.id}
              className="w-full max-w-xs  md:max-w-sm lg:max-w-md h-80 border rounded-lg shadow-lg overflow-hidden"
            >
              <div className="w-full h-3/5 p-4">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src={member.img}
                  alt={member.title}
                />
              </div>
              <div className="w-full h-2/5 px-2">
                <div className="w-full h-3/5 ">
                  <div className="font-semibold text-center text-md">
                    {member.title}
                  </div>
                  <p className="text-gray-700 text-center text-base">
                    {member.designation}
                  </p>
                </div>
                <div className="w-full h-auto pt-1 flex justify-center items-center space-x-2">
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full  text-blue-500 text-3xl flex justify-center items-center"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full  text-blue-500 text-3xl flex justify-center items-center"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full  text-pink-500 text-3xl flex justify-center items-center"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Skills  start*/}
      <div className="w-full h-auto md:px-5 px-5 py-5">
        <div className="md:flex block justify-center items-start">
          <div className="flex-col md:py-10 md:pl-10 p-5 md:w-1/2 w-full">
            <p className="text-[12px] text-zinc-500 leading-3 font-bold uppercase">
              Team Skills
            </p>
            <h2 className="mt-4 mb-3 text-2xl font-bold capitalize">
              Digital Consulting Experts
            </h2>
            <h4 className="text-xl text-[#FF7A53] font-semibold capitalize">
              Real people for better results
            </h4>
            <p className="text-[15px] leading-6">
              We have high performing teams for Zoho consulting, HubSpot
              consulting, web development, digital marketing & CRM Expert
            </p>

            <button className="  border border-orange-500  hover:text-primary hover:bg-white  py-2 md:py-3 px-4 md:px-5 rounded-2xl bg-primary my-5 text-white">
              Meet our team
            </button>
          </div>

          {/* Circular Progress Bar Section */}
          <div className="md:w-1/2 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 gap-3 md:p-5">
            {progressData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <CircularProgressBar
                  percentage={item.percentage}
                  color={item.color}
                />
                <p className="mt-1 text-base  md:text-md font-semibold text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team Skills End */}
    </div>
  );
};

export default Team;

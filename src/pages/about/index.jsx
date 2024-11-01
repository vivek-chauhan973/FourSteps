// import AboutSection from "@/Component/About/AboutSection";
// import { Footer } from "@/Component/Footer/Footer";
// import Team from "@/Component/Team/Team";
// import Testimonial from "@/Component/Testimonial/Testimonial";
// import React from "react";

// const About = () => {
//   return (
//     <div className=" container">
//       <div className="w-100vw h-100vh">
//         <div
//           className="relative w-full h-80 mb-10 sm:h-96 lg:h-[32rem] flex items-center justify-center bg-cover object-cover text-white"
//           style={{
//             backgroundImage:
//               'url("https://www.bhmpics.com/downloads/blue-background-picture-/7.photo-1597773150796-e5c14ebecbf5.jpg")',
//           }}
//         >
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="relative z-10 text-center px-4">
//             <p className="text-2xl mb-5">Our Company's About Details.</p>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-2">
//               We are a Corporate Business Agency
//             </h1>
//             {/* <p className="text-sm sm:text-lg">For explorers everywhere.</p> */}
//           </div>
//         </div>
//       </div>
//       {/* <AboutSection /> */}

//       {/* who we are here */}

//       <div className="w-full py-10 px-10">
//         <div className="grid md:grid-cols-2  py-5 gap-8 items-center">
//           {/* <!-- Left Text Section --> */}
//           <div className="w-full pl-5">
//             <div className="text-center md:text-left mb-6">
//               <span className="text-red-500 bg-red-100 rounded-md px-3 py-1 text-sm">
//                 4steps Digital
//               </span>
//             </div>
//             <h1 className="text-3xl font-bold text-center md:text-left mb-4 leading-snug">
//               We are born to
//               <br />
//               <span className="text-gradient">Develop Experience</span>
//             </h1>
// <p className="text-sm text-center md:text-left  ">
//   Back in 2020, something exciting took shape in Greater Noida – an
//   agency led by the enthusiastic Mr. Amarjeet Kumar Singh. They
//   started off as <b>“4steps Marketing”</b> and quickly made a name
//   for themselves with their innovative ideas. But guess what?
//   They’ve grown even more since then! They recently revamped their
//   identity and are now known as
//   <b>“Four Steps Digital Consulting Pvt. Ltd.”</b>
//   This new name shows they’re not just about marketing anymore –
//   they’re all about helping folks navigate the digital world and
//   offering top-notch advice. Four Steps Digital Consulting Pvt Ltd
//   is a digital consulting agency in India. We are dedicated to
//   honesty, hard work, and results we serve small-medium size
//   businesses. Our primary focus is to
//   <span className=" text-blue-400">
//     Zoho Consulting, HubSpot Consulting, Digital Marketing &
//     Branding, and Website Designing & Development
//   </span>
// </p>
//           </div>
//           {/* <!-- Right Image Section --> */}
//           <div className="w-full md:w-3/4 flex justify-center">
//             <img
//               aria-hidden="true"
//               alt="Nexinfotech Logo"
//               src="/image/ab.webp"
//               className="rounded-md shadow-md"
//             />
//           </div>
//         </div>
//       </div>
//       {/* our vision  section */}
//       <div>
//         <div className="w-full my-5  h-[100px] grid place-items-center">
//           <div className="grid place-items-center">
//             <h1 className="text-center text-md md:text-2xl lg:text-4xl tracking-wide font-semibold ">
//               Work For Your
//               <span className="text-gradient"> Incredible Success</span>
//             </h1>
//           </div>
//         </div>
//         <div className="flex justify-around md:max-w-4xl mx-auto border  p-4 bg-white rounded-full shadow-xl">
//           <span className="flex items-center text-red-500">
//             <span className="material-icons text-red-500">•</span>
//             <span className="ml-1">Our Mission</span>
//           </span>
//           <span className="flex items-center text-zinc-800">
//             <span className="material-icons">•</span>
//             <span className="ml-1">Our Vision</span>
//           </span>
//           <span className="flex items-center text-red-500">
//             <span className="material-icons text-red-500">•</span>
//             <span className="ml-1">Our Goal</span>
//           </span>
//         </div>
//       </div>
//       {/* our team section  */}
//       <div>
//         <Team />
//       </div>

//       {/*  some text after team section */}
//       <div className="w-full md:h-[300px] h-[200px] grid place-items-center">
//         <div className="grid place-items-center">
//           <h1 className="text-center text-md md:text-2xl lg:text-4xl tracking-wide font-semibold ">
//             Access your business potentials
//             <br /> today & find opportunity for
//             <br />
//             <span className="text-gradient">bigger success</span>
//           </h1>
//         </div>
//       </div>
//       <Testimonial />
//       <Footer />
//     </div>
//   );
// };

// export default About;

// import React, { useState } from "react";
// import AboutSection from "@/Component/About/AboutSection";
// import { Footer } from "@/Component/Footer/Footer";
// import Team from "@/Component/Team/Team";
// import Testimonial from "@/Component/Testimonial/Testimonial";

// const About = () => {
//   // Step 1: Array with data for Our Mission, Our Vision, and Our Goal
//   const data = [
//     {
//       title: "Our Mission",
//       content:
//         "At FourSteps Digital, our mission is to provide comprehensive IT solutions that drive innovation and efficiency. We specialize in delivering tailored technology services that help businesses optimize their operations, enhance security, and scale with confidence. From cloud computing and cybersecurity to software development and IT consulting, we are dedicated to offering cutting-edge solutions that align with our clients' goals. With a focus on reliability, innovation, and customer success, FourSteps Digital is your trusted partner in navigating the complexities of today’s IT landscape. Together, we build a future where technology powers progress.",
//     },
//     {
//       title: "Our Vision",
//       content:
//         "At FourSteps Digital, our vision is to be a global leader in IT solutions, driving digital innovation that empowers businesses to thrive in a rapidly evolving technological landscape. We aspire to create a world where cutting-edge technology is accessible, seamless, and transformative, enabling companies of all sizes to unlock their full potential. Through continuous innovation, exceptional service, and a commitment to excellence, we envision shaping a future where technology fuels success, fosters growth, and brings lasting positive impact to businesses and communities worldwide.",
//     },
//     {
//       title: "Our Goal",
//       content:
//         "At FourSteps Digital, our goal is to deliver top-tier IT solutions that drive business success and digital transformation. We aim to provide innovative, reliable, and scalable technology services that meet the unique needs of our clients. By fostering strong partnerships, staying at the forefront of technological advancements, and maintaining a client-centric approach, we strive to empower businesses to achieve operational excellence, enhance productivity, and stay competitive in today’s dynamic market. Our ultimate goal is to be a trusted partner, guiding our clients toward sustainable growth and long-term success through strategic IT solutions.",
//     },
//   ];

//   // Step 2: State to track the current section
//   const [currentdata, setCurrentData] = useState(data[0]);

//   // Step 3: Function to handle clicks and update the content
//   const handleSectionClick = (data) => {
//     setCurrentData(data);
//   };

//   const formatFirstFourWords = (content) => {
//     const words = content.split(" ");
//     const firstFourWords = words.slice(0, 3).join(" ");
//     const remainingWords = words.slice(3).join(" ");

//     return (
//       <p className="text-md">
//         <span className="font-bold italic">{firstFourWords}</span>{" "}
//         {remainingWords}
//       </p>
//     );
//   };

//   return (
//     <div className="container">
//       <div className="w-100vw h-100vh">
//         <div
//           className="relative w-full h-80 mb-10 sm:h-96 lg:h-[32rem] flex items-center justify-center bg-cover object-cover text-white"
//           style={{
//             backgroundImage:
//               'url("https://www.bhmpics.com/downloads/blue-background-picture-/7.photo-1597773150796-e5c14ebecbf5.jpg")',
//           }}
//         >
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="relative z-10 text-center px-4">
//             <p className="text-2xl mb-5">Our Company's About Details.</p>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-2">
//               We are a Corporate Business Agency
//             </h1>
//           </div>
//         </div>
//       </div>

//       <div className="w-full py-10 px-10">
//         <div className="grid md:grid-cols-2 py-5 gap-8 items-center">
//           {/* Left Text Section */}
//           <div className="w-full pl-5">
//             <div className="text-center md:text-left mb-6">
//               <span className="text-red-500 bg-red-100 rounded-md px-3 py-1 text-sm">
//                 4steps Digital
//               </span>
//             </div>
//             <h1 className="text-3xl font-bold text-center md:text-left mb-4 leading-snug">
//               We are born to
//               <br />
//               <span className="text-gradient">Develop Experience</span>
//             </h1>
// <p className="text-sm text-center md:text-left  ">
//   Back in 2020, something exciting took shape in Greater Noida – an
//   agency led by the enthusiastic Mr. Amarjeet Kumar Singh. They
//   started off as <b>“4steps Marketing”</b> and quickly made a name
//   for themselves with their innovative ideas. But guess what?
//   They’ve grown even more since then! They recently revamped their
//   identity and are now known as
//   <b>“Four Steps Digital Consulting Pvt. Ltd.”</b>
//   This new name shows they’re not just about marketing anymore –
//   they’re all about helping folks navigate the digital world and
//   offering top-notch advice. Four Steps Digital Consulting Pvt Ltd
//   is a digital consulting agency in India. We are dedicated to
//   honesty, hard work, and results we serve small-medium size
//   businesses. Our primary focus is to
//   <span className=" text-blue-400">
//     Zoho Consulting, HubSpot Consulting, Digital Marketing &
//     Branding, and Website Designing & Development
//   </span>
// </p>
//           </div>
//           {/* Right Image Section */}
//           <div className="w-full md:w-3/4 flex justify-center">
//             <img
//               aria-hidden="true"
//               alt="foursteps"
//               src="/image/ab.webp"
//               className="rounded-md shadow-md"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Vision Section */}
//       <div>
//         <div className="w-full my-5 h-[100px] grid place-items-center">
//           <div className="grid place-items-center">
//             <h1 className="text-center text-md md:text-2xl lg:text-4xl tracking-wide font-semibold">
//               Work For Your
//               <span className="text-gradient"> Incredible Success</span>
//             </h1>
//           </div>
//         </div>

//         {/* Step 4: Display options for Mission, Vision, Goal */}
//         <div className="flex justify-around md:max-w-4xl mx-auto border py-3 bg-white rounded-full shadow-xl">
//           {data.map((data, index) => (
//             <span
//               key={index}
//               onClick={() => handleSectionClick(data)} // Step 5: Handle click
//               className={`cursor-pointer flex items-center ${
//                 currentdata.title === data.title
//                   ? "text-red-500"
//                   : "text-zinc-800"
//               }`}
//             >
//               <span className="  text-3xl">•</span>
//               <span className="ml-1  font-medium ">{data.title}</span>
//             </span>
//           ))}
//         </div>

//         {/* Step 6: Display the current section content */}
//         <div className="w-full md:max-w-4xl my-5 h-auto mx-auto grid place-items-center px-10">
//           {/* <p className="custom-first-line text-center  text-lg">
//             {currentdata.content}
//           </p> */}

//           {formatFirstFourWords(currentdata.content)}
//         </div>
//       </div>

// {/* Team Section */}
// <div>
//   <Team />
// </div>

// {/* Extra Section */}
// <div className="w-full md:h-[300px] h-[200px] grid place-items-center">
//   <div className="grid place-items-center">
//     <h1 className="text-center text-md md:text-2xl lg:text-4xl tracking-wide font-semibold">
//       Access your business potentials
//       <br /> today & find opportunity for
//       <br />
//       <span className="text-gradient">bigger success</span>
//     </h1>
//   </div>
// </div>

//       <Testimonial />
//       <Footer />
//     </div>
//   );
// };

// export default About;

import React, { useState } from "react";
import AboutSection from "@/Component/About/AboutSection";
import { Footer } from "@/Component/Footer/Footer";
import Team from "@/Component/Team/Team";
import Testimonial from "@/Component/Testimonial/Testimonial";
// import Breadcrumbs from "@/Component/About/Breadcrumbs";

const About = () => {
  const data = [
    {
      title: "Our Mission",
      content:
        "At FourSteps Digital, our mission is to provide comprehensive IT solutions that drive innovation and efficiency. We specialize in delivering tailored technology services that help businesses optimize their operations, enhance security, and scale with confidence. From cloud computing and cybersecurity to software development and IT consulting, we are dedicated to offering cutting-edge solutions that align with our clients' goals. With a focus on reliability, innovation, and customer success, FourSteps Digital is your trusted partner in navigating the complexities of today’s IT landscape. Together, we build a future where technology powers progress.",
    },
    {
      title: "Our Vision",
      content:
        "At FourSteps Digital, our vision is to be a global leader in IT solutions, driving digital innovation that empowers businesses to thrive in a rapidly evolving technological landscape. We aspire to create a world where cutting-edge technology is accessible, seamless, and transformative, enabling companies of all sizes to unlock their full potential. Through continuous innovation, exceptional service, and a commitment to excellence, we envision shaping a future where technology fuels success, fosters growth, and brings lasting positive impact to businesses and communities worldwide.",
    },
    {
      title: "Our Goal",
      content:
        "At FourSteps Digital, our goal is to deliver top-tier IT solutions that drive business success and digital transformation. We aim to provide innovative, reliable, and scalable technology services that meet the unique needs of our clients. By fostering strong partnerships, staying at the forefront of technological advancements, and maintaining a client-centric approach, we strive to empower businesses to achieve operational excellence, enhance productivity, and stay competitive in today’s dynamic market. Our ultimate goal is to be a trusted partner, guiding our clients toward sustainable growth and long-term success through strategic IT solutions.",
    },
  ];

  const [currentdata, setCurrentData] = useState(data[0]);
  const [fade, setFade] = useState(true); // State for fade-in effect

  const handleSectionClick = (newData) => {
    if (newData.title !== currentdata.title) {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setCurrentData(newData);
        setFade(true); // Start fade-in effect
      }, 300); // Wait for fade-out to complete
    }
  };

  const formatFirstFourWords = (content) => {
    const words = content.split(" ");
    const firstFourWords = words.slice(0, 3).join(" ");
    const remainingWords = words.slice(3).join(" ");
    return (
      <p className="text-md">
        <span className="font-bold italic">{firstFourWords}</span>{" "}
        {remainingWords}
      </p>
    );
  };

  return (
    <div className="container">
      <div className="w-100vw h-100vh">
        <div
          className="relative w-full h-80 mb-10 sm:h-96 lg:h-[32rem] flex items-center justify-center bg-cover object-cover text-white"
          style={{
            backgroundImage:
              'url("https://www.bhmpics.com/downloads/blue-background-picture-/7.photo-1597773150796-e5c14ebecbf5.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <p className="text-2xl mb-5">Our Companys About Details.</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-2">
              We are a Corporate Business Agency
            </h1>
          </div>
        </div>
      </div>
   
      {/* Breadcrumbs Component */}
      <div className="w-full py-10 px-10">
        <div className="grid md:grid-cols-2 py-5 gap-8 items-center">
          <div className="w-full pl-5">
            <div className="text-center md:text-left mb-6">
              <span className="text-red-500 bg-red-100 rounded-md px-3 py-1 text-sm">
                4steps Digital
              </span>
            </div>
            <h1 className="text-3xl font-bold text-center md:text-left mb-4 leading-snug">
              We are born to
              <br />
              <span className="text-gradient">Develop Experience</span>
            </h1>
            <p className="text-sm text-center md:text-left">
              Back in 2020, something exciting took shape in Greater Noida – an
              agency led by the enthusiastic Mr. Amarjeet Kumar Singh. They
              started off as <b>“4steps Marketing”</b> and quickly made a name
              for themselves with their innovative ideas. But guess what?
              They’ve grown even more since then! They recently revamped their
              identity and are now known as
              <b>“Four Steps Digital Consulting Pvt. Ltd.”</b>
              This new name shows they’re not just about marketing anymore –
              they’re all about helping folks navigate the digital world and
              offering top-notch advice. Four Steps Digital Consulting Pvt Ltd
              is a digital consulting agency in India. We are dedicated to
              honesty, hard work, and results we serve small-medium size
              businesses. Our primary focus is to
              <span className=" text-blue-400">
                Zoho Consulting, HubSpot Consulting, Digital Marketing &
                Branding, and Website Designing & Development
              </span>
            </p>
          </div>
          <div className="w-full md:w-3/4 flex justify-center">
            <img
              aria-hidden="true"
              alt="foursteps"
              src="/image/ab.webp"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="w-full my-5 h-[100px] grid place-items-center">
          <div className="grid place-items-center">
            <h1 className="text-center text-md md:text-2xl lg:text-4xl tracking-wide font-semibold">
              Work For Your{" "}
              <span className="text-gradient">Incredible Success</span>
            </h1>
          </div>
        </div>

        <div className="flex justify-around md:max-w-4xl mx-auto border py-3 bg-white rounded-full shadow-xl">
          {data.map((data, index) => (
            <span
              key={index}
              onClick={() => handleSectionClick(data)}
              className={`cursor-pointer flex items-center ${
                currentdata.title === data.title
                  ? "text-red-500"
                  : "text-zinc-800"
              }`}
            >
              <span className="text-3xl">•</span>
              <span className="ml-1 font-medium ">{data.title}</span>
            </span>
          ))}
        </div>

        <div
          className={`w-full md:max-w-4xl my-5 h-auto mx-auto grid place-items-center px-10 ${
            fade ? "fade-in" : "fade-out"
          }`}
        >
          {formatFirstFourWords(currentdata.content)}
        </div>
      </div>
      {/* Team Section */}
      <div>
        <Team />
      </div>

      {/* Extra Section */}
      <div className="w-full md:h-[300px] h-[200px] grid place-items-center">
        <div className="grid place-items-center">
          <h1 className="text-center text-md md:text-2xl lg:text-4xl tracking-wide font-semibold">
            Access your business potentials
            <br /> today & find opportunity for
            <br />
            <span className="text-gradient">bigger success</span>
          </h1>
        </div>
      </div>

      <Testimonial />
      <Footer />
    </div>
  );
};

export default About;

//this is main function start/

// import Webinarcard from "@/Component/WebinarCard/Webinarcard";
// import React, { useState } from "react";

// import { Footer } from "@/Component/Footer/Footer";
// const Recorded = () => {

//   const data = [
//     {
//       title: "Ultra HD streaming",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Add YouTube video URL
//     },
//     {
//       title: "Smart scheduling",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/2Vv-BfVoq4g", // Add YouTube video URL
//     },
//     {
//       title: "Workshops & webinars",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Add YouTube video URL
//     },
//   ];
// //  for read more and read less functionality
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleReadMore = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   //  for modal or popup system
//   const[modalVisible,setModalVisible]=useState(false)

//   return (

//     <div>  <Webinarcard />
//     <div className="container mx-auto p-4">

//       <div className="text-center my-6">
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
//           Unlock knowledge at your own pace with our recorded webinars
//         </h2>

//         <p className=" py-2 px-20  text-sm">
//           Are you looking to streamline your
//           business operations and boost productivity? Join us for an insightful
//           webinar led by <b>Amarjeet Singh</b>, a seasoned Zoho consultant and
//           automation expert. In this session, Amarjeet will share his extensive
//           knowledge of Zoho’s suite of applications and how they can transform
//           your business.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
//           >
//             {/* Embedded YouTube Video */}
//             <div className="w-full h-48 mb-3">
//               <iframe
//                 className="w-full h-full rounded-lg"
//                 src={item.video}
//                 title={item.title}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>

//             {/* Feature Title */}
//             <div className="bg-gray-200 text-black font-semibold rounded-full py-1 px-4 flex justify-center">
//               <span className="text-center">{item.title}</span>
//             </div>

//             {/* Description with Read More/Less */}
//             <div className="mt-2 text-gray-700 text-center">
//               <div className={`text-sm`}>
//                 {/* Show truncated description if not expanded */}
//                 {expandedIndex === index
//                   ? item.description
//                   : item.description.length > 100 // Adjust the number of characters to truncate
//                   ? item.description.slice(0, 100) + "..." // Truncated version
//                   : item.description}
//               </div>
//               <span
//                 className="text-blue-500 cursor-pointer mt-2"
//                 onClick={() => toggleReadMore(index)}
//               >
//                 {expandedIndex === index ? "Read Less" : "Read More"}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//     </div>
//   );
// };

// export default Recorded;

// main functio code end

// import Webinarcard from "@/Component/WebinarCard/Webinarcard";
// import React, { useState } from "react";
// import { Footer } from "@/Component/Footer/Footer";

// const Recorded = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [activeVideo, setActiveVideo] = useState(null);

//   const data = [
//     {
//       title: "Ultra HD streaming",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     },
//     {
//       title: "Smart scheduling",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/2Vv-BfVoq4g",
//     },
//     {
//       title: "Workshops & webinars",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
//     },
//   ];

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleReadMore = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   const handleVideoClick = (index) => {
//     setActiveVideo(index);
//     setModalVisible(true); // Show the modal
//   };

//   const handleSubmit = () => {
//     setModalVisible(false); // Hide modal on submit
//   };

//   return (
//     <div>
//       <Webinarcard />
//       {/* Modal Component */}
//       {modalVisible && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <h2 className="text-xl font-semibold mb-4">Register to watch</h2>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSubmit(); // Hide modal on submit
//               }}
//             >
//               <div className="mb-4">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   className="mr-4 bg-gray-400 text-white px-4 py-2 rounded-md"
//                   onClick={() => setModalVisible(false)}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div className="container mx-auto p-4">
//         <div className="text-center my-6">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
//             Unlock knowledge at your own pace with our recorded webinars
//           </h2>
//           <p className="py-2 px-20 text-sm">
//             Are you looking to streamline your business operations and boost
//             productivity? Join us for an insightful webinar led by{" "}
//             <b>Amarjeet Singh</b>, a seasoned Zoho consultant and automation
//             expert.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
//             >
//               {/* Embedded YouTube Video */}
//               <div
//                 className="w-full h-48 mb-3 cursor-pointer"
//                 onClick={() => handleVideoClick(index)} // Trigger modal on click
//               >
//                 <iframe
//                   className={`w-full h-full rounded-lg ${
//                     activeVideo === index && !modalVisible ? "" : "hidden"
//                   }`}
//                   src={item.video}
//                   title={item.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//                 <div
//                   className={`w-full h-full bg-gray-200 flex items-center justify-center ${
//                     activeVideo === index && !modalVisible ? "hidden" : ""
//                   }`}
//                 >
//                   <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
//                     Watch
//                   </button>
//                 </div>
//               </div>

//               {/* Feature Title */}
//               <div className="bg-gray-200 text-black font-semibold rounded-full py-1 px-4 flex justify-center">
//                 <span className="text-center">{item.title}</span>
//               </div>

//               {/* Description with Read More/Less */}
//               <div className="mt-2 text-gray-700 text-center">
//                 <div className={`text-sm`}>
//                   {expandedIndex === index
//                     ? item.description
//                     : item.description.length > 100
//                     ? item.description.slice(0, 100) + "..."
//                     : item.description}
//                 </div>
//                 <span
//                   className="text-blue-500 cursor-pointer mt-2"
//                   onClick={() => toggleReadMore(index)}
//                 >
//                   {expandedIndex === index ? "Read Less" : "Read More"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Recorded;

// import Webinarcard from "@/Component/WebinarCard/Webinarcard";
// import React, { useState } from "react";
// import { Footer } from "@/Component/Footer/Footer";

// const Recorded = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [activeVideo, setActiveVideo] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const data = [
//     {
//       title: "Ultra HD streaming",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     },
//     {
//       title: "Smart scheduling",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/2Vv-BfVoq4g",
//     },
//     {
//       title: "Workshops & webinars",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
//     },
//   ];

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleReadMore = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   const handleVideoClick = (index) => {
//     setActiveVideo(index);
//     setModalVisible(true); // Show the modal
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData); // Print form data to console
//     setModalVisible(false); // Hide modal on submit
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value }); // Update form state
//   };

//   return (
//     <div>
//       <Webinarcard />
//       {/* Modal Component */}
//       {modalVisible && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <h2 className="text-xl font-semibold mb-4">Register to watch</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end">

//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div className="container mx-auto p-4">
//         <div className="text-center my-6">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
//             Unlock knowledge at your own pace with our recorded webinars
//           </h2>
//           <p className="py-2 px-20 text-sm">
//             Are you looking to streamline your business operations and boost
//             productivity? Join us for an insightful webinar led by{" "}
//             <b>Amarjeet Singh</b>, a seasoned Zoho consultant and automation
//             expert.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
//             >
//               {/* Embedded YouTube Video */}
//               <div
//                 className="w-full h-48 mb-3 cursor-pointer"
//                 onClick={() => handleVideoClick(index)} // Trigger modal on click
//               >
//                 <iframe
//                   className={`w-full h-full rounded-lg ${
//                     activeVideo === index && !modalVisible ? "" : "hidden"
//                   }`}
//                   src={item.video}
//                   title={item.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//                 <div
//                   className={`w-full h-full bg-gray-200 flex items-center justify-center ${
//                     activeVideo === index && !modalVisible ? "hidden" : ""
//                   }`}
//                 >
//                   <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
//                     Watch
//                   </button>
//                 </div>
//               </div>

//               {/* Feature Title */}
//               <div className="bg-gray-200 text-black font-semibold rounded-full py-1 px-4 flex justify-center">
//                 <span className="text-center">{item.title}</span>
//               </div>

//               {/* Description with Read More/Less */}
//               <div className="mt-2 text-gray-700 text-center">
//                 <div className={`text-sm`}>
//                   {expandedIndex === index
//                     ? item.description
//                     : item.description.length > 100
//                     ? item.description.slice(0, 100) + "..."
//                     : item.description}
//                 </div>
//                 <span
//                   className="text-blue-500 cursor-pointer mt-2"
//                   onClick={() => toggleReadMore(index)}
//                 >
//                   {expandedIndex === index ? "Read Less" : "Read More"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Recorded;

// import Webinarcard from "@/Component/WebinarCard/Webinarcard";
// import React, { useState, useEffect } from "react";
// import { Footer } from "@/Component/Footer/Footer";

// const Recorded = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [activeVideo, setActiveVideo] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });
//   const [isRegistered, setIsRegistered] = useState(false);

//   const data = [
//     {
//       title: "Ultra HD streaming",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     },
//     {
//       title: "Smart scheduling",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/2Vv-BfVoq4g",
//     },
//     {
//       title: "Workshops & webinars",
//       description:
//         "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
//       video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
//     },
//   ];

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   useEffect(() => {
//     // Check if the user is already registered by looking at localStorage
//     const registered = localStorage.getItem("isRegistered");
//     if (registered === "true") {
//       setIsRegistered(true);
//     }
//   }, []);

//   const toggleReadMore = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   const handleVideoClick = (index) => {
//     if (isRegistered) {
//       // If user is already registered, no need for the modal
//       setActiveVideo(index);
//     } else {
//       setActiveVideo(index);
//       setModalVisible(true); // Show the modal if not registered
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData); // Print form data to console
//     setIsRegistered(true);
//     localStorage.setItem("isRegistered", "true"); // Save registration status to localStorage
//     setModalVisible(false); // Hide modal on submit
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value }); // Update form state
//   };

//   return (
//     <div>
//       <Webinarcard />
//       {/* Modal Component */}
//       {modalVisible && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <h2 className="text-xl font-semibold mb-4">Register to watch</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div className="container mx-auto p-4">
//         <div className="text-center my-6">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
//             Unlock knowledge at your own pace with our recorded webinars
//           </h2>
//           <p className="py-2 px-20 text-sm">
//             Are you looking to streamline your business operations and boost
//             productivity? Join us for an insightful webinar led by{" "}
//             <b>Amarjeet Singh</b>, a seasoned Zoho consultant and automation
//             expert.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
//             >
//               {/* Embedded YouTube Video */}
//               <div
//                 className="w-full h-48 mb-3 cursor-pointer"
//                 onClick={() => handleVideoClick(index)} // Trigger modal on click
//               >
//                 <iframe
//                   className={`w-full h-full rounded-lg ${
//                     activeVideo === index && !modalVisible ? "" : "hidden"
//                   }`}
//                   src={item.video}
//                   title={item.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//                 <div
//                   className={`w-full h-full bg-gray-200 flex items-center justify-center ${
//                     activeVideo === index && !modalVisible ? "hidden" : ""
//                   }`}
//                 >
//                   <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
//                     Watch
//                   </button>
//                 </div>
//               </div>

//               {/* Feature Title */}
//               <div className="bg-gray-200 text-black font-semibold rounded-full py-1 px-4 flex justify-center">
//                 <span className="text-center">{item.title}</span>
//               </div>

//               {/* Description with Read More/Less */}
//               <div className="mt-2 text-gray-700 text-center">
//                 <div className={`text-sm`}>
//                   {expandedIndex === index
//                     ? item.description
//                     : item.description.length > 100
//                     ? item.description.slice(0, 100) + "..."
//                     : item.description}
//                 </div>
//                 <span
//                   className="text-blue-500 cursor-pointer mt-2"
//                   onClick={() => toggleReadMore(index)}
//                 >
//                   {expandedIndex === index ? "Read Less" : "Read More"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Recorded;
import Webinarcard from "@/Component/WebinarCard/Webinarcard";
import React, { useState } from "react";
import { Footer } from "@/Component/Footer/Footer";

const Recorded = () => {
  const data = [
    {
      title: "Ultra HD streaming",
      description:
        "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Smart scheduling",
      description:
        "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
      video: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    },
    {
      title: "Workshops & webinars",
      description:
        "This setup should correctly center your feature titles. If it still doesn't work, it might help to inspect the elements using your browser's developer tools to see how the styles are being applied.",
      video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleWatchVideo = (video) => {
    setSelectedVideo(video);
    setModalVisible(true); // Show the modal
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData); // Log form data to the console
    setIsRegistered(true); // Set registration to true
    setModalVisible(false); // Hide the modal after submission
  };

  return (
    <div>
      <Webinarcard />
      <div className="container mx-auto p-4">
        <div className="text-center my-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            Unlock knowledge at your own pace with our recorded webinars
          </h2>

          <p className="py-2 px-20 text-sm">
            Are you looking to streamline your business operations and boost
            productivity? Join us for an insightful webinar led by{" "}
            <b>Amarjeet Singh</b>, a seasoned Zoho consultant and automation
            expert. In this session, Amarjeet will share his extensive knowledge
            of Zoho’s suite of applications and how they can transform your
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <div className="w-full h-48 mb-3">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={isRegistered ? item.video : ""}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="bg-gray-200 text-black font-semibold rounded-full py-1 px-4 flex justify-center">
                <span className="text-center">{item.title}</span>
              </div>

              <div className="mt-2 text-gray-700 text-center">
                <div className={`text-sm`}>
                  {expandedIndex === index
                    ? item.description
                    : item.description.length > 100
                    ? item.description.slice(0, 100) + "..."
                    : item.description}
                </div>
                <span
                  className="text-blue-500 cursor-pointer mt-2"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </span>
              </div>

              {!isRegistered && (
                <button
                  onClick={() => handleWatchVideo(item.video)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Watch Video
                </button>
              )}
            </div>
          ))}
        </div>

        <Footer />

        {modalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl mb-4">Register to Watch</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recorded;

// import AdminLayout from "@/Component/admin/AdminLayout";
// import Image from "next/image";
// import React, { useState } from "react";

// const Createwebinar = () => {
//   const [file, setFile] = useState(null);
//   const [altText, setAltText] = useState("");
//   const [title, setTitle] = useState("");
//   const [link, setLink] = useState("");
//   const [subtitle, setSubtitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectType, setSelectType] = useState(""); // Select Type
//   const [toolsAndSoftware, setToolsAndSoftware] = useState(""); // Tools and Software
//   const [topic, setTopic] = useState(""); // Topic
//   const [department, setDepartment] = useState(""); // Department
//   const [industry, setIndustry] = useState(""); // Industry
//   const [language, setLanguage] = useState(""); // Language

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFile(reader.result); // Set the image preview
//       };
//       reader.readAsDataURL(selectedFile); // Read the file as a data URL
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({
//       file,
//       altText,
//       title,
//       link,
//       subtitle,
//       description,
//       selectType,
//       toolsAndSoftware,
//       topic,
//       department,
//       industry,
//       language,
//     });
//   };

//   return (
//     <AdminLayout>
//       <div className="max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg shadow-xl">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Create Webinar here
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* File Upload Section */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Upload Image
//             </label>
//             <input
//               type="file"
//               accept="image/*" // Accept only image files
//               onChange={handleFileChange}
//               className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//               required
//             />
//           </div>

//           {file && (
//             <div className="mt-2">
//               <h3 className="text-lg font-medium text-gray-700">Preview:</h3>
//               <Image
//                 src={file}
//                 alt="Preview"
//                 className="mt-2 rounded-lg shadow-md"
//                 height={200}
//                 width={150}
//               />
//             </div>
//           )}

//           {/* Aligned Fields for Alt Text and Title */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label className="block text-sm font-semibold text-gray-700">
//                 Alt Text
//               </label>
//               <input
//                 type="text"
//                 value={altText}
//                 onChange={(e) => setAltText(e.target.value)}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm font-semibold text-gray-700">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 required
//               />
//             </div>
//           </div>

//           {/* Aligned Fields for Link and Subtitle */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label className="block text-sm font-semibold text-gray-700">
//                 Link
//               </label>
//               <input
//                 type="url"
//                 value={link}
//                 onChange={(e) => setLink(e.target.value)}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm font-semibold text-gray-700">
//                 Subtitle
//               </label>
//               <input
//                 type="text"
//                 value={subtitle}
//                 onChange={(e) => setSubtitle(e.target.value)}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Grid Layout for Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Select Type */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Select Type
//               </label>
//               <select
//                 value={selectType}
//                 onChange={(e) => setSelectType(e.target.value)}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Select an option</option>
//                 <option value="Option 1">Option 1</option>
//                 <option value="Option 2">Option 2</option>
//               </select>
//             </div>

//             {/* Tools and Software */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Tools and Software
//               </label>
//               <select
//                 value={toolsAndSoftware}
//                 onChange={(e) => setToolsAndSoftware(e.target.value)}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Select an option</option>
//                 <option value="Tool 1">Tool 1</option>
//                 <option value="Tool 2">Tool 2</option>
//               </select>
//             </div>

//             {/* Topic */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Topic
//               </label>
//               <select
//                 value={topic}
//                 onChange={(e) => setTopic(e.target.value)}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Select an option</option>
//                 <option value="Topic 1">Topic 1</option>
//                 <option value="Topic 2">Topic 2</option>
//               </select>
//             </div>

//             {/* Department */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Department
//               </label>
//               <select
//                 value={department}
//                 onChange={(e) => setDepartment(e.target.value)}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Select an option</option>
//                 <option value="Department 1">Department 1</option>
//                 <option value="Department 2">Department 2</option>
//               </select>
//             </div>

//             {/* Industry */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Industry
//               </label>
//               <select
//                 value={industry}
//                 onChange={(e) => setIndustry(e.target.value)}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Select an option</option>
//                 <option value="Industry 1">Industry 1</option>
//                 <option value="Industry 2">Industry 2</option>
//               </select>
//             </div>

//             {/* Languages */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Languages
//               </label>
//               <select
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Select an option</option>
//                 <option value="Language 1">Language 1</option>
//                 <option value="Language 2">Language 2</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Description
//             </label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//               rows="4"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// };

// export default Createwebinar;

// import React from "react";
// import AdminLayout from "@/Component/admin/AdminLayout";
// const Createwebinar = () => {
//   return (
//     <AdminLayout>
//       <div>
//         <h2 className="text-2xl font-bold  text-gray-800 mb-5">
//           Create Webinar here......
//         </h2>
//       </div>
//     </AdminLayout>
//   );
// };

// export default Createwebinar;

// import { useEffect, useState, useCallback } from "react";
// import PrimaryItinerary from "@/components/admin/itineraryCreate/PrimaryItinerary";
// import { useRouter } from "next/router";
// import Layout from "@/components/admin/Layout";
// import HighlightAbout from "@/components/admin/itineraryCreate/HighlightAbout";
// import Calendar from "@/components/admin/itineraryCreate/Calender";
// import ItineraryText from "@/components/admin/itineraryCreate/ItineraryText_Faq";
// import PackageFaq from "@/components/admin/itineraryCreate/PackageFaq";
// import FlightBooking from "@/components/admin/itineraryCreate/FlightBooking";
// import TourInformation from "@/components/admin/itineraryCreate/TourInformation";
// import SeoField from "@/components/admin/itineraryCreate/SeoField";
// import { useSearchParams } from "next/navigation";
// import GoogleMap from "@/components/admin/itineraryCreate/GoogleMap";
// import PricingManagement from "@/components/admin/itineraryCreate/PricingManagement";
// import PricingManagementPopup from "@/components/admin/itineraryCreate/PricingManagementPopup";
// import dynamic from "next/dynamic";
// import Index from "@/components/dy/Index";
// // Dynamically import icons
// const LuPackagePlus = dynamic(() =>
//   import("react-icons/lu").then((mod) => mod.LuPackagePlus)
// );
// const HiOutlineArrowNarrowRight = dynamic(() =>
//   import("react-icons/hi").then((mod) => mod.HiOutlineArrowNarrowRight)
// );

// import FixedDeparture from "@/components/admin/itineraryCreate/FixedDeparture";

// import PriceRange from "@/components/admin/itineraryCreate/PriceRange";
// import ImageUploading from "@/components/admin/itineraryCreate/ImageUploading";
// import SelectedDatePrice from "@/components/admin/itineraryCreate/SelectedDatePrice";
// import AdminLayout from "@/Component/admin/AdminLayout";

// export default function Createwebinar() {
//   const [pricingPopup, setPricingPopup] = useState(true);

//   const router = useRouter();
//   const { edit } = router.query;
//   // console.log("iternary :::",router);
//   const formType = useSearchParams()?.get("type");
//   const [tableData, setTableData] = useState([]);
//   const [itinerary, setItinerary] = useState();
//   const [activeTab, setActiveTab] = useState(formType ? "Tab1" : "Tab2");
//   const [tableColumn, setTableColumn] = useState([]);

//   const [basicDot, setBasicDot] = useState(false);

//   // show calendar Tab
//   const [calendarPricemanagement, setCalendarPricemanagement] = useState("");
//   const [calendarPricemanagementf, setCalendarPricemanagementf] = useState("");
//   const [showCalendarTab, setShowCalendarTab] = useState(false);

//   useEffect(() => {
//     if (calendarPricemanagement || itinerary) {
//       if (
//         calendarPricemanagement === "addGuest" ||
//         itinerary?.addguest === "addGuest"
//       ) {
//         setShowCalendarTab(true);
//       } else {
//         setShowCalendarTab(false);
//       }
//     }
//   }, [calendarPricemanagement, itinerary]);

//   const [imageDot, setImageDot] = useState(false);
//   const [calenderDot, setCalenderDot] = useState(false);
//   const [highlightDot, setHighlightDot] = useState(false);
//   const [itenaryDot, setItenaryDot] = useState(false);
//   const [mapDot, setMapDot] = useState(false);
//   const [flightDot, setFlightDot] = useState(false);
//   const [tourDot, setTourDot] = useState(false);
//   const [seoDot, setSeoDot] = useState(false);
//   const [priceManagementDot, setPriceManagementDot] = useState(false);
//   const [faqDot, setFaqDot] = useState(false);
//   const [tableDot, setTableDot] = useState(false);
//   // print dot status

//   // console.log("table columns id :: ",itinerary);
//   const handleSubmit = async () => {
//     try {
//       const reponse = await fetch(`/api/package/table/${itinerary?._id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ tableData, tableColumn }),
//       });
//     } catch (error) {
//       console.log("error :: ", error);
//     }
//   };

//   const handleTabClick = (tabname) => {
//     setActiveTab(tabname);
//   };

//   const getItinerary = useCallback(async () => {
//     try {
//       const itinerary = await (await fetch("/api/package/" + edit)).json();

//       setItinerary(itinerary.updatedPackage);
//     } catch (error) {
//       console.log(error);
//     }
//   }, [edit]);

//   useEffect(() => {
//     if (edit) {
//       getItinerary();
//     }
//   }, [edit, getItinerary]);
//   useEffect(() => {
//     setTableData(itinerary?.tableData || []);
//     setTableColumn(itinerary?.tableColumn || []);
//   }, [itinerary]);
//   const [select, setSelect] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleOnChange = (e) => {
//     setSelect(e.target.value);
//   };

//   const handleCheckbox = (a) => {
//     if (a) {
//       setSelectedOption(select);
//       setPricingPopup(false);
//     }
//   };

//   useEffect(() => {}, [select]);
//   // console.log("itinary is here ------> ",itinerary);
//   return (
//     <AdminLayout>
//       <div className="flex items-center gap-5 text-primary pb-3">
//         <LuPackagePlus size={28} className="font-semibold" />
//         <p className="md:text-[28px] text-2xl text-black">Create Package</p>
//         <HiOutlineArrowNarrowRight size={28} className=" text-teal-700" />
//       </div>
//       <div className="border-b border-slate-300 mb-5">
//         <div className="flex gap-2 text-[14px] pt-5 pb-2 flex-wrap">
//           <button
//             onClick={() => handleTabClick("Tab1")}
//             className={`${
//               activeTab === "Tab1"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Basic info{" "}
//             {basicDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//           <button
//             onClick={() => handleTabClick("Tab2")}
//             className={`${
//               activeTab === "Tab2"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Images{" "}
//             {imageDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//           <button
//             onClick={() => handleTabClick("Tab3")}
//             className={`${
//               activeTab === "Tab3"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Highlight About{" "}
//             {highlightDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//           <button
//             onClick={() => handleTabClick("Tab4")}
//             className={`${
//               activeTab === "Tab4"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Itinerary Text{" "}
//             {itenaryDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//           <button
//             onClick={() => handleTabClick("Tab5")}
//             className={`${
//               activeTab === "Tab5"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Map Embedded{" "}
//             {mapDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//           <button
//             onClick={() => handleTabClick("Tab6")}
//             className={`${
//               activeTab === "Tab6"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Flight{" "}
//             {flightDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//           <button
//             onClick={() => handleTabClick("Tab7")}
//             className={`${
//               activeTab === "Tab7"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Tour Info{" "}
//             {tourDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//           <button
//             onClick={() => handleTabClick("Tab8")}
//             className={`${
//               activeTab === "Tab8"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             SEO Field{" "}
//             {seoDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//           <button
//             onClick={() => handleTabClick("Tab9")}
//             className={`${
//               activeTab === "Tab9"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Pricing Management{" "}
//             {priceManagementDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-xxs text-red-500">●</span>
//             )}
//           </button>
//           <button
//             onClick={() => handleTabClick("Tab10")}
//             className={`${
//               activeTab === "Tab10"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             FAQ{" "}
//             {faqDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//           <button
//             onClick={() => handleTabClick("Tab11")}
//             className={`${
//               activeTab === "Tab11"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Table{" "}
//             {tableDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//           {showCalendarTab && (
//             <button
//               onClick={() => handleTabClick("Tab12")}
//               className={`${
//                 activeTab === "Tab12"
//                   ? "border-b-2 scale-105 border-black text-black"
//                   : "border-black text-slate-400"
//               } px-3 py-1`}
//             >
//               AddGuestCalendar{" "}
//               {calenderDot ? (
//                 <span className="text-[12px] text-green-500">●</span>
//               ) : (
//                 <span className="text-[12px] text-red-500">●</span>
//               )}
//             </button>
//           )}
//         </div>
//       </div>

//       <div
//         className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}
//       >
//         <PrimaryItinerary
//           setActiveTab={setActiveTab}
//           itinerary={itinerary}
//           itineraryInfo={undefined}
//           setItineraryInfo={undefined}
//           setBasicDot={setBasicDot}
//         />
//       </div>
//       <div
//         className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}
//       >
//         <div className=" border rounded p-4">
//           <div>
//             <p className="text-[15px] font-semibold">Image Upload</p>
//           </div>
//           <ImageUploading
//             itinerary={itinerary}
//             setActiveTab={setActiveTab}
//             setImageDot={setImageDot}
//           />
//         </div>
//       </div>
//       <div className={` ${activeTab === "Tab3" ? "block" : "hidden"}`}>
//         <HighlightAbout
//           setActiveTab={setActiveTab}
//           itinerary={itinerary}
//           itineraryInfo={undefined}
//           setItineraryInfo={undefined}
//           setHighlightDot={setHighlightDot}
//         />
//       </div>
//       <div className={` ${activeTab === "Tab4" ? "block" : "hidden"}`}>
//         <div className="my-5">
//           <div className="bg-white rounded-md px-3m p-2">
//             <ItineraryText
//               setActiveTab={setActiveTab}
//               itinerary={itinerary}
//               setItenaryDot={setItenaryDot}
//             />
//           </div>
//         </div>
//       </div>
//       <div className={` ${activeTab === "Tab5" ? "block" : "hidden"}`}>
//         <GoogleMap
//           setActiveTab={setActiveTab}
//           itinerary={itinerary}
//           setMapDot={setMapDot}
//         />
//       </div>
//       <div className={` ${activeTab === "Tab6" ? "block" : "hidden"}`}>
//         <FlightBooking
//           setActiveTab={setActiveTab}
//           itinerary={itinerary}
//           setFlightDot={setFlightDot}
//         />
//       </div>
//       <div className={` ${activeTab === "Tab7" ? "block" : "hidden"}`}>
//         <TourInformation
//           itinerary={itinerary}
//           setActiveTab={setActiveTab}
//           setTourDot={setTourDot}
//         />
//       </div>
//       <div className={` ${activeTab === "Tab8" ? "block" : "hidden"}`}>
//         <SeoField
//           itinerary={itinerary}
//           setActiveTab={setActiveTab}
//           setSeoDot={setSeoDot}
//         />
//       </div>
//       <div className={` ${activeTab === "Tab9" ? "block" : "hidden"}`}>
//         <div className="relative">
//           {itinerary?.prices === null && pricingPopup && (
//             <PricingManagementPopup
//               setPricingPopup={setPricingPopup}
//               handleOnChange={handleOnChange}
//               handleCheckbox={handleCheckbox}
//             />
//           )}
//           {(itinerary?.prices?.addguest === "addGuest" ||
//             selectedOption === "addGuest") && (
//             <PricingManagement
//               itinerary={itinerary}
//               setActiveTab={setActiveTab}
//               setPriceManagementDot={setPriceManagementDot}
//               setCalendarPricemanagement={setCalendarPricemanagement}
//             />
//           )}
//           {(itinerary?.prices?.departure1 === "fixedDeparture" ||
//             selectedOption === "fixedDeparture") && (
//             <div>
//               <p>
//                 <FixedDeparture
//                   itinerary={itinerary}
//                   setActiveTab={setActiveTab}
//                   setPriceManagementDot={setPriceManagementDot}
//                 />
//               </p>
//               {/* <SelectedDatePrice itinerary={itinerary} /> */}
//             </div>
//           )}
//         </div>
//       </div>
//       <div className={` ${activeTab === "Tab10" ? "block" : "hidden"}`}>
//         <PackageFaq
//           itinerary={itinerary}
//           setActiveTab={setActiveTab}
//           setFaqDot={setFaqDot}
//         />
//       </div>

//       <div className={`${activeTab === "Tab11" ? "block" : "hidden"}`}>
//         <Index
//           setTableData={setTableData}
//           tableData={tableData}
//           setTableColumn={setTableColumn}
//           tableColumn={tableColumn}
//           setTableDot={setTableDot}
//           setActiveTab={setActiveTab}
//           itinerary={itinerary}
//         />
//         <button
//           className=" bg-black text-white py-1.5 md:w-auto w-full mt-3 md:ml-2 px-3 rounded-md"
//           onClick={handleSubmit}
//         >
//           Save Data
//         </button>
//       </div>
//       {showCalendarTab && (
//         <div className={` ${activeTab === "Tab12" ? "block" : "hidden"}`}>
//           <Calendar
//             itinerary={itinerary}
//             setActiveTab={setActiveTab}
//             setCalenderDot={setCalenderDot}
//           />
//         </div>
//       )}
//     </AdminLayout>
//   );
// }
// import { useEffect, useState, useCallback } from "react";
// import PrimaryItinerary from "@/components/admin/itineraryCreate/PrimaryItinerary";
// import HighlightAbout from "@/components/admin/itineraryCreate/HighlightAbout";
// import ItineraryText from "@/components/admin/itineraryCreate/ItineraryText_Faq";
// import AdminLayout from "@/Component/admin/AdminLayout";
// import { useRouter } from "next/router";
// import { useSearchParams } from "next/navigation";

// export default function Createwebinar() {
//   const router = useRouter();
//   const { edit } = router.query;
//   const formType = useSearchParams()?.get("type");

//   const [itinerary, setItinerary] = useState();
//   const [activeTab, setActiveTab] = useState(formType ? "Tab1" : "Tab2");
//   const [basicDot, setBasicDot] = useState(false);
//   const [highlightDot, setHighlightDot] = useState(false);
//   const [itenaryDot, setItenaryDot] = useState(false);
//   const [productDot, setProductDot] = useState(false);

//   const getItinerary = useCallback(async () => {
//     try {
//       const itinerary = await (await fetch("/api/package/" + edit)).json();
//       setItinerary(itinerary.updatedPackage);
//     } catch (error) {
//       console.log(error);
//     }
//   }, [edit]);

//   useEffect(() => {
//     if (edit) {
//       getItinerary();
//     }
//   }, [edit, getItinerary]);

//   return (
//     <AdminLayout>
//       <div className="flex items-center gap-5 text-primary pb-3">
//         <p className="md:text-[28px] text-2xl text-black">Create Package</p>
//       </div>
//       <div className="border-b border-slate-300 mb-5">
//         <div className="flex gap-2 text-[14px] pt-5 pb-2 flex-wrap">
//           <button
//             onClick={() => setActiveTab("Tab1")}
//             className={`${
//               activeTab === "Tab1"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Basic Info{" "}
//             {basicDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
//           </button>
//           <button
//             onClick={() => setActiveTab("Tab2")}
//             className={`${
//               activeTab === "Tab2"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Overview{" "}
//             {highlightDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
//           </button>
//           <button
//             onClick={() => setActiveTab("Tab3")}
//             className={`${
//               activeTab === "Tab3"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Highlight{" "}
//             {highlightDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
//           </button>
//           <button
//             onClick={() => setActiveTab("Tab4")}
//             className={`${
//               activeTab === "Tab4"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Product{" "}
//             {productDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
//           </button>
//         </div>
//       </div>

//       <div className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}>
//         <PrimaryItinerary
//           setActiveTab={setActiveTab}
//           itinerary={itinerary}
//           setBasicDot={setBasicDot}
//         />
//       </div>
//       <div className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}>
//         <HighlightAbout
//           setActiveTab={setActiveTab}
//           itinerary={itinerary}
//           setHighlightDot={setHighlightDot}
//         />
//       </div>
//       <div className={`tab-content ${activeTab === "Tab3" ? "block" : "hidden"}`}>
//         <ItineraryText
//           setActiveTab={setActiveTab}
//           itinerary={itinerary}
//           setItenaryDot={setItenaryDot}
//         />
//       </div>
//       <div className={`tab-content ${activeTab === "Tab4" ? "block" : "hidden"}`}>
//         <p className="text-lg font-semibold">Product Section</p>
//         {/* Include Product-related components or details here */}
//       </div>
//     </AdminLayout>
//   );
// }
// import { useEffect, useState, useCallback } from "react";
// import PrimaryItinerary from "@/components/admin/itineraryCreate/PrimaryItinerary"; // Change to your Information component
// import HighlightAbout from "@/components/admin/itineraryCreate/HighlightAbout"; // Change to your Overview component
// import AdminLayout from "@/Component/admin/AdminLayout";
// import { useRouter } from "next/router";
// import { useSearchParams } from "next/navigation";

// export default function CreateWebinar() {
//   const router = useRouter();
//   const { edit } = router.query;
//   const formType = useSearchParams()?.get("type");

//   const [itinerary, setItinerary] = useState();
//   const [activeTab, setActiveTab] = useState(formType ? "Tab1" : "Tab2");
//   const [basicDot, setBasicDot] = useState(false);
//   const [highlightDot, setHighlightDot] = useState(false);

//   const getItinerary = useCallback(async () => {
//     try {
//       const itinerary = await (await fetch("/api/webinar/" + edit)).json();
//       setItinerary(itinerary.updatedWebinar);
//     } catch (error) {
//       console.log(error);
//     }
//   }, [edit]);

//   useEffect(() => {
//     if (edit) {
//       getItinerary();
//     }
//   }, [edit, getItinerary]);

//   return (
//     <AdminLayout>
//       <div className="flex items-center gap-5 text-primary pb-3">
//         <p className="md:text-[28px] text-2xl text-black">Create Webinar</p>
//       </div>
//       <div className="border-b border-slate-300 mb-5">
//         <div className="flex gap-2 text-[14px] pt-5 pb-2 flex-wrap">
//           <button
//             onClick={() => setActiveTab("Tab1")}
//             className={`${
//               activeTab === "Tab1"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Information{" "}
//             {basicDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//           <button
//             onClick={() => setActiveTab("Tab2")}
//             className={`${
//               activeTab === "Tab2"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Overview{" "}
//             {highlightDot ? (
//               <span className="text-[12px] text-green-500">●</span>
//             ) : (
//               <span className="text-[12px] text-red-500">●</span>
//             )}
//           </button>
//         </div>
//       </div>

//       <div
//         className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}
//       >
//         <PrimaryItinerary
//           setActiveTab={setActiveTab}
//           itinerary={itinerary}
//           setBasicDot={setBasicDot}
//         />
//       </div>
//       <div
//         className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}
//       >
//         <HighlightAbout
//           setActiveTab={setActiveTab}
//           itinerary={itinerary}
//           setHighlightDot={setHighlightDot}
//         />
//       </div>
//     </AdminLayout>
//   );
// }

// import { useState } from "react";
// import Overview from "@/Component/admin/WebinarCreate/Overview";
// import BasicInfo from "@/Component/admin/WebinarCreate/BasicInfo";
// import AdminLayout from "@/Component/admin/AdminLayout";
// import { useRouter } from "next/router";
// import { useSearchParams } from "next/navigation";

// export default function CreateWebinar() {
//   const router = useRouter();

//   const formType = useSearchParams()?.get("type");

//   const [webinarData, setWebinarData] = useState();
//   const [activeTab, setActiveTab] = useState(formType ? "Tab1" : "Tab2");

//   return (
//     <AdminLayout>
//       <div className="flex items-center gap-5 text-primary pb-3">
//         <p className="md:text-[28px] text-2xl text-black">Create Webinar</p>
//       </div>
//       <div className="border-b border-slate-300 mb-5">
//         <div className="flex gap-2 text-[14px] pt-5 pb-2 flex-wrap">
//           <button
//             onClick={() => setActiveTab("Tab1")}
//             className={`${
//               activeTab === "Tab1"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Basic information
//           </button>
//           <button
//             onClick={() => setActiveTab("Tab2")}
//             className={`${
//               activeTab === "Tab2"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Overview
//           </button>
//         </div>
//       </div>

//       <div
//         className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}
//       >
//         <BasicInfo setActiveTab={setActiveTab} webinarData={webinarData} />
//       </div>
//       <div
//         className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}
//       >
//         <Overview setActiveTab={setActiveTab} />
//       </div>
//     </AdminLayout>
//   );
// }
// import { useState } from "react";
// import Overview from "@/Component/admin/WebinarCreate/Overview";
// import BasicInfo from "@/Component/admin/WebinarCreate/BasicInfo";
// import Highlight from "@/Component/admin/WebinarCreate/Highlight"; // New Highlight component
// import AdminLayout from "@/Component/admin/AdminLayout";
// import { useRouter } from "next/router";
// import { useSearchParams } from "next/navigation";

// export default function CreateWebinar() {
//   const router = useRouter();
//   const formType = useSearchParams()?.get("type");

//   const [webinarData, setWebinarData] = useState();
//   const [activeTab, setActiveTab] = useState("Tab1"); // Default to "Basic Information"

//   return (
//     <AdminLayout>
//       <div className="flex items-center gap-5 text-primary pb-3">
//         <p className="md:text-[28px] text-2xl text-black">Create Webinar</p>
//       </div>
//       <div className="border-b border-slate-300 mb-5">
//         <div className="flex gap-2 text-[14px] pt-5 pb-2 flex-wrap">
//           <button
//             onClick={() => setActiveTab("Tab1")}
//             className={`${
//               activeTab === "Tab1"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Basic Information
//           </button>
//           <button
//             onClick={() => setActiveTab("Tab2")}
//             className={`${
//               activeTab === "Tab2"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Overview
//           </button>
//           <button
//             onClick={() => setActiveTab("Tab3")}
//             className={`${
//               activeTab === "Tab3"
//                 ? "border-b-2 scale-105 border-black text-black"
//                 : "border-black text-slate-400"
//             } px-3 py-1`}
//           >
//             Highlight
//           </button>
//         </div>
//       </div>

//       {/* Tabs content */}
//       <div
//         className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}
//       >
//         <BasicInfo setActiveTab={setActiveTab} webinarData={webinarData} />
//       </div>
//       <div
//         className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}
//       >
//         <Overview setActiveTab={setActiveTab} />
//       </div>
//       <div
//         className={`tab-content ${activeTab === "Tab3" ? "block" : "hidden"}`}
//       >
//         <Highlight setActiveTab={setActiveTab} />
//       </div>
//     </AdminLayout>
//   );
// }
import { useState } from "react";
import Overview from "@/Component/admin/WebinarCreate/Overview";
import BasicInfo from "@/Component/admin/WebinarCreate/BasicInfo";
import Highlight from "@/Component/admin/WebinarCreate/Highlight";
import AdminLayout from "@/Component/admin/AdminLayout";

export default function CreateWebinar() {
  const [webinarData, setWebinarData] = useState();
  const [activeTab, setActiveTab] = useState("Tab1");
  const [isBasicInfoSubmitted, setIsBasicInfoSubmitted] = useState(false);

  // Function to activate all tabs after Basic Info submission
  const handleBasicInfoSubmit = () => {
    setIsBasicInfoSubmitted(true);
  };

  return (
    <AdminLayout>
      <div className="flex items-center gap-5 text-primary pb-3">
        <p className="md:text-[28px] text-2xl text-black">Create Webinar</p>
      </div>
      <div className="border-b border-slate-300 mb-5">
        <div className="flex gap-2 text-[14px] pt-5 pb-2 flex-wrap">
          <button
            onClick={() => setActiveTab("Tab1")}
            className={`${
              activeTab === "Tab1" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"
            } px-3 py-1`}
          >
            Basic Information
          </button>
          {isBasicInfoSubmitted && (
            <>
              <button
                onClick={() => setActiveTab("Tab2")}
                className={`${
                  activeTab === "Tab2" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"
                } px-3 py-1`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("Tab3")}
                className={`${
                  activeTab === "Tab3" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"
                } px-3 py-1`}
              >
                Highlight
              </button>
            </>
          )}
        </div>
      </div>

      {/* Render each tab's content conditionally */}
      <div className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}>
        <BasicInfo onSubmit={handleBasicInfoSubmit} webinarData={webinarData} />
      </div>
      {isBasicInfoSubmitted && (
        <>
          <div className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}>
            <Overview webinarData={webinarData} />
          </div>
          <div className={`tab-content ${activeTab === "Tab3" ? "block" : "hidden"}`}>
            <Highlight webinarData={webinarData} />
          </div>
        </>
      )}
    </AdminLayout>
  );
}

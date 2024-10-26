// import React from "react";

// const BasicInfo = ({ WebinarData, }) => {
//   // Handle form submission and other logic here
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add form submission logic here

//   };

//   return (
//     <div>
//       <h2 className="text-lg font-semibold">Webinar BasicInfo</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Add your form fields for BasicInfo here */}
//         <div>
//           <label htmlFor="title" className="block">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             className="border rounded p-2 w-full"
//             defaultValue={WebinarData?.title || ""}
//             required
//           />
//         </div>
//         {/* Add more fields as needed */}
//         <button
//           type="submit"
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Save BasicInfo
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BasicInfo;
// import React from "react";

// const BasicInfo = ({ webinarData, setActiveTab }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Logic for form submission here
//     setActiveTab("Tab2"); // Switch to Overview tab upon submission
//   };

//   return (
//     <div>
//       <h2 className="text-lg font-semibold">Webinar Basic Info</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title" className="block">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             className="border rounded p-2 w-full"
//             defaultValue={webinarData?.title || ""}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Save Basic Info
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BasicInfo;
// import React from "react";

// const BasicInfo = ({ setActiveTab }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Logic for form submission here
//     setActiveTab("Tab2"); // Switch to Overview tab upon submission
//   };

//   return (
//     <div>
//       <h2 className="text-lg font-semibold">Webinar Basic Info</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title" className="block">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             className="border rounded p-2 w-full"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Save Basic Info
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BasicInfo;
import React from "react";

const BasicInfo = ({ onSubmit, webinarData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
    onSubmit(); // Activate other tabs after submission
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Webinar Basic Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="border rounded p-2 w-full"
            defaultValue={webinarData?.title || ""}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Basic Information
        </button>
      </form>
    </div>
  );
};

export default BasicInfo;

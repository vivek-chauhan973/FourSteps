// // components/admin/itineraryCreate/Overview.js
// import React from "react";

// const Overview = ({ WebinarData }) => {
//   // Handle form submission and other logic here
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add form submission logic here

//   };

//   return (
//     <div>
//       <h2 className="text-lg font-semibold">Webinar Overview</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Add your form fields for overview here */}
//         <div>
//           <label htmlFor="description" className="block">
//             Description
//           </label>
//           <textarea
//             id="description"
//             className="border rounded p-2 w-full"
//             defaultValue={WebinarData?.description || ""}
//             required
//           />
//         </div>
//         {/* Add more fields as needed */}
//         <button
//           type="submit"
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Save Overview
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Overview;
// import React from "react";

// const Overview = ({ webinarData }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add form submission logic here
//   };

//   return (
//     <div>
//       <h2 className="text-lg font-semibold">Webinar Overview</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="description" className="block">
//             Description
//           </label>
//           <textarea
//             id="description"
//             className="border rounded p-2 w-full"
//             defaultValue={webinarData?.description || ""}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Save Overview
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Overview;
import React from "react";

const Overview = ({ webinarData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Webinar Overview</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description" className="block">
            Description
          </label>
          <textarea
            id="description"
            className="border rounded p-2 w-full"
            defaultValue={webinarData?.description || ""}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Overview
        </button>
      </form>
    </div>
  );
};

export default Overview;

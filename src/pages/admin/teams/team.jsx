// import AdminLayout from "@/Component/admin/AdminLayout";
// import React from "react";

// const teams = () => {
//   return (
//     <AdminLayout>
//       <div>
//         <h1>Here is our Team Section</h1>
//       </div>
//     </AdminLayout>
//   );
// };

// export default teams;

// import AdminLayout from "@/Component/admin/AdminLayout";
// import React, { useState } from "react";

// const teams = () => {
//   // State to handle form inputs
//   const [formData, setFormData] = useState({
//     name: "",
//     designation: "",
//     link1: "",
//     link2: "",
//     image: null,
//     imagePreview: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle image input change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prevData) => ({
//         ...prevData,
//         image: file,
//         imagePreview: URL.createObjectURL(file),
//       }));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Log the form data to console
//     console.log(formData);
//   };

//   return (
//     <AdminLayout>
//       <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md mt-10">
//         <h1 className="text-center">Add Admin Here</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Image input and preview */}
//           <div className="flex flex-col items-center">
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Upload Image
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
//             />
//             {formData.imagePreview && (
//               <img
//                 src={formData.imagePreview}
//                 alt="Preview"
//                 className="mt-4 h-32 w-32 object-cover rounded-full shadow-md"
//               />
//             )}
//           </div>

//           {/* Name input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>

//           {/* Designation input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Designation
//             </label>
//             <input
//               type="text"
//               name="designation"
//               value={formData.designation}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>

//           {/* Link 1 input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Link 1
//             </label>
//             <input
//               type="url"
//               name="link1"
//               value={formData.link1}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>

//           {/* Link 2 input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Link 2
//             </label>
//             <input
//               type="url"
//               name="link2"
//               value={formData.link2}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>

//           {/* Submit button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// };

// export default teams;

// import AdminLayout from "@/Component/admin/AdminLayout";
// import React, { useState } from "react";

// const Teams = () => {
//   // State to handle form inputs
//   const [formData, setFormData] = useState({
//     name: "",
//     designation: "",
//     link1: "",
//     link2: "",
//     altText: "",
//     image: null,
//     imagePreview: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle image input change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prevData) => ({
//         ...prevData,
//         image: file,
//         imagePreview: URL.createObjectURL(file),
//       }));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Log the form data to console
//     console.log(formData);
//   };

//   return (
//     <AdminLayout>
//       <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-md mt-10">
//         <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
//           Add Admin Here
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Image input and preview */}
//           <div className="flex flex-col items-center">
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Upload Image
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
//             />
//             {formData.imagePreview && (
//               <img
//                 src={formData.imagePreview}
//                 alt={formData.altText || "Image Preview"}
//                 className="mt-4 h-32 w-32 object-cover rounded-full shadow-md"
//               />
//             )}
//           </div>

//           {/* Alt Text input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Alt Text
//             </label>
//             <input
//               type="text"
//               name="altText"
//               value={formData.altText}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Describe the image"
//               required
//             />
//           </div>

//           {/* Name input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter name"
//               required
//             />
//           </div>

//           {/* Designation input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Designation
//             </label>
//             <input
//               type="text"
//               name="designation"
//               value={formData.designation}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter designation"
//               required
//             />
//           </div>

//           {/* Link 1 input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Link 1
//             </label>
//             <input
//               type="url"
//               name="link1"
//               value={formData.link1}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter first link"
//               required
//             />
//           </div>

//           {/* Link 2 input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Link 2
//             </label>
//             <input
//               type="url"
//               name="link2"
//               value={formData.link2}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter second link"
//               required
//             />
//           </div>

//           {/* Submit button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// };

// export default Teams;

// import AdminLayout from "@/Component/admin/AdminLayout";
// import Image from "next/image";
// import React, { useState } from "react";

// const Teams = () => {
//   // State to handle form inputs
//   const [formData, setFormData] = useState({
//     name: "",
//     designation: "",
//     link1: "",
//     link2: "",
//     altText: "",
//     image: null,
//     imagePreview: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle image input change
//   // const handleImageChange = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     setFormData((prevData) => ({
//   //       ...prevData,
//   //       image: file,
//   //       imagePreview: URL.createObjectURL(file),
//   //     }));
//   //   }
//   // };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Log the form data to console
//     console.log(formData);
//   };

//   return (
//     <AdminLayout>
//       <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md mt-10">
//         <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
//           Add Admin Here
//         </h1>

//         <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
//           {/* Image input and preview */}
//           {/* <div className="col-span-2 flex flex-col ">
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Upload Image
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
//             />
//             {formData.imagePreview && (
//               <div className="mt-4 object-cover rounded-md ">
//                 <Image
//                   src={formData.imagePreview}
//                   alt={formData.altText || "Image Preview"}
//                   width={200}
//                   height={200}
//                 />
//               </div>
//             )}
//           </div> */}
//           {/* Alt Text input */}
//           {/* <div className="col-span-2">
//             <label className="block text-sm font-medium text-gray-700">
//               Alt Text
//             </label>
//             <input
//               type="text"
//               name="altText"
//               value={formData.altText}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Describe the image"
//               required
//             />
//           </div> */}

//           {/* Name input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter name"
//               required
//             />
//           </div>

//           {/* Designation input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Designation
//             </label>
//             <input
//               type="text"
//               name="designation"
//               value={formData.designation}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter designation"
//               required
//             />
//           </div>

//           {/* Link 1 input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Link 1
//             </label>
//             <input
//               type="url"
//               name="link1"
//               value={formData.link1}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter first link"
//               required
//             />
//           </div>

//           {/* Link 2 input */}
//           {/* <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Link 2
//             </label>
//             <input
//               type="url"
//               name="link2"
//               value={formData.link2}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter second link"
//               required
//             />
//           </div> */}

//           {/* Submit button */}
//           <div className="col-span-2">
//             <button
//               type="submit"
//               className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// };

// export default Teams;

import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState } from "react";

const Teams = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    link1: "",
    // link2: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("form data ---> ",formData)
    // Send the form data to the API
    try {
      const response = await fetch("/api/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const data = await response.json();
      console.log("Product created:", data);
      // Optionally reset the form or show a success message
      setFormData({
        name: "",
        designation: "",
        link1: "",
        link2: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md mt-10">
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Add Admin Here
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {/* Name input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter name"
              required
            />
          </div>

          {/* Designation input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter designation"
              required
            />
          </div>

          {/* Link 1 input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Link 1
            </label>
            <input
              type="url"
              name="link1"
              value={formData.link1}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter first link"
              required
            />
          </div>

          {/* Link 2 input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Link 2
            </label>
            <input
              type="url"
              name="link2"
              value={formData.link2}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter second link"
              required
            />
          </div>

          {/* Submit button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Teams;
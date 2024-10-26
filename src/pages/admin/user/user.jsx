// import AdminLayout from "@/Component/admin/AdminLayout";

// import React, { useState } from "react";

// const user = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     description: "",
//     role: "",
//     jobProfile: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <AdminLayout>
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <form
//           className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full space-y-6"
//           onSubmit={handleSubmit}
//         >
//           <h2 className="text-2xl font-semibold text-center text-orange-500">
//             User Information
//           </h2>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
//                 placeholder="Enter your phone number"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Description
//               </label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
//                 placeholder="Brief description"
//               ></textarea>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Role
//               </label>
//               <input
//                 type="text"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
//                 placeholder="Enter your role"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Job Profile
//               </label>
//               <input
//                 type="text"
//                 name="jobProfile"
//                 value={formData.jobProfile}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
//                 placeholder="Enter your job profile"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 px-4 text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// };

import AdminLayout from "@/Component/admin/AdminLayout";
import Image from "next/image";
import React, { useState } from "react";

const user = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    role: "",
    jobProfile: "",
    image: null,
    alt: "", // Added alt field
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] }); // Store the file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  // Image Preview
  const imagePreview = formData.image
    ? URL.createObjectURL(formData.image)
    : null;

  return (
    <AdminLayout>
      <div className="flex justify-center w-full items-center min-h-screen ">
        <form
          className="bg-white p-10 shadow-lg rounded-lg max-w-4xl w-full space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-center text-orange-500">
            User Information
          </h2>

          <div className="space-y-6">
            {/* Name and Email in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Phone and Role in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Enter your role"
                />
              </div>
            </div>

            {/* Description field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Brief description"
              ></textarea>
            </div>

            {/* Job Profile field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Profile
              </label>
              <input
                type="text"
                name="jobProfile"
                value={formData.jobProfile}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Enter your job profile"
              />
            </div>

            {/* Image Upload Field and Preview */}
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-96 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <span>preview:</span>
                {imagePreview && (
                  <div>
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      className=" rounded-lg object-cover"
                      width={300}
                      height={300}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Alt Text Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Alt Text
              </label>
              <input
                type="text"
                name="alt"
                value={formData.alt}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Enter alt text for the image"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default user;

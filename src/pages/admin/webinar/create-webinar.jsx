// import AdminLayout from "@/Component/admin/AdminLayout";
// import React, { useState } from "react";

// const Createwebinar = () => {
//   const [file, setFile] = useState(null);
//   const [altText, setAltText] = useState("");
//   const [title, setTitle] = useState("");
//   const [link, setLink] = useState("");
//   const [subtitle, setSubtitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log({ file, altText, title, link, subtitle, description });
//   };
//   return (
//     <AdminLayout>
//       <div>
//         <div className="max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg shadow-xl">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//             Create Webinar here
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* File Upload Section */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Upload File
//               </label>
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {file && (
//               <div className="mt-4">
//                 <h3 className="text-lg font-medium text-gray-700">Preview:</h3>
//                 <p className="text-gray-600">{file.name}</p>
//               </div>
//             )}

//             {/* Grid Layout for Fields */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700">
//                   Alt Text
//                 </label>
//                 <input
//                   type="text"
//                   value={altText}
//                   onChange={(e) => setAltText(e.target.value)}
//                   className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700">
//                   Link
//                 </label>
//                 <input
//                   type="url"
//                   value={link}
//                   onChange={(e) => setLink(e.target.value)}
//                   className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700">
//                   Subtitle
//                 </label>
//                 <input
//                   type="text"
//                   value={subtitle}
//                   onChange={(e) => setSubtitle(e.target.value)}
//                   className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Description
//               </label>
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                 rows="4"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default Createwebinar;

import AdminLayout from "@/Component/admin/AdminLayout";
import Image from "next/image";
import React, { useState } from "react";

const Createwebinar = () => {
  const [file, setFile] = useState(null);
  const [altText, setAltText] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectType, setSelectType] = useState(""); // Select Type
  const [toolsAndSoftware, setToolsAndSoftware] = useState(""); // Tools and Software
  const [topic, setTopic] = useState(""); // Topic
  const [department, setDepartment] = useState(""); // Department
  const [industry, setIndustry] = useState(""); // Industry
  const [language, setLanguage] = useState(""); // Language

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result); // Set the image preview
      };
      reader.readAsDataURL(selectedFile); // Read the file as a data URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      file,
      altText,
      title,
      link,
      subtitle,
      description,
      selectType,
      toolsAndSoftware,
      topic,
      department,
      industry,
      language,
    });
  };

  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Webinar here
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload Section */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*" // Accept only image files
              onChange={handleFileChange}
              className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          {file && (
            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Preview:</h3>
              <Image
                src={file}
                alt="Preview"
                className="mt-2 rounded-lg shadow-md"
                height={200}
                width={150}
              />
            </div>
          )}

          {/* Aligned Fields for Alt Text and Title */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Alt Text
              </label>
              <input
                type="text"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Aligned Fields for Link and Subtitle */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Link
              </label>
              <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Subtitle
              </label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Grid Layout for Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Select Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Select Type
              </label>
              <select
                value={selectType}
                onChange={(e) => setSelectType(e.target.value)}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>
            </div>

            {/* Tools and Software */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Tools and Software
              </label>
              <select
                value={toolsAndSoftware}
                onChange={(e) => setToolsAndSoftware(e.target.value)}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Tool 1">Tool 1</option>
                <option value="Tool 2">Tool 2</option>
              </select>
            </div>

            {/* Topic */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Topic
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Topic 1">Topic 1</option>
                <option value="Topic 2">Topic 2</option>
              </select>
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Department
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Department 1">Department 1</option>
                <option value="Department 2">Department 2</option>
              </select>
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Industry 1">Industry 1</option>
                <option value="Industry 2">Industry 2</option>
              </select>
            </div>

            {/* Languages */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Languages
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Language 1">Language 1</option>
                <option value="Language 2">Language 2</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Createwebinar;

import Image from "next/image";
import React, { useState } from "react";

const BasicInfo = ({ onSubmit, webinarData }) => {
  const [formData, setFormData] = useState({
    file: null,
    altText: "",
    title: "",
    link: "",
    subtitle: "",
    description: "",
    selectType: "",
    toolsAndSoftware: "",
    topic: "",
    department: "",
    industry: "",
    language: "",
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({ ...prevData, file: reader.result }));
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
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
    } = formData;
    console.log({
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
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
    onSubmit();
  };

  return (
    <div>
      <div className="w-full mx-auto p-8 bg-gray-50 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-10">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            {formData.file && (
              <div className="">
                <h3 className="text-md font-medium text-gray-700">
                  Preview img:
                </h3>
                <Image
                  src={formData.file}
                  alt="Preview"
                  className="mt-2 rounded-lg shadow-md"
                  height={200}
                  width={150}
                />
              </div>
            )}
          </div>

          {/* Other Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Img Alt
              </label>
              <input
                type="text"
                name="altText"
                value={formData.altText}
                onChange={handleChange}
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
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Video Link
              </label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleChange}
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
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Grid Layout for Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Select Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Select Type of Webinar
              </label>
              <select
                name="selectType"
                value={formData.selectType}
                onChange={handleChange}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Option 1">Recorded </option>
                <option value="Option 2">On-Demand</option>
              </select>
            </div>

            {/* Tools and Software */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Tools and Software
              </label>
              <select
                name="toolsAndSoftware"
                value={formData.toolsAndSoftware}
                onChange={handleChange}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Tool 1"> Zoho</option>
                <option value="Tool 2">Bitrix24</option>
                <option value="Tool 2"> HubSpot</option>
                <option value="Tool 2">Shopify</option>
              </select>
            </div>

            {/* Topic */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Topics
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Topic 1">Marketing Automation</option>
                <option value="Topic 2">Sales Automation</option>
                <option value="Topic 2">Digital Marketing</option>
                <option value="Topic 2">Product Overview</option>
              </select>
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
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
                name="industry"
                value={formData.industry}
                onChange={handleChange}
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
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Language 1">Hindi</option>
                <option value="Language 2">English</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-2 block w-full bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring focus:ring-blue-500"
              rows="4"
              required
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
    </div>
  );
};

export default BasicInfo;

import Image from "next/image";
import React, { useState } from "react";

const BasicInfoPro = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subtitle: "",
    service: "",
    industry: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Uploaded Image:", image);
  };

  return (
    <div className=" mx-auto p-8 bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold  text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-gray-700 file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0 file:text-sm file:font-semibold
              file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200"
          />
          {preview && (
            <div className="mt-4">
              <Image
                src={preview}
                alt="Preview"
                height={200}
                width={200}
                className="w-40 h-40 object-cover rounded-xl border border-gray-200 shadow-md"
              />
            </div>
          )}
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold  text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="block text-sm font-semibold  text-gray-700">
              Subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-semibold  text-gray-700">
              Service
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              <option value="" disabled>
                Select Service
              </option>
              <option value="webDevelopment">Web Development</option>
              <option value="design">Design</option>
              <option value="seo">SEO</option>
            </select>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-semibold  text-gray-700">
              Industry
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              <option value="" disabled>
                Select Industry
              </option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInfoPro;

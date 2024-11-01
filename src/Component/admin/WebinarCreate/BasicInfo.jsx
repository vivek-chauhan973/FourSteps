import Image from "next/image";
import React, { useState, useEffect } from "react";

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
  // for department
  const [departmetaData, setDepartmentData] = useState([]);
  const fetchDepartment = async () => {
    const response = await fetch("/api/webinar/department/getdepartment");
    if (response.ok) {
      const data = await response.json();
      setDepartmentData(data);
      console.log("Fetched departments:", data);
    } else {
      console.error("Failed to fetch departments:", response.status); // Log an error if the fetch fails
    }
  };

  useEffect(() => {
    fetchDepartment();
  }, []);
  //  for webinar type
  const [webinartypeData, setWebinarTypeData] = useState([]);
  const fetchWebinarType = async () => {
    const res = await fetch("/api/webinar/webinartype/getwebinar");
    if (res.ok) {
      const result = await res.json();
      setWebinarTypeData(result);
    } else {
      console.error("Failed to fetch webinar type:", res.status); // Log an error if the fetch
    }
  };
  useEffect(() => {
    fetchWebinarType();
  }, []);
  // for industry
  const [industryData, setIndustryData] = useState([]); // Initial state as array
  const fetchIndustry = async () => {
    try {
      const response = await fetch("/api/global/industries/getIndustries");
      if (response.ok) {
        const result = await response.json();
        // Ensure result is an array before setting state
        if (Array.isArray(result)) {
          setIndustryData(result);
        } else {
          console.error("Expected an array but received:", result);
          setIndustryData([]); // Reset to empty array if not an array
        }
      } else {
        console.error("Failed to fetch industries:", response.status);
      }
    } catch (error) {
      console.error("Error fetching industries:", error);
    }
  };

  useEffect(() => {
    fetchIndustry(); // Fetch industries when the component mounts
  }, []);

  // for the tool section
  const [toolsList, setToolsList] = useState([]); // State to hold tools data

  const fetchTools = async () => {
    try {
      const response = await fetch("/api/global/tools/toolsoftware");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setToolsList(data.data); // Update state with fetched tools data
    } catch (error) {
      console.error("Error fetching tools:", error);
    }
  };

  useEffect(() => {
    fetchTools(); // Fetch tools data when component mounts
  }, []);

  // for lang........
  const [languagesList, setLanguagesList] = useState([]);

  const fetchLanguages = async () => {
    const response = await fetch("/api/global/language/getlanguages");
    if (response.ok) {
      const result = await response.json(); // Get the entire response
      if (result.success && Array.isArray(result.data)) {
        setLanguagesList(result.data); // Access the data array
        console.log("Fetched languages:", result.data);
      } else {
        setLanguagesList([]); // Reset to an empty array if success is false or data is not an array
        console.warn("Unexpected response structure:", result);
      }
    } else {
      console.error("Failed to fetch languages:", response.status);
      setLanguagesList([]); // Optional: reset to empty array on error
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

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
                {webinartypeData.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
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
                {toolsList.length > 0 ? (
                  toolsList.map((tool) => (
                    <option key={tool._id} value={tool.name}>
                      {tool.name}
                    </option>
                  ))
                ) : (
                  <option disabled>No tools available</option>
                )}
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

                {departmetaData.map((department) => (
                  <option key={department._id} value={department.name}>
                    {department.name}
                  </option>
                ))}
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
                {Array.isArray(industryData) && industryData.length > 0 ? (
                  industryData.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))
                ) : (
                  <option disabled>No industries available</option>
                )}
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
                {languagesList.length > 0 ? (
                  languagesList.map((language) => (
                    <option key={language._id} value={language.name}>
                      {language.name}
                    </option>
                  ))
                ) : (
                  <option>No languages available</option> // Message when there are no languages
                )}
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

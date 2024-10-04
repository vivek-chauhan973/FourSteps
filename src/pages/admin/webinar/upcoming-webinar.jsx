import AdminLayout from "@/Component/admin/AdminLayout"; // Adjust this path based on your actual folder structure
import React, { useState } from "react";

const Upcomingwebinar = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    speaker: "",
    file: null,
    file1: null, // Added for file input
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input change (for both files)
  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData); // Log all form data to the console

    if (isEditing) {
      // Update the existing entry
      const updatedData = [...submittedData];
      updatedData[editIndex] = formData;
      setSubmittedData(updatedData);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new entry
      setSubmittedData([...submittedData, formData]);
    }

    // Clear the form
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      speaker: "",
      file: null,
      file1: null, // Added for file input
    });
  };

  // Handle edit button
  const handleEdit = (index) => {
    setFormData(submittedData[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Handle delete button
  const handleDelete = (index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Upcoming Webinars
        </h1>
        <div className="container mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Webinar Title */}
              <div className="col-span-1">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="title"
                >
                  Webinar Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter Webinar Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Speaker Name */}
              <div className="col-span-1">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="speaker"
                >
                  Speaker Name
                </label>
                <input
                  type="text"
                  id="speaker"
                  name="speaker"
                  placeholder="Enter Speaker Name"
                  value={formData.speaker}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Date */}
              <div className="col-span-1">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Duration */}
              <div className="col-span-1">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="time"
                >
                  Duration
                </label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  placeholder="Enter Duration (e.g., 40 mins)"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* File Input webinar */}
              <div className="col-span-1">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="file"
                >
                  Upload Webinar Image
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-md p-2 file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* File Input speaker image */}
              <div className="col-span-1">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="file1"
                >
                  Upload Speaker Image
                </label>
                <input
                  type="file"
                  id="file1"
                  name="file1"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-md p-2 file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter a description for the webinar"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {isEditing ? "Update Webinar" : "Submit Webinar"}
                </button>
              </div>
            </form>
          </div>

          {/* Display Submitted Data */}
          {submittedData.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Submitted Webinars</h2>
              <div className="space-y-4">
                {submittedData.map((data, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded-md shadow-md"
                  >
                    <h3 className="text-lg font-bold">{data.title}</h3>
                    <p>
                      <strong>Speaker:</strong> {data.speaker}
                    </p>
                    <p>
                      <strong>Date:</strong> {data.date}
                    </p>
                    <p>
                      <strong>Time:</strong> {data.time}
                    </p>
                    <p>
                      <strong>Description:</strong> {data.description}
                    </p>

                    <div className="mt-4 flex space-x-4">
                      <button
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Upcomingwebinar;

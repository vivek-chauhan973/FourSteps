import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Visuals({ setActiveTab, productData }) {
  const [entries, setEntries] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddEntry = () => {
    if (image && title && description) {
      const newEntry = { image, title, description };

      if (editingIndex !== null) {
        // Update existing entry
        const updatedEntries = [...entries];
        updatedEntries[editingIndex] = newEntry;
        setEntries(updatedEntries);
        setEditingIndex(null);
      } else {
        // Add new entry
        setEntries([...entries, newEntry]);
      }

      // Reset form
      setImage(null);
      setTitle("");
      setDescription("");
    } else {
      alert("Please fill all fields before adding.");
    }
  };

  const handleEditEntry = (index) => {
    const entryToEdit = entries[index];
    setImage(entryToEdit.image);
    setTitle(entryToEdit.title);
    setDescription(entryToEdit.description);
    setEditingIndex(index);
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const handleSubmitAll = () => {
    if (entries.length === 0) {
      alert("No entries added yet. Please add entries before submitting.");
      return;
    }

    console.log("Submitted Entries:", entries);

    // Clear entries after submission
    setEntries([]);
    alert("Screenshot saved successfully!");
    setActiveTab("Tab5");
  };

  return (
    <>
      <div className="mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-6">Image Upload with Listing</h2>

        {/* Add New Entry Form */}
        <div className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full py-2 text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          {image && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image Preview
              </label>
              <Image
                src={image}
                alt="Preview"
                className="h-48 object-cover border border-gray-300 rounded-md"
                height={200}
                width={200}
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              rows={3}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 p-2"
            />
          </div>

          <button
            onClick={handleAddEntry}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            {editingIndex !== null ? "Update Entry" : "Add Entry"}
          </button>
        </div>

        {/* Listing Entries */}
        <div>
          <h3 className="text-lg font-bold mb-4">Entries</h3>
          {entries.length === 0 ? (
            <p className="text-sm text-gray-500">No entries added yet.</p>
          ) : (
            <table className="w-full border border-gray-300 text-sm text-gray-700">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">Title</th>
                  <th className="p-2 border">Description</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-2 border">
                      <Image
                        src={entry.image}
                        alt={entry.title}
                        className="w-20 h-20 object-cover"
                        height={100}
                        width={100}
                      />
                    </td>
                    <td className="p-2 border">{entry.title}</td>
                    <td className="p-2 border">{entry.description}</td>
                    <td className="p-2 border">
                      <button
                        onClick={() => handleEditEntry(index)}
                        className="text-blue-500 hover:underline mr-2"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => handleDeleteEntry(index)}
                        className="text-red-500 hover:underline"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Submit All Button */}
        <div className="mt-6 max-2xl">
          <button
            onClick={handleSubmitAll}
            className="bg-green-600 w-full text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Visuals;

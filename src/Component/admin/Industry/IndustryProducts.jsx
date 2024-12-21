import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const IndustryProducts = () => {
  const [heading, setHeading] = useState(""); // For heading
  const [editorHtmlDescription, setEditorHtmlDescription] = useState(""); // For description
  const [imagePreview, setImagePreview] = useState(null); // For image preview
  const [imageFile, setImageFile] = useState(null); // For storing image file
  const [industryTitle, setIndustryTitle] = useState(""); // For industry title
  const [industryLink, setIndustryLink] = useState(""); // For industry link
  const [industryDescription, setIndustryDescription] = useState(""); // For industry description (Quill)
  const [items, setItems] = useState([]); // List of saved items
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const itemsPerPage = 3; // Number of items per page
  const [editingIndex, setEditingIndex] = useState(null); // Track which item is being edited

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link"],
    ],
  };

  // Handle image selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };

  // Add industry details (image, title, link, description) to the list
  const handleAddIndustry = () => {
    if (!industryTitle || !industryLink || !industryDescription || !imageFile) {
      alert("Please fill in all fields, including uploading an image.");
      return;
    }

    const newItem = {
      title: industryTitle,
      link: industryLink,
      description: industryDescription,
      image: imagePreview,
    };

    if (editingIndex !== null) {
      // Edit existing item
      const updatedItems = [...items];
      updatedItems[editingIndex] = newItem;
      setItems(updatedItems);
      setEditingIndex(null); // Reset editing state
    } else {
      // Add new item
      setItems([...items, newItem]);
    }

    resetIndustryFields();
  };

  // Reset the industry fields after adding or editing
  const resetIndustryFields = () => {
    setIndustryTitle("");
    setIndustryLink("");
    setIndustryDescription("");
    setImagePreview(null);
    setImageFile(null);
  };

  // Delete an industry item
  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Edit an industry item
  const handleEdit = (index) => {
    const itemToEdit = items[index];
    setIndustryTitle(itemToEdit.title);
    setIndustryLink(itemToEdit.link);
    setIndustryDescription(itemToEdit.description);
    setImagePreview(itemToEdit.image);
    setEditingIndex(index); // Set the item as being edited
  };

  // Save all fields when the final save button is clicked
  const handleFinalSave = () => {
    if (!heading || !editorHtmlDescription || items.length === 0) {
      alert("Please fill in all fields and add at least one industry.");
      return;
    }

    const finalData = {
      heading,
      description: editorHtmlDescription,
      industries: items,
    };
    alert("data saved successfully and print into the console ");
    console.log("Saved Data: ", finalData); // Print data in console

    // Reset all fields after final save
    resetFields();
  };

  // Reset all fields after final save
  const resetFields = () => {
    setHeading("");
    setEditorHtmlDescription("");
    resetIndustryFields();
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItemsToShow = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] border-l-2 border-teal-600">
        <p className="text-base font-semibold mb-2">
          Industry Products Section
        </p>

        {/* Form for heading and description */}
        <div className="p-4">
          <div>
            <label htmlFor="heading" className="font-semibold">
              Heading
            </label>
            <input
              className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
              type="text"
              id="heading"
              value={heading}
              placeholder="Enter Heading Here"
              onChange={(e) => setHeading(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <QuillNoSSRWrapper
              className="rounded h-48 mb-16"
              theme="snow"
              value={editorHtmlDescription}
              onChange={setEditorHtmlDescription}
              placeholder="Enter Your Description"
              modules={modules}
            />
          </div>

          {/* Industry Summary Fields */}
          <div>
            <label htmlFor="image" className="font-semibold">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
            {imagePreview && (
              <div className="mb-4">
                <p>Image Preview:</p>
                <Image
                  src={imagePreview}
                  alt="Image Preview"
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
            )}
          </div>
          <div>
            <label htmlFor="industryTitle" className="font-semibold">
              Industry Title
            </label>
            <input
              className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
              type="text"
              id="industryTitle"
              value={industryTitle}
              placeholder="Enter Industry Title"
              onChange={(e) => setIndustryTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="industryLink" className="font-semibold">
              Industry Link
            </label>
            <input
              className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
              type="text"
              id="industryLink"
              value={industryLink}
              placeholder="Enter Industry Link"
              onChange={(e) => setIndustryLink(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="industryDescription" className="font-semibold">
              Industry Description
            </label>
            <QuillNoSSRWrapper
              className="rounded h-48 mb-16"
              theme="snow"
              value={industryDescription}
              onChange={setIndustryDescription}
              placeholder="Enter Industry Description"
              modules={modules}
            />
          </div>

          <button
            className="bg-teal-600 text-white px-3 py-2 rounded mb-4"
            onClick={handleAddIndustry}
          >
            {editingIndex !== null ? "Save Changes" : "Add Industry"}
          </button>
        </div>

        {/* Listing of added industry details */}
        <div className="my-8">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 py-2 px-4 md:px-8 md:text-start">
                  Image
                </th>
                <th className="border border-gray-300 py-2 px-4">Title</th>

                <th className="border border-gray-300 py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItemsToShow.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">
                    <Image
                      src={item.image}
                      alt="Image"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                  </td>
                  <td className="py-2 px-4">{item.title}</td>

                  <td className="py-2 px-4">
                    <button onClick={() => handleEdit(index)}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="text-blue-500 cursor-pointer mr-2"
                      />
                    </button>
                    <button onClick={() => handleDelete(index)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-500 cursor-pointer"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-5 gap-3">
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-gray-300 rounded"
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {Array.from(
            { length: Math.ceil(items.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-primary text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            )
          )}

          <button
            onClick={nextPage}
            className="px-4 py-2 bg-gray-300 rounded"
            disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Final Save Button */}
        <div className="mt-6">
          <button
            className="bg-black text-white px-4 py-2 w-full rounded"
            onClick={handleFinalSave}
          >
            Final Save
          </button>
        </div>
      </div>
    </>
  );
};

export default IndustryProducts;

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    ["link"],
  ],
};

const TechnologyOverview = () => {
  const [heading, setHeading] = useState("");
  const [items, setItems] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");
  const [currentImage, setCurrentImage] = useState(null);
  const [currentPreview, setCurrentPreview] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCurrentImage(file);
      setCurrentPreview(URL.createObjectURL(file));
    }
  };

  const addOrUpdateItem = () => {
    if (!currentTitle || !currentContent || !currentImage) return;

    const newItem = {
      title: currentTitle,
      content: currentContent,
      image: currentPreview,
      file: currentImage,
    };

    if (editIndex === -1) {
      setItems([...items, newItem]);
    } else {
      const updatedItems = [...items];
      updatedItems[editIndex] = newItem;
      setItems(updatedItems);
      setEditIndex(-1);
    }

    setCurrentTitle("");
    setCurrentContent("");
    setCurrentImage(null);
    setCurrentPreview("");
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    const item = items[index];
    setCurrentTitle(item.title);
    setCurrentContent(item.content);
    setCurrentPreview(item.image);
    setEditIndex(index);
  };

  const handleFinalSave = () => {
    const finalData = {
      heading,
      items: items.map((item) => ({
        title: item.title,
        content: item.content,
        image: item.file.name,
      })),
    };
    console.log("Final Data:", finalData);
    alert("Data saved! Check console for final data structure.");
  };

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded shadow-lg">
      <div className="mb-8">
        <label className="block text-lg font-semibold mb-2">Heading</label>
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          placeholder="Enter heading"
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="border p-6 bg-white rounded-lg shadow mb-6">
        <label className="block font-semibold mb-2">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4 w-full border p-2 rounded"
        />
        {currentPreview && (
          <img
            src={currentPreview}
            alt="Preview"
            className="mb-4 h-40 rounded shadow-md"
          />
        )}

        <label className="block font-semibold mb-2">Title</label>
        <input
          type="text"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
          placeholder="Enter title"
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mb-4"
        />

        <label className="block font-semibold mb-2">Content</label>
        {isClient && (
          <ReactQuill
            theme="snow"
            value={currentContent}
            onChange={setCurrentContent}
            modules={modules}
            className="mb-4 bg-white rounded shadow-sm"
          />
        )}

        <button
          onClick={addOrUpdateItem}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {editIndex === -1 ? "Add Item" : "Update Item"}
        </button>
      </div>

      <table className="w-full text-center bg-white shadow-md rounded-lg overflow-hidden">
        <thead className=" ">
          <tr className="bg-gray-200  text-center">
            <th className="p-4">Image</th>
            <th className="p-4">Title</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">
                <Image
                  src={item.image}
                  alt="Uploaded"
                  className="h-28 w-20 rounded shadow-md"
                  height={300}
                  width={300}
                />
              </td>
              <td className="p-4 font-semibold">{item.title}</td>
              <td className="p-4">
                <button
                  onClick={() => editItem(index)}
                  className="bg-heading text-white px-3 py-1 rounded-lg mr-2 hover:bg-yellow-600 transition"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="font1 cursor-pointer hover:text-red-600"
                  />
                </button>
                <button
                  onClick={() => deleteItem(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="font1 cursor-pointer hover:text-red-500"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-3 py-1 mx-1 rounded-lg ${
              currentPage === i ? "bg-heading text-white" : "bg-gray-400"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button
        onClick={handleFinalSave}
        className="  bg-gray-800 text-base  text-white px-6 py-3 rounded-lg w-full mt-4 shadow-lg transition"
      >
        Save All Data
      </button>
    </div>
  );
};

export default TechnologyOverview;

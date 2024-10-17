import AdminLayout from "@/Component/admin/AdminLayout";
import Image from "next/image";
import { useState } from "react";

const TestimonialBG = () => {
  const [alt, setAlt] = useState(""); // Alt text state
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file)); // Image preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("alt", alt); // Append alt text
    formData.append("image", image); // Append image file
    const res = await fetch("/api/testimonial/banner-testimonial", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.message) {
      alert(data.message);
    } else if (data.error) {
      alert(`Error: ${data.error}`);
    } else {
      alert("Testimonial background banner uploaded successfully");
    }
  };

  return (
    <AdminLayout>
      {" "}
      <div className=" mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Upload Testimonial Background
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="imageUpload"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="*/*" // Allow any file type
              onChange={handleImageChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {preview && (
            <div className="mb-4">
              <h3 className="text-sm font-medium">Image Preview:</h3>
              <Image
                src={preview}
                alt="Image Preview"
                height={200}
                width={200}
                className="rounded-md mt-2"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="altText">
              Alt Text
            </label>
            <input
              type="text"
              id="altText"
              placeholder="Enter alt text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default TestimonialBG;

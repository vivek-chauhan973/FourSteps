import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const SerHeroSection = ({ setActiveTab, serviceData }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [contentsummary, setContentsummary] = useState("");
  const [editorHtmlDescription, setEditorHtmlDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const filePreview = URL.createObjectURL(selectedFile);
    setPreview(filePreview);
  };

  const handleSubmit = async () => {
    if (!file || !serviceName || !title || !description) {
      alert("Please fill in all required fields and upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("serviceName", serviceName);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("contentsummary", contentsummary);
    formData.append("editorHtmlDescription", editorHtmlDescription);

    setLoading(true);

    try {
      const response = await fetch("/api/service/serviceHeroSection", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Service Hero Section saved successfully!");
        setServiceName("");
        setTitle("");
        setDescription("");
        setContentsummary("");
        setFile(null);
        setPreview(null);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error saving the service hero section.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 mb-5 rounded-md bg-white shadow-lg border-l-2 border-teal-600">
      <p className="text-base font-semibold mb-2">
        Service Hero Section Detail
      </p>
      <div className="p-4">
        <div className="flex xl:flex-row flex-col md:gap-10 gap-5 items-center xl:pl-5">
          <div className="flex flex-1 my-7">
            <input
              type="file"
              className="mb-4 ml-3"
              onChange={handleFileChange}
            />
            <div>
              {preview && (
                <Image
                  className="md:w-36 w-auto h-auto shadow-md mb-4"
                  src={preview}
                  alt="Preview"
                  width={150}
                  height={200}
                />
              )}
            </div>
          </div>
          <div className="flex-1 my-5">
            <div>
              <label htmlFor="serviceName" className="font-semibold">
                Service Name
              </label>
              <input
                className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
                type="text"
                id="serviceName"
                value={serviceName}
                placeholder="Enter Service Name Here"
                onChange={(e) => setServiceName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <input
                className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
                type="text"
                id="title"
                value={title}
                placeholder="Enter Title Here"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="textarea" className="font-semibold">
                Title Description
              </label>
              <textarea
                id="textarea"
                className="mt-1 mb-2 w-full border rounded h-28 px-2 focus:border-primary outline-none py-1"
                placeholder="Enter Description Here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-semibold mb-2">Service Summary</h3>
          <QuillNoSSRWrapper
            className="rounded h-48 mb-16"
            theme="snow"
            value={editorHtmlDescription}
            onChange={setEditorHtmlDescription}
            placeholder="Enter Your Answer"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-5 gap-3">
          <button
            className="bg-black text-white px-3 py-2 w-full md:w-auto rounded"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Processing..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SerHeroSection;

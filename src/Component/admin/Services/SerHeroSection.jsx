import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const SerHeroSection = ({ setActiveTab, blogData }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [industryName, setIndustryName] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [editorHtmlDescription, setEditorHtmlDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setTitle(blogData?.title || "");
    setIndustryName(blogData?.industryName || "");
    setDescription(blogData?.description || "");
    setPreview(blogData?.path || "");
    setEditorHtmlDescription(blogData?.contentsummary || "");
  }, [blogData]);

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  }

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
  };

  async function handleUpload() {
    if (
      !title ||
      !industryName ||
      !description ||
      !editorHtmlDescription ||
      (!file && !isUpdating)
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("industryName", industryName);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("contentsummary", editorHtmlDescription);
    if (file) formData.append("file", file);

    try {
      setLoading(true);
      const method = blogData ? "PUT" : "POST";
      const endpoint = `/api/service/${
        blogData ? blogData._id : "industry-hero"
      }`;
      const res = await fetch(endpoint, { method, body: formData });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        alert(`File ${blogData ? "updated" : "uploaded"} successfully`);

        // Redirect to /service/service/[id]
        router.push(`/service/service/${data?.data?._id}`);

        setActiveTab("Tab2");
      } else {
        alert(`File ${blogData ? "update" : "upload"} failed: ${data.message}`);
      }
    } catch (error) {
      setLoading(false);
      console.error(
        `Error ${blogData ? "updating" : "uploading"} file:`,
        error
      );
      alert(`An error occurred. Please try again.`);
    }
  }

  return (
    <div className="p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] border-l-2 border-teal-600">
      <p className="text-base font-semibold mb-2">
        Industry Hero Section Detail
      </p>
      <div className="p-4">
        <div className="flex xl:flex-row flex-col md:gap-10 gap-5 items-center xl:pl-5">
          <div className="flex flex-1 my-7">
            <input type="file" className="mb-4 ml-3" onChange={handleChange} />
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
              <label htmlFor="industryName" className="font-semibold">
                Industry Name
              </label>
              <input
                className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
                type="text"
                id="industryName"
                value={industryName}
                placeholder="Enter Industry Here"
                onChange={(e) => setIndustryName(e.target.value)}
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
          <h3 className="font-semibold mb-2">Industry Summary</h3>
          <QuillNoSSRWrapper
            className="rounded h-48 mb-16"
            theme="snow"
            value={editorHtmlDescription}
            onChange={setEditorHtmlDescription}
            placeholder="Enter Your Answer"
            modules={modules}
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-5 gap-3">
          <button
            className="bg-black text-white px-3 py-2 w-full md:w-auto rounded"
            onClick={handleUpload}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Processing..." : blogData ? "Update" : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SerHeroSection;

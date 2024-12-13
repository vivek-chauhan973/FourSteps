import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const fetchAllSuccessStories = async (id) => {
  const res = await fetch(`/api/industry/solution?id=${id}`, { method: "GET" });
  return await res.json();
};
const IndustryProducts = ({ setActiveTab, blogData }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [heading, setHeading] = useState("");
  const [editorHtmlDescription, setEditorHtmlDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();
  useEffect(() => {
    fetchAllSuccessStories(blogData?._id).then((res) => {
      // console.log("res is here -----> ", res);
      setCurrentItems(res?.data || []);
    });
  }, [blogData]);
  // Function to handle file input change
  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  }
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link"],
    ],
  };
  // Function to handle image upload or update
  async function handleUpload() {
    if (!file && !isUpdating) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    if (
      !file &&
      !title &&
      !editorHtmlDescription &&
      !heading &&
      !link
    ) {
      alert("Please upload file and  write title");
      return;
    }

    if (file && title) {
      formData.append("file", file);
      formData.append("title", title);
      formData.append("heading", heading);
      formData.append("link", link);
      formData.append("editorHtmlDescription",editorHtmlDescription);
      formData.append("industry", blogData?._id);
    }
    try {
      const res = await fetch(`/api/industry/solution`, {
        method:"POST",
        body: formData,
      });
      const data1 = await res.json();
      // console.log("data1--->",data1?.data?._id)
      if (res?.ok) {
        fetchAllSuccessStories().then((res) => {
          setCurrentItems(res?.data || []);
        });
        alert(
          `File ${
            blogData?.success?.length > 0 ? "updated" : "uploaded"
          } successfully`
        );
       
      } else {
        alert(
          `File ${blogData?.success?.length > 0 ? "update" : "upload"} failed`
        );
      }
    } catch (error) {
      console.error(
        `Error ${
          blogData?.success?.length > 0 ? "updating" : "uploading"
        } file:`,
        error
      );
    }
  }

  const deleteItem = async (id) => {
    const data = await fetch(`/api/industry/solution?id=${id}`, {
      method: "DELETE",
    });
    if (data?.ok) {
      alert("item deleted successfully");
    } else {
      alert("item cant be deleted due to error");
    }
  };

  return (
    <>
      <div className="p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600">
        <p className="text-base font-semibold mb-2">
          Industry Hero Section Detail
        </p>
        <div className="p-4">
          <div className="flex  flex-col md:gap-10 gap-5  xl:pl-5">
            <div>
              <label htmlFor="heading" className=" font-semibold">
                Heading
              </label>
              <input
                className="py-0.5 mb-2 w-full  border rounded h-8 px-2 focus:border-primary outline-none"
                type="text"
                id="heading"
                value={heading}
                placeholder="Enter Title Here"
                onChange={(e) => setHeading(e.target.value)}
              />
            </div>
            <div className=" flex  my-7">
              <input
                type="file"
                className="mb-4 ml-3"
                onChange={handleChange}
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
            <div className=" my-5">
              <div>
                <label htmlFor="title" className=" font-semibold">
                  Title
                </label>
                <input
                  className="py-0.5 mb-2 w-full  border rounded h-8 px-2 focus:border-primary outline-none"
                  type="text"
                  id="title"
                  value={title}
                  placeholder="Enter Title Here"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="link" className=" font-semibold">
                  Link
                </label>
                <input
                  className="py-0.5 mb-2 w-full  border rounded h-8 px-2 focus:border-primary outline-none"
                  type="text"
                  id="link"
                  value={link}
                  placeholder="Enter Title Here"
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="w-full">
            <h3 className=" font-semibold mb-2">Industry Summary</h3>
            <QuillNoSSRWrapper
              className="rounded h-48 mb-16"
              theme="snow"
              value={editorHtmlDescription}
              onChange={setEditorHtmlDescription}
              placeholder="Enter Your Answer"
              modules={modules}
            />
          </div>
             
            </div>
            {currentItems?.map((itinerary) => (
              <tr className="border-b" key={itinerary?._id}>
                <td className="py-2 pl-4 w-52">
                  <Image
                    className="w-40 h-16 object-cover rounded"
                    src={
                      itinerary?.path
                        ? itinerary?.path
                        : "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt=""
                    width="1920"
                    height="1280"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop if fallback also fails
                      e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                    }}
                  />
                </td>
                <td className="py-4 pl-4 text-start border-x capitalize">
                  {itinerary?.title}
                </td>
                <td className="py-4 flex justify-center items-center gap-3">
                  {/* <a
                                    href={"/admin/Industry/industry/" + itinerary?._id }
                                  >
                                    <FontAwesomeIcon
                                      icon={faEdit}
                                      className="font1 hover:text-primary cursor-pointer"
                                    />
                                  </a> */}
                  <button onClick={() => deleteItem(itinerary?._id)}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="font1 hover:text-primary cursor-pointer"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </div>

          <div className="flex md:flex-row flex-col md:gap-5 gap-3">
            <button
              className=" bg-black text-white px-3 py-2 w-32 md:w-auto rounded"
              onClick={handleUpload}
            >
              {blogData ? "Update " : "Add"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryProducts;

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
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const fetchAllSuccessStories = async (id) => {
  const res = await fetch(`/api/industry/success1?id=${id}`, { method: "GET" });
  return await res.json();
};

const IndustrySuccessStories = ({ setActiveTab, blogData }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [heading, setHeading] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [keyword, setKeyword] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const router = useRouter();

  useEffect(() => {
    fetchAllSuccessStories(blogData?._id).then((res) => {
      setAllItems(res?.data || []);
    });
  }, [blogData]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(allItems.slice(startIndex, endIndex));
  }, [allItems, currentPage]);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
    if (!file && !isUpdating) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    if (!file && !title) {
      alert("Please upload file and write title");
      return;
    }

    formData.append("title", title);
    formData.append("description", description);
    formData.append("heading", heading);
    formData.append("link", link);
    formData.append("backgroundColor", backgroundColor);
    formData.append("keyword", keyword);
    formData.append("industry", blogData?._id);

    if (file) formData.append("file", file);

    try {
      const url = isUpdating
        ? `/api/industry/success1/${editItemId}`
        : `/api/industry/success1`;
      const method = isUpdating ? "PUT" : "POST";
      const res = await fetch(url, { method, body: formData });
      const data1 = await res.json();

      if (res?.ok) {
        alert(`File ${isUpdating ? "updated" : "uploaded"} successfully`);
        fetchAllSuccessStories(blogData?._id).then((res) => {
          setAllItems(res?.data || []);
        });
        resetForm();
      } else {
        alert(`File ${isUpdating ? "update" : "upload"} failed`);
      }
    } catch (error) {
      console.error(
        `Error ${isUpdating ? "updating" : "uploading"} file:`,
        error
      );
    }
  }

  const deleteItem = async (id) => {
    const data = await fetch(`/api/industry/success1?id=${id}`, {
      method: "DELETE",
    });
    if (data?.ok) {
      alert("Item deleted successfully");
      setAllItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } else {
      alert("Item can't be deleted due to an error");
    }
  };

  const editItem = (item) => {
    setTitle(item.title);
    setDescription(item.description);
    setHeading(item.heading);
    setLink(item.link);
    setBackgroundColor(item.backgroundColor);
    setKeyword(item.keyword);
    setEditItemId(item._id);
    setIsUpdating(true);
    setPreview(item.path || null);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setHeading("");
    setLink("");
    setBackgroundColor("");
    setKeyword("");
    setFile(null);
    setPreview(null);
    setIsUpdating(false);
    setEditItemId(null);
  };

  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  return (
    // <>
    //   <div className="p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] border-l-2 border-orange-600">
    //     <p className="text-base font-semibold mb-2">Industry Success stories</p>
    //     <div className="p-4">
    //       <div className="flex flex-col md:gap-10 gap-5 xl:pl-5">
    //         <div>
    //           <label htmlFor="heading" className="font-semibold">
    //             Heading
    //           </label>
    //           <input
    //             className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
    //             type="text"
    //             id="heading"
    //             value={heading}
    //             placeholder="Enter Title Here"
    //             onChange={(e) => setHeading(e.target.value)}
    //           />
    //         </div>

    //         <div className="flex my-7">
    //           <input
    //             type="file"
    //             className="mb-4 ml-3"
    //             onChange={handleChange}
    //           />
    //           <div>
    //             {preview && (
    //               <Image
    //                 className="md:w-36 w-auto h-auto shadow-md mb-4"
    //                 src={preview}
    //                 alt="Preview"
    //                 width={150}
    //                 height={200}
    //               />
    //             )}
    //           </div>
    //         </div>

    //         <div className="my-5">
    //           <div>
    //             <label htmlFor="title" className="font-semibold">
    //               Title
    //             </label>
    //             <input
    //               className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
    //               type="text"
    //               id="title"
    //               value={title}
    //               placeholder="Enter Title Here"
    //               onChange={(e) => setTitle(e.target.value)}
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="keyword" className="font-semibold">
    //               Keywords
    //             </label>
    //             <input
    //               className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
    //               type="text"
    //               id="keyword"
    //               value={keyword}
    //               placeholder="Enter Keywords Here"
    //               onChange={(e) => setKeyword(e.target.value)}
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="link" className="font-semibold">
    //               Link
    //             </label>
    //             <input
    //               className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
    //               type="text"
    //               id="link"
    //               value={link}
    //               placeholder="Enter Link Here"
    //               onChange={(e) => setLink(e.target.value)}
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="background" className="font-semibold">
    //               Background Color
    //             </label>
    //             <input
    //               className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
    //               type="text"
    //               id="background"
    //               value={backgroundColor}
    //               placeholder="Enter Background Color Here"
    //               onChange={(e) => setBackgroundColor(e.target.value)}
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="textarea" className="font-semibold">
    //               Title Description
    //             </label>
    //             <textarea
    //               id="textarea"
    //               className="mt-1 mb-2 w-full border rounded h-28 px-2 focus:border-primary outline-none py-1"
    //               placeholder="Enter Description Here"
    //               value={description}
    //               onChange={(e) => setDescription(e.target.value)}
    //             ></textarea>
    //           </div>
    //         </div>

    //         <div className="flex md:flex-row flex-col md:gap-5 gap-3 mb-6">
    //           <button
    //             className="bg-black text-white px-3 py-2 w-32 md:w-auto rounded"
    //             onClick={handleUpload}
    //           >
    //             {isUpdating ? "Update" : "Add"}
    //           </button>
    //           {isUpdating && (
    //             <button
    //               className="bg-gray-500 text-white px-3 py-2 w-32 md:w-auto rounded"
    //               onClick={resetForm}
    //             >
    //               Cancel
    //             </button>
    //           )}
    //         </div>
    //       </div>

    //       <div className="mt-6">
    //         <table className="table-auto w-full border-collapse border border-gray-200">
    //           <thead>
    //             <tr className="bg-gray-100">
    //               <th className="border border-gray-300 py-2 px-4">Image</th>
    //               <th className="border border-gray-300 py-2 px-4">Title</th>
    //               <th className="border border-gray-300 py-2 px-4">Actions</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {currentItems?.map((itinerary) => (
    //               <tr className="border-b" key={itinerary?._id}>
    //                 <td className="py-2 px-4">
    //                   <Image
    //                     className="w-40 h-16 object-cover rounded"
    //                     src={
    //                       itinerary?.path ||
    //                       "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //                     }
    //                     alt=""
    //                     width="1920"
    //                     height="1280"
    //                     onError={(e) => {
    //                       e.target.onerror = null;
    //                       e.target.src = "/logo.png";
    //                     }}
    //                   />
    //                 </td>
    //                 <td className="py-4 px-4 text-start border-x capitalize">
    //                   {itinerary?.title}
    //                 </td>
    //                 <td className="py-4 px-4 text-center">
    //                   <button
    //                     onClick={() => editItem(itinerary)}
    //                     className="mr-2"
    //                   >
    //                     <FontAwesomeIcon
    //                       icon={faEdit}
    //                       className="font1 hover:text-primary cursor-pointer"
    //                     />
    //                   </button>
    //                   <button onClick={() => deleteItem(itinerary?._id)}>
    //                     <FontAwesomeIcon
    //                       icon={faTrash}
    //                       className="font1 hover:text-primary cursor-pointer"
    //                     />
    //                   </button>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>

    //         <div className="flex justify-center items-center mt-4 gap-2">
    //           {/* Previous Button */}
    //           <button
    //             className={`px-3 py-1 rounded ${
    //               currentPage === 1
    //                 ? "bg-gray-300 cursor-not-allowed"
    //                 : "bg-gray-200"
    //             }`}
    //             disabled={currentPage === 1}
    //             onClick={() => handleChangePage(currentPage - 1)}
    //           >
    //             <FontAwesomeIcon icon={faChevronLeft} />
    //           </button>

    //           {/* Middle Page Buttons */}
    //           {[...Array(totalPages)].map((_, index) => (
    //             <button
    //               key={index}
    //               className={`px-3 py-1 rounded ${
    //                 currentPage === index + 1
    //                   ? "bg-primary text-white"
    //                   : "bg-gray-200"
    //               }`}
    //               onClick={() => handleChangePage(index + 1)}
    //             >
    //               {index + 1}
    //             </button>
    //           ))}

    //           {/* Next Button */}
    //           <button
    //             className={`px-3 py-1 rounded ${
    //               currentPage === totalPages
    //                 ? "bg-gray-300 cursor-not-allowed"
    //                 : "bg-gray-200"
    //             }`}
    //             disabled={currentPage === totalPages}
    //             onClick={() => handleChangePage(currentPage + 1)}
    //           >
    //             <FontAwesomeIcon icon={faChevronRight} />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <div className="p-6 mb-8 rounded-lg bg-white shadow-lg border-l-4 border-teal-500">
      <p className="text-xl font-semibold text-teal-600 mb-4">
        Industry Success Stories
      </p>

      <div className="p-4 bg-gray-50 rounded-lg shadow-md">
        <div className="flex flex-col md:gap-10 gap-6 xl:pl-6">
          <div className="space-y-4">
            <label htmlFor="heading" className="font-medium ">
              Heading
            </label>
            <input
              className="py-2 px-3 w-full border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              type="text"
              id="heading"
              value={heading}
              placeholder="Enter Title Here"
              onChange={(e) => setHeading(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4 my-6">
            <input
              type="file"
              className="py-2 px-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500"
              onChange={handleChange}
            />
            <div>
              {preview && (
                <Image
                  className="w-36 h-48 object-cover shadow-lg rounded-lg"
                  src={preview}
                  alt="Preview"
                  width={150}
                  height={200}
                />
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="font-medium ">
                Title
              </label>
              <input
                className="py-2 px-3 w-full border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                type="text"
                id="title"
                value={title}
                placeholder="Enter Title Here"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="keyword" className="font-medium ">
                Keywords
              </label>
              <input
                className="py-2 px-3 w-full border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                type="text"
                id="keyword"
                value={keyword}
                placeholder="Enter Keywords Here"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="link" className="font-medium ">
                Link
              </label>
              <input
                className="py-2 px-3 w-full border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                type="text"
                id="link"
                value={link}
                placeholder="Enter Link Here"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="background"
                className="font-medium "
              >
                Background Color
              </label>
              <input
                className="py-2 px-3 w-full border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                type="text"
                id="background"
                value={backgroundColor}
                placeholder="Enter Background Color Here"
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="textarea" className="font-medium ">
                Title Description
              </label>
              <textarea
                id="textarea"
                className="mt-1 mb-2 w-full border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none py-2 px-3"
                placeholder="Enter Description Here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:gap-6 gap-4 mb-8">
            <button
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-all"
              onClick={handleUpload}
            >
              {isUpdating ? "Update" : "Add"}
            </button>
            {isUpdating && (
              <button
                className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-300 transition-all"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        <div className="mt-6">
          <table className="table-auto w-full border-collapse border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="border border-orange-200 py-3 px-4 text-orange-600">
                  Image
                </th>
                <th className="border border-orange-200 py-3 px-4 text-orange-600">
                  Title
                </th>
                <th className="border border-orange-200 py-3 px-4 text-orange-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((itinerary) => (
                <tr className="border-b" key={itinerary?._id}>
                  <td className="py-4 px-4">
                    <Image
                      className="w-40 h-24 object-cover rounded-lg shadow-md"
                      src={
                        itinerary?.path ||
                        "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt=""
                      width="1920"
                      height="1280"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/logo.png";
                      }}
                    />
                  </td>
                  <td className="py-4 px-4 text-start border-x capitalize text-orange-700">
                    {itinerary?.title}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => editItem(itinerary)}
                      className="mr-3 text-orange-600 hover:text-orange-500"
                    >
                      <FontAwesomeIcon icon={faEdit} className="text-lg" />
                    </button>
                    <button
                      onClick={() => deleteItem(itinerary?._id)}
                      className="text-red-600 hover:text-red-500"
                    >
                      <FontAwesomeIcon icon={faTrash} className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center items-center mt-6 gap-3">
            {/* Previous Button */}
            <button
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-orange-200 hover:bg-orange-300"
              }`}
              disabled={currentPage === 1}
              onClick={() => handleChangePage(currentPage - 1)}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Middle Page Buttons */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-orange-600 text-white"
                    : "bg-orange-200 hover:bg-orange-300"
                }`}
                onClick={() => handleChangePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-orange-200 hover:bg-orange-300"
              }`}
              disabled={currentPage === totalPages}
              onClick={() => handleChangePage(currentPage + 1)}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySuccessStories;

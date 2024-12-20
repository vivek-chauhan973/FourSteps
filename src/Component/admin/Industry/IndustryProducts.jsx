// import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from "next/navigation";
// import "react-quill/dist/quill.snow.css"; // Import Quill styles
// const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
// const fetchAllSuccessStories = async (id) => {
//   const res = await fetch(`/api/industry/solution?id=${id}`, { method: "GET" });
//   return await res.json();
// };
// const IndustryProducts = ({ setActiveTab, blogData }) => {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [title, setTitle] = useState("");
//   const [link, setLink] = useState("");
//   const [description, setDescription] = useState("");
//   const [currentItems, setCurrentItems] = useState([]);
//   const [heading, setHeading] = useState("");
//   const [editorHtmlDescription, setEditorHtmlDescription] = useState("");
//   const [isUpdating, setIsUpdating] = useState(false);
//   const router = useRouter();
//   useEffect(() => {
//     fetchAllSuccessStories(blogData?._id).then((res) => {
//       // console.log("res is here -----> ", res);
//       setCurrentItems(res?.data || []);
//     });
//   }, [blogData]);
//   // Function to handle file input change
//   function handleChange(e) {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     setPreview(URL.createObjectURL(selectedFile));
//   }
//   const modules = {
//     toolbar: [
//       [{ header: "1" }, { header: "2" }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       ["link"],
//     ],
//   };
//   // Function to handle image upload or update
//   async function handleUpload() {
//     if (!file && !isUpdating) {
//       alert("Please select a file to upload.");
//       return;
//     }

//     const formData = new FormData();
//     if (!file && !title && !editorHtmlDescription && !heading && !link) {
//       alert("Please upload file and  write title");
//       return;
//     }

//     if (file && title) {
//       formData.append("file", file);
//       formData.append("title", title);
//       formData.append("heading", heading);
//       formData.append("link", link);
//       formData.append("editorHtmlDescription", editorHtmlDescription);
//       formData.append("industry", blogData?._id);
//     }
//     try {
//       const res = await fetch(`/api/industry/solution`, {
//         method: "POST",
//         body: formData,
//       });
//       const data1 = await res.json();
//       // console.log("data1--->",data1?.data?._id)
//       if (res?.ok) {
//         fetchAllSuccessStories().then((res) => {
//           setCurrentItems(res?.data || []);
//         });
//         alert(
//           `File ${
//             blogData?.success?.length > 0 ? "updated" : "uploaded"
//           } successfully`
//         );
//       } else {
//         alert(
//           `File ${blogData?.success?.length > 0 ? "update" : "upload"} failed`
//         );
//       }
//     } catch (error) {
//       console.error(
//         `Error ${
//           blogData?.success?.length > 0 ? "updating" : "uploading"
//         } file:`,
//         error
//       );
//     }
//   }

//   const deleteItem = async (id) => {
//     const data = await fetch(`/api/industry/solution?id=${id}`, {
//       method: "DELETE",
//     });
//     if (data?.ok) {
//       alert("item deleted successfully");
//     } else {
//       alert("item cant be deleted due to error");
//     }
//   };

//   return (
//     <>
//       <div className="p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600">
//         <p className="text-base font-semibold mb-2">Industry section Product</p>
//         <div className="p-4">
//           <div className="flex  flex-col  gap-5  xl:pl-5">
//             <div>
//               <label htmlFor="heading" className=" font-semibold">
//                 Heading
//               </label>
//               <input
//                 className="py-0.5  w-full  border rounded h-8 px-2 focus:border-primary outline-none"
//                 type="text"
//                 id="heading"
//                 value={heading}
//                 placeholder="Enter Title Here"
//                 onChange={(e) => setHeading(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="description" className="font-semibold">
//                 Description
//               </label>
//               <textarea
//                 className="py-1 mb-2 w-full border rounded h-20 px-2 focus:border-primary outline-none"
//                 id="description"
//                 value={description}
//                 placeholder="Enter Description Here"
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </div>
//             <div className=" border p-2">
//               <div className=" flex">
//                 <input type="file" className=" ml-3" onChange={handleChange} />
//                 <div>
//                   {preview && (
//                     <Image
//                       className="md:w-36 w-auto h-auto shadow-md mb-4"
//                       src={preview}
//                       alt="Preview"
//                       width={150}
//                       height={200}
//                     />
//                   )}
//                 </div>
//               </div>
//               <div className=" my-5">
//                 <div>
//                   <label htmlFor="title" className=" font-semibold">
//                     Title
//                   </label>
//                   <input
//                     className="py-0.5 mb-2 w-full  border rounded h-8 px-2 focus:border-primary outline-none"
//                     type="text"
//                     id="title"
//                     value={title}
//                     placeholder="Enter Title Here"
//                     onChange={(e) => setTitle(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="link" className=" font-semibold">
//                     Link
//                   </label>
//                   <input
//                     className="py-0.5 mb-2 w-full  border rounded h-8 px-2 focus:border-primary outline-none"
//                     type="text"
//                     id="link"
//                     value={link}
//                     placeholder="Enter Title Here"
//                     onChange={(e) => setLink(e.target.value)}
//                   />
//                 </div>
//                 <div className="w-full">
//                   <h3 className=" font-semibold mb-2">Industry Summary</h3>
//                   <QuillNoSSRWrapper
//                     className="rounded h-48 mb-16"
//                     theme="snow"
//                     value={editorHtmlDescription}
//                     onChange={setEditorHtmlDescription}
//                     placeholder="Enter Your Answer"
//                     modules={modules}
//                   />
//                 </div>
//               </div>
//             </div>
//             {currentItems?.map((itinerary) => (
//               <tr className="border-b" key={itinerary?._id}>
//                 <td className="py-2 pl-4 w-52">
//                   <Image
//                     className="w-40 h-16 object-cover rounded"
//                     src={
//                       itinerary?.path
//                         ? itinerary?.path
//                         : "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                     }
//                     alt=""
//                     width="1920"
//                     height="1280"
//                     onError={(e) => {
//                       e.target.onerror = null; // Prevent infinite loop if fallback also fails
//                       e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
//                     }}
//                   />
//                 </td>
//                 <td className="py-4 pl-4 text-start border-x capitalize">
//                   {itinerary?.title}
//                 </td>
//                 <td className="py-4 flex justify-center items-center gap-3">
//                   {/* <a
//                                     href={"/admin/Industry/industry/" + itinerary?._id }
//                                   >
//                                     <FontAwesomeIcon
//                                       icon={faEdit}
//                                       className="font1 hover:text-primary cursor-pointer"
//                                     />
//                                   </a> */}
//                   <button onClick={() => deleteItem(itinerary?._id)}>
//                     <FontAwesomeIcon
//                       icon={faTrash}
//                       className="font1 hover:text-primary cursor-pointer"
//                     />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </div>

//           <div className="flex md:flex-row flex-col md:gap-5 gap-3">
//             <button
//               className=" bg-black text-white px-3 py-2 w-32 md:w-auto rounded"
//               onClick={handleUpload}
//             >
//               {blogData ? "Update " : "Add"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default IndustryProducts;

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const IndustryProducts = ({ setActiveTab, blogData }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [heading, setHeading] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current item index

  // Handle file change
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  // Add or update item
  const addItem = () => {
    if (!title || !link || !summary || (!file && !isEditing)) {
      alert("Please fill out all fields and select an image.");
      return;
    }

    if (isEditing) {
      setCurrentItems((prev) =>
        prev.map((item) =>
          item.id === editId
            ? {
                ...item,
                title,
                link,
                summary,
                image: file ? preview : item.image,
              }
            : item
        )
      );
      alert("Item updated successfully!");
      setIsEditing(false);
      setEditId(null);
    } else {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9), // Temporary unique ID
        title,
        link,
        summary,
        image: preview,
      };
      setCurrentItems((prev) => [...prev, newItem]);
      alert("Item added successfully!");
    }

    // Clear input fields
    setTitle("");
    setLink("");
    setSummary("");
    setFile(null);
    setPreview(null);
  };

  // Delete item
  const deleteItem = (id) => {
    setCurrentItems((prev) => prev.filter((item) => item.id !== id));
    alert("Item deleted successfully!");
  };

  // Edit item
  const editItem = (id) => {
    const item = currentItems.find((item) => item.id === id);
    if (item) {
      setTitle(item.title);
      setLink(item.link);
      setSummary(item.summary);
      setPreview(item.image);
      setIsEditing(true);
      setEditId(id);
    }
  };

  // Pagination (for showing one item at a time)
  const handleNext = () => {
    if (currentIndex < currentItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Final save
  const handleFinalSave = () => {
    const finalData = {
      heading,
      description,
      items: currentItems.map(({ id, ...rest }) => rest), // Exclude temporary ID
    };

    console.log("Final Data:", finalData);
    alert("Final data saved and logged in the console.");
  };

  return (
    <div className="p-4 mb-5 rounded-md bg-white shadow-md border-l-2 border-teal-600">
      <p className="text-base font-semibold mb-2">Industry Section Product</p>
      <div className="p-4">
        {/* Heading */}
        <div>
          <label htmlFor="heading" className="font-semibold">
            Heading
          </label>
          <input
            className="py-0.5 w-full border rounded h-8 px-2 focus:border-primary outline-none"
            type="text"
            id="heading"
            value={heading}
            placeholder="Enter Heading Here"
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="mt-4">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            className="py-1 mb-2 w-full border rounded h-20 px-2 focus:border-primary outline-none"
            id="description"
            value={description}
            placeholder="Enter Section Description Here"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Image, Title, Link, and Summary */}
        <div className="mt-4 border p-4 rounded">
          <input type="file" onChange={handleChange} />
          {preview && (
            <Image
              src={preview}
              alt="Preview"
              width={150}
              height={100}
              className="my-4"
            />
          )}

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
            <label htmlFor="link" className="font-semibold">
              Link
            </label>
            <input
              className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
              type="text"
              id="link"
              value={link}
              placeholder="Enter Link Here"
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="summary" className="font-semibold">
              Industry Summary
            </label>
            <textarea
              className="py-1 mb-2 w-full border rounded h-20 px-2 focus:border-primary outline-none"
              id="summary"
              value={summary}
              placeholder="Enter Summary Here"
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>

          <button
            className={`${
              isEditing ? "bg-yellow-500" : "bg-teal-600"
            } text-white px-3 py-2 mt-2 rounded`}
            onClick={addItem}
          >
            {isEditing ? "Update Item" : "Add to List"}
          </button>
        </div>

        {/* Table View for Current Items */}
        {currentItems.length > 0 && (
          <div className="mt-6">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Image</th>
                  <th className="px-4 py-2 border">Title</th>

                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">
                    <Image
                      src={currentItems[currentIndex].image}
                      alt={currentItems[currentIndex].title}
                      width={100}
                      height={100}
                      className="rounded"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    {currentItems[currentIndex].title}
                  </td>

                  <td className="px-4 py-2 border">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded"
                      onClick={() => editItem(currentItems[currentIndex].id)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => deleteItem(currentItems[currentIndex].id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-200 px-4 py-2 rounded"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                Previous
              </button>
              <button
                className="bg-gray-200 px-4 py-2 rounded"
                onClick={handleNext}
                disabled={currentIndex === currentItems.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Final Save */}
        <div className="mt-6 w-full">
          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={handleFinalSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryProducts;

// import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import "react-quill/dist/quill.snow.css"; // Import Quill styles

// const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

// const SerHeroSection = ({ setActiveTab, blogData }) => {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [title, setTitle] = useState("");
//   const [serviceName, setServiceName] = useState("");
//   const [description, setDescription] = useState("");
//   const [editorHtmlDescription, setEditorHtmlDescription] = useState("");

//   const router = useRouter();

//   // Initialize state with existing blog data (if any)
//   useEffect(() => {
//     setTitle(blogData?.title || "");
//     setServiceName(blogData?.serviceName || "");
//     setDescription(blogData?.description || "");
//     setPreview(blogData?.path || "");
//     setEditorHtmlDescription(blogData?.contentsummary || "");
//   }, [blogData]);

//   // Handle file selection and preview generation
//   function handleChange(e) {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     setPreview(URL.createObjectURL(selectedFile));
//   }

//   // Quill editor modules for toolbar
//   const modules = {
//     toolbar: [
//       [{ header: "1" }, { header: "2" }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [
//         { list: "ordered" },
//         { list: "bullet" },
//         { indent: "-1" },
//         { indent: "+1" },
//       ],
//       ["link"],
//     ],
//   };

//   // Handle data upload and tab switch
//   async function handleUpload() {
//     // Validate the required fields
//     if (!file && !blogData) {
//       alert("Please select a file to upload.");
//       return;
//     }
//     if (!title || !serviceName || !editorHtmlDescription) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("serviceName", serviceName);
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("contentsummary", editorHtmlDescription);

//     console.log("Uploading Data:", {
//       serviceName,
//       title,
//       description,
//       contentsummary: editorHtmlDescription,
//       file,
//     });

//     try {
//       // const res = await fetch(
//       //   `/api/service/${blogData ? blogData?._id : "service-hero"}`,
//       //   {
//       //     method: blogData ? "PUT" : "POST",
//       //     body: formData,
//       //   }
//       // );
//       const responseData = await res.json();

//       if (res.ok) {
//         console.log("Upload Response:", responseData);

//         // Change the active tab
//         setActiveTab("Tab2");
//         alert(`File ${blogData ? "updated" : "uploaded"} successfully`);
//       } else {
//         console.error("Upload failed:", responseData);
//         alert(`File ${blogData ? "update" : "upload"} failed`);
//       }
//     } catch (error) {
//       console.error(
//         `Error ${blogData ? "updating" : "uploading"} file:`,
//         error
//       );
//       alert("An error occurred while uploading the file.");
//     }
//   }

//   return (
//     <>
//       <div className="p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] border-l-2 border-teal-600">
//         <p className="text-base font-semibold mb-2">
//           Service Hero Section Detail
//         </p>
//         <div className="p-4">
//           <div className="flex xl:flex-row flex-col md:gap-10 gap-5 items-center xl:pl-5">
//             <div className="flex flex-1 my-7">
//               <input
//                 type="file"
//                 className="mb-4 ml-3"
//                 onChange={handleChange}
//               />
//               <div>
//                 {preview && (
//                   <Image
//                     className="md:w-36 w-auto h-auto shadow-md mb-4"
//                     src={preview}
//                     alt="Preview"
//                     width={150}
//                     height={200}
//                   />
//                 )}
//               </div>
//             </div>
//             <div className="flex-1 my-5">
//               <div>
//                 <label htmlFor="serviceName" className="font-semibold">
//                   Service Name
//                 </label>
//                 <input
//                   className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
//                   type="text"
//                   id="serviceName"
//                   value={serviceName}
//                   placeholder="Enter Service Here"
//                   onChange={(e) => setServiceName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="title" className="font-semibold">
//                   Title
//                 </label>
//                 <input
//                   className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
//                   type="text"
//                   id="title"
//                   value={title}
//                   placeholder="Enter Title Here"
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="textarea" className="font-semibold">
//                   Title Description
//                 </label>
//                 <textarea
//                   id="textarea"
//                   className="mt-1 mb-2 w-full border rounded h-28 px-2 focus:border-primary outline-none py-1"
//                   placeholder="Enter Description Here"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                 ></textarea>
//               </div>
//             </div>
//           </div>
//           <div className="w-full">
//             <h3 className="font-semibold mb-2">Service Summary</h3>
//             <QuillNoSSRWrapper
//               className="rounded h-48 mb-16"
//               theme="snow"
//               value={editorHtmlDescription}
//               onChange={setEditorHtmlDescription}
//               placeholder="Enter Your Answer"
//               modules={modules}
//             />
//           </div>
//           <div className="flex md:flex-row flex-col md:gap-5 gap-3">
//             <button
//               className="bg-black text-white px-3 py-2 w-full md:w-auto rounded"
//               onClick={handleUpload}
//             >
//               {blogData ? "Update " : "Upload"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SerHeroSection;

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const SerHeroSection = ({ setActiveTab, blogData }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [editorHtmlDescription, setEditorHtmlDescription] = useState("");

  const router = useRouter();

  // Initialize state with existing blog data (if any)
  useEffect(() => {
    setTitle(blogData?.title || "");
    setServiceName(blogData?.serviceName || "");
    setDescription(blogData?.description || "");
    setPreview(blogData?.path || "");
    setEditorHtmlDescription(blogData?.contentsummary || "");
  }, [blogData]);

  // Handle file selection and preview generation
  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  }

  // Quill editor modules for toolbar
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

  // Handle data upload and tab switch
  async function handleUpload() {
    // Validate the required fields
    if (!file && !blogData) {
      alert("Please select a file to upload.");
      return;
    }
    if (!title || !serviceName || !editorHtmlDescription) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("serviceName", serviceName);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("contentsummary", editorHtmlDescription);

    console.log("Simulated API Request Data:", {
      url: `/api/service/${blogData ? blogData?._id : "service-hero"}`,
      method: blogData ? "PUT" : "POST",
      body: {
        serviceName,
        title,
        description,
        contentsummary: editorHtmlDescription,
        file,
      },
    });

    // Simulating API call by logging the request instead of actually making it
    // Uncomment and replace the following section with actual API request in production
    /*
    try {
      const res = await fetch(
        `/api/service/${blogData ? blogData?._id : "service-hero"}`,
        {
          method: blogData ? "PUT" : "POST",
          body: formData,
        }
      );
      const responseData = await res.json();

      if (res.ok) {
        console.log("Upload Response:", responseData);
        setActiveTab("Tab2"); // Switch to the next tab
        alert(`File ${blogData ? "updated" : "uploaded"} successfully`);
      } else {
        console.error("Upload failed:", responseData);
        alert(`File ${blogData ? "update" : "upload"} failed`);
      }
    } catch (error) {
      console.error(`Error ${blogData ? "updating" : "uploading"} file:`, error);
      alert("An error occurred while uploading the file.");
    }
    */
    // For testing, let's directly call tab switch logic after simulated success
    setActiveTab("Tab2"); // Simulate the tab switch after a successful upload
    alert(`File ${blogData ? "updated" : "uploaded"} successfully`);
  }

  return (
    <>
      <div className="p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] border-l-2 border-teal-600">
        <p className="text-base font-semibold mb-2">
          Service Hero Section Detail
        </p>
        <div className="p-4">
          <div className="flex xl:flex-row flex-col md:gap-10 gap-5 items-center xl:pl-5">
            <div className="flex flex-1 my-7">
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
                  placeholder="Enter Service Here"
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
              modules={modules}
            />
          </div>
          <div className="flex md:flex-row flex-col md:gap-5 gap-3">
            <button
              className="bg-black text-white px-3 py-2 w-full md:w-auto rounded"
              onClick={handleUpload}
            >
              {blogData ? "Update " : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SerHeroSection;

// import { useState } from "react";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import { useRouter } from "next/router";

// const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

// const SerHeroSection = ({ setActiveTab }) => {
//   const router = useRouter();
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [title, setTitle] = useState("");
//   const [serviceName, setServiceName] = useState("");
//   const [description, setDescription] = useState("");
//   const [contentsummary, setContentsummary] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     const filePreview = URL.createObjectURL(selectedFile);
//     setPreview(filePreview);
//   };

//   const handleSubmit = async () => {
//     if (!file || !serviceName || !title || !description || !contentsummary) {
//       alert("Please fill in all required fields and upload a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("serviceName", serviceName);
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("contentsummary", contentsummary);

//     setLoading(true);

//     try {
//       const response = await fetch(`/api/service/${serviceHeroSection}`, {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Service Hero Section saved successfully!");
//         setServiceName("");
//         setTitle("");
//         setDescription("");
//         setContentsummary("");
//         setFile(null);
//         setPreview(null);
//         if (setActiveTab) setActiveTab("nextTab");
//       } else {
//         const data = await response.json();
//         alert(`Error: ${data.message}`);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("There was an error saving the service hero section.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 mb-5 rounded-md bg-white shadow-lg border-l-2 border-teal-600">
//       <p className="text-base font-semibold mb-2">
//         Service Hero Section Detail
//       </p>
//       <div className="p-4">
//         <div className="flex xl:flex-row flex-col md:gap-10 gap-5 items-center xl:pl-5">
//           <div className="flex flex-1 my-7">
//             <input
//               type="file"
//               className="mb-4 ml-3"
//               onChange={handleFileChange}
//             />
//             <div>
//               {preview && (
//                 <Image
//                   className="md:w-36 w-auto h-auto shadow-md mb-4"
//                   src={preview}
//                   alt="Preview"
//                   width={150}
//                   height={200}
//                 />
//               )}
//             </div>
//           </div>
//           <div className="flex-1 my-5">
//             <div>
//               <label htmlFor="serviceName" className="font-semibold">
//                 Service Name
//               </label>
//               <input
//                 className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
//                 type="text"
//                 id="serviceName"
//                 value={serviceName}
//                 placeholder="Enter Service Name Here"
//                 onChange={(e) => setServiceName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="title" className="font-semibold">
//                 Title
//               </label>
//               <input
//                 className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
//                 type="text"
//                 id="title"
//                 value={title}
//                 placeholder="Enter Title Here"
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="description" className="font-semibold">
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 className="mt-1 mb-2 w-full border rounded h-28 px-2 focus:border-primary outline-none py-1"
//                 placeholder="Enter Description Here"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>
//           </div>
//         </div>
//         <div className="w-full">
//           <h3 className="font-semibold mb-2">Service Summary</h3>
//           <textarea
//             className="w-full border rounded h-32 px-2 py-1 focus:border-primary outline-none"
//             value={contentsummary}
//             onChange={(e) => setContentsummary(e.target.value)}
//             placeholder="Enter service summary here"
//           />
//         </div>
//         <div className="flex md:flex-row flex-col md:gap-5 gap-3">
//           <button
//             className="bg-black text-white px-3 py-2 w-full md:w-auto rounded"
//             onClick={handleSubmit}
//             disabled={loading}
//           >
//             {loading ? "Processing..." : "Save"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SerHeroSection;
// import { useState } from "react";
// import { useRouter } from "next/router";

// const SerHeroSection = ({ setActiveTab }) => {
//   const router = useRouter();

//   // Assuming `serviceHeroSection` is a dynamic route parameter
//   const { serviceHeroSection } = router.query;

//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [title, setTitle] = useState("");
//   const [serviceName, setServiceName] = useState("");
//   const [description, setDescription] = useState("");
//   const [contentsummary, setContentsummary] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Check if serviceHeroSection is undefined
//   console.log("welcome",serviceHeroSection); // Debugging

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     const filePreview = URL.createObjectURL(selectedFile);
//     setPreview(filePreview);
//   };

//   const handleSubmit = async () => {
//     if (!file || !serviceName || !title || !description || !contentsummary) {
//       alert("Please fill in all required fields and upload a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("serviceName", serviceName);
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("contentsummary", contentsummary);

//     setLoading(true);

//     try {
//       // Check if serviceHeroSection is undefined or not
//       if (!serviceHeroSection) {
//         alert("Error: Service Hero Section is undefined!");
//         return;
//       }

//       console.log("serviceHeroSection in request:", serviceHeroSection); // Debugging

//       const response = await fetch(`/api/service/${serviceHeroSection}`, {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Service Hero Section saved successfully!");
//         setServiceName("");
//         setTitle("");
//         setDescription("");
//         setContentsummary("");
//         setFile(null);
//         setPreview(null);
//         if (setActiveTab) setActiveTab("nextTab");
//       } else {
//         const data = await response.json();
//         console.log(data); // Debugging response
//         alert(`Error: ${data.message}`);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("There was an error saving the service hero section.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 mb-5 rounded-md bg-white shadow-lg border-l-2 border-teal-600">
//       <p className="text-base font-semibold mb-2">
//         Service Hero Section Detail
//       </p>
//       <div className="p-4">
//         <div className="flex xl:flex-row flex-col md:gap-10 gap-5 items-center xl:pl-5">
//           <div className="flex flex-1 my-7">
//             <input
//               type="file"
//               className="mb-4 ml-3"
//               onChange={handleFileChange}
//             />
//             <div>
//               {preview && (
//                 <Image
//                   className="md:w-36 w-auto h-auto shadow-md mb-4"
//                   src={preview}
//                   alt="Preview"
//                   width={150}
//                   height={200}
//                 />
//               )}
//             </div>
//           </div>
//           <div className="flex-1 my-5">
//             <div>
//               <label htmlFor="serviceName" className="font-semibold">
//                 Service Name
//               </label>
//               <input
//                 className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
//                 type="text"
//                 id="serviceName"
//                 value={serviceName}
//                 placeholder="Enter Service Name Here"
//                 onChange={(e) => setServiceName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="title" className="font-semibold">
//                 Title
//               </label>
//               <input
//                 className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
//                 type="text"
//                 id="title"
//                 value={title}
//                 placeholder="Enter Title Here"
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="description" className="font-semibold">
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 className="mt-1 mb-2 w-full border rounded h-28 px-2 focus:border-primary outline-none py-1"
//                 placeholder="Enter Description Here"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>
//           </div>
//         </div>
//         <div className="w-full">
//           <h3 className="font-semibold mb-2">Service Summary</h3>
//           <textarea
//             className="w-full border rounded h-32 px-2 py-1 focus:border-primary outline-none"
//             value={contentsummary}
//             onChange={(e) => setContentsummary(e.target.value)}
//             placeholder="Enter service summary here"
//           />
//         </div>
//         <div className="flex md:flex-row flex-col md:gap-5 gap-3">
//           <button
//             className="bg-black text-white px-3 py-2 w-full md:w-auto rounded"
//             onClick={handleSubmit}
//             disabled={loading}
//           >
//             {loading ? "Processing..." : "Save"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SerHeroSection;

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const SerHeroSection = ({ setActiveTab }) => {
  const router = useRouter();
  const [serviceHeroSection, setServiceHeroSection] = useState(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [contentsummary, setContentsummary] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.query.serviceHeroSection) {
      setServiceHeroSection(router.query.serviceHeroSection);
    }
  }, [router.query.serviceHeroSection]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const filePreview = URL.createObjectURL(selectedFile);
    setPreview(filePreview);
  };

  const handleSubmit = async () => {
    if (!file || !serviceName || !title || !description || !contentsummary) {
      alert("Please fill in all required fields and upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("serviceName", serviceName);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("contentsummary", contentsummary);

    if (!serviceHeroSection) {
      alert("Error: Service Hero Section is undefined!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/service/${serviceHeroSection}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Service Hero Section saved successfully!");
        setServiceName("");
        setTitle("");
        setDescription("");
        setContentsummary("");
        setFile(null);
        setPreview(null);
        if (setActiveTab) setActiveTab("nextTab");
      } else {
        const data = await response.json();
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
              <label htmlFor="description" className="font-semibold">
                Description
              </label>
              <textarea
                id="description"
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
          <textarea
            className="w-full border rounded h-32 px-2 py-1 focus:border-primary outline-none"
            value={contentsummary}
            onChange={(e) => setContentsummary(e.target.value)}
            placeholder="Enter service summary here"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-5 gap-3">
          <button
            className="bg-black text-white px-3 py-2 w-full md:w-auto rounded"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Processing..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SerHeroSection;

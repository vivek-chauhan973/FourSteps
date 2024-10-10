// import AdminLayout from "@/Component/admin/AdminLayout";
// import React, { useState } from "react";

// const initialWebinars = [
//   {
//     id: "1",
//     image: "https://via.placeholder.com/100",
//     title: "React Webinar",
//     type: "Development",
//   },
//   {
//     id: "2",
//     image: "https://via.placeholder.com/100",
//     title: "Tailwind CSS Workshop",
//     type: "Design",
//   },
//   {
//     id: "3",
//     image: "https://via.placeholder.com/100",
//     title: "JavaScript Basics",
//     type: "Programming",
//   },
//   {
//     id: "4",
//     image: "https://via.placeholder.com/100",
//     title: "JavaScript Basics",
//     type: "Programming",
//   },
//   {
//     id: "5",
//     image: "https://via.placeholder.com/100",
//     title: "JavaScript Basics",
//     type: "Programming",
//   },
//   {
//     id: "6",
//     image: "https://via.placeholder.com/100",
//     title: "hjklJavaScript Basics",
//     type: "Progrhjkl;amming",
//   },
// ];

// const Listwebinar = () => {
//   const [webinars, setWebinars] = useState(initialWebinars);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({});

//   const handleEdit = (id) => {
//     const webinar = webinars.find((w) => w.id === id);
//     setFormData(webinar);
//     setEditingId(id);
//   };

//   const handleDelete = (id) => {
//     setWebinars(webinars.filter((webinar) => webinar.id !== id));
//   };

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleBlur = () => {
//     const updatedWebinars = webinars.map((webinar) =>
//       webinar.id === editingId ? formData : webinar
//     );
//     setWebinars(updatedWebinars);
//     setEditingId(null);
//   };

//   return (
//     <AdminLayout>
//       <div className="overflow-x-auto">
//         <table className="min-w-full text-left  text-sm font-light border-collapse border border-black shadow-lg">
//           <thead>
//             <tr className="bg-gray-700 text-white font-bold text-[17px]">
//               <th className="px-6 py-3 text-center border border-black">
//                 Image
//               </th>
//               <th className="px-6 py-3 text-center border border-black">
//                 Title
//               </th>
//               <th className="px-6 py-3 text-center border border-black">
//                 Webinar Type
//               </th>
//               <th className="px-6 py-3 text-center border border-black">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {webinars.map((webinar) => (
//               <tr key={webinar.id} className="border border-black">
//                 <td className="px-6 py-3 text-center  border border-black">
//                   <img
//                     src={webinar.image}
//                     alt={webinar.title}
//                     className="h-16 w-16 object-cover rounded"
//                   />
//                 </td>
//                 {editingId === webinar.id ? (
//                   <>
//                     <td className="px-6 py-3 text-center border border-black">
//                       <input
//                         className="w-full border border-black rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                         value={formData.title}
//                         onChange={(e) =>
//                           handleInputChange("title", e.target.value)
//                         }
//                         onBlur={handleBlur}
//                         autoFocus
//                       />
//                     </td>
//                     <td className="px-6 py-3 text-center border border-black">
//                       <input
//                         className="w-full border border-black rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                         value={formData.type}
//                         onChange={(e) =>
//                           handleInputChange("type", e.target.value)
//                         }
//                         onBlur={handleBlur}
//                         autoFocus
//                       />
//                     </td>
//                     <td className="px-6 py-3 text-center">
//                       <button
//                         className="text-red-500 hover:text-red-700 transition-colors"
//                         onClick={() => handleDelete(webinar.id)}
//                       >
//                         🗑️ Delete
//                       </button>
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td className="px-6 py-3 text-center border border-black">
//                       {webinar.title}
//                     </td>
//                     <td className="px-6 py-3 text-center border border-black">
//                       {webinar.type}
//                     </td>
//                     <td className="px-6 py-3 text-center border border-black">
//                       <div className="flex justify-center items-center space-x-4">
//                         <button
//                           className="text-blue-500 hover:text-blue-700 transition-colors"
//                           onClick={() => handleEdit(webinar.id)}
//                         >
//                           ✏️ Edit
//                         </button>
//                         <button
//                           className="text-red-500 hover:text-red-700 transition-colors"
//                           onClick={() => handleDelete(webinar.id)}
//                         >
//                           🗑️ Delete
//                         </button>
//                       </div>
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </AdminLayout>
//   );
// };

// export default Listwebinar;

// import AdminLayout from "@/Component/admin/AdminLayout";
// import React, { useState } from "react";

// const initialWebinars = [
//   {
//     id: "1",
//     image: "https://via.placeholder.com/100",
//     title: "React Webinar",
//     type: "Development",
//   },
//   {
//     id: "2",
//     image: "https://via.placeholder.com/100",
//     title: "Tailwind CSS Workshop",
//     type: "Design",
//   },
//   {
//     id: "3",
//     image: "https://via.placeholder.com/100",
//     title: "JavaScript Basics",
//     type: "Programming",
//   },
// ];

// const Listwebinar = () => {
//   const [webinars, setWebinars] = useState(initialWebinars);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({ title: "", type: "", image: "" });

//   const handleEdit = (id) => {
//     const webinar = webinars.find((w) => w.id === id);
//     setFormData(webinar);
//     setEditingId(id);
//   };

//   const handleDelete = (id) => {
//     setWebinars(webinars.filter((webinar) => webinar.id !== id));
//   };

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleBlur = () => {
//     const updatedWebinars = webinars.map((webinar) =>
//       webinar.id === editingId ? formData : webinar
//     );
//     setWebinars(updatedWebinars);
//     setEditingId(null);
//   };

//   const handleAddWebinar = () => {
//     const newWebinar = {
//       id: (webinars.length + 1).toString(), // Unique ID
//       ...formData,
//     };
//     setWebinars([...webinars, newWebinar]);
//     setFormData({ title: "", type: "", image: "" }); // Reset form
//   };

//   return (
//     <AdminLayout>
//       <div className="overflow-x-auto">
//         {/* Add Webinar Form */}
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Webinar Title"
//             value={formData.title}
//             onChange={(e) => handleInputChange("title", e.target.value)}
//             className="border rounded px-2 py-1 mr-2"
//           />
//           <input
//             type="text"
//             placeholder="Webinar Type"
//             value={formData.type}
//             onChange={(e) => handleInputChange("type", e.target.value)}
//             className="border rounded px-2 py-1 mr-2"
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={formData.image}
//             onChange={(e) => handleInputChange("image", e.target.value)}
//             className="border rounded px-2 py-1 mr-2"
//           />
//           <button
//             onClick={handleAddWebinar}
//             className="bg-blue-500 text-white rounded px-4 py-1"
//           >
//             Add Webinar
//           </button>
//         </div>

//         <table className="min-w-full text-left text-sm font-light border-collapse border border-black shadow-lg">
//           <thead>
//             <tr className="bg-gray-700 text-white font-bold text-[17px]">
//               <th className="px-6 py-3 text-center border border-black">
//                 Image
//               </th>
//               <th className="px-6 py-3 text-center border border-black">
//                 Title
//               </th>
//               <th className="px-6 py-3 text-center border border-black">
//                 Webinar Type
//               </th>
//               <th className="px-6 py-3 text-center border border-black">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {webinars.map((webinar) => (
//               <tr key={webinar.id} className="border border-black">
//                 <td className="px-6 py-3 text-center border border-black">
//                   <img
//                     src={webinar.image}
//                     alt={webinar.title}
//                     className="h-16 w-16 object-cover rounded"
//                   />
//                 </td>
//                 {editingId === webinar.id ? (
//                   <>
//                     <td className="px-6 py-3 text-center border border-black">
//                       <input
//                         className="w-full border border-black rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                         value={formData.title}
//                         onChange={(e) =>
//                           handleInputChange("title", e.target.value)
//                         }
//                         onBlur={handleBlur}
//                         autoFocus
//                       />
//                     </td>
//                     <td className="px-6 py-3 text-center border border-black">
//                       <input
//                         className="w-full border border-black rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                         value={formData.type}
//                         onChange={(e) =>
//                           handleInputChange("type", e.target.value)
//                         }
//                         onBlur={handleBlur}
//                         autoFocus
//                       />
//                     </td>
//                     <td className="px-6 py-3 text-center">
//                       <button
//                         className="text-red-500 hover:text-red-700 transition-colors"
//                         onClick={() => handleDelete(webinar.id)}
//                       >
//                         🗑️ Delete
//                       </button>
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td className="px-6 py-3 text-center border border-black">
//                       {webinar.title}
//                     </td>
//                     <td className="px-6 py-3 text-center border border-black">
//                       {webinar.type}
//                     </td>
//                     <td className="px-6 py-3 text-center border border-black">
//                       <div className="flex justify-center items-center space-x-4">
//                         <button
//                           className="text-blue-500 hover:text-blue-700 transition-colors"
//                           onClick={() => handleEdit(webinar.id)}
//                         >
//                           ✏️ Edit
//                         </button>
//                         <button
//                           className="text-red-500 hover:text-red-700 transition-colors"
//                           onClick={() => handleDelete(webinar.id)}
//                         >
//                           🗑️ Delete
//                         </button>
//                       </div>
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </AdminLayout>
//   );
// };

// export default Listwebinar;

import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const initialWebinars = [
  {
    id: "1",
    image: "https://via.placeholder.com/100",
    title: "zoho Webinar",
    type: "upcoming",
  },
  {
    id: "2",
    image: "https://via.placeholder.com/100",
    title: "hubspot",
    type: "recorded",
  },
  {
    id: "3",
    image: "https://via.placeholder.com/100",
    title: "werty",
    type: "xcvbnm,",
  },
  // Adding new static webinars directly into the initialWebinars array
];

const Listwebinar = () => {
  const [webinars, setWebinars] = useState(initialWebinars);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (id) => {
    const webinar = webinars.find((w) => w.id === id);
    setFormData(webinar);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setWebinars(webinars.filter((webinar) => webinar.id !== id));
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleBlur = () => {
    const updatedWebinars = webinars.map((webinar) =>
      webinar.id === editingId ? formData : webinar
    );
    setWebinars(updatedWebinars);
    setEditingId(null);
  };

  return (
    <AdminLayout>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm font-light border-collapse border border-black shadow-lg">
          <thead>
            <tr className="bg-gray-700 text-white font-bold text-[17px]">
              <th className="px-6 py-3 text-center border border-black">
                Image
              </th>
              <th className="px-6 py-3 text-center border border-black">
                Title
              </th>
              <th className="px-6 py-3 text-center border border-black">
                Webinar Type
              </th>
              <th className="px-6 py-3 text-center border border-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white  ">
            {webinars.map((webinar) => (
              <tr key={webinar.id} className="border border-black">
                <td className="px-6 py-3 text-center border border-black">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                {editingId === webinar.id ? (
                  <>
                    <td className="px-6 py-3 text-center border border-black">
                      <input
                        className="w-full border border-black rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={formData.title}
                        onChange={(e) =>
                          handleInputChange("title", e.target.value)
                        }
                        onBlur={handleBlur}
                        autoFocus
                      />
                    </td>
                    <td className="px-6 py-3 text-center border border-black">
                      <input
                        className="w-full border border-black rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={formData.type}
                        onChange={(e) =>
                          handleInputChange("type", e.target.value)
                        }
                        onBlur={handleBlur}
                        autoFocus
                      />
                    </td>
                    <td className="px-6 py-3 text-center">
                      <button
                        className="text-red-500 hover:text-red-700 transition-colors"
                        onClick={() => handleDelete(webinar.id)}
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-3 text-center border border-black">
                      {webinar.title}
                    </td>
                    <td className="px-6 py-3 text-center border border-black">
                      {webinar.type}
                    </td>
                    <td className="px-6 py-3 text-center border border-black">
                      <div className="flex justify-center items-center space-x-2">
                        <button
                          className="text-blue-500 hover:text-blue-700 transition-colors"
                          onClick={() => handleEdit(webinar.id)}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700 transition-colors"
                          onClick={() => handleDelete(webinar.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Listwebinar;

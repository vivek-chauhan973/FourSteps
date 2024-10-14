import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const initialWebinars = [
  {
    id: "1",
    image: "https://via.placeholder.com/100",
    Name: "pradhumn",
    Designation: "web developer",
  },
  {
    id: "2",
    image: "https://via.placeholder.com/100",
    Name: "rakesh",
    Designation: " web developer",
  },
  {
    id: "3",
    image: "https://via.placeholder.com/100",
    Name: "Naitik",
    Designation: "java developer",
  },
  // Adding new static webinars directly into the initialWebinars array
];

const listofTeam = () => {
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
                Name
              </th>
              <th className="px-6 py-3 text-center border border-black">
                Designation
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
                      {webinar.Name}
                    </td>
                    <td className="px-6 py-3 text-center border border-black">
                      {webinar.Designation}
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

export default listofTeam;

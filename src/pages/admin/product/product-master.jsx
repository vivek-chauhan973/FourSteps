
import AdminLayout from "@/Component/admin/AdminLayout";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCirclePlus,
  faTrash,
  faXmark,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

export default function ServiceMaster() {
  const [service, setService] = useState("");
  const [servicesList, setServicesList] = useState([]);
  const [editServiceId, setEditServiceId] = useState(null);
  const [editServiceValue, setEditServiceValue] = useState("");

  // Fetch services on mount
  useEffect(() => {
    const loadServices = async () => {
      const response = await fetch("/api/product/service");
      const data = await response.json();
      if (data.success) {
        setServicesList(data.data);
      }
    };
    loadServices();
  }, []);

  // Add Service
  const handleSubmitService = async (e) => {
    e.preventDefault();
    if (!service.trim()) return;

    const response = await fetch("/api/product/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: service.trim() }),
    });

    const data = await response.json();
    if (data.success) {
      setServicesList([...servicesList, data.data]);
      setService("");
      alert("services added ");
    }
  };

  // Toggle Edit Mode
  const toggleEditService = (id) => {
    if (editServiceId === id) {
      setEditServiceId(null);
      setEditServiceValue("");
    } else {
      setEditServiceId(id);
      const serviceItem = servicesList.find((item) => item._id === id);
      setEditServiceValue(serviceItem.name);
    }
  };

  // Save Edited Service
  const saveEditService = async (id) => {
    const response = await fetch("/api/product/service", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name: editServiceValue }),
    });

    const data = await response.json();
    if (data.success) {
      setServicesList(
        servicesList.map((item) =>
          item._id === id ? { ...item, name: editServiceValue } : item
        )
      );
      setEditServiceId(null);
      setEditServiceValue("");
    }
  };

  // Delete Service
  const handleDeleteService = async (id) => {
    const response = await fetch("/api/product/service", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();
    if (data.success) {
      setServicesList(servicesList.filter((item) => item._id !== id));
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-xl mb-4">Service Master</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  rounded">
          <div className=" shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
            <form
              onSubmit={handleSubmitService}
              className="flex items-end gap-3 mb-4"
            >
              <div className="flex flex-col flex-grow">
                <label htmlFor="service" className="mb-2 font-semibold">
                  Service
                </label>
                <input
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="border rounded-md h-8 px-2 w-full"
                  placeholder="Enter Service"
                />
              </div>
              <button type="submit" className="text-xl">
                <FontAwesomeIcon icon={faCirclePlus} />
              </button>
            </form>

            <div className="border overflow-y-scroll p-3 h-60 rounded-md">
              {servicesList.length > 0 ? (
                servicesList.map((item, index) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center mb-2"
                  >
                    <div className="flex-grow">
                      <span className="mr-2">{index + 1}.</span>
                      {editServiceId === item._id ? (
                        <input
                          value={editServiceValue}
                          onChange={(e) => setEditServiceValue(e.target.value)}
                          className="border rounded-md px-2 h-8 w-full"
                        />
                      ) : (
                        <span>{item.name}</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {editServiceId === item._id ? (
                        <>
                          <FontAwesomeIcon
                            icon={faXmark}
                            className="cursor-pointer"
                            onClick={() => toggleEditService(item._id)}
                          />
                          <FontAwesomeIcon
                            icon={faSave}
                            className="cursor-pointer"
                            onClick={() => saveEditService(item._id)}
                          />
                        </>
                      ) : (
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="cursor-pointer"
                          onClick={() => toggleEditService(item._id)}
                        />
                      )}
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="cursor-pointer"
                        onClick={() => handleDeleteService(item._id)}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p>No services added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

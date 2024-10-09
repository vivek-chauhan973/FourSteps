import { useState } from "react";
import AdminLayout from "@/Component/admin/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCirclePlus,
  faTrash,
  faXmark,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

export default function Masterwebinar() {
  // States for Webinar Types
  const [webinarType, setWebinarType] = useState(""); // Input value state for webinar types
  const [webinarTypesList, setWebinarTypesList] = useState([]); // List of webinar types
  const [editWebinarId, setEditWebinarId] = useState(null); // ID of the webinar type being edited
  const [editWebinarValue, setEditWebinarValue] = useState(""); // Edited value of the webinar type

  // Handle input change for webinar type
  const handleWebinarTypeChange = (e) => {
    setWebinarType(e.target.value);
  };

  // Handle form submit to add new webinar type
  const handleSubmitWebinarType = (e) => {
    e.preventDefault();
    if (webinarType.trim()) {
      const newWebinarType = {
        _id: Date.now(),
        type: webinarType,
      };
      setWebinarTypesList([...webinarTypesList, newWebinarType]);
      setWebinarType("");
    }
  };

  // Edit and delete functions for webinar types
  const toggleEditWebinar = (id) => {
    if (editWebinarId === id) {
      setEditWebinarId(null);
      setEditWebinarValue("");
    } else {
      setEditWebinarId(id);
      const webinarToEdit = webinarTypesList.find((item) => item._id === id);
      setEditWebinarValue(webinarToEdit.type);
    }
  };

  const saveEditWebinar = (id) => {
    const updatedWebinars = webinarTypesList.map((item) =>
      item._id === id ? { ...item, type: editWebinarValue } : item
    );
    setWebinarTypesList(updatedWebinars);
    setEditWebinarId(null);
    setEditWebinarValue("");
  };

  const handleDeleteWebinar = (id) => {
    const filteredWebinars = webinarTypesList.filter((item) => item._id !== id);
    setWebinarTypesList(filteredWebinars);
  };

  // States for Departments
  const [department, setDepartment] = useState(""); // Input value state for departments
  const [departmentsList, setDepartmentsList] = useState([]); // List of departments
  const [editDepartmentId, setEditDepartmentId] = useState(null); // ID of the department being edited
  const [editDepartmentValue, setEditDepartmentValue] = useState(""); // Edited value of the department

  // Handle input change for departments
  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  // Handle form submit to add new department
  const handleSubmitDepartment = (e) => {
    e.preventDefault();
    if (department.trim()) {
      const newDepartment = {
        _id: Date.now(),
        name: department,
      };
      setDepartmentsList([...departmentsList, newDepartment]);
      setDepartment("");
    }
  };

  // Edit and delete functions for departments
  const toggleEditDepartment = (id) => {
    if (editDepartmentId === id) {
      setEditDepartmentId(null);
      setEditDepartmentValue("");
    } else {
      setEditDepartmentId(id);
      const departmentToEdit = departmentsList.find((item) => item._id === id);
      setEditDepartmentValue(departmentToEdit.name);
    }
  };

  const saveEditDepartment = (id) => {
    const updatedDepartments = departmentsList.map((item) =>
      item._id === id ? { ...item, name: editDepartmentValue } : item
    );
    setDepartmentsList(updatedDepartments);
    setEditDepartmentId(null);
    setEditDepartmentValue("");
  };

  const handleDeleteDepartment = (id) => {
    const filteredDepartments = departmentsList.filter(
      (item) => item._id !== id
    );
    setDepartmentsList(filteredDepartments);
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center gap-5 text-primary py-5">
          <p className="md:text-[28px] text-xl text-black">Webinar Master</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded">
          {/* First Form - Webinar Types */}
          <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
            <form
              onSubmit={handleSubmitWebinarType}
              className="flex items-end justify-between gap-3"
            >
              <div className="grow flex flex-col">
                <label htmlFor="" className="mb-2 pl-2 text-para font-semibold">
                  Webinar Type
                </label>
                <input
                  onChange={handleWebinarTypeChange}
                  value={webinarType}
                  className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                  type="text"
                  name="webinarType"
                  placeholder="Enter Webinar Type"
                />
              </div>
              <button type="submit">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="text-xl hover:text-primary cursor-pointer mb-1"
                />
              </button>
            </form>

            {/* Display Webinar Types */}
            <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
              {webinarTypesList.map((item, index) => (
                <div key={item._id} className="even:bg-slate-50">
                  <div className="flex justify-between px-1">
                    <p className="capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]">
                      <span>{index + 1}.</span>
                      {editWebinarId === item._id ? (
                        <input
                          className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                          value={editWebinarValue}
                          onChange={(e) => setEditWebinarValue(e.target.value)}
                        />
                      ) : (
                        item.type
                      )}
                    </p>
                    <div className="flex gap-2">
                      {editWebinarId === item._id ? (
                        <span className="flex gap-2">
                          <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => toggleEditWebinar(item._id)}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                          {editWebinarValue && (
                            <FontAwesomeIcon
                              icon={faSave}
                              onClick={() => saveEditWebinar(item._id)}
                              className="mt-1 hover:text-primary cursor-pointer"
                            />
                          )}
                        </span>
                      ) : (
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => toggleEditWebinar(item._id)}
                          className="mt-1 hover:text-primary cursor-pointer"
                        />
                      )}
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDeleteWebinar(item._id)}
                        className="mt-1 hover:text-primary cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* department section  */}
          <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
            <form
              onSubmit={handleSubmitDepartment}
              className="flex items-end justify-between gap-3"
            >
              <div className="grow flex flex-col">
                <label htmlFor="" className="mb-2 pl-2 text-para font-semibold">
                  Departments
                </label>
                <input
                  onChange={handleDepartmentChange}
                  value={department}
                  className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                  type="text"
                  name="department"
                  placeholder="Enter Department"
                />
              </div>
              <button type="submit">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="text-xl hover:text-primary cursor-pointer mb-1"
                />
              </button>
            </form>

            {/* Display Departments */}
            <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
              {departmentsList.map((item, index) => (
                <div key={item._id} className="even:bg-slate-50">
                  <div className="flex justify-between px-1">
                    <p className="capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]">
                      <span>{index + 1}.</span>
                      {editDepartmentId === item._id ? (
                        <input
                          className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                          value={editDepartmentValue}
                          onChange={(e) =>
                            setEditDepartmentValue(e.target.value)
                          }
                        />
                      ) : (
                        item.name
                      )}
                    </p>
                    <div className="flex gap-2">
                      {editDepartmentId === item._id ? (
                        <span className="flex gap-2">
                          <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => toggleEditDepartment(item._id)}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                          {editDepartmentValue && (
                            <FontAwesomeIcon
                              icon={faSave}
                              onClick={() => saveEditDepartment(item._id)}
                              className="mt-1 hover:text-primary cursor-pointer"
                            />
                          )}
                        </span>
                      ) : (
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => toggleEditDepartment(item._id)}
                          className="mt-1 hover:text-primary cursor-pointer"
                        />
                      )}
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDeleteDepartment(item._id)}
                        className="mt-1 hover:text-primary cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

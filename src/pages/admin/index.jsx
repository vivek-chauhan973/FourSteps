import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCirclePlus,
  faTrash,
  faXmark,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  // States for Industries
  const [industry, setIndustry] = useState(""); // Input value state for industries
  const [industriesList, setIndustriesList] = useState([]); // List of industries
  const [editIndustryId, setEditIndustryId] = useState(null); // ID of the industry being edited
  const [editIndustryValue, setEditIndustryValue] = useState(""); // Edited value of the industry

  // Fetch industries on component mount
  useEffect(() => {
    const fetchIndustries = async () => {
      const response = await fetch("/api/global/industries/getIndustries");
      const data = await response.json();
      setIndustriesList(data.data);
    };

    fetchIndustries();
  }, []);

  // Handle input change
  const handleIndustryChange = (e) => setIndustry(e.target.value);

  // Handle form submission to add new industry
  const handleSubmitIndustry = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/global/industries/addIndustry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: industry }),
    });

    if (response.ok) {
      const newIndustry = await response.json();
      setIndustriesList([...industriesList, newIndustry.data]);
      setIndustry("");
      alert("Industry added successfully!");
    }
  };

  // Toggle edit mode for an industry
  const toggleEditIndustry = (id) => {
    if (editIndustryId === id) {
      setEditIndustryId(null);
      setEditIndustryValue("");
    } else {
      setEditIndustryId(id);
      const industryToEdit = industriesList.find((item) => item._id === id);
      setEditIndustryValue(industryToEdit.name);
    }
  };

  // Save edited industry
  const saveEditIndustry = async (id) => {
    const response = await fetch(
      `/api/global/industries/updateIndustry?id=${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editIndustryValue }),
      }
    );

    if (response.ok) {
      const updatedIndustry = await response.json();
      const updatedIndustries = industriesList.map((item) =>
        item._id === id ? updatedIndustry.data : item
      );
      setIndustriesList(updatedIndustries);
      setEditIndustryId(null);
      setEditIndustryValue("");
      alert("Industry updated successfully!");
    } else {
      const errorResponse = await response.json();
      alert(`Error updating industry: ${errorResponse.message}`);
    }
  };

  // Handle industry deletion
  const handleDeleteIndustry = async (id) => {
    const response = await fetch(
      `/api/global/industries/deleteIndustry?id=${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const filteredIndustries = industriesList.filter(
        (item) => item._id !== id
      );
      setIndustriesList(filteredIndustries);
      alert("Industry deleted successfully!");
    }
  };

  // STATES FOR TOOLS
  const [tool, setTool] = useState(""); // Input value state for tools
  const [toolsList, setToolsList] = useState([]); // List of tools
  const [editToolId, setEditToolId] = useState(null); // ID of the tool being edited
  const [editToolValue, setEditToolValue] = useState(""); // Edited value of the tool

  // Handle input change for tools
  const handleToolChange = (e) => {
    setTool(e.target.value);
  };

  // Handle form submit to add new tool
  const handleSubmitTool = (e) => {
    e.preventDefault();
    if (tool.trim()) {
      const newTool = {
        _id: Date.now(),
        name: tool,
      };
      setToolsList([...toolsList, newTool]);
      setTool("");
    }
  };
  // Edit and delete functions for tools
  const toggleEditTool = (id) => {
    if (editToolId === id) {
      setEditToolId(null);
      setEditToolValue("");
    } else {
      setEditToolId(id);
      const toolToEdit = toolsList.find((item) => item._id === id);
      setEditToolValue(toolToEdit.name);
    }
  };
  const saveEditTool = (id) => {
    const updatedTools = toolsList.map((item) =>
      item._id === id ? { ...item, name: editToolValue } : item
    );
    setToolsList(updatedTools);
    setEditToolId(null);
    setEditToolValue("");
  };

  const handleDeleteTool = (id) => {
    const filteredTools = toolsList.filter((item) => item._id !== id);
    setToolsList(filteredTools);
  };

  // States for Topics
  const [topic, setTopic] = useState("");
  const [topicsList, setTopicsList] = useState([]);
  const [editTopicId, setEditTopicId] = useState(null);
  const [editTopicValue, setEditTopicValue] = useState("");
  // Handle input change for topics
  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  // Handle form submit to add new topic
  const handleSubmitTopic = (e) => {
    e.preventDefault();
    if (topic.trim()) {
      const newTopic = {
        _id: Date.now(),
        name: topic,
      };
      setTopicsList([...topicsList, newTopic]);
      setTopic("");
    }
  };

  // Edit and delete functions for topics
  const toggleEditTopic = (id) => {
    if (editTopicId === id) {
      setEditTopicId(null);
      setEditTopicValue("");
    } else {
      setEditTopicId(id);
      const topicToEdit = topicsList.find((item) => item._id === id);
      setEditTopicValue(topicToEdit.name);
    }
  };

  const saveEditTopic = (id) => {
    const updatedTopics = topicsList.map((item) =>
      item._id === id ? { ...item, name: editTopicValue } : item
    );
    setTopicsList(updatedTopics);
    setEditTopicId(null);
    setEditTopicValue("");
  };

  const handleDeleteTopic = (id) => {
    const filteredTopics = topicsList.filter((item) => item._id !== id);
    setTopicsList(filteredTopics);
  };

  // States for Languages
  const [language, setLanguage] = useState("");
  const [languagesList, setLanguagesList] = useState([]);
  const [editLanguageId, setEditLanguageId] = useState(null);
  const [editLanguageValue, setEditLanguageValue] = useState("");

  // Handle input change for languages
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Handle form submit to add new language
  const handleSubmitLanguage = (e) => {
    e.preventDefault();
    if (language.trim()) {
      const newLanguage = {
        _id: Date.now(),
        name: language,
      };
      setLanguagesList([...languagesList, newLanguage]);
      setLanguage("");
    }
  };

  // Edit and delete functions for languages
  const toggleEditLanguage = (id) => {
    if (editLanguageId === id) {
      setEditLanguageId(null);
      setEditLanguageValue("");
    } else {
      setEditLanguageId(id);
      const languageToEdit = languagesList.find((item) => item._id === id);
      setEditLanguageValue(languageToEdit.name);
    }
  };

  const saveEditLanguage = (id) => {
    const updatedLanguages = languagesList.map((item) =>
      item._id === id ? { ...item, name: editLanguageValue } : item
    );
    setLanguagesList(updatedLanguages);
    setEditLanguageId(null);
    setEditLanguageValue("");
  };

  const handleDeleteLanguage = (id) => {
    const filteredLanguages = languagesList.filter((item) => item._id !== id);
    setLanguagesList(filteredLanguages);
  };
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded">
        {/* This is a department section */}

        <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
          <div>
            <form
              onSubmit={handleSubmitIndustry}
              className="flex items-end gap-3"
            >
              <div className="grow flex flex-col">
                <label htmlFor="industry" className="mb-2 pl-2 font-semibold">
                  Industries
                </label>
                <input
                  id="industry"
                  value={industry}
                  onChange={handleIndustryChange}
                  placeholder="Enter Industry"
                  className="border rounded-md px-2 h-8"
                />
              </div>
              <button type="submit" className="text-xl cursor-pointer">
                <FontAwesomeIcon icon={faCirclePlus} />
              </button>
            </form>

            {/* Display Industries */}
            <div className="mt-3">
              {industriesList.map((item) => (
                <div key={item._id} className="flex justify-between mt-2">
                  <p>
                    {editIndustryId === item._id ? (
                      <input
                        className="border rounded-md h-8 px-2"
                        value={editIndustryValue}
                        onChange={(e) => setEditIndustryValue(e.target.value)}
                      />
                    ) : (
                      item.name
                    )}
                  </p>
                  <div className="flex gap-2">
                    {editIndustryId === item._id ? (
                      <button onClick={() => saveEditIndustry(item._id)}>
                        <FontAwesomeIcon
                          icon={faSave}
                          className="text-green-600"
                        />
                      </button>
                    ) : (
                      <button onClick={() => toggleEditIndustry(item._id)}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="text-blue-600"
                        />
                      </button>
                    )}
                    <button onClick={() => handleDeleteIndustry(item._id)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-600"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* tools and software section */}
        <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
          <form
            onSubmit={handleSubmitTool}
            className="flex items-end justify-between gap-3"
          >
            <div className="grow flex flex-col">
              <label htmlFor="" className="mb-2 pl-2 text-para font-semibold">
                Tools and Software
              </label>
              <input
                onChange={handleToolChange}
                value={tool}
                className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                type="text"
                name="tool"
                placeholder="Enter Tool or Software"
              />
            </div>
            <button type="submit">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-xl hover:text-primary cursor-pointer mb-1"
              />
            </button>
          </form>

          {/* Display Tools and Software */}
          <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
            {toolsList.map((item, index) => (
              <div key={item._id} className="even:bg-slate-50">
                <div className="flex justify-between px-1">
                  <p className="capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]">
                    <span>{index + 1}.</span>
                    {editToolId === item._id ? (
                      <input
                        className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                        value={editToolValue}
                        onChange={(e) => setEditToolValue(e.target.value)}
                      />
                    ) : (
                      item.name
                    )}
                  </p>
                  <div className="flex gap-2">
                    {editToolId === item._id ? (
                      <span className="flex gap-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={() => toggleEditTool(item._id)}
                          className="mt-1 hover:text-primary cursor-pointer"
                        />
                        {editToolValue && (
                          <FontAwesomeIcon
                            icon={faSave}
                            onClick={() => saveEditTool(item._id)}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                        )}
                      </span>
                    ) : (
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => toggleEditTool(item._id)}
                        className="mt-1 hover:text-primary cursor-pointer"
                      />
                    )}
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDeleteTool(item._id)}
                      className="mt-1 hover:text-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* This is a Topic section */}
        <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
          <form
            onSubmit={handleSubmitTopic}
            className="flex items-end justify-between gap-3"
          >
            <div className="grow flex flex-col">
              <label htmlFor="" className="mb-2 pl-2 text-para font-semibold">
                Topics
              </label>
              <input
                onChange={handleTopicChange}
                value={topic}
                className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                type="text"
                name="topic"
                placeholder="Enter Topic"
              />
            </div>
            <button type="submit">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-xl hover:text-primary cursor-pointer mb-1"
              />
            </button>
          </form>

          {/* Display Topics */}
          <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
            {topicsList.map((item, index) => (
              <div key={item._id} className="even:bg-slate-50">
                <div className="flex justify-between px-1">
                  <p className="capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]">
                    <span>{index + 1}.</span>
                    {editTopicId === item._id ? (
                      <input
                        className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                        value={editTopicValue}
                        onChange={(e) => setEditTopicValue(e.target.value)}
                      />
                    ) : (
                      item.name
                    )}
                  </p>
                  <div className="flex gap-2">
                    {editTopicId === item._id ? (
                      <span className="flex gap-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={() => toggleEditTopic(item._id)}
                          className="mt-1 hover:text-primary cursor-pointer"
                        />
                        {editTopicValue && (
                          <FontAwesomeIcon
                            icon={faSave}
                            onClick={() => saveEditTopic(item._id)}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                        )}
                      </span>
                    ) : (
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => toggleEditTopic(item._id)}
                        className="mt-1 hover:text-primary cursor-pointer"
                      />
                    )}
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDeleteTopic(item._id)}
                      className="mt-1 hover:text-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* This is a langauges section */}
        <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
          <form
            onSubmit={handleSubmitLanguage}
            className="flex items-end justify-between gap-3"
          >
            <div className="grow flex flex-col">
              <label htmlFor="" className="mb-2 pl-2 text-para font-semibold">
                Languages
              </label>
              <input
                onChange={handleLanguageChange}
                value={language}
                className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                type="text"
                name="language"
                placeholder="Enter Language"
              />
            </div>
            <button type="submit">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-xl hover:text-primary cursor-pointer mb-1"
              />
            </button>
          </form>

          {/* Display Languages */}
          <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
            {languagesList.map((item, index) => (
              <div key={item._id} className="even:bg-slate-50">
                <div className="flex justify-between px-1">
                  <p className="capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]">
                    <span>{index + 1}.</span>
                    {editLanguageId === item._id ? (
                      <input
                        className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                        value={editLanguageValue}
                        onChange={(e) => setEditLanguageValue(e.target.value)}
                      />
                    ) : (
                      item.name
                    )}
                  </p>
                  <div className="flex gap-2">
                    {editLanguageId === item._id ? (
                      <span className="flex gap-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={() => toggleEditLanguage(item._id)}
                          className="mt-1 hover:text-primary cursor-pointer"
                        />
                        {editLanguageValue && (
                          <FontAwesomeIcon
                            icon={faSave}
                            onClick={() => saveEditLanguage(item._id)}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                        )}
                      </span>
                    ) : (
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => toggleEditLanguage(item._id)}
                        className="mt-1 hover:text-primary cursor-pointer"
                      />
                    )}
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDeleteLanguage(item._id)}
                      className="mt-1 hover:text-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

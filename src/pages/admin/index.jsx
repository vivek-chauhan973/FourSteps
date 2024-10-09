import AdminLayout from "@/Component/admin/AdminLayout";
import React, { useState } from "react";
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

  // Handle input change for industries
  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
  };

  // Handle form submit to add new industry
  const handleSubmitIndustry = (e) => {
    e.preventDefault();
    if (industry.trim()) {
      const newIndustry = {
        _id: Date.now(),
        name: industry,
      };
      setIndustriesList([...industriesList, newIndustry]);
      setIndustry("");
    }
  };

  // Edit and delete functions for industries
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

  const saveEditIndustry = (id) => {
    const updatedIndustries = industriesList.map((item) =>
      item._id === id ? { ...item, name: editIndustryValue } : item
    );
    setIndustriesList(updatedIndustries);
    setEditIndustryId(null);
    setEditIndustryValue("");
  };

  const handleDeleteIndustry = (id) => {
    const filteredIndustries = industriesList.filter((item) => item._id !== id);
    setIndustriesList(filteredIndustries);
  };
  // States for Tools and Software
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
          <form
            onSubmit={handleSubmitIndustry}
            className="flex items-end justify-between gap-3"
          >
            <div className="grow flex flex-col">
              <label htmlFor="" className="mb-2 pl-2 text-para font-semibold">
                Industries
              </label>
              <input
                onChange={handleIndustryChange}
                value={industry}
                className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                type="text"
                name="industry"
                placeholder="Enter Industry"
              />
            </div>
            <button type="submit">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-xl hover:text-primary cursor-pointer mb-1"
              />
            </button>
          </form>

          {/* Display Industries */}
          <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
            {industriesList.map((item, index) => (
              <div key={item._id} className="even:bg-slate-50">
                <div className="flex justify-between px-1">
                  <p className="capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]">
                    <span>{index + 1}.</span>
                    {editIndustryId === item._id ? (
                      <input
                        className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                        value={editIndustryValue}
                        onChange={(e) => setEditIndustryValue(e.target.value)}
                      />
                    ) : (
                      item.name
                    )}
                  </p>
                  <div className="flex gap-2">
                    {editIndustryId === item._id ? (
                      <span className="flex gap-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={() => toggleEditIndustry(item._id)}
                          className="mt-1 hover:text-primary cursor-pointer"
                        />
                        {editIndustryValue && (
                          <FontAwesomeIcon
                            icon={faSave}
                            onClick={() => saveEditIndustry(item._id)}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                        )}
                      </span>
                    ) : (
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => toggleEditIndustry(item._id)}
                        className="mt-1 hover:text-primary cursor-pointer"
                      />
                    )}
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDeleteIndustry(item._id)}
                      className="mt-1 hover:text-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
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

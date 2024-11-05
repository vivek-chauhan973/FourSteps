import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCirclePlus,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Highlight({ webinarData }) {
  const [aboutEditorHtml, setAboutEditorHtml] = useState(
    webinarData?.about || ""
  );
  const [isEditingAbout, setIsEditingAbout] = useState(true);
  const [inputHighlight, setInputHighlight] = useState("");
  const [highlights, setHighlights] = useState(webinarData?.highlights || []);
  const [highlightEdit, setHighlightEdit] = useState({
    edit: false,
    index: -1,
  });

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

  const handleAboutEditorChange = (html) => {
    setAboutEditorHtml(html);
  };

  const addHighlight = () => {
    if (!inputHighlight) return;

    if (highlightEdit.edit) {
      const updatedHighlights = [...highlights];
      updatedHighlights[highlightEdit.index].text = inputHighlight;
      setHighlights(updatedHighlights);
      setHighlightEdit({ edit: false, index: -1 });
    } else {
      const newHighlight = { text: inputHighlight };
      setHighlights([...highlights, newHighlight]);
    }

    setInputHighlight("");
  };

  const handleRemoveHighlight = (index) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  const handleEditHighlight = (index) => {
    setInputHighlight(highlights[index].text);
    setHighlightEdit({ edit: true, index });
  };

  const handleSubmit = () => {
    const formData = {
      about: aboutEditorHtml,
      highlights: highlights.map((item) => item.text),
    };
    // Calling the provided onSubmit prop function with data

    // Switch to the next tab after submitting
    setIsEditingAbout(false);
  };

  return (
    <div className="bg-white p-2 px-5 grow rounded-md flex flex-col gap-3">
      <div className="md:mb-0 mb-5">
        <p className="pb-2 font-semibold text-para">Hightlight</p>
        {isEditingAbout ? (
          <div className="w-full h-44">
            <QuillNoSSRWrapper
              className="rounded h-32"
              theme="snow"
              value={aboutEditorHtml}
              onChange={handleAboutEditorChange}
              modules={modules}
            />
          </div>
        ) : (
          <div className="flex gap-5">
            <div className="w-20">
              <FontAwesomeIcon
                icon={faEdit}
                className="cursor-pointer hover:text-primary"
                onClick={() => setIsEditingAbout(true)}
              />
            </div>
          </div>
        )}
      </div>
      {/* <div>
        <label
          htmlFor="highlightDeparture"
          className="pb-2 font-semibold text-para"
        >
          Highlight
        </label>
        <div className="w-full mt-2 flex gap-5 items-center">
          <input
            onChange={(e) => setInputHighlight(e.target.value)}
            value={inputHighlight}
            className="w-full border rounded-md h-8 px-2 text-para grow focus:border-primary outline-none"
            type="text"
            placeholder="Enter A Highlight"
          />
          <FontAwesomeIcon
            icon={highlightEdit.edit ? faSave : faCirclePlus}
            className="font1 cursor-pointer hover:text-primary"
            onClick={addHighlight}
          />
        </div>
        <div className="border h-56 w-full overflow-y-auto py-2 rounded-md mt-2">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex justify-between even:bg-slate-50 md:px-5 px-2"
            >
              <span className="mr-2 font-semibold">{index + 1}.</span>
              <span className="h-8 px-2 flex-grow">{item.text}</span>
              <div className="md:flex gap-3">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="cursor-pointer hover:text-primary"
                  onClick={() => handleEditHighlight(index)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="cursor-pointer hover:text-primary"
                  onClick={() => handleRemoveHighlight(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <button
        type="submit"
        className="bg-black text-white w-full rounded py-2"
        onClick={handleSubmit}
      >
        Save
      </button>
    </div>
  );
}

import React, { useState } from 'react'
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const IndustryWhy4steps = () => {
  const [aboutEditorHtml, setAboutEditorHtml] = useState("");
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { list: "square" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
  };
  const handleAboutEditorChange = (html) => {
    setAboutEditorHtml(html);
  };
  return (
    <div className="bg-white p-2 px-5 grow rounded-md flex flex-col gap-3">
      <div>
        <p className='my-2'>Heading</p>
        <input type="text"  className='w-full outline-none border py-1 px-3'/>
      </div>
      <div className="md:mb-0 mb-5">
        <p className="pb-2 font-semibold text-para">OverView</p>

        <div className="w-full h-44">
          <QuillNoSSRWrapper
            className="rounded h-32 "
            theme="snow"
            value={aboutEditorHtml}
            onChange={handleAboutEditorChange}
            modules={modules}
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-black text-white w-full rounded py-2"
        // onClick={handleSubmit}
      >
        Save
      </button>
    </div>
  )
}

export default IndustryWhy4steps
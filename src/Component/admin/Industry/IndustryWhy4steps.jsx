import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { FaEdit, FaTrash } from "react-icons/fa"; // FontAwesome icons
import MultipleSelectCheckmarks from "../CheckMarkSelect";
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const IndustryWhy4steps = ({blogData,setActiveTab}) => {
  const [aboutEditorHtml, setAboutEditorHtml] = useState("");
  const [heading,setHeading]=useState("");
  const [partnersData, setPartnersData] = useState([]);
  const [SelectedPartnersData, setSelectedPartnersData] = useState([]);
  const [overviewData, setOverviewData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  useEffect(()=>{
    if(blogData){
      setHeading(blogData?.why4step?.heading||"");
      setOverviewData(blogData?.why4step?.overviewData||[])
      setSelectedPartnersData(blogData?.why4step?.partnersData||[])
    }

  },[blogData])
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
  async function fetchImage() {
    try {
      const res = await fetch("/api/industry/partner");
      const data = await res.json();
      setPartnersData(data?.data || []);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }
  useEffect(() => {
    fetchImage();
  }, []);
  const handleCategory = (category) => {
    setSelectedPartnersData(category);
  };

  const handleAdd = () => {
    if (!aboutEditorHtml.trim()) return; // Do not add empty content
    if (editIndex !== null) {
      // Update existing item
      setOverviewData((prevData) =>
        prevData.map((item, index) =>
          index === editIndex ? { ...item, content: aboutEditorHtml } : item
        )
      );
      setEditIndex(null);
    } else {
      // Add new item
      setOverviewData((prevData) => [
        ...prevData,
        { id: Date.now(), content: aboutEditorHtml },
      ]);
    }
    setAboutEditorHtml(""); // Clear editor after adding or updating
  };
  const handleEdit = (index) => {
    setEditIndex(index); // Set the index for editing
    setAboutEditorHtml(overviewData[index].content); // Load content into the editor
  };

  const handleDelete = (id) => {
    setOverviewData((prevData) => prevData.filter((item) => item.id !== id));
  };
const handleSaveData = async ()=>{
  const data={industry:blogData?._id,heading,SelectedPartnersData,overviewData};
  const res=await fetch(`/api/industry/why4step`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  })
  if(res?.ok){
    alert(blogData?.why4step?"data is updated is successfully":"data is added is successfully");
    setActiveTab("Tab3")
  }
  else{
    alert("something went wrong");
  }
   
}
console.log("blog data is here ----> ",blogData);
  return (
    <div className="bg-white p-2 px-5 grow rounded-md flex flex-col gap-3">
      <div>
        <p>Heading</p>
        <input
          type="text"
          className="w-full outline-none border py-2 rounded px-3"
          onChange={(e)=>setHeading(e.target.value)}
          value={heading}
        />
      </div>
      <div className="my-4">
        <div>
          <label
            htmlFor="cityBages"
            className="pb-2 mb-2 font-semibold text-para"
          >
            Reliable Partners :
          </label>
          <MultipleSelectCheckmarks
            packageCategories={partnersData}
            onSelectedCategoryIdsChange={handleCategory}
            selectedCategories1={SelectedPartnersData}
          />
        </div>
      </div>
      <div>
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
        
        <button className="bg-black text-white w-24 rounded py-2" onClick={handleAdd} >{editIndex!==null?"Update":"Add"}</button>
     
        <div className="mt-5">
        <p className="mt-2 font-semibold">All Points :</p>
        <ul className="space-y-3">
          {overviewData.map((item, index) => (
            <li
              key={item.id}
              className="flex justify-between items-center border rounded-md"
            >
              <p className="mx-1">{index+1}</p>
              <div
                className="flex-grow mx-4"
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
              <div className="flex gap-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleEdit(index)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

        </div>

      </div>

      <button
        type="submit"
        className="bg-black text-white w-full rounded py-2"
        onClick={handleSaveData}
      >
        Save
      </button>
    </div>
  );
};

export default IndustryWhy4steps;

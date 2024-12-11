import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import IndustrySideForm from "./IndustrySideForm";
import IndustryAbout from "./IndustryAbout";

const TableOfContent = () => {
  const [activeTitle, setActiveTitle] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (blogPackageData?.blogQuestions?.length > 0) {
      setActiveTitle(blogPackageData.blogQuestions[0]._id);
      setActiveIndex(0);
    }
  }, []);

  const handleTitleClick = (id, index) => {
    setActiveTitle(id);
    setActiveIndex(index);
  };
  // Static data for the blog package
  const blogPackageData = {
    blogQuestions: [
      {
        _id: "section1",
        title: "Why 4Steps",
        information: `Blogging is a great way to share your thoughts.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power.`,
      },
      {
        _id: "section2",
        title: "Success Stories",
        information: `Blogging helps you build an audience and share knowledge.
        
        The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power. a reflection of how society has adapted to and harnessed its power`,
      },
      {
        _id: "section3",
        title: "Solutions we deliver ",
        information:
          "The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power..",
      },
      {
        _id: "sectio43",
        title: "Our Services ",
        information:
          "The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power..",
      },
      {
        _id: "section5",
        title: "Our Product ",
        information:
          "The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power..",
      },
      {
        _id: "section6",
        title: "Our approach ",
        information:
          "The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power..",
      },
      {
        _id: "section7",
        title: "Benefits/Results",
        information:
          "The internet has come a long way since its inception, evolving from a simple research tool to an essential part of modern life. It has fundamentally changed the way we communicate, work, learn, shop, and entertain ourselves. Its evolution is not just a technological journey, but a reflection of how society has adapted to and harnessed its power..",
      },
    ],
  };

  return (
    <div className="">
      {/* Blog Description section start */}
      <div className="px-7 py-9">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr,0.8fr]">
          <div className=" px-4 py-4">
            <IndustryAbout />
            {blogPackageData?.blogQuestions?.map((item, i) => (
              <div key={i} className="pt-3" id={`${item?._id}`}>
                <h3 className="text-[25px] font-medium mb-2">{item?.title}</h3>
                <p className="text-base leading-relaxed">{item?.information}</p>
              </div>
            ))}
          </div>
          {/* Sidebar Section */}
          {/* <div className="px-6  test-base">
            <div className="sticky top-0 z-10">
              <IndustrySideForm />
              <p className="text-xl pb-6 font-semibold">Table of Content</p>
              <div className="overflow-y-scroll h-[300px]">
                <table className="min-w-full table-auto border-collapse">
                  <tbody>
                    {blogPackageData?.blogQuestions?.map((item, i) => (
                      <tr className="border-b" key={i}>
                        <td className="px-4 py-2 text-md font-medium">
                          <ScrollLink
                            to={`${item?._id}`}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                          >
                            {item?.title}
                          </ScrollLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}

          <div className="px-6">
            <div className="sticky top-0 z-10">
              <IndustrySideForm />
              <p className="text-xl pb-6 font-semibold">Table of Content</p>
              <div className="overflow-y-scroll h-[300px] relative">
                {/* Persistent Vertical Line */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-300"></div>
                {/* Active Indicator Line */}
                <div
                  className="absolute bg-blue-600 w-[2px] transition-all duration-300 ease-in-out"
                  style={{
                    height: itemRefs.current[activeIndex]?.offsetHeight || 0,
                    top: itemRefs.current[activeIndex]?.offsetTop || 0,
                    left: 0,
                  }}
                ></div>
                <ul className="space-y-4 pl-6 list-none">
                  {blogPackageData?.blogQuestions?.map((item, i) => (
                    <li
                      key={i}
                      className="relative cursor-pointer"
                      ref={(el) => (itemRefs.current[i] = el)}
                    >
                      <ScrollLink
                        to={item?._id}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => handleTitleClick(item?._id, i)}
                        className={`pl-2 ${
                          activeTitle === item?._id
                            ? "text-blue-600 font-bold"
                            : "text-gray-800"
                        }`}
                      >
                        {item?.title}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;

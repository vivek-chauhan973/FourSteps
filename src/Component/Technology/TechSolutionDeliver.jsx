import React from "react";
import Link from "next/link";
import Image from "next/image";





const TechSolutionDeliver = () => {
  const solution = {
    mainEditorHtmlDescription: `
      <p>IT solutions ScienceSoft creates help insurance companies improve overall business efficiency and introduce excellent customer experience. 
      We can engineer one or several of these targeted insurance solutions, as well as build a full-featured insurance business automation system:</p>
    `,
    solutionItem: [
      {
        path: "/image/1.png",
        link: "/solution1",
        title: "Solution Title 1",
        editorHtmlDescription: [
          { content: "Feature 1 for Solution 1" },
          { content: "Feature 2 for Solution 1" },
          { content: "Feature 3 for Solution 1" },
        ],
      },
      {
        path: "/image/ab.webp",
        link: "/solution2",
        title: "Solution Title 2",
        editorHtmlDescription: [
          { content: "Feature 1 for Solution 2" },
          { content: "Feature 2 for Solution 2" },
          { content: "Feature 3 for Solution 2" },
        ],
      },
      {
        path: "/images/solution3.jpg",
        link: "/solution3",
        title: "Solution Title 3",
        editorHtmlDescription: [
          { content: "Feature 1 for Solution 3" },
          { content: "Feature 2 for Solution 3" },
          { content: "Feature 3 for Solution 3" },
        ],
      },
    ],
  };

  return (
    <div>
      <h3>TechSolutionDeliver</h3>

      <div>
        <div>
          {/* 
          <p className=" text-sm md:text-base">
            IT solutions ScienceSoft creates help insurance companies improve
            overall business efficiency and introduce excellent customer
            experience. We can engineer one or several of these targeted
            insurance solutions, as well as build a full-featured insurance
            business automation system:
          </p> */}
          <p
            className="md:text-base py-2 text-sm"
            dangerouslySetInnerHTML={{
              __html: solution?.mainEditorHtmlDescription,
            }}
          />
        </div>
        {/* card section  */}

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:gap-7 gap-3 pt-5">
            {solution?.solutionItem.map((item, index) => (
              <div
                key={index}
                className="bg-white border p-6 rounded-lg  transform transition-transform duration-300   hover:shadow"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-4">
                    <Image
                      src={item?.path || "/image/bg.jpg"} // Assuming the filename is a path to an image
                      alt="welcome"
                      className="w-full h-32  md:h-36 md:w-36 object-cover rounded"
                      height={500}
                      width={500}
                    />
                  </div>

                  <Link
                    href={item?.link || "#"}
                    className="text-[20px] sm:text-[22px] cursor-pointer py-2 decoration-heading hover:text-heading underline font-semibold text-center text-lg sm:text-xl"
                  >
                    {item?.title}
                  </Link>
                </div>
                {/* listing ul li  */}
                <ul className="custom-list md:px-3 px-1 cursor-pointer ">
                  {item?.editorHtmlDescription?.map((descItem, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm sm:text-base  text-gray-700 transition-colors duration-200 hover:text-heading"
                      dangerouslySetInnerHTML={{
                        __html: descItem?.content, //  Render HTML content inside list item
                      }}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSolutionDeliver;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Productservice = ({ product }) => {
  // console.log("--------->here is all data present into the prduct", product);

  return (
    <>
      <div>
        <div>
          <p
            className="md:text-base py-2 text-sm"
            dangerouslySetInnerHTML={{
              __html: product?.mainEditorHtmlDescription,
            }}
          />
        </div>
        {/* Card section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-5">
            {product?.productItem?.map((item, index) => (
              <div
                key={index}
                className="bg-white border cursor-pointer p-4 rounded-lg transform transition-transform duration-300 hover:scale-100 hover:shadow-md"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-4">
                    <Image
                      src={item.icon || "/image/bg.jpg"} // Corrected to `item.icon`
                      alt={item.title} // Use the service title for accessibility
                      className="w-full h-32 md:h-36 md:w-36 object-cover rounded"
                      height={500}
                      width={500}
                    />
                  </div>

                  <Link
                    href="#"
                    className="text-[22px] py-2 hover:text-primary decoration-primary underline font-semibold text-center"
                  >
                    {item?.title}
                  </Link>
                </div>

                {/* Rendering list items */}
                <ul className="custom-list pl-5">
                  {item?.editorHtmlDescription.map((listItem, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="py-[1px] md:text-base text-sm hover:text-primary"
                      dangerouslySetInnerHTML={{ __html: listItem.content }}
                    ></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productservice;

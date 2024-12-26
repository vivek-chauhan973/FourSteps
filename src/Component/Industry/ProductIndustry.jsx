import Image from "next/image";
import React from "react";

const ProductIndustry = ({ products }) => {
  const services = [
    {
      title: "Underwriting ",
      icon: "/image/1.png",
      listItems: [
        "Insurance application processing.",
        "Risk assessment.",
        "Actuarial and pricing.",
        "Compliance management.",
      ],
    },
    {
      title: "Billing",
      icon: "/image/1.png",
      listItems: [
        "Personalized premium calculation.",
        "Automated invoicing.",
        "E-signature workflow.",
        "Payment processing.",
      ],
    },
    {
      title: "Hubspot",
      icon: "/image/1.png",
      listItems: [
        "Personalized premium calculation.",
        "Automated invoicing.",
        "E-signature workflow.",
        "Payment processing.",
      ],
    },
    {
      title: "Zoho",
      icon: "/image/1.png",
      listItems: [
        "Personalized premium calculation.",
        "Automated invoicing.",
        "E-signature workflow.",
        "Payment processing.",
      ],
    },
    {
      title: "Content management system",
      icon: "/image/1.png",
      listItems: [
        "Personalized premium calculation.",
        "Automated invoicing.",
        "E-signature workflow.",
        "Payment processing.",
      ],
    },
    {
      title: "CRM",
      icon: "/image/1.png",
      listItems: [
        "Personalized premium calculation.",
        "Automated invoicing.",
        "E-signature workflow.",
        "Payment processing.",
      ],
    },
  ];
  // console.log("here is all the products data ", products);

  return (
    <>
      <div>
        <div>
          {/* <h3 className="font-semibold text-primary text-lg md:text-3xl pb-5">
            Here is Render Our Product with link and to navigation
          </h3> */}
          <p
            className="md:text-base py-2 text-sm"
            dangerouslySetInnerHTML={{
              __html: products?.mainEditorHtmlDescription,
            }}
          >
            {/* IT solutions ScienceSoft creates help insurance companies improve
            overall business efficiency and introduce excellent customer
            experience. We can engineer one or several of these targeted
            insurance solutions, as well as build a full-featured insurance
            business automation system: */}
          </p>
        </div>
        {/* card section  */}

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   gap-8 pt-5">
            {products?.productItem?.map((item, index) => (
              <div
                key={index}
                className="bg-white border cursor-pointer p-4 rounded-lg transform transition-transform duration-300 hover:scale-100 hover:shadow-md"
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

                  <h2 className="text-[22px]  py-2 hover:text-primary decoration-primary underline font-semibold text-center">
                    {item?.title}
                  </h2>
                </div>

                <ul className="custom-list pl-5 ">
                  {item?.editorHtmlDescription?.map((item, itemIndex) => (
                    <li
                      className=" py-[1px] md:text-base text-sm hover:text-primary"
                      key={itemIndex}
                      dangerouslySetInnerHTML={{ __html: item?.content }}
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

export default ProductIndustry;

// <div className="mb-4">
//             <Image
//               src={item?.path || "/image/bg.jpg"} // Assuming the filename is a path to an image
//               alt="welcome"
//               className="w-full h-32  md:h-36 md:w-36 object-cover rounded"
//               height={500}
//               width={500}
//             />
//           </div>

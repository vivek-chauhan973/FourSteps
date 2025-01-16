import Image from "next/image";
import Link from "next/link";
import React from "react";

const TechProducts = () => {
  const services = [
    {
      title: "Underwriting",
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
  ];

  return (
    <>
      <div>
        <div>
          <p className="md:text-base py-2 text-sm">
            IT solutions ScienceSoft creates help insurance companies improve
            overall business efficiency and introduce excellent customer
            experience. We can engineer one or several of these targeted
            insurance solutions, as well as build a full-featured insurance
            business automation system:
          </p>
        </div>

        {/* <div>
          <p
            className="md:text-base py-2 text-sm"
            dangerouslySetInnerHTML={{
              __html: products?.mainEditorHtmlDescription,
            }}
          />
        </div> */}
        {/* Card section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-5">
            {services?.map((item, index) => (
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
                    {item.title}
                  </Link>
                </div>

                {/* Rendering list items */}
                <ul className="custom-list pl-5">
                  {item.listItems.map((listItem, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="py-[1px] md:text-base text-sm hover:text-primary"
                    >
                      {listItem}
                    </li>
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

export default TechProducts;

import Image from "next/image";
import React from "react";

const ProductIndustry = () => {
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

  return (
    <>
      <div>
        <div>
          <h3 className="font-semibold text-primary text-3xl pb-5">
            Here is Render Our Product with link and to navigation
          </h3>
          <p>
            IT solutions ScienceSoft creates help insurance companies improve
            overall business{" "}
            <span className=" underline">
              efficiency and introduce excellent
            </span>{" "}
            customer experience. We can engineer one or several of these
            targeted insurance solutions, as well as build a full-featured
            insurance business automation system:
          </p>
        </div>
        {/* card section  */}

        <div>
          <div className="grid grid-cols-2 gap-8 pt-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border cursor-pointer p-4 rounded-lg transform transition-transform duration-300 hover:scale-100 hover:shadow-md"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-4">
                    <Image
                      src={service.icon}
                      alt={`${service.title} Icon`}
                      className="w-20 h-20"
                      height={200}
                      width={200}
                    />
                  </div>
                  <h2 className="text-[22px]  py-2 hover:text-primary decoration-primary underline font-semibold text-center">
                    {service.title}
                  </h2>
                </div>

                <ul className="custom-list pl-5 space-y-1">
                  {service.listItems.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
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

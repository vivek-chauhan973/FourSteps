import React from "react";
import { FaMapMarkedAlt, FaWifi, FaConciergeBell } from "react-icons/fa"; // Importing icons from react-icons
const features = [
  {
    id: 1,
    title: "Best Travel Guide",
    description:
      "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet. Lorem ipsum dolor sit amet Ut blandit eu leo.",
    Icon: FaMapMarkedAlt, // Using the imported icon
  },
  {
    id: 2,
    title: "Free Wifi",
    description:
      "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet. Lorem ipsum dolor sit amet Ut blandit eu leo.",
    Icon: FaWifi, // Using the imported icon
  },
  {
    id: 3,
    title: "Best Service",
    description:
      "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet. Lorem ipsum dolor sit amet Ut blandit eu leo.",
    Icon: FaConciergeBell, // Using the imported icon
  },
];
const Travel = () => {
  return (
    <div>
      <div className="font-sans container">
        {/* hero section */}
        <div className="relative  p-8 md:p-16 lg:p-24">
          <div
            className="absolute inset-0 w-full h-full bg-cover "
            style={{ backgroundImage: "url('/image/fbg.jpg')" }}
          ></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-sm font-semibold  text-white">
              QUALITY WITH INTEGRITY
            </h2>
            <h1 className="text-4xl md:text-5xl text-white font-bold mt-2">
              Unforgettable Experiences in
              <span className="text-primary"> Travel & Hospitality</span>
            </h1>
            <p className="mt-4 text-white text-lg ">
              Explore world-class solutions tailored for the travel industry
            </p>
            <a
              href="#"
              className="inline-block mt-6 bg-secondary text-white hover:bg-secondary/80 px-6 py-3 rounded-lg"
            >
              Discover More
            </a>
          </div>
        </div>

        {/* Industry-Specific Heading & Tagline Solution  */}
        <div className="max-w-4xl text-center mx-auto px-4 mt-10 py-10">
          <h2 className="text-xl text-center font-bold text-primary mb-4">
            ABOUT US
          </h2>
          <h3 className="text-2xl font-semibold text-secondary mb-2">
            Travel & Hospitality Solutions
          </h3>
          <p className=" mb-4">
            At <span className=" font-semibold">Four Steps Digital</span>, we
            believe that travel is not just about reaching a destination; it's
            about the experiences that shape our lives. With a passion for
            creating unforgettable journeys, our dedicated team is committed to
            curating unique travel experiences that connect you with the heart
            of each destination. From breathtaking landscapes to vibrant
            cultures, we aim to immerse you in the beauty and diversity of the
            world. Our expertise in the travel and hospitality industry allows
            us to offer tailored solutions that meet your every need, ensuring
            that your journey is seamless and enjoyable. Discover new horizons
            and let us guide you on an adventure of a lifetime!
          </p>
          <button className="font-semibold text-xl px-4 py-2 border-b-2 border-primary rounded-lg hover:text-orange-500">
            Read More
          </button>
        </div>
        <div className=" mt-10">
          <h2 className="text-2xl text-primary py-10 font-semibold text-center">
            Industry Overview
          </h2>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const IconComponent = feature.Icon; // Get the icon component

                return (
                  <div
                    key={feature.id}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-orange-500">
                        <IconComponent className="h-6 w-6" />{" "}
                        {/* Use the icon component */}
                      </div>
                      <h2 className="text-2xl font-bold ml-2">
                        {feature.title}
                      </h2>
                    </div>
                    <p className="text-gray-700">{feature.description}</p>
                    <a
                      href="#"
                      className="text-orange-500 hover:underline mt-4 block"
                    >
                      Read More
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Industry-Specific Solutions */}
        <section className="py-16 px-4 bg-gray-100">
          <h2 className="text-2xl font-semibold text-center">
            Travel & Hospitality Solutions
          </h2>
          <ul className="mt-8 space-y-4 max-w-3xl mx-auto">
            <li>Comprehensive Booking & Reservation Management</li>
            <li>Personalized Guest Services and Loyalty Programs</li>
            <li>Advanced Analytics for Customer Insights</li>
          </ul>
        </section>
        {/* Key Features for the Industry */}
        <section className="py-16 px-4 bg-white">
          <h2 className="text-2xl font-semibold text-center">Key Features</h2>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <li className="p-4 bg-gray-100 rounded-lg">24/7 Online Booking</li>
            <li className="p-4 bg-gray-100 rounded-lg">
              Guest Experience Optimization
            </li>
            <li className="p-4 bg-gray-100 rounded-lg">
              Real-Time Data Analysis
            </li>
          </ul>
        </section>
        {/* Success Stories / Case Studies */}
        <section className="py-16 px-4 bg-gray-100">
          <h2 className="text-2xl font-semibold text-center">
            Success Stories
          </h2>
          <div className="mt-8 space-y-6 max-w-3xl mx-auto">
            <article className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold">Increased Bookings by 40%</h3>
              <p className="mt-2">
                Our platform boosted bookings for client Y by 40%, enhancing
                revenue and customer satisfaction.
              </p>
            </article>
          </div>
        </section>
        {/* Client Logos & Testimonials */}
        <section className="py-16 px-4 bg-white">
          <h2 className="text-2xl font-semibold text-center">
            Client Testimonials
          </h2>
          <div className="flex flex-wrap justify-center mt-8 gap-8">
            <img src="/hotel-logo1.png" alt="Client 1" className="w-24 h-24" />
            <img src="/hotel-logo2.png" alt="Client 2" className="w-24 h-24" />
          </div>
        </section>
        {/* Custom Solutions */}
        <section className="py-16 px-4 bg-gray-100">
          <h2 className="text-2xl font-semibold text-center">
            Custom Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            We offer custom solutions for unique travel and hospitality needs.
            Partner with us to tailor services to your brand and customers.
          </p>
        </section>
        {/* Call to Action */}
        <section className="py-16 px-4 bg-indigo-600 text-white text-center">
          <h2 className="text-3xl font-bold">Talk to a Hospitality Expert</h2>
          <button className="mt-6 px-6 py-3 bg-orange-500 rounded-full font-semibold hover:bg-orange-600">
            Request a Demo
          </button>
        </section>
        {/* Resource Section */}
        <section className="py-16 px-4 bg-white">
          <h2 className="text-2xl font-semibold text-center">
            Industry Resources
          </h2>
          <ul className="mt-8 space-y-4 max-w-2xl mx-auto">
            <li>
              <a
                href="/resource1.pdf"
                className="text-blue-500 hover:underline"
              >
                Hospitality Market Insights
              </a>
            </li>
            <li>
              <a href="/blog-post" className="text-blue-500 hover:underline">
                Customer Retention in Travel & Hospitality
              </a>
            </li>
          </ul>
        </section>
        {/* FAQs */}
        <section className="py-16 px-4 bg-gray-100">
          <h2 className="text-2xl font-semibold text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 max-w-2xl mx-auto space-y-6">
            <article>
              <h3 className="font-bold">
                Does this solution support multiple properties?
              </h3>
              <p className="mt-2">
                Yes, our platform supports multi-property management, enabling
                you to handle bookings across multiple locations.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Travel;

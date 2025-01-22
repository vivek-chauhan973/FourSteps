import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaRegCommentDots,
} from "react-icons/fa";

const ContactUs = () => {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.910862140821!2d77.51411137505966!3d28.48223097574713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb07a0270cf1%3A0xef3dde7c7ebbe43e!2sFour%20Steps%20Digital%20Consulting%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1723887840924!5m2!1sen!2sin`;

  return (
    <div className=" bg-white">
      <div className=" container-wrapper">
        <div className=" mx-auto  py-10">
          <h4 className="text-[22px] md:text-3xl font-semibold text-heading mb-6 text-center">
            Get in Touch (Contact Us)
          </h4>
          <div className="overflow-hidden">
            <div className="grid  grid-cols-1 md:grid-cols-2 md:gap-5">
              {/* Contact Information */}
              <div className="p-6  md:p-8">
                <p className="text-gray-800 text-base md:text-lg mb-4 leading-relaxed">
                  T-3 A-1113, Nx Byte, Nx one plot No. - 17, sector - Tech zone
                  IV, Greater Noida West
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div>
                    <p className="text-gray-800 font-semibold">Email Us:</p>
                    <a
                      href="mailto:info@4stepsdigital.com"
                      className=" hover:underline text-blue-800 transition"
                    >
                      info@4stepsdigital.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">Call Us:</p>
                    <a
                      href="tel:+919065879989"
                      className=" hover:underline text-blue-800 transition"
                    >
                      +91-9065879989
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <iframe
                    className="w-full h-64 rounded-lg"
                    src={mapSrc}
                    allowFullScreen
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="py-6 px-4 md:p-8">
                <form className="space-y-6">
                  <div className="relative">
                    <FaUser className="absolute left-3 top-4 text-heading" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-sm"
                    />
                  </div>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-4 text-heading" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-sm"
                    />
                  </div>
                  <div className="relative">
                    <FaPhoneAlt className="absolute left-3 top-4 text-heading" />
                    <input
                      type="tel"
                      name="number"
                      placeholder="Enter Your Phone Number"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-sm"
                    />
                  </div>
                  <div className="relative">
                    <FaRegCommentDots className="absolute left-3 top-4 text-heading" />
                    <textarea
                      name="message"
                      placeholder="Your Message..."
                      rows="4"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-sm resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 text-white bg-heading rounded-lg shadow-md hover:scale-95 transform transition-all"
                  >
                    Send Message ✉
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

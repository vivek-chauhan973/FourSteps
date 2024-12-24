// import ContactUs from "@/Component/Contact/ContactUs";
// import { Footer } from "@/Component/Footer/Footer";
// import React from "react";

// const Contact = () => {
//   const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.910862140821!2d77.51411137505966!3d28.48223097574713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb07a0270cf1%3A0xef3dde7c7ebbe43e!2sFour%20Steps%20Digital%20Consulting%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1723887840924!5m2!1sen!2sin`;

//   return (
//     <div className="container">
//       <div className="w-100vw  h-auto">
//         <div
//           className="relative w-full h-80 sm:h-96 lg:h-[32rem] flex items-center justify-center bg-cover object-cover text-white"
//           style={{
//             backgroundImage:
//               'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTS6Cbkx9E9yIP8ihE6TSSoIZ0jPavCEVnoA&s")',
//           }} // Update with your image path
//         >
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="relative z-10 text-center px-4">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
//               Welcome To Our Contact Page
//             </h1>
//             <p className="text-sm sm:text-lg">For explorers everywhere.</p>
//           </div>
//         </div>
//         <div className="md:p-10 p-5">
//           <h3 className="md:text-4xl text-2xl font-semibold text-center mb-5">
//             Get In <span className="text-gradient">Touch</span>
//           </h3>
//           <p className=" leading-6 md:text-base text-sm text-center">
//             We will contact again after receive your request in 24h
//           </p>
//           <div className="md:flex items-center justify-around bg-white md:shadow-md md:rounded-full xl:py-10 md:py-3 px-6 xl:mt-16 md:mt-14  mt-5 md:border">
//             <div className="flex items-center space-x-2">
//               <img
//                 src="/path/to/email-icon.png"
//                 alt="Email Icon"
//                 className="w-6 h-6"
//               />
//               <span className="text-base font-medium">
//                 info@4stepsdigital.com
//               </span>
//             </div>
//             <div className="md:border-l h-8 mx-4"></div>
//             <div className="flex items-center space-x-2">
//               <img
//                 src="/path/to/location-icon.png"
//                 alt="Location Icon"
//                 className="w-6 h-6"
//               />
//               <span className="text-base font-medium ">
//                 T-3 A-1113, NX Byte, NX One Plot No. - 17, <br /> Sector - Tech
//                 Zone IV, Greater Noida West, 201310
//               </span>
//             </div>
//             <div className="md:border-l h-8 mx-4"></div>
//             <div className="flex items-center space-x-2">
//               <img
//                 src="/path/to/phone-icon.png"
//                 alt="Phone Icon"
//                 className="w-6 h-6"
//               />
//               <span className="text-base font-medium">+91-9065879989</span>
//             </div>
//           </div>
//         </div>
//         <div className=" md:p-10 p-5 md:gap-10">
//           <div className="rounded-md w-full xl:h-[500px] md:h-[400px] h-[250px]">
//             <iframe
//               className="rounded-md object-cover"
//               src={mapSrc}
//               width="100%"
//               height="100%"
//               allowFullScreen // Correct case here
//               loading="lazy"
//             ></iframe>
//           </div>

//           <div className="md:mt-10 mt-7 bg-zinc-100 rounded-md shadow-md grid place-items-center">
//             <div className="xl:w-2/3 w-full  xl:py-16 xl:p-0 md:p-7 p-5">
//               <h3 className="xl:text-2xl md:text-xl text-lg capitalize text-gray-800 font-bold md:mb-4 mb-2 text-center">
//                 Feel Free To Contact Us
//               </h3>
//               <form action="" method="post">
//                 <div className="md:grid grid-cols-2 gap-5">
//                   <div className="md:py-3 py-2">
//                     <div>
//                       {/* <label htmlFor="name" class="leading-7 py-4 text-base font-medium text-gray-900">Your Name</label> */}
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         required
//                         placeholder="Enter Your Name"
//                         className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out "
//                       />
//                     </div>
//                   </div>
//                   <div className="md:py-3 py-2">
//                     <div>
//                       {/* <label htmlFor="email" class="leading-7 py-4 text-base font-medium text-gray-900">Your Email</label> */}
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         placeholder="Enter Your Email"
//                         className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out "
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="md:grid grid-cols-2 gap-5">
//                   <div className="py-3">
//                     <div>
//                       {/* <label htmlFor="number" class="leading-7 py-4 text-base font-medium text-gray-900">Phone Number</label> */}
//                       <input
//                         type="number"
//                         id="number"
//                         name="number"
//                         required
//                         placeholder="Enter Phone Number"
//                         className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out "
//                       />
//                     </div>
//                   </div>
//                   <div className="md:py-3 py-2">
//                     <div>
//                       {/* <label htmlFor="text" class="leading-7 py-4 text-base font-medium text-gray-900">Your website</label> */}
//                       <input
//                         type="text"
//                         id="text"
//                         name="text"
//                         placeholder="Your website (optional)"
//                         className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out "
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="md:py-3 py-2">
//                   <div>
//                     {/* <label htmlFor="services" className="leading-7 py-4 text-base font-medium text-gray-900">Service</label> */}
//                     <select
//                       id="services"
//                       name="services"
//                       className="w-full bg-white rounded-full border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2.5 px-4 leading-8 transition-colors duration-200 ease-in-out"
//                     >
//                       <option value="" disabled selected>
//                         Select Your service
//                       </option>
//                       <option value="Website Development">
//                         Website Development
//                       </option>
//                       <option value="Zoho Services">Zoho Services</option>
//                       <option value="Hubsport Services">
//                         Hubsport Services
//                       </option>
//                       <option value="Digital Marketing">
//                         Digital Marketing
//                       </option>
//                       <option value="Bitrix24 Service">Bitrix24 Service</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="md:py-3 py-2">
//                   <div>
//                     {/* <label htmlFor="message" class="leading-7 py-4 text-base font-medium text-gray-900">Your Message</label> */}
//                     <textarea
//                       id="message"
//                       name="message"
//                       placeholder="Your Message....."
//                       className="w-full bg-white rounded-lg border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
//                     ></textarea>
//                   </div>
//                 </div>
//                 <div className="py-2 grid place-items-center">
//                   <button
//                     type="submit"
//                     class=" text-white bg-[#0170B9] hover:bg-[#4d7dca] py-3 w-full text-center rounded text-base font-medium shadow-lg"
//                   >
//                     Send Message ✉
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:h-[300px] h-[200px] grid place-items-center">
//           <div className="grid place-items-center">
//             <h1 className="text-center text-md md:text-2xl lg:text-4xl tracking-wide font-semibold ">
//               Access your business potentials
//               <br /> today & find opportunity for
//               <br />
//               <span className="text-gradient">bigger success</span>
//             </h1>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import React from "react";

// const Contact = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid lg:grid-cols-2 gap-6">
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Let's discuss your needs!</h2>
//           <p className="mb-4">
//             Do you have a question for our specialists, want to discuss your
//             project, or learn more about our expertise? Feel free to send your
//             request using the form below!
//           </p>
//           <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="description"
//               >
//                 Kindly describe your request
//               </label>
//               <textarea
//                 id="description"
//                 rows="4"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               ></textarea>
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="file"
//               >
//                 Drag and drop or browse to upload your file(s)
//               </label>
//               <input
//                 type="file"
//                 id="file"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4 flex items-center">
//               <input type="checkbox" id="nda" className="mr-2 leading-tight" />
//               <label
//                 className="block text-gray-700 text-sm font-bold"
//                 htmlFor="nda"
//               >
//                 I'd like to sign an NDA
//               </label>
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="name"
//               >
//                 Full name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="company"
//               >
//                 Company
//               </label>
//               <input
//                 type="text"
//                 id="company"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="email"
//               >
//                 Work email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="phone"
//               >
//                 Phone
//               </label>
//               <div className="flex">
//                 <select className="shadow appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
//                   <option>+91</option>
//                   {/* Add more country codes as needed */}
//                 </select>
//                 <input
//                   type="tel"
//                   id="phone"
//                   className="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="00000 00000"
//                 />
//               </div>
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//         <div>
//           <h3 className="text-xl font-bold mb-4">Our contacts</h3>
//           <p className="mb-2">📞 +12143066837</p>
//           <p className="mb-2">✉️ contact@scnsoft.com</p>
//           <p className="mb-4">WhatsApp</p>
//           <h3 className="text-xl font-bold mb-4">For journalists</h3>
//           <p className="mb-4">📰 Get unique insights</p>
//           <h3 className="text-xl font-bold mb-4">Join our team</h3>
//           <p className="mb-4">📄 Upload your CV</p>
//           <h3 className="text-xl font-bold mb-4">Social media</h3>
//           <div className="flex space-x-4">
//             <a href="#" className="text-blue-600">
//               LinkedIn
//             </a>
//             <a href="#" className="text-red-600">
//               YouTube
//             </a>
//             <a href="#" className="text-blue-400">
//               Twitter
//             </a>
//             <a href="#" className="text-blue-600">
//               Facebook
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// ./src/components/ContactForm.js
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faUser,
  faLeaf,
  faPhone,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="container mx-auto p-4 bg-[#d6efff]">
      <div className="grid md:grid-cols-[0.5fr_1fr_0.5fr] gap-4">
        <div className="space-y-8 px-5 pt-10">
          {/* Section 1 */}
          <div className="flex items-center  space-x-4">
            <FontAwesomeIcon icon={faPen} className="font" />
            <div>
              <h3 className="text-[15px] font-semibold">Quick response</h3>
              <p className="text-sm text-gray-700">
                We usually reply within 1 hour on business days to sign an NDA
                and arrange a discussion.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faUser} className="" />
            <div>
              <h3 className="text-[15px] font-semibold">
                Personalized approach
              </h3>
              <p className="text-sm text-gray-700">
                You will engage directly with specialists who are experienced in
                your domain.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faLeaf} className="text-2xl" />
            <div>
              <h3 className="text-[15px] font-semibold">No pressure</h3>
              <p className="text-sm text-gray-700">
                We're here to explore your needs and provide guidance — whenever
                you're ready to move forward.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Let's discuss your needs!
            </h2>
            <p className="mb-4">
              Do you have a question for our specialists, want to discuss your
              project, or learn more about our expertise? Feel free to send your
              request using the form below!
            </p>
            <form className="  rounded  pb-8 mb-4">
              <div className="mb-4">
                <textarea
                  placeholder="Kindly describe your request"
                  id="description"
                  rows="4"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-1 focus:outline-blue-800 focus:shadow"
                ></textarea>
              </div>

              <div className=" grid grid-cols-2 gap-5">
                <div className="mb-4">
                  <input
                    placeholder="Full Name "
                    type="text"
                    id="name"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-1 focus:outline-blue-800 focus:shadow"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Company"
                    id="company"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-1 focus:outline-blue-800 focus:shadow"
                  />
                </div>
                <div className="mb-4">
                  <input
                    placeholder=" Work Email"
                    type="email"
                    id="email"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-1 focus:outline-blue-800 focus:shadow"
                  />
                </div>
                <div className="mb-4">
                  <div className="flex">
                    <select className=" appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      <option>+91</option>
                      <option>+92</option>
                      {/* Add more country codes as needed */}
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-1 focus:outline-blue-800 focus:shadow"
                      placeholder="00000 00000"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center  justify-center">
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" ">
          <div className=" px-5 pt-10">
            <h3 className="text-base font-semibold mb-4">Our contacts</h3>

            <div className=" cursor-pointer">
              <p className="mb-1 text-blue-500">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span className=" text-sm text-gray-500 hover:underline hover:text-blue-800">
                  +12143066837
                </span>
              </p>
              <p className="mb-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-1 text-blue-500"
                />

                <span className=" text-sm text-gray-500 hover:underline hover:text-blue-800">
                  contact@scnsoft.com
                </span>
              </p>
              <p className="mb-4 ">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="mr-1 text-green-500"
                />
                <span className=" text-sm text-gray-500 hover:underline hover:text-blue-800">
                  WhatsApp
                </span>
              </p>
            </div>

            <h3 className="text-base font-semibold mb-4">Join our team</h3>
            <p className="mb-4 cursor-pointer">
              <FontAwesomeIcon icon={faFile} className="mr-1 text-blue-500" />

              <span className=" text-sm text-gray-500 hover:underline hover:text-blue-800">
                Upload your CV
              </span>
            </p>
            <h3 className="text-base font-semibold mb-4">Social media</h3>
            <div className="flex">
              <a href="#" className="text-blue-600">
                LinkedIn
              </a>
              <a href="#" className="text-red-600">
                YouTube
              </a>
              <a href="#" className="text-blue-400">
                Twitter
              </a>
              <a href="#" className="text-blue-600">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

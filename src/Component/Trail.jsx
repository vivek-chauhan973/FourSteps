import React from "react";

const Trail = () => {
  return (
    // <footer className="bg-gray-900 text-white py-10">
    //   <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
    //     {/* Logo Section */}
    //     <div className="flex flex-col">
    //       <h2 className="text-xl font-bold mb-4">Logo</h2>
    //       <p>Your company logo or description here.</p>
    //     </div>

    //     {/* Quick Links */}
    //     <div>
    //       <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
    //       <ul className="space-y-2">
    //         <li>
    //           <a href="/" className="hover:text-gray-300">
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/about" className="hover:text-gray-300">
    //             About Us
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/services" className="hover:text-gray-300">
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/contact" className="hover:text-gray-300">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Resources */}
    //     <div>
    //       <h3 className="text-lg font-semibold mb-4">Resources</h3>
    //       <ul className="space-y-2">
    //         <li>
    //           <a href="/blog" className="hover:text-gray-300">
    //             Blog
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/faq" className="hover:text-gray-300">
    //             FAQs
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/support" className="hover:text-gray-300">
    //             Support
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/terms" className="hover:text-gray-300">
    //             Terms of Service
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Social Media */}
    //     <div>
    //       <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
    //       <ul className="flex space-x-4">
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Facebook
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Twitter
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Instagram
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             LinkedIn
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Lower Section */}
    //   <div className="mt-10 border-t border-gray-700 pt-6 text-center">
    //     <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
    //   </div>
    // </footer>
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 px-4">
        {/* Logo Section */}
        <div className="col-span-2">
          <h2 className="text-xl font-bold mb-4">Logo</h2>
          <p>Add your logo or branding description here.</p>
          <p className=" md:text-sm text-[13px]">
            Four Steps Digital Consulting(OPC) Pvt Ltd, an Indian digital
            consulting agency, prioritizes honesty, hard work, and results for
            small to medium-sized businesses. Our focus: Transforming Businesses
            Into Digitally-Driven Organizations with expert teams optimizing
            digital presence and efficiency.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Link 3
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Link 4
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Resource 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Resource 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Resource 3
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Resource 4
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 px-4">
        {/* partners 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Partner1 </h3>
          <p>Information about your website.</p>
        </div>
        {/* partners2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Partners 2</h3>
          <p>Details about your services.</p>
        </div>

        {/* Website */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services </h3>
          <p>Information about your website.</p>
          <p>Information about your website.</p>
          <p>Information about your website.</p>
          <p>Information about your website.</p>
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Solution</h3>
          <p>Provide solutions offered.</p>
          <p>Provide solutions offered.</p>
          <p>Provide solutions offered.</p>
          <p>Provide solutions offered.</p>
          <p>Provide solutions offered.</p>
        </div>

        {/* Industry */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Industry</h3>
          <p>Details about industries you cater </p>
          <p>Details about industries you cater </p>
          <p>Details about industries you cater </p>
          <p>Details about industries you cater </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 pl-2">
        <p>
          © {new Date().getFullYear()}
          Consulting(OPC) Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
    // <footer className="bg-gray-800 text-white">
    //   {/* Top Row: Logos */}
    //   <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4">
    //     <div className="flex justify-center items-center border border-gray-700 h-24">
    //       <p className="text-center">Logo-1</p>
    //     </div>
    //     <div className="flex justify-center items-center border border-gray-700 h-24">
    //       <p className="text-center">Logo-2</p>
    //     </div>
    //     <div className="flex justify-center items-center border border-gray-700 h-24">
    //       <p className="text-center">Logo-3</p>
    //     </div>
    //     <div className="flex justify-center items-center border border-gray-700 h-24">
    //       <p className="text-center">Logo-4</p>
    //     </div>
    //   </div>

    //   {/* Middle Row: Quick Links, Resources, Social Media */}
    //   <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-4 px-4">
    //     <div className="flex flex-col">
    //       <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
    //       <ul className="space-y-2">
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             About Us
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="flex flex-col">
    //       <h3 className="text-lg font-semibold mb-4">Resources</h3>
    //       <ul className="space-y-2">
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Blog
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             FAQs
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Support
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Terms of Service
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="flex flex-col">
    //       <h3 className="text-lg font-semibold mb-4">Social Media</h3>
    //       <ul className="space-y-2">
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Facebook
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Twitter
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             Instagram
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-gray-300">
    //             LinkedIn
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Bottom Row: Our Service, Website, Solution, Industry */}
    //   <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4">
    //     <div className="flex flex-col">
    //       <h3 className="text-lg font-semibold mb-4">Our Service</h3>
    //       <p>Details about your services.</p>
    //     </div>
    //     <div className="flex flex-col">
    //       <h3 className="text-lg font-semibold mb-4">Website</h3>
    //       <p>Information about your website.</p>
    //     </div>
    //     <div className="flex flex-col">
    //       <h3 className="text-lg font-semibold mb-4">Solution</h3>
    //       <p>Provide solutions offered.</p>
    //     </div>
    //     <div className="flex flex-col">
    //       <h3 className="text-lg font-semibold mb-4">Industry</h3>
    //       <p>Details about industries you cater to.</p>
    //     </div>
    //   </div>

    //   {/* Footer Bottom Section */}
    //   <div className="mt-4 border-t border-gray-700 py-4 text-center">
    //     <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
    //   </div>
    // </footer>
  );
};

export default Trail;

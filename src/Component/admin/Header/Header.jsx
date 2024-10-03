// import React from 'react';

// const Header = () => {
//   return (
//     <header className="fixed top-0  left-0 w-full bg-gray-800 text-white p-4 z-50 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">Admin Panel</h1>

//         {/* You can add additional header elements here, like a user profile dropdown */}
//         <div>
//           <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">Profile</button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { FaBars } from "react-icons/fa"; // Importing FontAwesome for the menu icon

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger menu icon to toggle sidebar */}
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          <FaBars className="text-2xl" /> {/* Using a FontAwesome bars icon */}
        </button>

        <h1 className="text-xl font-bold">Admin Panel</h1>

        {/* You can add additional header elements here, like user profile */}
        <div>
          <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
            Profile
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

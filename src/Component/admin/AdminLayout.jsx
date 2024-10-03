// import React from 'react';
// import Sidebar from './Sidebar';
// // Import the Sidebar component

// const AdminLayout = ({ children }) => {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content */}
//       <div className="flex-1 p-4">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;

import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar";

// Import the Header component

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 ml-64">
        {" "}
        {/* Adds margin-left for the sidebar */}
        <Header /> {/* Fixed Header */}
        {/* Main content under the header */}
        <main className="pt-16 p-4">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;

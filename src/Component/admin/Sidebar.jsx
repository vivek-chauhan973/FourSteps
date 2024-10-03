import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen  bg-gray-800 text-white">
      <ul className="space-y-4 p-4">
        <li>
          <a href="/admin" className="hover:bg-gray-700 p-2 rounded">Dashboard</a>
        </li>
        <li>
          <a href="/admin/users" className="hover:bg-gray-700 p-2 rounded">Users</a>
        </li>
        <li>
          <a href="/admin/settings" className="hover:bg-gray-700 p-2 rounded">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

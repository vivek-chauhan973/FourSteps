
import React from "react";

const Trail = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex flex-grow">
          {/* Sidebar */}
          <aside className="w-1/4 bg-gray-200 p-4 hidden md:block">
            <div className="p-4 bg-white rounded shadow mb-4">
              <div className="h-16 w-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h2 className="text-center font-semibold"></h2>
              <p className="text-center text-sm text-gray-600"></p>
            </div>
            <ul className="space-y-2 list-none">
              <li className="bg-white p-2 rounded shadow"></li>
              <li className="bg-white p-2 rounded shadow"></li>
              <li className="bg-white p-2 rounded shadow"></li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-grow p-4">
            <div className="space-y-4">
              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-semibold text-lg"></h3>
                <p className="text-sm text-gray-600"></p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-semibold text-lg"></h3>
                <p className="text-sm text-gray-600"></p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-semibold text-lg"></h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Trail;

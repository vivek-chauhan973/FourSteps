import React, { useState, useEffect } from "react";

const Trail = () => {
  return (
    <div className="container">
      <h1 className="text-center">detail page of a Resource </h1>
      <div className="bg-gray-200  flex justify-center items-center">
        {/* Main container */}
        <div className="container mx-auto p-5">
          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Main Content Area */}
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
              {/* Header Section */}
              <h3 className="text-sm text-orange-600 font-semibold mb-2">
                Detail Page
              </h3>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Webinar of Developer Associate Training (Zoho)
              </h1>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                If you want to contribute to building a better business world
                through developing enterprise automation projects, the UiPath
                Automation Developer Associate Training plan is for you!
              </p>

              {/* Status Section */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Image Section */}
            <div className="hidden md:block bg-white p-2 rounded-lg shadow-lg">
              <img
                className="rounded-md w-full h-auto object-cover"
                src="https://via.placeholder.com/400x300"
                alt="Automation Developer Associate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trail;

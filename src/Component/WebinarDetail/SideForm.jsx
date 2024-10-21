import React, { useState } from "react";

const SideForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="  items-center justify-center ">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full ">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Register for a free account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded bg-orange-500 text-white font-bold"
          >
            Register
          </button>
        </form>
        <p className="text-white mt-4">
          Already have an account?{" "}
          <a href="#" className="text-orange-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SideForm;

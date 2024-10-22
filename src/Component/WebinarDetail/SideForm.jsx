
import React, { useState } from "react";

const SideForm = () => {
  const [formData, setFormData] = useState({
    clientType: "Indian",
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-sm mx-auto  top-10 sticky   bg-white p-4 rounded-lg border-solid border-2 border-[#163383]">
      <h2 className="text-2xl text-center py-3 font-bold">Enquiry Now</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <div className="flex space-x-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
            rows={5}
          />
        </div>
        <div className=" pb-2">
          <button
            type="submit"
            className="w-full  bg-[#163383] text-white py-2 px-4 rounded-full hover:bg-[#436ad3]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SideForm;

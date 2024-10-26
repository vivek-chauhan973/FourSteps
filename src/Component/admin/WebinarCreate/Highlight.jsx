// import React from "react";

// const Highlight = () => {
//   return (
//     <div>
//       <h2>highlight section </h2>
//     </div>
//   );
// };

// export default Highlight;
import React from "react";

const Highlight = ({ webinarData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Webinar Highlight</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="highlight" className="block">
            Highlight
          </label>
          <input
            type="text"
            id="highlight"
            className="border rounded p-2 w-full"
            defaultValue={webinarData?.highlight || ""}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Highlight
        </button>
      </form>
    </div>
  );
};

export default Highlight;

import React from "react";

const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Submit Complaint
    </button>
  );
};

export default SubmitButton;

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <button className="text-gray-500 text-2xl">&#9776;</button>{" "}
      {/* Hamburger Icon */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-500">Charles Hall</span>
        <div className="bg-gray-300 rounded-full w-10 h-10"></div>{" "}
        {/* Profile Picture Placeholder */}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaBars, FaBell } from "react-icons/fa"; // Icons for menu and notification

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Menu Icon */}
      <div className="text-gray-600 cursor-pointer">
        <FaBars size={24} />
      </div>

      {/* Notification Bell with Badge */}
      <div className="relative cursor-pointer justify-right items-right">
        <FaBell size={24} className="text-gray-600" />
        {/* Notification badge */}
        <span className="absolute top-0 right-0 bg-blue-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
          4
        </span>
      </div>

      {/* User Profile Image */}
      <div className="flex items-center">
        <img
          src="Moeez.jpeg" // Replace with the actual user image URL
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="ml-2 text-gray-700 font-medium">Moeez Ahmad Khan</span>
      </div>
    </nav>
  );
};

export default Navbar;

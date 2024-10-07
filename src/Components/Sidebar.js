import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col p-5">
      <div className="text-2xl font-bold mb-8">AdminKit</div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="hover:bg-gray-700 p-2 block rounded"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:bg-gray-700 p-2 block rounded">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/signin" className="hover:bg-gray-700 p-2 block rounded">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:bg-gray-700 p-2 block rounded">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/blank" className="hover:bg-gray-700 p-2 block rounded">
              Blank
            </Link>
          </li>
          {/* Add other items here */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

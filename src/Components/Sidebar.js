import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white  w-64 flex flex-col p-5">
      <div className="text-2xl font-bold mb-8">AdminKit</div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="hover:bg-gray-700 p-2 block rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:bg-gray-700 p-2 block rounded">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/SignIn" className="hover:bg-gray-700 p-2 block rounded">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/SignUp" className="hover:bg-gray-700 p-2 block rounded">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/blank" className="hover:bg-gray-700 p-2 block rounded">
              Blank
            </Link>
          </li>
        </ul>
        <div className="tex-lg font-bold mb-4 mt-4">Tools and Components</div>
        <ul className="space-y-4">
          <li>
            <Link
              to="/ComplaintForm"
              className="hover:bg-gray-700 p-2 block rounded"
            >
              Complaint Form
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:bg-gray-700 p-2 block rounded">
              Buttons
            </Link>
          </li>
          <li>
            <Link to="/SignIn" className="hover:bg-gray-700 p-2 block rounded">
              Forms
            </Link>
          </li>
          <li>
            <Link to="/SignUp" className="hover:bg-gray-700 p-2 block rounded">
              cards
            </Link>
          </li>
          <li>
            <Link to="/blank" className="hover:bg-gray-700 p-2 block rounded">
              Typography
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

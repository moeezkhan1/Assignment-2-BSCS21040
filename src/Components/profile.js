import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm">
        <img
          src="Moeez.jpeg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h1 className="text-2xl font-bold text-center mt-4">
          Moeez Ahmad Khan
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Full Stack Developer | Entrepreneur
        </p>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">About Me:</h2>
          <p className="text-gray-600 mt-2">
            I am a passionate developer working on various exciting projects,
            including my own startup and a React-based project. Currently, I'm
            also focusing on a VR-based project educating about PTSD called
            MINDSCAPE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

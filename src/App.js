import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ComplaintFrom from "./ComplaintForm";
import Profile from "./Components/profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ComplaintForm" element={<ComplaintFrom />} />
      </Routes>
    </Router>
  );
};

export default App;

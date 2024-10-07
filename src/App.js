import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<MainPage />} />
        {/* Define other routes like Profile, Sign In, Sign Up, etc */}
      </Routes>
    </Router>
  );
};

export default App;

import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserAccount from "./pages/UserAccount/UserAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userAccount" element={<UserAccount />} />
      </Routes>
    </Router>
  );
}

export default App;

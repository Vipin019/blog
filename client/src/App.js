import "./App.css";

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Myprofile from "./pages/Myprofile/Myprofile";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./components/Footer";
import Createpost from "./pages/Createpost/Createpost";
import Myposts from "./pages/Myposts/Myposts";

const App = () => {
  const [mode, setMode] = useState("LIGHT");
  return (
    <div className={mode === "LIGHT" ? "light" : "dark"}>
      <Header />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createPost" element={<Createpost />} />
        <Route path="/myPosts" element={<Myposts />} />
        <Route path="/myProfile" element={<Myprofile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import "./App.css";

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Myprofile from "./pages/Myprofile/Myprofile";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./components/Footer";
import Createpost from "./pages/Createpost/Createpost";
import Myposts from "./pages/Myposts/Myposts";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./components/Routes/Private";

const App = () => {
  const [mode, setMode] = useState("LIGHT");
  return (
    <div className={mode === "LIGHT" ? "light" : "dark"}>
      <Header />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="createPost" element={<Createpost />} />
          <Route path="myPosts" element={<Myposts />} />
          <Route path="myProfile" element={<Myprofile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

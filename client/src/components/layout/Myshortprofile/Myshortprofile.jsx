import "./Myshortprofile.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Myshortprofile = () => {
  const [mode, setMode] = useState("LIGHT");
  return (
    <>
      <div className="myShortProfile">
        <Link to={"/myProfile"}>
          <div className="myShortProfile__myProfile">
            <p>My Profile</p>
          </div>
        </Link>
        <div
          className="myShortProfile__mode"
          onClick={() => {
            setMode(mode === "LIGHT" ? "DARK" : "LIGHT");
          }}
        >
          <p>Switch to {mode === "LIGHT" ? "dark" : "light"} mode</p>
        </div>
        <div className="myShortProfile__setting">
          <p>Settings</p>
        </div>
        <div className="myShortProfile__logout">
          <p>Logout</p>
        </div>
      </div>
    </>
  );
};

export default Myshortprofile;

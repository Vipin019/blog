import "./Myshortprofile.css";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/Auth";

const Myshortprofile = () => {
  const [mode, setMode] = useState("LIGHT");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="myShortProfile">
        <Link to={"/useer/myProfile"}>
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
          <p
            onClick={() => {
              localStorage.removeItem("auth");
              alert("Logout Successfully");
              setAuth({
                user: null,
                token: "",
              });
              navigate(location.state || "/");
            }}
          >
            Logout
          </p>
        </div>
      </div>
    </>
  );
};

export default Myshortprofile;

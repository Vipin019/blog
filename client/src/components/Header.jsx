import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultProfileImage from "../images/Profile.png";
import Myshortprofile from "./layout/Myshortprofile/Myshortprofile";
import { useAuth } from "../context/Auth";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [mode, setMode] = useState("LIGHT");
  const [whatClass, setClass] = useState("header__myShortProfile--hide");
  return (
    <>
      <div className="background"></div>
      <Link to="/">
        <div className="appName">
          <h1>Blog App</h1>
        </div>
      </Link>

      {auth.user ? (
        <div className="header">
          <Link to="/">
            <div className="appName">
              <h1>Blog App</h1>
            </div>
          </Link>
          <Link to="/user/createPost">
            <div className="header__createPost">
              <input
                className={
                  mode === "LIGHT"
                    ? "header__createPost--button btn btn-l"
                    : "header__createPost--button btn btn-d"
                }
                type="button"
                value={"Create Post"}
              />
            </div>
          </Link>
          <Link to="/user/myPosts">
            <div className="header__myPosts">
              <input
                className={
                  mode === "LIGHT"
                    ? "header__myPost--button btn btn-l"
                    : "header__myPost--button btn btn-d"
                }
                type="button"
                value={"My Posts"}
              />
            </div>
          </Link>
          <div className="header__myProfile">
            <div className="header__myProfile--avatar">
              <img
                alt="Avatar"
                src={defaultProfileImage}
                onClick={() => {
                  setClass(
                    whatClass === "header__myShortProfile"
                      ? "header__myShortProfile--hide"
                      : "header__myShortProfile"
                  );
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="header">
          <Link to="/">
            <div className="appName">
              <h1>Blog App</h1>
            </div>
          </Link>
          <Link to="/login">
            <div className="header__login">
              <input
                className={
                  mode === "LIGHT"
                    ? "header__login--button btn btn-l"
                    : "header__login--button btn btn-d"
                }
                type="button"
                value={"Login"}
              />
            </div>
          </Link>
          <Link to="/register">
            <div className="header__register">
              <input
                className={
                  mode === "LIGHT"
                    ? "header__Register--button btn btn-l"
                    : "header__Register--button btn btn-d"
                }
                type="button"
                value={"Register"}
              />
            </div>
          </Link>
        </div>
      )}
      <div className={whatClass}>
        <Myshortprofile />
      </div>
    </>
  );
};

export default Header;

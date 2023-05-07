import "./Blogs.css";
import React from "react";
import Allblog from "./Allblog";
import Topwriters from "./Topwriters";
import { useShortProfile } from "../../context/shortProfileContext";

const Blogs = () => {
  const [shortProfile, setShortProfile] = useShortProfile();

  return (
    <div
      className="blogs"
      onClick={() => {
        setShortProfile("header__myShortProfile--hide");
      }}
    >
      <div id="blogs__conatiner">
        <div className="blogs__allblog">
          <Allblog />
        </div>
        <div className="blogs__topWriters">
          <Topwriters />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

import "./Blogs.css";
import React from "react";
import Allblog from "./Allblog";
import Topwriters from "./Topwriters";

const Blogs = () => {
  return (
    <div className="blogs">
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

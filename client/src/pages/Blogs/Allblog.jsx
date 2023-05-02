import Blogcard from "../../components/layout/Blog/Blogcard";
import "./Allblog.css";
import React from "react";

const Allblog = () => {
  return (
    <div className="allBlog">
      <Blogcard />
      <Blogcard />
      <Blogcard />
    </div>
  );
};

export default Allblog;

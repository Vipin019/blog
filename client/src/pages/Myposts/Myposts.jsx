import "./Mypost.css";
import Mypostcard from "../../components/layout/Mypostcard/Mypostcard";
import React from "react";

const Myposts = () => {
  return (
    <div className="myPost">
      <div className="myPost__container">
        <Mypostcard />
        <Mypostcard />
        <Mypostcard />
        <Mypostcard />
        <Mypostcard />
      </div>
    </div>
  );
};

export default Myposts;

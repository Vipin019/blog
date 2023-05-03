import "./Topwriters.css";
import React from "react";
import Topwritercard from "../../components/layout/Blog/Topwritercard";

const Topwritters = () => {
  return (
    <div className="topWritter">
      <h1>Top Writers</h1>
      <div className="topWritter__topWriterCard">
        <Topwritercard />
        <Topwritercard />
        <Topwritercard />
        <Topwritercard />
        <Topwritercard />
        <Topwritercard />
        <Topwritercard />
        <Topwritercard />
        <Topwritercard />
        <Topwritercard />
      </div>
    </div>
  );
};

export default Topwritters;

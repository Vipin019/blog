import "./Topwritercard.css";
import React from "react";
import defaultAvatar from "../../../images/Profile.png";

const Topwritercard = () => {
  return (
    <div className="topWriterCard">
      <img alt="Avatar" src={defaultAvatar} />

      <div>
        <h1>Top writer Name</h1>
        <small>Heighest education</small>
      </div>
      <small>Follow</small>
    </div>
  );
};

export default Topwritercard;

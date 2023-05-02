import "./Comments.css";
import React from "react";
import defaultAvatar from "../../../images/Profile.png";

const Comments = () => {
  return (
    <div className="comments">
      <div className="comments__writter">
        <img alt="Avatar" src={defaultAvatar} />
        <div>
          <h1>Writer Name</h1>
          <small>Heighest Education</small>
        </div>
      </div>
      <div className="comments__details">
        <small>This is comment written udhu weuiafua arfafa af afa f</small>
      </div>
    </div>
  );
};

export default Comments;

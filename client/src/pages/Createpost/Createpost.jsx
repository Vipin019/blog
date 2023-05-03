import "./Createpost.css";
import React, { useState } from "react";

const Createpost = () => {
  const [title, setTitle] = useState("");
  const [discreption, setDiscreption] = useState("");
  return (
    <div className="createPost">
      <div className="createPost__container">
        <form>
          <input
            type="text"
            value={title}
            placeholder="Write title  of your post here..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            value={discreption}
            placeholder="Write your post here..."
            onChange={(e) => {
              setDiscreption(e.target.value);
            }}
          />
          <input type="file" />
          <input type="button" value="Post" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Createpost;

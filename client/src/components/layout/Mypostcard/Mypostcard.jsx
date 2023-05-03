import "./Mypostcard.css";
import React, { useState } from "react";
import { AiFillLike, AiFillDislike, AiOutlineComment } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import defaultAvatar from "../../../images/Profile.png";
import Comments from "../Blog/Comments";

const Mypostcard = () => {
  const [comment, setComment] = useState("");
  const [commentClass, setCommentClass] = useState(
    "myPostCard__comments--hide"
  );
  return (
    <div className="myPostCard">
      <h1>Title of the post</h1>
      <img alt="Post image" src={defaultAvatar} />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="myPostCard__summery">
        <p>{784} views</p>
        <p>
          {654} <AiFillLike />
        </p>
        <p>
          {65} <AiFillDislike />
        </p>
        <p
          onClick={() => {
            setCommentClass(
              commentClass === "myPostCard__comments"
                ? "myPostCard__comments--hide"
                : "myPostCard__comments"
            );
          }}
        >
          <AiOutlineComment />
        </p>
        <p>
          <BiShare />
        </p>
      </div>
      <div className={commentClass}>
        <div className="myPostCard__comments__allComments">
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </div>
        <div className="myPostCard__comments__writeComment">
          <input
            className="myPostCard__comments__writeComment--text"
            type="text"
            value={comment}
            placeholder="Write your comment here..."
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <input className="btn" type="Button" value="Post" />
        </div>
      </div>
    </div>
  );
};

export default Mypostcard;

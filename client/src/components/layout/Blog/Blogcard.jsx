import "./Blogcard.css";
import defaultAvatar from "../../../images/Profile.png";
import React, { useState } from "react";
import { AiFillLike, AiFillDislike, AiOutlineComment } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import Comments from "./Comments";

const Blogcard = ({ post }) => {
  const [comment, setComment] = useState("");
  const [commentClass, setCommentClass] = useState("blogCard__comments--hide");
  const [follow, setFollow] = useState("Follow");
  return (
    <div className="blogCard">
      <div className="blogCard__writer">
        <img
          alt="Avatar"
          src={post.user.avatar ? post.user.avatar.public_id : defaultAvatar}
        />
        <div>
          <p>{post.user.userName}</p>
          <small>Highest Education</small>
        </div>

        <small
          onClick={() => {
            setFollow(follow === "Follow" ? "Following" : "Follow");
          }}
        >
          {follow}
        </small>
      </div>
      <div className="blogCard__post">
        <h1>{post.title}</h1>
        <img alt="title" src={post.image ? post.image.url : defaultAvatar} />
        <p>{post.description}</p>
      </div>
      <div className="blogCard__conclusion">
        <div className="blogCard__conclusion__views">
          <small>458 Views</small>
        </div>
        <div className="blogCard__conclusion__like">
          <small>124</small>
          <AiFillLike />
        </div>
        <div className="blogCard__conclusion__dislike">
          <small>65</small>
          <AiFillDislike />
        </div>
        <div
          className="blogCard__conclusion__comments"
          onClick={() => {
            setCommentClass(
              commentClass === "blogCard__comments"
                ? "blogCard__comments--hide"
                : "blogCard__comments"
            );
          }}
        >
          <AiOutlineComment />
        </div>
        <div className="blogCard__conclusion__share">
          <BiShare />
        </div>
      </div>
      <div className={commentClass}>
        <div className="blogCard__comments__allComments">
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </div>
        <div className="blogCard__comments__writeComment">
          <input
            className="blogCard__comments__writeComment--text"
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

export default Blogcard;

import "./Blogcard.css";
import defaultAvatar from "../../../images/Profile.png";
import React from "react";
import { AiFillLike, AiFillDislike, AiOutlineComment } from "react-icons/ai";
import { BiShare } from "react-icons/bi";

const Blogcard = () => {
  return (
    <div className="blogCard">
      <div className="blogCard__writer">
        <img alt="Avatar" src={defaultAvatar} />
        <h1>Name Kumar</h1>
        <small>Highest Education</small>
        <small>Follow</small>
      </div>
      <div className="blogCard__post">
        <h1>Title of the blog</h1>
        <img alt="title" src={defaultAvatar} />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
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
        <div className="blogCard__conclusion__comments">
          <AiOutlineComment />
        </div>
        <div className="blogCard__conclusion__share">
          <BiShare />
        </div>
      </div>
    </div>
  );
};

export default Blogcard;

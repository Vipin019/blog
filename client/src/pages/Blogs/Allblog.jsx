import Blogcard from "../../components/layout/Blog/Blogcard";
import "./Allblog.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Allblog = () => {
  const [posts, setPosts] = useState();
  const [user, setUser] = useState();
  const getAllPost = async () => {
    try {
      const { data } = await axios.get(
        "https://fantastic-fawn-gabardine.cyclic.app/api/v1/blog/all-blog"
      );
      if (data?.success) {
        setPosts(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className="allBlog">
      {posts?.map((post) => (
        <Blogcard post={post} />
      ))}
    </div>
  );
};

export default Allblog;

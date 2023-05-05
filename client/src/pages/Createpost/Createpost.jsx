import "./Createpost.css";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/Auth";

const Createpost = () => {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const [image, setImage] = useState();
  const [auth, setAuth] = useAuth();

  function handleOnchange(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  const handleSubmit = async (e) => {
    const user = auth.user._id;
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/blog/create-blog",
        {
          title,
          description,
          image,
          user,
        }
      );
      if (res && res.data.success) {
        alert("Registred Successfully");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Error in Registration");
    }
  };

  return (
    <div className="createPost">
      <div className="createPost__container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            placeholder="Write title  of your post here..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            value={description}
            placeholder="Write your post here..."
            onChange={(e) => {
              setDiscription(e.target.value);
            }}
          />
          <input type="file" accept="image/" onChange={handleOnchange} />
          <input type="submit" value="Post" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Createpost;

import "./Register.css";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/register",
        {
          userName: userName,
          email: email,
          password: password,
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
    <div className="register">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input className="btn btn-l" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;

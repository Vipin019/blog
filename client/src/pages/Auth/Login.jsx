import "./Login.css";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/user/login", {
        email: email,
        password: password,
      });
      if (res && res.data.success) {
        alert("Login Successfully");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Error in Registration");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
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
        <input className="btn btn-l" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;

import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://fantastic-fawn-gabardine.cyclic.app/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(res);
      if (res && res.data.success) {
        alert("Login Successfully");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
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

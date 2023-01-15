import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const Handler = async (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
    let notes1;
    try {
      notes1 = await axios.post("/user/login", {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("pass"),
      });
    } catch (err) {
      setError("Incorrect email or password");
    }
    // console.log(notes1.data);
    navigate("/");
  };
  return (
    <div>
      {error && <h1>{error}</h1>}
      <form action="/" method="get" onSubmit={Handler}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="pass">Password</label>
        <input id="pass" type="password" />
        <button type="submit">Submit</button>
      </form>
      <div>
        Don't have an account?
        <Link to={"/register"}>Register</Link>
      </div>
    </div>
  );
};

export default Login;

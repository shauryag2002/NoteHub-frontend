import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const Handler = async () => {
    const user = await axios.post("/user/register", {
      name,
      email,
      password,
      pic,
    });
    navigate("/login");
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState("");
  return (
    <div>
      <div className="margg">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="margg">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="margg">
        <label htmlFor="pass">Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="margg">
        <label htmlFor="imglink">Image:</label>
        <input
          type="text"
          placeholder="Enter your pic"
          value={pic}
          onChange={(e) => {
            setPic(e.target.value);
          }}
        />
      </div>
      <button onClick={Handler}>SUBMIT</button>
      <div>
        Have an account? <Link to={"/login"}>LOGIN</Link>
      </div>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const MyHeader = () => {
  const navigate = useNavigate();
  const logorin = () => {
    let loginorregister = document.getElementById("loginorregister");
    if (!localStorage.getItem("email") && !localStorage.getItem("pass")) {
      // loginorregister.innerHTML = "Login";
      setValue("Login");
      loginorregister.onclick = function () {
        navigate("/login");
      };
    } else {
      // loginorregister.innerHTML = "Logout";
      setValue("Logout");
      loginorregister.onclick = logout;
    }
  };
  function logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("pass");
    navigate("/login");
  }
  const userid = async () => {
    const notes1 = await axios
      .post("/user/login", {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("pass"),
      })
      .then((res) => {
        setUser(res.data);
        // console.log(res.data._id);
      });
  };
  const [value, setValue] = useState();
  useEffect(() => {
    userid();
    logorin();
  }, [value]);
  const [user, setUser] = useState("");
  return (
    <nav>
      <ul className="navbar">
        <li className="marginx">
          <Link to={"/"}>NotesHub</Link>
        </li>
        <li className="marging">
          <Link to="/updateUser">
            <img
              src={
                user.pic
                  ? user.pic
                  : "https://cdn.onlinewebfonts.com/svg/img_383214.png"
              }
              alt="avatar"
              className="image"
            />
          </Link>
        </li>
        <li className="margin">
          <Link to={`/${user._id}}/createNote`}>Add</Link>
        </li>
        <li className="margin">
          <Link to={"/updateUser"}>{user.name}</Link>
        </li>
        <li className="margin">
          <button id="loginorregister" className="btn">
            {value}
          </button>
          {/* <button onClick={logout}>Logout</button> */}
        </li>
      </ul>
    </nav>
  );
};

export default MyHeader;

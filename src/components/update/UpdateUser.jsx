import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateUser.css";
const UpdateUser = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("email") || !localStorage.getItem("pass")) {
      navigate("/register");
    }
  }, []);
  const notes = async () => {
    try {
      //   localStorage.setItem("email", "shauryag1000@gmail.com");
      //   localStorage.setItem("pass", "Mamtagupta@06");
      let noti;
      const notes1 = await axios
        .post("/user/login", {
          email: localStorage.getItem("email"),
          password: localStorage.getItem("pass"),
        })
        .then(async (res) => {
          setNotesss(res.data);
          // console.log(res.data._id);
          // return res.data;
          // console.log(res);
          setName(res.data.name);
          setPic(res.data.pic);
          setEmail(res.data.email);
          // setPassword(res.data.password);
        });
      // setNotesss(notes1);
      // console.log(notes1);
    } catch (err) {
      console.log(err);
    }
  };
  const user = async () => {
    const userid = await axios.put(`/user/update/${notesss._id}`, {
      name: name1,
      email,
      password,
      pic,
    });
  };
  const pre = () => {
    const preview = document.getElementById("preview");
    const image = document.getElementById("imae");
    const imglink = document.getElementById("imglink");

    image.src = imglink.value;
    // console.log(imglink.value);
    image.setAttribute("src", imglink.value);
  };
  useEffect(() => {
    notes();
    // setPassword(notesss.password);
  }, []);
  const [notesss, setNotesss] = useState({ name: "shaurya" });
  const [name1, setName] = useState("");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState(" ");
  let handleChange = (event) => {
    const { id, value } = event.target;
    this.setState((prevState) => ({
      contactUs: {
        ...prevState.contactUs,
        [id]: value,
      },
    }));
  };
  return (
    <div className="flex">
      <div>
        <div className="margg">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name1}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="margg">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="margg">
          <label htmlFor="pass">Password:</label>
          <input
            id="pass"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="margg">
          <label htmlFor="imglink">Image:</label>
          <input
            id="imglink"
            type="text"
            value={pic}
            onChange={(e) => {
              setPic(e.target.value);
            }}
          />
        </div>
        <button id="preview" onClick={pre}>
          preview
        </button>
        <br />
        <button onClick={user}>SUBMIT</button>
      </div>
      <div>
        <img id="imae" src={pic} alt="avatar" />
      </div>
    </div>
  );
};

export default UpdateUser;

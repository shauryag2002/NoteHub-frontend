import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Create = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("email") || !localStorage.getItem("pass")) {
      navigate("/register");
    }
  }, []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const SubitHandler = async () => {
    try {
      let noti;
      const notes1 = await axios
        .post("/user/login", {
          email: localStorage.getItem("email"),
          password: localStorage.getItem("pass"),
        })
        .then((res) => {
          console.log(res.data._id);
          let noti = axios
            .post(`/note/${res.data._id}/createNote/`, {
              title,
              content,
              category,
            })
            .then((res) => {
              // console.log(res.data);
              // setNotes(res.data);
            });
        });
      // console.log(noti.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="margg">
        <label htmlFor="tit">Title:</label>
        <input
          name="title"
          type="text"
          id="tit"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter Title"
          className="title"
        />
      </div>
      <div className="margg">
        <label htmlFor="conty">Content:</label>

        <textarea
          name="content"
          id="conty"
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="Enter Content"
          className="content"
        ></textarea>
      </div>
      <div className="margg">
        <label htmlFor="catty">Category:</label>
        <input
          type="text"
          name="category"
          id="catty"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          placeholder="Enter category"
          className="category"
        />
      </div>
      <button type="submit" onClick={SubitHandler}>
        SUBMIT
      </button>
      {/* {props.id} */}
    </div>
  );
};

export default Create;

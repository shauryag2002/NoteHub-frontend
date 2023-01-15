import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Edit = (props) => {
  const { id } = useParams();
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
          console.log(res.data._id);
          noti = await axios
            .get(`/note/${res.data._id}/one/${id}`)
            .then((res) => {
              // console.log(res.data);
              setNotes(res.data);
            });
        });
      // console.log(noti.data);
    } catch (err) {
      console.log(err);
    }
  };
  let SubmitHandler;
  SubmitHandler = async () => {
    try {
      let noti;
      const notes1 = await axios
        .post("/user/login", {
          email: localStorage.getItem("email"),
          password: localStorage.getItem("pass"),
        })
        .then((res) => {
          console.log(res.data._id);
          noti = axios
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

  const [notess, setNotes] = useState({ titl: "hello" });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    notes();
    setTitle(notess.title);
    setContent(notess.content);
    setCategory(notess.category);
  }, []);
  // console.log(params);
  return (
    <div>
      {/* <h1>
        {notess.title} {notess._id}
      </h1> */}

      <input
        name="title"
        type="text"
        value={title ? title : notess.title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        name="category"
        id="catty  "
        value={category ? category : notess.category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <textarea
        name="content"
        id="conty"
        cols="30"
        rows="10"
        value={content ? content : notess.content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <button type="submit" onClick={SubmitHandler}>
        SUBMIT
      </button>
      {/* {props.id} */}
    </div>
  );
};

export default Edit;

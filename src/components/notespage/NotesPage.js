import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import Edit from "../Edit";
import { Link, useNavigate } from "react-router-dom";
// const notes = async () => {
//   try {
//     let noti;
//     const notes1 = await axios
//       .post("http://localhost:3000/user/login", {
//         email: "guptashaurya2002@gmail.com",
//         password: "Mamtagupta@06",
//       })
//       .then((res) => {
//         console.log(res.data._id);
//         noti = axios
//           .get(`http://localhost:3000/note/${res.data._id}/notes`)
//           .then((res) => {
//             // console.log(res.data);
//             // setNotes(res.data);
//           });
//       });
//     // console.log(noti.data);
//   } catch (err) {
//     console.log(err);
//   }
// };
const deleteNote = async (userid, id) => {
  const delete1 = await axios.delete(`/note/${userid}/deleteNote/${id}`);
};
function BasicExample(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
          <Button variant="success">
            {" "}
            <Link to={`/edit/${props._id}`}> EDIT</Link>
          </Button>{" "}
          <Button
            variant="danger"
            onClick={() => deleteNote(props.user, props._id)}
          >
            DELETE
          </Button>
          <br />
          <Badge bg="secondary">{props.category}</Badge>
          {props.content}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

const NotesPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("email") || !localStorage.getItem("pass")) {
      navigate("/register");
    }
  }, []);
  const [notess, setNotes] = useState([]);
  useEffect(() => {
    // (async () => {
    //   await notes().then((data) => {
    //     setNotes(data);
    //   });
    // })();
    const notes = async () => {
      try {
        let noti;
        const notes1 = await axios
          .post("/user/login", {
            email: localStorage.getItem("email"),
            password: localStorage.getItem("pass"),
          })
          .then((res) => {
            console.log(res.data._id);
            noti = axios.get(`/note/${res.data._id}/notes`).then((res) => {
              // console.log(res.data);
              setNotes(res.data);
            });
          })
          .catch((err) => {
            console.log(err);
          });
        // console.log(noti.data);
      } catch (err) {
        console.log(err);
      }
    };
    notes();
  }, []);
  return (
    notess &&
    notess?.map((note, i) => {
      return (
        // <h1 key={i}>
        //   {note.title}
        //   {/* {console.log(note)} */}
        // </h1>
        <BasicExample
          _id={note._id}
          title={note.title}
          category={note.category}
          key={i}
          content={note.content}
          user={note.user}
        />
      );
    })
  );
  //   return <h1> {notess[0]} </h1>;
  //   return <h1>hello world</h1>;
};

export default NotesPage;

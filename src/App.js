import "./App.css";
import "./components/all.css";
// eslint-disable-next-line
// import Header from "./components/header/Header";
import MyHeader from "./components/header/MyHeader";
// import Home from "./components/home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import UpdateUser from "./components/update/UpdateUser";
import NotesPage from "./components/notespage/NotesPage";
import Login from "./components/Login";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Register from "./components/Register";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("email") || !localStorage.getItem("password")) {
      navigate("/register");
    }
  }, []);
  return (
    <div>
      {/* <Header /> */}
      <MyHeader />
      <Routes>
        {/* {isLogin()} */}
        <Route path="/" element={<NotesPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updateuser" element={<UpdateUser />} />
        <Route path="/:id/createNote" element={<Create />} />
        {/* <Route path="/updateUser" element={<UpdateUser />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/edit/:id" element={<Edit />} />
        {/* <Route path="/notes" element={<NotesPage />} /> */}
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

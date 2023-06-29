import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import MyPosts from "./components/MyPosts";

function App() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setName={setName} setUserId={setUserId} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={<Profile name={name} userId={userId} />}
        />
        <Route
          path="/my-posts/add"
          element={<MyPosts name={name} userId={userId} />}
        />
      </Routes>
    </div>
  );
}

export default App;

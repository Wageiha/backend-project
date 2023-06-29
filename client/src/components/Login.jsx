import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setName, setUserId }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {};

    for (let i = 0; i < e.target.elements.length - 1; i++) {
      credentials[e.target.elements[i].name] = e.target.elements[i].value;
    }

    axios
      .post(`${process.env.REACT_APP_BE_URL}/api/user/login`, credentials)
      .then((res) => {
        setName(res.data.name);
        setUserId(res.data._id)
        navigate("/profile");
      })
      .catch((err) => {
        setErrorMessage(err.request.response);
      });
    e.target.reset();
  };

  return (
    <div className="form-container">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="your.email@gmail.com"
          id="email"
          name="email"
          required
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="*********"
          id="password"
          name="password"
          required
        ></input>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p style={{ color: "darkred" }}>{errorMessage}</p>}

      <p>
        Join us. Register here! <br />
        <NavLink to="/register"> Register</NavLink>
      </p>
    </div>
  );
};

export default Login;

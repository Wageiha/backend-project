import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

 const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {};

    for (let i = 0; i < e.target.elements.length - 1; i++) {
      user[e.target.elements[i].name] = e.target.elements[i].value;
    }

    axios
      .post(`${process.env.REACT_APP_BE_URL}/api/user/signup`, user)
      .then((res) => {
        setSuccessMessage(res.data);
        navigate("/login")
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
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label> Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="full name"
          required
        ></input>
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
        <button type="submit">Register</button>
      </form>
      {successMessage && !errorMessage ? (
        <p style={{ color: "darkgreen" }}>{successMessage}</p>
      ) : (
        <p style={{ color: "darkred" }}>{errorMessage}</p>
      )}

       <p>
        Already have  an account? <br />
        <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
};

export default Register
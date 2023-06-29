import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [usersNum, setUsersNum] = useState(null);

  axios
      .get(`${process.env.REACT_APP_BE_URL}`)
      .then((res) => {
    setUsersNum(res.data)
      }).catch((err) => {
        console.log(err.request.response);
      });
  return (
    <div>
      <h1>Welcome to our Home Page</h1>
      <h2>We have right now {usersNum} users.</h2>
      <p>
        Already have  an account? <br />
        <NavLink to="/login">Login</NavLink>
      </p>
      <p>
       Otherwise join us now and Register here! <br />
        <NavLink to="/register"> Register</NavLink>
      </p>
    </div>
  );
};

export default Home;

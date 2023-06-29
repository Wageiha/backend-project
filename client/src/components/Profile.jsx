import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = ({name, userId}) => {
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();

    const profile = {};
    profile["owner"] = userId

    for (let i = 0; i < e.target.elements.length - 1; i++) {
      profile[e.target.elements[i].name] = e.target.elements[i].value;
    }

    axios
      .post(`${process.env.REACT_APP_BE_URL}/api/user/create-profile/${userId}`, profile)
      .then((res) => {
        setSuccessMessage(res.data);
        navigate("/my-posts/add")
      })
      .catch((err) => {
        setErrorMessage(err.request.response);
      });
    e.target.reset();
  };

  return (
    <div>
      <h1>Welcome {name}</h1>
      <h2>Create your profile here.</h2>

      <form className="login-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={name}
        />
        <input  
          type="text"
          name="biography"
          placeholder="Your Biography"
        />
        <input 
          type="text"
          name="location"
          placeholder="Your Location" 
        />
        <input
          type="text"
          name="twitterUsername"
          placeholder="Your Twitter Username"
        />
        <input    
          type="text"
          name="gitHubUsername"
          placeholder="Your Github Username"
        />
      <input 
          type="text"
          name="linkedInUsername"
          placeholder="Your LinkedIn Username"
        />
        <input 
          type="text"
          name="discordUsername"
          placeholder="Your Discord Username"
        />
        <input 
          type="text"
          name="youTubeChannel"
          placeholder="Your YouTube Channel" 
        />
        <input 
          type="text"
          name="website"
          placeholder="Your Websites"
        />
        <button type="submit">Create Profile</button>
      </form>
      {
        errorMessage 
          && <p style={{color:'darkred'}}>{errorMessage}</p>          
      }
      {
        successMessage 
          && <p style={{color:'darkgreen'}}>{successMessage}</p>          
      }
       <p>
        Create now your posts. <br />
        <NavLink to="/my-posts/add">Create New Post</NavLink>
      </p>
    </div>
  )
}

export default Profile
import { Alert, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useNavigate();

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div>
      <div className="login-form-container">
        <NavLink to="/home">
          <span id="close-login-form" className="fas fa-times"></span>
        </NavLink>

        {!isLoading && (
          <form onSubmit={handleLoginSubmit}>
            <h3>user Register</h3>

            <input
              name="name"
              onBlur={handleOnBlur}
              type="name"
              placeholder="name"
              className="box"
            />

            <input
              name="email"
              onBlur={handleOnBlur}
              type="email"
              placeholder="email"
              className="box"
            />

            <input
              name="password"
              onBlur={handleOnBlur}
              type="password"
              placeholder="password"
              className="box"
            />

            <input
              name="password2"
              onBlur={handleOnBlur}
              type="password"
              placeholder="ReType Your Password"
              className="box"
            />

            <p>
              {" "}
              forget your password{" "}
              <useNavigate href="#">click here</useNavigate>{" "}
            </p>

            <input type="submit" value="Register" className="btn" />

            <p>
              {" "}
              alrady have an account{" "}
              <NavLink to="/login" href="#">
                Login now
              </NavLink>{" "}
            </p>

            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;

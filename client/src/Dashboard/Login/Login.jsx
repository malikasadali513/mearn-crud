import React, { useState } from "react";
import "../Login/Login.css";
import { FaGoogle, FaTwitter, FaUser } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Facebook,
  GitHub,
  KeyOffTwoTone,
  LockClockSharp,
  PasswordRounded,
} from "@mui/icons-material";

const Login = () => {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigateTo = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8001/login", {
        LoginUserName: loginUserName,
        LoginPassword: loginPassword,
      })
      .then((response) => {
        if (response.data.message === "Login successful") {
          navigateTo("/home");
        } else {
          setErrorMessage("Invalid username or password");
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Please type the right username or password");
      });
  };

  return (
    <div className="loginPage flex">
      <div className="main" style={{ marginTop: "10px" }}>
        <form>
          <div className="headerDiv mt-1">
            <LockClockSharp />
            <h3>Welcome Back</h3>
          </div>
          <div className="form-outline mb-1">
            <span className="message">{errorMessage}</span>
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              placeholder="Enter username"
              onChange={(event) => setLoginUserName(event.target.value)}
            />
            <label className="form-label" htmlFor="form2Example1">
              <FaUser /> User name
            </label>
          </div>

          <div className="form-outline mb-1">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              placeholder="Password"
              onChange={(event) => setLoginPassword(event.target.value)}
            />
            <label className="form-label" htmlFor="form2Example2">
              <PasswordRounded /> Password
            </label>
          </div>

          <div className="row mb-1">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button
            type="submit"
            onClick={loginUser}
            className="btn btn-primary btn-block mb-4"
          >
            <KeyOffTwoTone />
            Sign in
          </button>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <div className="text-center">
            <p>
              Not a member?{" "}
              <Link to="/signup">
                <a>Register</a>
              </Link>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <Facebook style={{ color: "blue" }} />
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <FaGoogle style={{ color: "blue" }} />
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <FaTwitter style={{ color: "blue" }} />
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <GitHub style={{ color: "blue" }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

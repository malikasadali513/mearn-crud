import React, { useState } from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./SignUpPage.css";

import {
  AppRegistration,
  Facebook,
  GitHub,
  LockClockSharp,
  Mail,
  PasswordRounded,
} from "@mui/icons-material";
import { FaUser, FaGoogle, FaTwitter } from "react-icons/fa";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    Axios.post("http://localhost:8001/signup", {
      Email: email,
      UserName: userName,
      Password: password,
    }).then(() => {
      console.log("User has been created");
    });
  };

  return (
    <div className="loginPage flex">
      <div className="main" style={{ marginTop: "10px" }}>
        <form>
          <div className="headerDiv mt-2">
            <LockClockSharp />
            <h3>Welcome</h3>
          </div>
          <div className="form-outline mb-1">
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              placeholder="E-mail"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label className="form-label" for="form2Example1">
              <Mail /> Email address
            </label>
          </div>

          <div className="form-outline mb-1">
            <input
              type="username"
              id="form2Example2"
              className="form-control"
              placeholder="User Name"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <label className="form-label" for="form2Example2">
              <FaUser /> User Name
            </label>
          </div>

          <div className="form-outline mb-1">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <label className="form-label" for="form2Example2">
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
                <label className="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          <Link to={"/"}>
            <button
              type="button btn"
              className="btn btn-primary btn-block mb-4"
              onClick={createUser}
            >
              <AppRegistration style={{ marginRight: "10px" }} />
              Register
            </button>
          </Link>
          <div className="text-center">
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

export default SignUpPage;

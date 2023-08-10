import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-dark">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6" style={{ color: "#fff" }}>
              <h1 className="display-4">About us page</h1>
              <p style={{ color: "#fff" }}>
                React js and node js project using mySQL2 which <br></br> should
                add, view, edit and delete the user data
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <p className="font-italic text-muted">
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">ASAD ALI</h5>
                <span className="small text-uppercase text-muted">
                  ABC
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <Facebook />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <Twitter />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <Instagram />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

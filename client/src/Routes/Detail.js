import {
  LocationCity,
  MailOutlineRounded,
  Person,
  Phone,
  Work,
} from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../index.css";
import { NavLink } from "react-router-dom";
const Detail = () => {
  return (
    <div className="container mt-3">
      <p>
        . <br></br> .
      </p>
      <h1 style={{ fontWeight: 400 }}>Welcome to Asad</h1>
      <Card sx={{ width: 600 }}>
        <CardContent>
        <div className="add_btn">
        <NavLink className="mx-2 ">
          {" "}
          <button className="btn btn-primary">
            <CreateIcon />
          </button>
        </NavLink>
        <button className="btn btn-danger">
          <DeleteOutlineIcon />
        </button>
      
      </div>
      <Person style={{ width: 50 }} />
          <div className="row">
            <div className="left_view col-lg-6 col-md-5 col-12">
              
              <h3 className="mt-3">
                Name: <span>Asad</span>
              </h3>
              <h3 className="mt-3">
                Age: <span>25</span>
              </h3>
              <p>
                {" "}
                <MailOutlineRounded /> E-Mail: <span>asad@gmail.com</span>
              </p>
              <p>
                {" "}
                <Work /> Occupation: <span>webdeveloper</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-5 col-12">
             
              <p>
                {" "}
                <Phone />
                Mobole:<span> 42343212 </span>
              </p>
              <p>
                {" "}
                <LocationCity />
                Address: <span>dasdadas </span>
              </p>
              <p>
                {" "}
                Discription: <span>nkdnskndn fsdqw sdfsds</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Detail;

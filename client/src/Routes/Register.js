import React, { useState, useContext } from "react";
// import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router';
import { useNavigate } from "react-router-dom";

import { adddata } from "../Components/context/ContextProvider";
const Register = () => {
  const { setUdata } = useContext(adddata);
  const navigate = useNavigate();
  // const history = useHistory();
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    description: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, age, mobile, work, address, description } = inpval;

    if (name === "") {
      alert("name is required");
    } else if (email === "") {
      alert("email is required");
    } else if (!email.includes("@")) {
      alert("enter valid email");
    } else if (work === "") {
      alert("work is required");
    } else if (address === "") {
      alert("address is required");
    } else if (mobile === "") {
      alert("mobile is required");
    } else if (age === "") {
      alert("age is required");
    } else {
      const res = await fetch("/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          work,
          address,
          mobile,
          description,
          age,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
        console.log("error ");
        alert("error");
      } else {
        navigate("/");
        // history.push("/");
        setUdata(data);
        console.log("data added");
      }
    }
  };
  return (
    <div className="container">
      <p>.</p>
      <form className="mt-5">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              value={inpval.name}
              onChange={setdata}
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              email
            </label>
            <input
              type="email"
              value={inpval.email}
              onChange={setdata}
              name="email"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              age
            </label>
            <input
              type="text"
              value={inpval.age}
              onChange={setdata}
              name="age"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Mobile
            </label>
            <input
              type="number"
              value={inpval.mobile}
              onChange={setdata}
              name="mobile"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Work
            </label>
            <input
              type="text"
              value={inpval.work}
              onChange={setdata}
              name="work"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Address
            </label>
            <input
              type="text"
              value={inpval.address}
              onChange={setdata}
              name="address"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <textarea
              name="description"
              value={inpval.description}
              onChange={setdata}
              className="form-control"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
        <button type="submit" onClick={addinpdata} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

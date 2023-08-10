import React, { useState, useEffect, useContext } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";
import { adddata, deldata } from "../Components/context/ContextProvider";
import { updatedata } from "../Components/context/ContextProvider";
import Logout from "../Dashboard/Logout";

const Home = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { udata, setUdata } = useContext(adddata);

  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);

  const getdata = async () => {
    const res = await fetch("/getUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    console.log(typeof getuserdata);
  }, [getuserdata]);

  const deleteuser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");
      // setDLTdata(deletedata);
      getdata();
    }
  };

  return (
    <div>
      {udata && (

        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
        <div style={{marginTop: '100px'}}>
        <Logout  />
        </div>
          <strong>{udata.name}</strong> added succesfully!
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      {updata && (
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{updata.name}</strong> updated succesfully!
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      {dltdata && (
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>{dltdata.name}</strong> deleted succesfully!
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2"></div>

          <table class="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Username</th>
                <th scope="col">email</th>
                <th scope="col">Job</th>
                <th scope="col">Number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata &&
                getuserdata.data?.map((element, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.work}</td>
                    <td>{element.mobile}</td>
                    <td className="d-flex justify-content-between">
                      <NavLink to={`view/${element.id}`}>
                        <button className="btn btn-success">
                          <RemoveRedEyeIcon />
                        </button>
                      </NavLink>
                      <NavLink to={`edit/${element.id}`}>
                        <button className="btn btn-primary">
                          <CreateIcon />
                        </button>
                      </NavLink>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteuser(element.id)}
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

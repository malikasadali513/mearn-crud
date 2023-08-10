import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaHandshake, FaHome, FaPlus, FaTimes, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleHomeClick = () => {
    window.alert("To view users, first of all, login");
  };
  return (
    <div className="header">
    <Link to="/" style={{color: '#fff'}}><FaHandshake />  User Detail</Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={handleHomeClick}><FaHome /> Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/register"><FaPlus /> Add Services</Link>
        </li>
        <li>
          {" "}
          <Link to="/about"><FaUser /> About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

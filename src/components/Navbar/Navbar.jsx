import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <h1>
          FDD <span>App</span> <i>router</i>
        </h1>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to="/">
            {""}
            <li>Home</li>
          </Link>
          <Link to="/maincourse">
            {""}
            <li>Main Course</li>
          </Link>
          <Link to="/desserts">
            {""}
            <li>Desserts</li>
          </Link>
          <Link to="/drinks">
            {""}
            <li>Drinks</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

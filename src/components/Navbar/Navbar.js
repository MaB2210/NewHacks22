import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list--item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__list--item">
            <Link to="/events">Events</Link>
          </li>
          <li className="navbar__list--item">
            <Link to="/map">Map</Link>
          </li>
          <li className="navbar__list--item">
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

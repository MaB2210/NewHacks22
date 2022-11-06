import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../Assets/Image/logo.png'
import "./Navbar.css";
const Navbar = () => {
  const [user, setUser] = useState({});

   function getUserFromLocalStorage() {
    const localUser =  JSON.parse(localStorage.getItem("user"));
    setUser(localUser);
      
  }
  function clearStorage() {
    localStorage.clear();

   window.location.reload()
  }
  useEffect(() => {
    getUserFromLocalStorage();
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="nav_logo"><img src={logo} alt="logo"/></div>
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
            {user?.user_exists ? (
              <p onClick={clearStorage}>{user?.email}</p>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <ul className="navbar__list">
            <li className="navbar__list--item">Home</li>
            <li className="navbar__list--item">Events</li>
            <li className="navbar__list--item">Map</li>
            <li className="navbar__list--item">Log In</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
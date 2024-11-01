// components/Navbar.js
import React from "react";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#">Profile</a>
        <a href="#">Events</a>
        <a href="#">Find Track</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;

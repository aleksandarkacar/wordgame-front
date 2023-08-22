import "../styles/Navbar.css";

import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Word Game App
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

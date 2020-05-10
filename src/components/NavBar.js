import React from "react";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navList">
        <li className="navItem">Home</li>
        <li className="navItem">Merch</li>
        <li className="navItem">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;

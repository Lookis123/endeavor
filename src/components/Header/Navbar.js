import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";

const Navbar = ({ sticky }) => {
return (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      <h1> Dimitris</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">About</li>
      <li className="navbar--link-item">Ecosystem</li>
      <li className="navbar--link-item">Resources & events</li>
      <li className="navbar--link-item">Contact</li>
    </ul>
  </nav>
)};
export default Navbar;

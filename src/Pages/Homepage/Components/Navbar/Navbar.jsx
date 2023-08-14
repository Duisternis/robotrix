import React from "react";
import IEEELogo from "./Assets/ieeelogo.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="">
          <img src={IEEELogo} alt="" />
        </a>
        <div>
          <a className="nav-items" href="">
            Home
          </a>
          <a className="nav-items" href="">
            About
          </a>
          <a className="nav-items" href="">
            Schedule
          </a>
        </div>
        <a id="register" className="nav-items" href="">
          Register
        </a>
      </nav>
    </>
  );
}

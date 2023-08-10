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
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Schedule</a>
        </div>
        <a href="">Register</a>
      </nav>
    </>
  );
}

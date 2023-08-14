import React from "react";
// import bgimage from "./Assets/BGimage.png";
import qr from "./Assets/qr.png";
import "./Register.css";

export default function Register() {
  return (
    <div id="register-sec">
      <div className="heading">Register</div>
      <div className="register-section">
        <form action="/" className="reg-content form" method="post">
          <input type="text" required placeholder="Name" />
          <input type="number" required placeholder="Enrollment No." />
          <input type="email" required placeholder="JUIT Email Id" />
          <input type="Number" required placeholder="Contact No." />
        </form>
        <div className="qrimage">
          <img src={qr} alt="" />
        </div>
      </div>
    </div>
  );
}

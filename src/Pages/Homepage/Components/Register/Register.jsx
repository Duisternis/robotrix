import React from "react";
import bgimage from "./Assets/BGimage.png";
import qr from "./Assets/qr.png";
import "./Register.css";

export default function Register() {
  return (
    <main>
      <div className="heading">Register</div>
      <img src={bgimage} alt="" className="bgimage" />
      <div className="content">
        <div>
          <form action="/" method="post">
            <ul className="form">
              <li>
                {" "}
                <input type="text" required placeholder="Name" />
              </li>
              <li>
                {" "}
                <input type="number" required placeholder="Enrollment No." />
              </li>
              <li>
                {" "}
                <input type="email" required placeholder="JUIT Email Id" />
              </li>
              <li>
                {" "}
                <input type="Number" required placeholder="Contact No." />
              </li>
            </ul>
          </form>
        </div>
        <div className="qrimage">
          <img src={qr} alt="" />
        </div>
      </div>
    </main>
  );
}

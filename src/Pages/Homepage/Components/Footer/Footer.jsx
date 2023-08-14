import React from "react";
import "./footer.css";
import sight from "./assets/sight.png";
import ieee from "./assets/ieee.png";
import wie from "./assets/wie.png";
import instagram from "./assets/_Instagram.png";
import facebook from "./assets/_Facebook.png";
import youtube from "./assets/_YouTube.png";
import twitter from "./assets/_Twitter.png";
import linkedIn from "./assets/_Linkedin.png";
import mapImage from "./assets/image1.png";

export default function Footer() {
  return (
    <div id="Footer">
      <div id="logos">
        <img className="logo" src={sight} alt="IEEE_sight" />
        <img className="logo" src={ieee} alt="IEEE_juit" />
        <img className="logo" src={wie} alt="IEEE_wie" />
      </div>
      <div id="info">
        <div id="links">
          <a href="https://www.youtube.com/channel/UC2hmu28LJLJqGnXj3TZwADg">
          <img src={youtube} alt="youtube" />
          </a>
          <a href="https://www.facebook.com/ieeejuitsb/">
          <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/in/ieeejuitsb/">
          <img src={linkedIn} alt="linkedIn" />
          </a>
          <a href="https://www.instagram.com/ieeejuit/">
          <img src={instagram} alt="instagram" />
          </a>
          <a href="https://twitter.com/ieee_juit/">
          <img src={twitter} alt="twitter" />
          </a>
        </div>
        <div id="contact">
          <a href="https://ieeejuit.co.in/">https://ieeejuit.co.in/</a>
          <a href="https://ieee.juit@juitsolan.in">ieee.juit@juitsolan.in</a>
          <a href="+91 7082787975">+91 7082787975</a>
        </div>
        <div id="quickLinks">
          <h3>Quick Links</h3>
          <a href="">IEEE JUIT SB</a>
          <a href="">IEEE JUIT SB WIE</a>
          <a href="">IEEE JUIT SB SIGHT</a>
        </div>
        <div id="mapImage">
          <img src={mapImage} alt="mapImage" />
        </div>
      </div>
        <p id="copyright">COPYRIGHT @IEEE JUIT-SB</p>
    </div>
  )
}

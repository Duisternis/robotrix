import React from "react";
import "./Landing.css";
import car1 from "./assets/car-1.png"
import car2 from "./assets/car-2.png"

export default function Landing() {
  return (
  <div
  className="hero">
    <h1 
    id="hero-text">
      ROBOTRIX
    </h1>
    <h2
    id="hero-subtext">
      Gear up for a high-speed showdown of innovation and skill<br></br>at the Robo Grand Prix - where circuits and bytes collide!
    </h2>
    <div
    className="cars">
      <img 
      id="img-1"
      className="car"
      src={car1} 
      alt="car-1">
      </img>
      <img 
      id="img-2"
      className="car"
      src={car2}
      alt="car-2">
      </img>
    </div>
  </div>
  )
}

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Schedule from "./Components/Schedule/Schedule";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Schedule />
      <Register />
      <Footer />
    </div>
  );
}

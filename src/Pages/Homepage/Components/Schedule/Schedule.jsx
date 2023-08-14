import React from "react";
import "./Schedule.css";
import time from "./assets/time.png"
import venue from "./assets/venue.png"



export default function Schedule() {
  return(
    <div id="Schedule">
      <h1 id="title-schedule">Schedule</h1>
      <div id="events">
        <div 
        className="event" 
        id="event-1">
          <p>Inauguration</p>
        <div className="format">
          <img src={time} alt="time"></img>
          <p>16:00</p>
        </div>
        <div className="format">
          <img src={venue} alt="time"></img>
          <p>LT-3</p>
        </div>
        </div>
      </div>
    </div>
);
}

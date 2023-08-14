import React from "react";
import Clock from "./assets/clock.png";
import Location from "./assets/location.png";
import Layer from "./assets/layer.png";
import "./Schedule.css";
import time from "./assets/time.png"
import venue from "./assets/venue.png"


export default function Schedule() {
  return (
    <section class="cards-container">
      <div class="cards-outer">
        <h1>Schedule</h1>
        <div class="cards-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 443 385"
            class="cards"
          >
            <mask id="svgmask">
              <path
                d="M85.5147 48.3018C121.974 -25.8823 442.181 7.48161 442.181 7.48161C442.181 7.48161 386.911 271.802 339.509 342.302C292.107 412.802 9.61989 371.982 0.89696 376.482C-7.82597 380.982 49.0554 122.486 85.5147 48.3018Z"
                fill="white"
              />
            </mask>
            <image
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref={Layer}
              mask="url(#svgmask)"
            ></image>

            <text x="0%" y="0%" id="text">
              Inauguration
            </text>
            <g id="sub-text">
              <image href={Clock} x="28%" y="40.5%" width="40" height="40" />
              <text x="40%" y="50%" class="sub-text">
                9:00
              </text>
              <image href={Location} x="28%" y="60.5%" width="40" height="40" />
              <text x="40%" y="70%" class="sub-text">
                LT3
              </text>
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 443 385"
            class="cards"
          >
            <mask id="svgmask">
              <path
                d="M85.5147 48.3018C121.974 -25.8823 442.181 7.48161 442.181 7.48161C442.181 7.48161 386.911 271.802 339.509 342.302C292.107 412.802 9.61989 371.982 0.89696 376.482C-7.82597 380.982 49.0554 122.486 85.5147 48.3018Z"
                fill="white"
              />
            </mask>
            <image
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref={Layer}
              mask="url(#svgmask)"
            ></image>

            <text x="0%" y="0%" id="text">
              Inauguration
            </text>
            <g id="sub-text">
              <image href={Clock} x="28%" y="40.5%" width="40" height="40" />
              <text x="40%" y="50%" class="sub-text">
                9:00
              </text>
              <image href={Location} x="28%" y="60.5%" width="40" height="40" />
              <text x="40%" y="70%" class="sub-text">
                LT3
              </text>
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 443 385"
            class="cards"
          >
            <mask id="svgmask">
              <path
                d="M85.5147 48.3018C121.974 -25.8823 442.181 7.48161 442.181 7.48161C442.181 7.48161 386.911 271.802 339.509 342.302C292.107 412.802 9.61989 371.982 0.89696 376.482C-7.82597 380.982 49.0554 122.486 85.5147 48.3018Z"
                fill="white"
              />
            </mask>
            <image
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref={Layer}
              mask="url(#svgmask)"
            ></image>

            <text x="0%" y="0%" id="text">
              Inauguration
            </text>
            <g id="sub-text">
              <image href={Clock} x="28%" y="40.5%" width="40" height="40" />
              <text x="40%" y="50%" class="sub-text">
                9:00
              </text>
              <image href={Location} x="28%" y="60.5%" width="40" height="40" />
              <text x="40%" y="70%" class="sub-text">
                LT3
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

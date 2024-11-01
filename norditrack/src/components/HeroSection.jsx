// components/HeroSection.js
import React from "react";
import image2 from "../images/image2.png";
import "../styles/HeroSection.css";
function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>8-MILE NORDICTRACK</h1>
          <p>
            Welcome to the Nordic Endurance Racing App, your ultimate platform
            for thriving in extreme cold conditions. Join us on an unforgettable
            journey through icy landscapes, inspired by Norse mythology. Are you
            ready to conquer the cold?
          </p>
          <div className="hero-buttons">
            <button className="btn green">Get Started</button>
            <button className="btn grey">Preview</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={image2} alt="Cyclist with bike" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;

// components/Footer.js
import React from "react";
import "../styles/Footer.css";
function Footer() {
  return (
    <footer className="about-us">
      <h2>About Us</h2>
      <p>
        Welcome to the Nordic Endurance Racing App, your ultimate platform for
        preparing and thriving in extreme cold conditions. Join a community of
        adventurers inspired by Norse mythology.
      </p>
      <div className="about-content">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To empower adventurers and endurance racers with the resources and
            community support needed to thrive in extreme cold environments.
          </p>
        </div>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>
            Email: contact@nordicracingapp.com
            <br />
            Phone: (123) 456-7890.
            <br />
            Address: 789 Arctic Way, Glacier City, Nordicland, 12345.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

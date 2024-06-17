import React from 'react';
import './about.css';
import MarioAdrianA from "../images/Mario and Adrian A.jpg";
import MarioAdrianb from "../images/Mario and Adrian b.jpg";

function About() {
  return (
    <section className="about-section">
      <div className="about-content-wrapper">
        <div className="about-content">
          <h1 className="about-title">Little Lemon</h1>
          <h2 className="about-subtitle">Chicago</h2>
          <p className="about-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className="about-images">
        <img src={MarioAdrianA} alt="Mario and Adrian" />
        <img src={MarioAdrianb} alt="Mario and Adrian again" />
        </div>
      </div>
    </section>
  );
}

export default About;
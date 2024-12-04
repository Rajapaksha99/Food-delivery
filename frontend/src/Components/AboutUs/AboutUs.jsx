import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>
          Welcome to our company! We are passionate about delivering exceptional
          products and services to our valued customers.
        </p>
      </header>
      <section className="about-us-content">
        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            To innovate and create value for our customers through dedication
            and creativity.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in providing world-class solutions that make a
            difference.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Our Values</h2>
          <ul>
            <li>Customer First</li>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Collaboration</li>
          </ul>
        </div>
      </section>
      <footer className="about-us-footer">
        <button className="learn-more-btn">Learn More</button>
        <button className="contact-us-btn">Contact Us</button>
      </footer>
    </div>
  );
};

export default AboutUs;

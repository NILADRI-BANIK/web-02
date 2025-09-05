import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* ============================ */}
      {/* Subscription Section          */}
      {/* ============================ */}
      <section className="subscription">
        <h2 className="subscription-title">
          Stay Updated: Subscribe for <br /> Exclusive Content
        </h2>
        <p className="subscription-subtitle">
          Subscribe Now: Get Exclusive Updates and Content!
        </p>
        <div className="subscription-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="subscription-input"
          />
          <button className="subscription-btn">Subscribe Now</button>
        </div>
      </section>

      {/* ============================ */}
      {/* Footer Section                */}
      {/* ============================ */}
      <footer className="footer-content">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <h2 className="footer-brand-name">Smell</h2>
          </div>

          {/* Links */}
          <div className="footer-links-container">
            <div className="footer-links-section">
              <h3 className="footer-section-title">Action</h3>
              <ul className="footer-links">
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact us</a></li>
                <li><a href="#team">Our Team</a></li>
              </ul>
            </div>
            <div className="footer-links-section">
              <h3 className="footer-section-title">Support</h3>
              <ul className="footer-links">
                <li><a href="#shopping">Shopping and returns</a></li>
                <li><a href="#legal">Legal and privacy</a></li>
                <li><a href="#track">Track and order</a></li>
              </ul>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="footer-social">
            <button className="footer-social-btn">Instagram</button>
            <button className="footer-social-btn">Pinterest</button>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>Smell © 2023-2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;

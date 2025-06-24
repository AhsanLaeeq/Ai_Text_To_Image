import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="foot">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Ai Imaage Generator</h2>
          <p>We provide high-quality products and services to make your life easier and better.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@mycompany.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <p className="footer-text">
          Umrahpackage is a division of CNC Services Pty Ltd. and a partnership of a licensed Travel Company in Victoria MTRJ Travel Pty Ltd.
        </p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#umrah-package">Umrah Package</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us Today</h4>
        <p>MTRJ Travel</p>
        <p>118 Walker Street Dandenong, Vic 3175</p>
        <p>CNC Services</p>
        <p>7 Prescott Drive, Cranbourne North, Vic 3977</p>
        <p>0475 402 554</p>
        <p>info@umrahpackage.com.au</p>
      </div>
      <div className="footer-section">
        <h4>Social Links</h4>
        {}
      </div>
    </footer>
  );
}

export default Footer;

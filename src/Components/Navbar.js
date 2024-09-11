import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <div className="top-bar">
        <div className="contact-info">
          <span>📞 0475 402 554</span>
          <span>📧 info@umrahpackage.com.au</span>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src="https://umrahpackage.com.au/wp-content/uploads/2022/07/logo.png" alt="Umrah Package Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

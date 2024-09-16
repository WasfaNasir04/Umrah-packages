import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
    <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
    <li><NavLink to="/About" activeClassName="active">ABOUT US</NavLink></li>
    <li><NavLink to="/ServicePage" activeClassName="active">SERVICES</NavLink></li>
    <li><NavLink to="/Packages" activeClassName="active">PACKAGES</NavLink></li>
    <li><NavLink to="/Gallery" activeClassName="active">GALLERY</NavLink></li>
    <li><NavLink to="/ContactForm" activeClassName="active">CONTACT US</NavLink></li>
  </ul>
</nav>
    </header>
  );
}

export default Navbar;

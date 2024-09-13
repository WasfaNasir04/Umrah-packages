import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-container">
        <div className="about-content">
          <h2>UMRAH PACKAGE</h2>
          <p>
            Umrahpackage is a division of CNC Services Pty Ltd. And a partnership
            of licensed enterprise travel company in Victoria MTRJ Travel Pty Ltd.
            (Helloworld Dendonen), offering reasonable Umrah Packages to the
            Australian Muslim community. The company is backed by people with
            more than 20 years of experience in the travel and tourism industry.
            The company's strength is its exceptional service at an affordable
            price.
          </p>
          <p>
            Our travel agency is well situated to support both the leisure and
            corporate clients, and we look forward to providing the best possible
            advice and service to you when initializing your travel plans.
          </p>
          <p>
            The dynamic team at CNC services and MTRJ travels has a combined
            travel and tourism industry experience of more than 25 years. MTRJ
            travels are a multiple award-winning travel agency including the
            Jetset Travelworld Group “top 10 agencies in Australia”.
          </p>
          <button className="about-btn">View Umrah Packages</button>
        </div>
        <div className="about-image">
          <img
            src="https://umrahpackage.com.au/wp-content/uploads/2022/07/1.jpg"
            alt="Kaaba"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

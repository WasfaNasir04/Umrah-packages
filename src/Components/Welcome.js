import React from 'react';
import './Welcome.css'; 

function WelcomeSection() {
  return (
    <div className="welcome-page">
      
    <section id="welcome" className="welcome-section">
      <div className="welcome-container">
        <h2 className="welcome-title">Welcome To Umrah Packages</h2>
        <div className="underline-text"></div>
        <blockquote className="quote">
          “Proclaim to men the pilgrimage: they will come to thee on foot and on every lean camel, 
          coming from every remote path.” Al Quran
        </blockquote>
        <p className="welcome-description">
          Performing Umrah is like a dream come true for every Muslim because Allah chooses 
          who is eligible to visit the holy lands. We are honored to disclose that Allah has given 
          us the privilege to take his Ummah to the holy lands for Umrah. Umrah gives you the 
          opportunity to connect with Allah and repent for the sins you have committed in your life. 
          Umrah is indeed a life-changing experience for all Muslims around the world.
        </p>
      </div>
    </section>
    </div>
  );
}

export default WelcomeSection;

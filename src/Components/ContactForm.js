import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>  
        </div>
     
    <div className="contact-container">
      {/* Left: Image Section */}
      <div className="left-section">
        <img src="https://umrahpackage.com.au/wp-content/uploads/2022/07/package.jpg" alt="Contact Info" className="left-image"/>
        
        <div className="contact-information">
            <h3>Contact Info</h3>
            <p></p>
          <h2>Mirza Baig - +61469565082</h2>
          <h2>info@umrahpackage.com.au</h2>
        </div>
        
      </div>

      {/* Right: Form Section */}
      <div className="right-section">
  <h2>How Can We Help You?</h2>
  <form>
    <div className="form-group">
      <div className="input-container">
        <label htmlFor="first-name">First Name *</label>
        <input id="first-name" type="text" />
      </div>
      <div className="input-container">
        <label htmlFor="last-name">Last Name *</label>
        <input id="last-name" type="text" />
      </div>
    </div>
    <div className="form-group">
      <div className="input-container">
        <label htmlFor="email">Email Address *</label>
        <input id="email" type="email" />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone Number *</label>
        <input id="phone" type="text" />
      </div>
    </div>
    <div className="form-group">
      <div className="input-container">
        <label htmlFor="start-date">Start Date *</label>
        <input id="start-date" type="date" />
      </div>
      <div className="input-container">
        <label htmlFor="end-date">End Date *</label>
        <input id="end-date" type="date" />
      </div>
    </div>
    <div className="form-group">
      <div className="input-container">
        <label htmlFor="days-makkah">Days in Makkah *</label>
        <input id="days-makkah" type="text" />
      </div>
      <div className="input-container">
        <label htmlFor="days-medina">Days in Medina *</label>
        <input id="days-medina" type="text" />
      </div>
    </div>
    <div className="form-group">
      <div className="input-container">
        <label htmlFor="num-adults">Number of Adults *</label>
        <input id="num-adults" type="number" />
      </div>
      <div className="input-container">
        <label htmlFor="num-children">Number of Children</label>
        <input id="num-children" type="number" />
      </div>
    </div>
    <button type="submit" className="submit-btn">Submit</button>
  </form>
</div>

    </div>
    </div>
  );
};

export default ContactForm;

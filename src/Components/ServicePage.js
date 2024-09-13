import React from 'react';
import './ServicePage.css';  
//import serviceImage from '../src/assets/serviceImage.jpg'; 

const ServicePage = () => {
  return (
    <div className="services-container">
      
      <div className="services-header">
        <h1>Services</h1>
      </div>

      
      <div className="services-content">
        <div className="services-text">
          <h2>Umrah</h2>
          <div className="underline"></div>
          <p>
            Our UMRAH service is the most in-demand service in Australia because no other company
            is providing such packages at an affordable price. The best part of our UMRAH package is that
            it includes Ziyarat as well. You can book our packages from any city in Australia and INSHALLAH
            you will get the best services.
          </p>
          <button className="book-now-btn">BOOK NOW</button>
        </div>
        <div className="services-image">
          <img src="https://umrahpackage.com.au/wp-content/uploads/2022/07/1.jpg" alt="Kaaba" />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

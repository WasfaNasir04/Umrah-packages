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
    


    {/* Ziyarat Section */}
    <section className="ziyarat-section">
  <div className="ziyarat-image">
    <img src="https://umrahpackage.com.au/wp-content/uploads/2022/07/6-1-600x400.jpeg" alt="Ziyarat" />
  </div>
  <div className="ziyarat-content">
    <h2>Ziyarat</h2>
    <div className="underline-ziyarat"></div>
    <p>
      Our Umrah package also includes Ziyarat in which we are going to take you to the holy places in Makkah and Medina. The holy places in Makkah include:
    </p>
    <ul className="ziyarat-list">
      <li>Jannatul Mualia</li>
      <li>Masjid Aisha</li>
      <li>Cave of Hira</li>
      <li>Cave of Thawr</li>
    </ul>
    <p>The holy places in Medina include:</p>
    <ul className="ziyarat-list">
      <li>Masjid e Quba</li>
      <li>Jabal Uhud</li>
      <li>Masjid e Ghamama</li>
    </ul>
    <button className="book-now-btn-ziyarat">BOOK NOW</button>
  </div>
</section>
</div>
  );
};

export default ServicePage;

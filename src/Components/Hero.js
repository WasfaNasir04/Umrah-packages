import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './Hero.css'; 
import madinah from '../images/madinah.jpg'; 

function Hero() {
  return (
    <section id="home" className="hero">
      <Carousel 
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <img src={madinah} alt="Madinah" />
          <div className="hero-caption">
            <h1>Umrah Package</h1>
            <p>Starting From $5370</p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
        <div>
          <img src="https://umrahpackage.com.au/wp-content/uploads/2022/07/s2.jpg" alt="Spiritual Journey" />
          <div className="hero-caption">
            <h1>Spiritual Journey Awaits</h1>
            <p>Explore our range of packages designed for a memorable experience.</p>
            <button className="btn-primary">Explore Packages</button>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default Hero;

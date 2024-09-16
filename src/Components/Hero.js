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
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} className="custom-prev">
              <i className="arrow left"></i>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} className="custom-next">
              <i className="arrow right"></i>
            </button>
          )
        }
      
      >
        <div>
          <img src={madinah} alt="Madinah" />
          <div className="hero-caption">
            <h1>Umrah Package</h1>
            <p>Starting From $5370</p>
            <button className="btn-primary">Details</button>
          </div>
        </div>
        <div>
          <img src="https://umrahpackage.com.au/wp-content/uploads/2022/07/s2.jpg" alt="Spiritual Journey" />
          <div className="hero-caption">
            <h1>Private Package</h1>
            <button className="btn-primary">Details</button>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default Hero;

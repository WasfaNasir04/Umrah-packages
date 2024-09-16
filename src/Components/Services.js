import React from 'react';
import './Services.css'; 

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="underline-text"></div>
        <p className="services-description">
          We provide a range of services that are included in our Umrah Package
        </p>

        <div className="services-cards">
         
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <h3>Umrah</h3>
                <p>We offer the best packages for Umrah for our Muslim community-based in Australia.</p>
              </div>
              <div className="card-back">
                <h2>Umrah</h2>
                <p>
                  Our UMRAH service is the most in-demand service in Australia because no other company is providing such a package at an affordable price.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>

          
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <h3>Ziyarat</h3>
                <p>We take pilgrims to the holy place for Ziyarat in Makkah as well as in Medina.</p>
              </div>
              <div className="card-back">
                <h2>Ziyarat in Makkah</h2>
                <p>
                  Our umrah package also includes Ziyarat in which we are going to take you to the holy places in Makkah and Medina.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>

          
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <h3>Hotel Booking</h3>
                <p>Accommodating our customers in a 5-star hotel to make their Umrah hassle-free.</p>
              </div>
              <div className="card-back">
                <h2>Hotel Booking</h2>
                <p>
                  The hotel in Makkah and Medina we book is the clock tower which is next to Haram in Makkah and Medina.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <h3>Ticketing</h3>
                <p>Ticketing includes both airfare and a visa from the Kingdom of Saudia Arabia.</p>
              </div>
              <div className="card-back">
                <h2>TICKTEING</h2>
                <p>
                The service of ticketing involves the tickets for the plane along with the visa. Once you choose our Umrah package, the process of ticketing and visa is our headache.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        
        </div>
      </div>
       
        <p className="services-more">
        The next Umrah tour is of 12 days which is starting from 22nd September. So what are you waiting for? If you plan to perform Umrah this year, get your package booked<br></br>
        as we have limited numbers.
        </p>
    </section>
  );
}

export default ServicesSection;

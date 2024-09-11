import React from "react";
import './Banner.css';

const BannerSection = () => {
  return (
    <section className="banner-section">
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ICQZ4zxqIVg?autoplay=1&mute=1&loop=1&playlist=ICQZ4zxqIVg&controls=0&showinfo=0&modestbranding=1&fs=0&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="overlay">
        <h1>Do You Want To Perform Umrah?</h1>
        <button className="cta-button">View Private Packages</button>
      </div>
    </section>
  );
};

export default BannerSection;

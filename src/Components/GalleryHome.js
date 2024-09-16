import React from 'react';
import './GalleryHome.css'; // Import your CSS for styling
import image1 from '../images/1-460x295.jpg'; // Import images
import image2 from '../images/2-460x295.jpg';
import image3 from '../images/3-460x295.jpg';
import image4 from '../images/4-460x295.jpg';
import image5 from '../images/5-460x295.jpg';
import image6 from '../images/6-460x295.jpeg';

function GalleryHome() {
  const images = [
    { src: image1, alt: 'Kaaba Image 1' },
    { src: image2, alt: 'Kaaba Image 2' },
    { src: image3, alt: 'Kaaba Image 3' },
    { src: image4, alt: 'Kaaba Image 4' },
    { src: image5, alt: 'Kaaba Image 5' },
    { src: image6, alt: 'Kaaba Image 6' },
  ];

  return (
    
      <section className="gallery-section">
        <h2 className="welcome-title">Gallery</h2>
        <div className="underline-text"></div>
        <div className="gallery-container">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <div className="image-container">
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </div>
      </section>
    
  );
}

export default GalleryHome;

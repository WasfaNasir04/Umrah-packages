import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import About from './Components/About';
import Hero from './Components/Hero';
import WelcomeSection from './Components/Welcome';
import BannerSection from './Components/Banner';
import ServicesSection from './Components/Services';
import Footer from './Components/Footer';
import ServicePage from './Components/ServicePage';
import Packages from './Components/packages';
import ContactForm from './Components/ContactForm';
import Gallery from './Components/Gallery';
import GalleryHome from './Components/GalleryHome';

import './App.css'; // Global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <WelcomeSection />
              <BannerSection />
              <ServicesSection />
              <GalleryHome/>
            </>
          } />
          <Route path="/About" element={<About />} />  
          <Route path="/ServicePage" element={<ServicePage />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

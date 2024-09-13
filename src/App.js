import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import About from './Components/About';
import Hero from './Components/Hero';
import WelcomeSection from './Components/Welcome';
import BannerSection from './Components/Banner';
import ServicesSection from './Components/Services';
import Footer from './Components/Footer';

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
            </>
          } />
          <Route path="/About" element={<About />} />  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

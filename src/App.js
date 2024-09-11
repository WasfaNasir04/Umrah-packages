import React from 'react';
import Navbar from './Components/Navbar'; 
import Hero from './Components/Hero';
import WelcomeSection from './Components/Welcome';
import BannerSection from './Components/Banner';
import ServicesSection from './Components/Services';
import Footer from './Components/Footer';
import './App.css'; // Global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <WelcomeSection />
      <BannerSection/>
      <ServicesSection/>
      <Footer/>
      { }
    </div>
  );
}

export default App;

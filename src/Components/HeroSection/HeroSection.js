import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
  
      <div className="hero-content">
        <h1>Something Here</h1>
        <p>Something Here too.</p>
        <div className="hero-buttons">
          <button className="primary-button">Send a ticket</button>
          <button className="secondary-button">Sign up</button>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import './ScreenshotsSection.css';

const ScreenshotsSection = () => {
  return (
    <section className="screenshots-section">
    
      <div className="screenshots-gallery">
        <img src={`${process.env.PUBLIC_URL}/images/img1.png`} alt="Screenshot 1" />
        <img src={`${process.env.PUBLIC_URL}/images/img2.png`} alt="Screenshot 2" />
        <img src={`${process.env.PUBLIC_URL}/images/img4.jpg`} alt="Screenshot 4" />
        <img src={`${process.env.PUBLIC_URL}/images/img3.jpg`} alt="Screenshot 3" />
      </div>
    </section>
  );
};

export default ScreenshotsSection;

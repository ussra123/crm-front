import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={`${process.env.PUBLIC_URL}/images/up_logo.png`} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#send-a-ticket">Send a ticket</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#sign-uo">Sign Up</a></li>
      </ul>
      <div className="navbar-actions">
        <a href="#login" className="login-btn">Login</a>
        <a href="#try-free" className="cta-btn">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;

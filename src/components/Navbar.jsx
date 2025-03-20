import React from 'react';
import { useState } from 'react';
import '../styles/NavbarStyle.css';
import logo from '../assets/pizza-house-logo-round.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img 
            src={logo}
            alt="Pizza House Logo"
            className="nav-logo"
          />
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#menu" className="nav-item">Menu</a>
          <a href="#drinks" className="nav-item">Drinks</a>
          <a href="#contact" className="nav-item">Contact</a>
          <a href="#order" className="nav-item">Order</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import bekxodLogo from '../assets/bekxod-short-logo.svg';
import pizzaLogo from '../assets/pizza-house-logo-round.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={pizzaLogo} alt="Pizza House Logo" className="footer-logo" />
        <div className="footer-nav">
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
          <a 
            href="https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Order
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>
            developed by{' '}
            <a href="https://bekxod.com" target="_blank" rel="noopener noreferrer">
              bekxod.com
            </a>
            <img src={bekxodLogo} alt="Bekxod Logo" className="bekxod-logo" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

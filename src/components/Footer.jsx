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
            href="https://order.nexbistro.com/store/a2fb7173-b326-4c9e-8cf0-f47421edb88c" 
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

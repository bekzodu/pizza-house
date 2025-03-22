import React from 'react';
import '../styles/Footer.css';
import bekxodLogo from '../assets/bekxod-short-logo.svg';
import pizzaBg from '../assets/pizza.jpg';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${pizzaBg})` }}>
      <div className="footer-overlay"></div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>LOCATION</h3>
          <p>63 E Thompson Ln #103</p>
          <p>Nashville, TN</p>
          <p>37211</p>
        </div>

        <div className="footer-section">
          <h3>HOURS</h3>
          <p>Monday - Sunday</p>
          <p>10:00 AM - 10:00 PM</p>
        </div>

        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>(615) 724-8888</p>
          <p>manager@pizzahouse.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Powered by: 
          <a href="https://bekxod.com" target="_blank" rel="noopener noreferrer">
            <img src={bekxodLogo} alt="Bekxod Logo" className="bekxod-logo" />
          </a>
        </p>
        <a 
          href="https://bekxod.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-link"
        >
          Website design, Social Media marketing and Email marketing provided by Bekxod.
        </a>
      </div>
    </footer>
  );
};

export default Footer;

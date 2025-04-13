import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavbarStyle.css';
import logo from '../assets/pizza-house-logo-round.svg';
import logoNoBg from '../assets/logo-no-bg.svg';

const Navbar = ({ isMenuPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isRequestPage = location.pathname === '/request';

  useEffect(() => {
    if (isContactPage || isRequestPage) {
      setIsScrolled(true);
    } else {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isContactPage, isRequestPage]);

  useEffect(() => {
    // Small delay to ensure the initial hidden state is rendered
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className={`navbar ${isScrolled || isMenuPage || isRequestPage ? 'scrolled menu-page-nav' : ''} ${isLoaded ? 'loaded' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <img 
            src={isScrolled || isMenuPage || isRequestPage ? logoNoBg : logo}
            alt="Pizza House Logo"
            className="nav-logo"
          />
        </Link>

        <div className="navbar-right">
          <div className="social-icons">
            <a href="https://www.instagram.com/pizzahousetn/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://g.co/kgs/WUA6dQC" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
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
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/menu" className="nav-item">Menu</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
          <a 
            href="https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true" 
            className="nav-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

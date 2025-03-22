import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavbarStyle.css';
import logo from '../assets/pizza-house-logo-round.svg';
import logoNoBg from '../assets/logo-no-bg.svg';

const Navbar = ({ isMenuPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isRequestPage = location.pathname === '/request';

  useEffect(() => {
    if (isContactPage || isRequestPage) {
      setIsScrolled(true);
    } else {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isContactPage, isRequestPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled || isMenuPage || isRequestPage ? 'scrolled menu-page-nav' : ''}`}>
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
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
            href="https://order.nexbistro.com/store/a2fb7173-b326-4c9e-8cf0-f47421edb88c" 
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

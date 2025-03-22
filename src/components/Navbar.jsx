import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavbarStyle.css';
import logo from '../assets/pizza-house-logo-round.svg';
import logoNoBg from '../assets/logo-no-bg.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    // If we're on the contact page, set isScrolled to true immediately
    if (isContactPage) {
      setIsScrolled(true);
    } else {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isContactPage]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <img 
            src={isScrolled ? logoNoBg : logo}
            alt="Pizza House Logo"
            className="nav-logo"
          />
        </Link>

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

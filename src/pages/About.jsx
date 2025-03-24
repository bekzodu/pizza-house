import React from 'react';
import '../styles/AboutStyle.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import catering from '../assets/catering.jpg';
import catering2 from '../assets/catering2.jpg';
import catering3 from '../assets/catering3.jpg';
import qualityIcon from '../assets/quality.svg';
import traditionIcon from '../assets/tradition.svg';
import communityIcon from '../assets/community.svg';
import serviceIcon from '../assets/service.svg';

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      
      <div className="about-hero">
        <h1>Our Story</h1>
        <p className="hero-subtitle">Bringing New York Flavor to Nashville</p>
      </div>

      <section className="story-section">
        <div className="story-content">
          <h2>The Pizza House Journey</h2>
          <p>What started as a dream in a small New York kitchen has grown into Nashville's favorite spot for authentic New York-style pizza. Our founder, inspired by childhood memories of folding warm, crispy slices on bustling Manhattan streets, decided to bring that same magical experience to the heart of Tennessee.</p>
          
          <div className="story-grid">
            <div className="story-card">
              <img src={catering} alt="Our restaurant catering service" />
              <h3>Crafted with Passion</h3>
              <p>Every pizza that leaves our kitchen is crafted by skilled artisans who understand that great pizza is a perfect balance of technique and heart.</p>
            </div>

            <div className="story-card">
              <img src={catering2} alt="Pizza House catering setup" />
              <h3>Traditional Methods</h3>
              <p>We stay true to traditional pizza-making methods, using a recipe that's been perfected over generations and ingredients sourced from trusted suppliers.</p>
            </div>

            <div className="story-card">
              <img src={catering3} alt="Pizza House food display" />
              <h3>Community First</h3>
              <p>More than just a pizzeria, we're proud to be part of the Nashville community, serving up slices of joy and creating memories one pizza at a time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Quality</h3>
            <img src={qualityIcon} alt="Quality icon" className="value-icon" />
            <p>We never compromise on ingredients or preparation methods. Every pizza is made with the finest ingredients and attention to detail.</p>
          </div>
          <div className="value-item">
            <h3>Tradition</h3>
            <img src={traditionIcon} alt="Tradition icon" className="value-icon" />
            <p>Our recipes and techniques honor the authentic New York pizza-making tradition, bringing a true slice of the Big Apple to Nashville.</p>
          </div>
          <div className="value-item">
            <h3>Community</h3>
            <img src={communityIcon} alt="Community icon" className="value-icon" />
            <p>We believe in being more than just a restaurant - we're a gathering place for friends, families, and pizza lovers.</p>
          </div>
          <div className="value-item">
            <h3>Service</h3>
            <img src={serviceIcon} alt="Service icon" className="value-icon" />
            <p>Our team is dedicated to providing warm, friendly service that makes every customer feel like part of the Pizza House family.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

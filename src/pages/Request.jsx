import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Request.css';
import wingsImage from '../assets/wings-catering.jpeg';
import slider3 from '../assets/slider3.jpeg';
import slider4 from '../assets/slider4.jpeg';

const Request = () => {
  return (
    <div className="request-container">
      <Navbar />
      
      <div className="request-hero">
        <h1>Catering & Private Events</h1>
        <p>Let us make your next event memorable with our exceptional service and delicious food</p>
      </div>

      <section className="catering-section">
        <div className="section-content">
          <div className="text-content">
            <h2>Catering Services</h2>
            <p>Experience the finest Korean fusion cuisine at your next event. Our catering service brings the bold flavors and unique combinations that Wing It is known for directly to your gathering.</p>
            <p>Whether you're planning a corporate event, wedding reception, or family celebration, our dedicated team ensures that every detail is perfect. We offer:</p>
            <ul>
              <li>Customizable menu options</li>
              <li>Professional setup and service</li>
              <li>Flexible portions for any group size</li>
              <li>Special dietary accommodations</li>
            </ul>
          </div>
          <div className="image-container">
            <img src={wingsImage} alt="Catering spread" />
          </div>
        </div>
      </section>

      <section className="private-party-section">
        <div className="section-content reverse">
          <div className="text-content">
            <h2>Private Party Service</h2>
            <p>Transform your special occasion into an unforgettable experience at Wing It. Let us take care of your party needs with our delicious food and dedicated service.</p>
            <p>Our private party service includes:</p>
            <ul>
              <li>Full-service dining experience</li>
              <li>Dedicated staff to serve your party</li>
              <li>Customizable menu options</li>
              <li>Flexible seating arrangements</li>
              <li>Perfect for small to medium-sized gatherings</li>
            </ul>
            <p>Ideal for birthday celebrations, family gatherings, and casual get-togethers!</p>
          </div>
          <div className="image-grid">
            <img src={slider3} alt="Private party service" />
            <img src={slider4} alt="Restaurant dining" />
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Ready to plan your event? Contact our events team:</p>
        <div className="contact-info">
          <div>
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>events@wingit.com</p>
          </div>
          <div>
            <h3>Hours</h3>
            <p>Monday - Friday: 10AM - 6PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Request;

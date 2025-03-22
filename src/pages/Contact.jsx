import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.328158965006!2d-86.72927502332678!3d36.109862172452026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646fc4c0546811%3A0x2c8a25b6d00b2527!2sPizza%20House!5e0!3m2!1sen!2sus!4v1742623949880!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pizza House Location"
          />
        </div>

        <div className="contact-info">
          <div className="info-section">
            <h2>Hours of Operation</h2>
            <div className="hours">
              <div className="day-time">
                <span>Monday</span>
                <span>10 AM–10 PM</span>
              </div>
              <div className="day-time">
                <span>Tuesday</span>
                <span>10 AM–10 PM</span>
              </div>
              <div className="day-time">
                <span>Wednesday</span>
                <span>10 AM–10 PM</span>
              </div>
              <div className="day-time">
                <span>Thursday</span>
                <span>10 AM–10 PM</span>
              </div>
              <div className="day-time">
                <span>Friday</span>
                <span>10 AM–10 PM</span>
              </div>
              <div className="day-time">
                <span>Saturday</span>
                <span>10 AM–10 PM</span>
              </div>
              <div className="day-time">
                <span>Sunday</span>
                <span>10 AM–10 PM</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2>Contact Information</h2>
            <div className="contact-details">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+16157248888">+1 (615) 724-8888</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:manager@pizzahouse.com">manager@pizzahouse.com</a>
              </p>
              <p>
                <strong>Address:</strong><br />
                Pizza House<br />
                Nashville, TN
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

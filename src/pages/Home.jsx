import React from 'react';
import '../styles/HomeStyle.css';
import Navbar from '../components/Navbar';
import pizzaVideo from '../assets/pizza-house-video.mp4';

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <section className="heroSection">
        <video 
          className="backgroundVideo"
          autoPlay 
          loop 
          muted 
          playsInline
          src={pizzaVideo}
        >
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
};

export default Home;

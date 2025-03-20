import React from 'react';
import '../styles/HomeStyle.css';
import Navbar from '../components/Navbar';
import pizzaVideo from '../assets/pizza-house-video.mp4';
import background from '../assets/background.svg';
import pizza from '../assets/pizza.svg'
import logo from '../assets/logo-no-bg.svg';

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
      
      <section className="splitSection" style={{ backgroundImage: `url(${background})` }}>
        <div className="imageContainer">
          <img 
            src={pizza} 
            alt="New York Style Pizza"
            className="splitImage"
          />
        </div>
        <div className="textContainer">
          <img 
            src={logo} 
            alt="Pizza House Logo"
            className="logoImage"
          />
          <h2>Classic New York Style Pizza</h2>
          <p>Experience the authentic taste of the Big Apple with our hand-tossed, perfectly foldable slices. Made with our signature sauce and premium toppings on a crispy-yet-chewy crust.</p>
          <p>Each pizza is crafted with love using traditional techniques passed down through generations, ensuring you get the most authentic New York pizza experience outside of Manhattan.</p>
          <button className="orderButton">Read More</button>
        </div>
      </section>
    </div>
  );
};

export default Home;

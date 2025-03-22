import React from 'react';
import '../styles/HomeStyle.css';
import Navbar from '../components/Navbar';
import pizzaVideo from '../assets/pizza-house-video.mp4';
import background from '../assets/background.svg';
import pizza from '../assets/pizza.svg'
import logo from '../assets/logo-no-bg.svg';
import catering from '../assets/catering.jpg';
import catering2 from '../assets/catering2.jpg';
import catering3 from '../assets/catering3.jpg';
import breadsticks from '../assets/PizzaHouse_Breadsticks.jpg';
import slider1 from '../assets/slider1.jpeg';
import slider2 from '../assets/slider2.jpeg';
import slider3 from '../assets/slider3.jpeg';
import ImageCarousel from '../components/ImageCarousel';
import FoodCarousel from '../components/FoodCarousel';
import chickenWings from '../assets/PizzaHouse_6PieceChickenWings.jpg';
import caesarSalad from '../assets/PizzaHouse_CaesarSalad.jpg';
import calzone from '../assets/PizzaHouse_Calzone.jpg';
import cheesyBreadsticks from '../assets/PizzaHouse_CheesyBreadsticks.jpg';
import chickenRancherSub from '../assets/PizzaHouse_ChickenRancherSub.jpg';
import houseSalad from '../assets/PizzaHouse_HouseSalad.jpg';
import meatLoversPizza from '../assets/PizzaHouse_MeatloversPizza.jpg';
import mozzarellaSticks from '../assets/PizzaHouse_MozzarellaSticks.jpg';

const Home = () => {
  const carouselImages = [
    {
      url: catering3,
      alt: "Delicious Dessert 1",
      overlay: {
        title: "A Delicious Taste from Pizza House",
        hasButton: true
      }
    },
    {
      url: catering2,
      alt: "Delicious Dessert 2",
    },
    {
      url: catering,
      alt: "Delicious Dessert 3",
    },
    {
      url: breadsticks,
      alt: "Pizza House Breadsticks",
    },
    {
      url: slider1,
      alt: "Slider Image 1",
    },
    {
      url: slider2,
      alt: "Slider Image 2",
    },
    {
      url: slider3,
      alt: "Slider Image 3",
    }
  ];

  const foodItems = [
    {
      image: chickenWings,
      alt: "6 Piece Chicken Wings"
    },
    {
      image: breadsticks,
      alt: "Breadsticks"
    },
    {
      image: caesarSalad,
      alt: "Caesar Salad"
    },
    {
      image: calzone,
      alt: "Calzone"
    },
    {
      image: cheesyBreadsticks,
      alt: "Cheesy Breadsticks"
    },
    {
      image: chickenRancherSub,
      alt: "Chicken Rancher Sub"
    },
    {
      image: houseSalad,
      alt: "House Salad"
    },
    {
      image: meatLoversPizza,
      alt: "Meat Lovers Pizza"
    },
    {
      image: mozzarellaSticks,
      alt: "Mozzarella Sticks"
    }
  ];

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
    
      <section className="splitSection">
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

      <section className="cateringSection">
        <div className="cateringRow">
          <div className="cateringImage">
            <img src={catering3} alt="Corporate Catering Service" />
          </div>
          <div className="cateringText">
            <h2>PARTY CATERING</h2>
            <p>Make your next business meeting or corporate event memorable with our premium catering services. We offer customizable packages that include our signature pizzas, appetizers, and salads, perfect for groups of any size.</p>
            <button className="orderButton">Book Catering</button>
          </div>
        </div>

        <div className="cateringRow reverse">
          <div className="cateringImage">
            <img src={catering2} alt="Private Event Catering" />
          </div>
          <div className="cateringText">
            <div className="bubble-background"></div>
            <h2>Private Events</h2>
            <p>From birthday parties to wedding receptions, let us make your special day unforgettable. Our dedicated catering team ensures fresh, hot pizzas and impeccable service for all your private event needs.</p>
            <button className="orderButton">Learn More</button>
          </div>
        </div>
      </section>

      <section className="orderOnlineSection">
        <h1>ORDER ONLINE</h1>
        <p className="tagline">Our kitchen is just a click away!</p>
        <p className="description">Craving authentic Italian flavors without leaving the comfort of your home?</p>
        <button className="orderButton">ORDER</button>
      </section>

      <section className="imageCarouselSection">
        <ImageCarousel images={carouselImages} />
      </section>

      <FoodCarousel items={foodItems} />
    </div>
  );
};

export default Home;

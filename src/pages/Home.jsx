import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/HomeStyle.css';
import Navbar from '../components/Navbar';
// import background from '../assets/background.svg';
import pizza from '../assets/pizza.svg';
import logo from '../assets/logo-no-bg.svg';
import clip1 from '../assets/clip1.mp4';
import catering2 from '../assets/catering2.jpg';
import catering3 from '../assets/catering3.jpg';
import cateringTruck from '../assets/catering-truck.svg';
// import breadsticks from '../assets/PizzaHouse_Breadsticks.jpg';
// import slider1 from '../assets/slider1.jpeg';
// import slider2 from '../assets/slider2.jpeg';
// import slider3 from '../assets/slider3.jpeg';
import ImageCarousel from '../components/ImageCarousel';
import FoodCarousel from '../components/FoodCarousel';
// import chickenWings from '../assets/PizzaHouse_6PieceChickenWings.jpg';
// import caesarSalad from '../assets/PizzaHouse_CaesarSalad.jpg';
// import calzone from '../assets/PizzaHouse_Calzone.jpg';
// import cheesyBreadsticks from '../assets/PizzaHouse_CheesyBreadsticks.jpg';
// import chickenRancherSub from '../assets/PizzaHouse_ChickenRancherSub.jpg';
// import houseSalad from '../assets/PizzaHouse_HouseSalad.jpg';
// import meatLoversPizza from '../assets/PizzaHouse_MeatloversPizza.jpg';
// import mozzarellaSticks from '../assets/PizzaHouse_MozzarellaSticks.jpg';
import ReviewsCarousel from '../components/ReviewsCarousel';
import pizzaHouseLogoRound from '../assets/pizza-house-logo-round.svg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import confettiPoppers from '../assets/confetti-poppers.svg';
import pizzaPng from '../assets/pizza.png';
import StorageImage from '../components/StorageImage';

const Home = () => {
  const truckRef = React.useRef(null);
  const confettiRef = React.useRef(null);
  const pizzaRef = React.useRef(null);
  const catering3Ref = React.useRef(null);
  const catering2Ref = React.useRef(null);

  React.useEffect(() => {
    const observerCallback = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.disconnect();
      }
    };

    const observerOptions = {
      threshold: 0.1
    };

    const truckObserver = new IntersectionObserver(observerCallback, observerOptions);
    const confettiObserver = new IntersectionObserver(observerCallback, observerOptions);
    const pizzaObserver = new IntersectionObserver(observerCallback, observerOptions);
    const catering3Observer = new IntersectionObserver(observerCallback, observerOptions);
    const catering2Observer = new IntersectionObserver(observerCallback, observerOptions);

    if (truckRef.current) {
      truckObserver.observe(truckRef.current);
    }
    if (confettiRef.current) {
      confettiObserver.observe(confettiRef.current);
    }
    if (pizzaRef.current) {
      pizzaObserver.observe(pizzaRef.current);
    }
    if (catering3Ref.current) {
      catering3Observer.observe(catering3Ref.current);
    }
    if (catering2Ref.current) {
      catering2Observer.observe(catering2Ref.current);
    }

    return () => {
      truckObserver.disconnect();
      confettiObserver.disconnect();
      pizzaObserver.disconnect();
      catering3Observer.disconnect();
      catering2Observer.disconnect();
    };
  }, []);

  const carouselImages = [
    {
      path: "catering3.jpg",
      alt: "Delicious Dessert 1",
      overlay: {
        title: "A Delicious Taste from Pizza House",
        hasButton: true
      }
    },
    {
      path: "catering2.jpg",
      alt: "Delicious Dessert 2",
    },
    {
      path: "catering.jpg",
      alt: "Delicious Dessert 3",
    },
    {
      path: "PizzaHouse_Breadsticks.jpg",
      alt: "Pizza House Breadsticks",
    },
    {
      path: "slider1.jpeg",
      alt: "Slider Image 1",
    },
    {
      path: "slider2.jpeg",
      alt: "Slider Image 2",
    },
    {
      path: "slider3.jpeg",
      alt: "Slider Image 3",
    }
  ];

  const foodItems = [
    {
      path: "PizzaHouse_6PieceChickenWings.jpg",
      alt: "6 Piece Chicken Wings",
      name: "Chicken Wings",
      price: 10.33,
      orderUrl: "https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true"
    },
    {
      path: "PizzaHouse_Breadsticks.jpg",
      alt: "Breadsticks",
      name: "Breadsticks",
      price: 7.23,
      orderUrl: "https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true"
    },
    {
      path: "PizzaHouse_CaesarSalad.jpg",
      alt: "Caesar Salad",
      name: "Caesar Salad",
      price: 8.26,
      orderUrl: "https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true"
    },
    {
      path: "PizzaHouse_Calzone.jpg",
      alt: "Calzone",
      name: "Calzone",
      price: 14.47,
      orderUrl: "https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true"
    },
    {
      path: "PizzaHouse_CheesyBreadsticks.jpg",
      alt: "Cheesy Breadsticks",
      name: "Cheesy Breadsticks",
      price: 9.30,
      orderUrl: "https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true"
    },
    {
      path: "PizzaHouse_ChickenRancherSub.jpg",
      alt: "Chicken Rancher Sub",
      name: "Chicken Rancher Sub",
      price: 9.30,
      orderUrl: "https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true"
    },
    {
      path: "PizzaHouse_HouseSalad.jpg",
      alt: "House Salad",
      name: "House Salad",
      price: 6.19,
      orderUrl: "https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true"
    },
    {
      path: "PizzaHouse_MeatloversPizza.jpg",
      alt: "Meat Lovers Pizza",
      name: "Meat Lovers Pizza",
      price: 13.44,
      priceLabel: "from $13.44",
      orderUrl: "https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true"
    },
    {
      path: "PizzaHouse_MozzarellaSticks.jpg",
      alt: "Mozzarella Sticks",
      name: "Mozzarella Sticks",
      price: 8.26,
      orderUrl: "https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true"
    }
  ];

  const reviews = [
    {
      name: "Teresa B.",
      rating: 5,
      text: "We went here last February 8. Food is good, Ambiance is great, Service is excellent. The owner is very nice and even upgraded my son's small pizza to a size where we can also have some. My son even said \"This is so legit.\" We'll definitely come back!"
    },
    {
      name: "John D.",
      rating: 5,
      text: "Best pizza in town! The crust is perfectly crispy and the toppings are always fresh. Fantastic service too!"
    },
    {
      name: "Sarah M.",
      rating: 5,
      text: "Amazing atmosphere and even better food. The staff goes above and beyond to make sure you have a great experience."
    },
  ];

  return (
    <div className="container">
      <Helmet>
        <title>Pizza House - New York Style Pizza in Nashville</title>
        <meta name="description" content="Experience authentic New York style pizza in Nashville. Hand-tossed pizzas, catering services, and private events. Order online for delivery or pickup." />
        <meta name="keywords" content="pizza, New York style pizza, Nashville pizza, pizza delivery, pizza catering" />
        <meta property="og:title" content="Pizza House - New York Style Pizza in Nashville" />
        <meta property="og:description" content="Experience authentic New York style pizza in Nashville. Hand-tossed pizzas, catering services, and private events." />
        <meta property="og:image" content="/path-to-your-logo-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>
      <Navbar />
      <section className="heroSection">
        <video
          className="backgroundVideo"
          autoPlay
          loop
          muted
          playsInline
          src={clip1}
        >
          Your browser does not support the video tag.
        </video>
      </section>
    
      <section className="splitSection">
        <div className="imageContainer">
          <picture>
            <source media="(min-width: 761px)" srcSet={pizza} />
            <img
              ref={pizzaRef}
              src={pizzaPng}
              alt="New York Style Pizza"
              className="splitImage"
            />
          </picture>
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
          <Link to="/about" className="orderButton">Read More</Link>
        </div>
      </section>

      <section className="cateringSection">
        <div className="cateringRow">
          <div className="cateringImage">
            <img 
              src={catering3}
              alt="Corporate Catering Service" 
              className="catering-slide-image"
              style={{ opacity: 1, transform: 'none' }}
            />
          </div>
          <div className="cateringText">
            <h2>PARTY CATERING</h2>
            <img 
              ref={truckRef}
              src={cateringTruck} 
              alt="Catering Truck" 
              className="catering-truck" 
            />
            <Link to="/request" className="orderButton cateringButton">Book Catering</Link>
            <p>Make your next business meeting or corporate event memorable with our premium catering services. We offer customizable packages that include our signature pizzas, appetizers, and salads, perfect for groups of any size.</p>
          </div>
        </div>

        <div className="cateringRow reverse">
          <div className="cateringImage">
            <img 
              src={catering2}
              alt="Private Event Catering" 
              className="catering-slide-image"
              style={{ opacity: 1, transform: 'none' }}
            />
          </div>
          <div className="cateringText">
            <div className="bubble-background"></div>
            <h2>Private Events</h2>
            <img 
              ref={confettiRef}
              src={confettiPoppers} 
              alt="Confetti Poppers" 
              className="confetti-poppers" 
            />
            <Link to="/request" className="orderButton cateringButton" style={{ position: 'relative', zIndex: 2 }}>Learn More</Link>
            <p>From birthday parties to wedding receptions, let us make your special day unforgettable. Our dedicated catering team ensures fresh, hot pizzas and impeccable service for all your private event needs.</p>
          </div>
        </div>
      </section>

      <section className="orderOnlineSection">
        <h1>ORDER ONLINE</h1>
        <p className="tagline">Our kitchen is just a click away!</p>
        <p className="description">Craving authentic Italian flavors without leaving the comfort of your home?</p>
        <button className="orderButton" onClick={() => window.location.href = "https://www.menu-meal-24.com/ordering/restaurant/menu?company_uid=362e6e4f-f0a4-4e56-bbcc-1da259ad9013&restaurant_uid=e8d0bdc6-747a-4dcb-9c53-3c1bdc36bd2d&facebook=true"}>ORDER</button>
      </section>

      <section className="imageCarouselSection">
        <ImageCarousel images={carouselImages} />
      </section>

      <FoodCarousel items={foodItems} />
      
      <ReviewsCarousel reviews={reviews} />

      <section className="locationSection">
        <div className="locationInfo">
          <h2>FIND US HERE</h2>
          <p className="locationDescription">Visit us for the best New York style pizza in Nashville!</p>
          <div className="addressDetails">
            <img 
              src={pizzaHouseLogoRound} 
              alt="Pizza House Logo" 
              className="locationLogo" 
            />
            <p>63 E Thompson Ln #103</p>
            <p>Nashville, TN 37211</p>
          </div>
        </div>
        <div className="locationMap">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.328158965006!2d-86.72927502332678!3d36.109862172452026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646fc4c0546811%3A0x2c8a25b6d00b2527!2sPizza%20House!5e0!3m2!1sen!2sus!4v1742620923037!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

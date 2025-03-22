import React, { useState, useEffect } from 'react';
import '../styles/FoodCarousel.css';

const FoodCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  
  // Create the extended array of items for infinite scroll
  useEffect(() => {
    // Duplicate the items to create a seamless loop
    setSlides([...items, ...items, ...items]);
  }, [items]);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      const next = prev + 1;
      // If we're at the end of the middle set, jump back to the middle
      if (next >= items.length * 2) {
        return items.length;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      const next = prev - 1;
      // If we're at the start of the middle set, jump to the end of the middle
      if (next < items.length) {
        return items.length * 2 - 1;
      }
      return next;
    });
  };

  // Handle the transition end to create the infinite effect
  const handleTransitionEnd = () => {
    if (currentIndex >= items.length * 2) {
      setCurrentIndex(items.length);
    } else if (currentIndex < items.length) {
      setCurrentIndex(items.length * 2 - 1);
    }
  };

  return (
    <div className="food-carousel">
      <h1>A PEEK INTO THE FOOD</h1>
      <div className="food-carousel-container">
        <button className="nav-button prev" onClick={prevSlide}>
          <span>&#8249;</span>
        </button>
        <div className="food-items-container">
          {slides.map((item, index) => (
            <div
              key={index}
              className="food-item"
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={nextSlide}>
          <span>&#8250;</span>
        </button>
      </div>
    </div>
  );
};

export default FoodCarousel;

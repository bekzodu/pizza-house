import React, { useState, useEffect } from 'react';
import '../styles/FoodCarousel.css';
import StorageImage from './StorageImage';

const FoodCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(items.length);
  const [slides, setSlides] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Create the extended array of items for infinite scroll
  useEffect(() => {
    setSlides([...items, ...items, ...items]);
  }, [items]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // Reset position without animation when reaching the ends
    if (currentIndex >= items.length * 2) {
      setCurrentIndex(items.length);
    } else if (currentIndex < items.length) {
      setCurrentIndex(items.length * 2);
    }
  };

  const handleOrder = (url) => {
    window.location.href = url;
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
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              <StorageImage path={item.path || item.image} alt={item.alt} />
              <div className="food-item-overlay">
                <h3 className="food-item-name">{item.name}</h3>
                <p className="food-item-price">
                  ${item.priceLabel || item.price.toFixed(2)}
                </p>
                <button 
                  className="food-item-order-btn"
                  onClick={() => handleOrder(item.orderUrl)}
                >
                  Order Now
                </button>
              </div>
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

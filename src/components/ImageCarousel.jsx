import React, { useState, useEffect, useRef } from 'react';
import '../styles/ImageCarousel.css';
import StorageImage from './StorageImage';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, images.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div 
      className="carousel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="carousel-arrow prev" onClick={goToPrevious}>
        <span>&#10094;</span>
      </button>
      <button className="carousel-arrow next" onClick={goToNext}>
        <span>&#10095;</span>
      </button>

      <div className="carousel-track">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`carousel-slide ${
              index === currentIndex 
                ? 'active' 
                : index === (currentIndex - 1 + images.length) % images.length 
                ? 'previous' 
                : ''
            }`}
          >
            <StorageImage path={image.path} alt={image.alt} className="carousel-image" />
            {image.overlay && (
              <div className="carousel-content-overlay">
                <h2>{image.overlay.title}</h2>
                {image.overlay.hasButton && (
                  <button 
                    className="carousel-menu-button"
                    onClick={() => window.location.href = '/menu'}
                  >
                    Our Menu
                  </button>
                )}
              </div>
            )}
            {image.caption && (
              <div className="carousel-caption">
                <h3>{image.caption}</h3>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

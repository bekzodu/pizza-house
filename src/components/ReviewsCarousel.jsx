import React, { useState, useEffect } from 'react';
import '../styles/ReviewsCarousel.css';

const ReviewsCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const SCROLL_INTERVAL = 3500;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">REVIEWS</h1>
      <p className="reviews-subtitle">Review by - Google</p>
      
      <div className="reviews-carousel">
        <div className="quote left-quote">❝</div>
        
        <button className="carousel-button prev" onClick={prevReview}>
          ❮
        </button>
        
        <div className="review-content">
          <div className="reviewer-info">
            <span className="reviewer-name">{reviews[currentIndex].name}</span>
            <div className="stars">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
          </div>
          <p className="review-text">
            {reviews[currentIndex].text}
          </p>
        </div>

        <button className="carousel-button next" onClick={nextReview}>
          ❯
        </button>

        <div className="quote right-quote">❞</div>
      </div>

      <div className="carousel-dots">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToReview(index)}
          />
        ))}
      </div>

      <button className="pause-button">
        ⏸
      </button>
    </div>
  );
};

export default ReviewsCarousel;

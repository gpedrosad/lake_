import { useState, useEffect, useRef } from 'react';
import './CardSlider.css';
import Card from '../card/Card';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [totalDots, setTotalDots] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const updateSettings = () => {
      const isSmallScreen = window.innerWidth < 1025;
      setItemsToShow(isSmallScreen ? 1 : 3);
    };

    updateSettings();
    window.addEventListener('resize', updateSettings);

    return () => {
      window.removeEventListener('resize', updateSettings);
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      setTotalDots(Math.ceil(sliderRef.current.children.length / itemsToShow));
    }
  }, [itemsToShow]);

  const nextSlide = () => {
    if (sliderRef.current && currentIndex < sliderRef.current.children.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    if (touchDiff > 50) {
      nextSlide();
    } else if (touchDiff < -50) {
      prevSlide();
    }
  };

  return (
    <div className="slider-component">
      <div className="slider-header">
        <div className="header-content">
          <img 
            src="src/assets/images/hoja1.png" 
            alt="Descripción de la imagen" 
            className="header-image"
          />
          <h1 className="header-title">
            Experiences
          </h1>
          <img 
            src="src/assets/images/hoja2.png" 
            alt="Descripción de la imagen" 
            className="header-image"
          />
        </div>
      </div>
      <div 
        className="slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="slider-button left" onClick={prevSlide}></button>
        <div className="slider-wrapper" ref={sliderRef} style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
          <Card title="Indoor dining" description="Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await." image="src/assets/images/card-image-1.png" />
          <Card title="Outdoor dining" description="Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await." image="src/assets/images/card-image2.png" />
          <Card title="Boat cruise" description="Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await." image="src/assets/images/card-image3.png" />
          <Card title="Indoor dining" description="Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await." image="src/assets/images/card-image-1.png" />
        </div>
        <button className="slider-button right" onClick={nextSlide}></button>
      </div>
      <div className="slider-dots">
        {[...Array(totalDots)].map((_, index) => (
          <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;


import { useState, useEffect, useRef } from 'react';
import './CardSlider.css';
import Card from '../card/Card';

//img
import hoja1 from '/public/images/hoja1.png';
import hoja2 from '/public/images/hoja2.png';
import cardimg1 from '/public/images/card-image-1.jpg';
import cardimg2 from '/public/images/slider-card1.jpeg';
import cardimg3 from '/public/images/slider-card2.jpeg';
import cardimg4 from '/public/images/coming.png';
import bgwhite from '/public/images/Rectangle27.png'

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [totalDots, setTotalDots] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [dragging, setDragging] = useState(false);

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
      const childrenCount = sliderRef.current.children.length;
      setTotalDots(Math.ceil(childrenCount / itemsToShow));
    }
  }, [itemsToShow]);

  const nextSlide = () => {
    if (sliderRef.current) {
      const totalCards = sliderRef.current.children.length;
      if (currentIndex >= totalCards - itemsToShow) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    touchEndX.current = e.touches[0].clientX;
    const touchDiff = touchStartX.current - touchEndX.current;

    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
      sliderRef.current.style.transform = `translateX(calc(${-currentIndex * 100}% - ${touchDiff}px))`;
    }
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    setDragging(false);
    if (touchDiff > 50) {
      nextSlide();
    } else if (touchDiff < -50) {
      prevSlide();
    } else {
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
        sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }
  };

  return (
    <div className="slider-component">
      <div className="slider-header">
        <div className="header-content">
          <img src={hoja1} alt="Descripción de la imagen" className="header-image" />
          <h1 className="header-title">Experiences</h1>
          <img src={hoja2} alt="Descripción de la imagen" className="header-image" />
        </div>
      </div>
      <div className="slider-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <button className="slider-button left" onClick={prevSlide}></button>
        <div className="slider-wrapper" ref={sliderRef} style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
          <Card title="Restaurant" description="A good meal always starts with an appetite. Nestled within the embrace of the rainforest, our family-run business invites you to gather around our tables and experience the warmth and comfort of homemade food." image={cardimg1} textButton='Discover Restaurant' place="restaurant"/>
          <Card title="Boat cruise" description="Let us sweep you away on a gentle journey across the calm waters of Lake Barrine. A time of simple elegance, where nature's beauty and the company of loved ones create unforgettable memories." image={cardimg2} textButton='Discover Boat' place="boat" />
          <Card title="Functions" description="Not a day goes by where we don’t meet someone who shares a memory of a time long ago celebrated at Lake Barrine. The historic Teahouse and the setting of the sun across the water naturally lend themselves to the most special of occasions." image={cardimg3} textButton='Discover Functions' place="functions"/>
          <Card title="Accommodation" description="Step inside and experience the beauty and tranquillity of our lakeside lodge. Whether you're seeking adventure or a moment of quiet reflection, our accommodation provides the perfect base for your exploration." image={cardimg4} textButton='Discover Accommodation' place="accomodation" />
        </div>
        <button className="slider-button right" onClick={nextSlide}></button>
        <img src={bgwhite} className='bg-wh'></img>
      </div>
      <div className="slider-dots">
        {[...Array(totalDots)].map((_, index) => (
          <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index * itemsToShow)}></div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;



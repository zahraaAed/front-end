import carouselImage1 from '../images/carousel/carouselImage1.png';
import Rose from "../images/carousel/cake1.jpg";
import carouselImage3 from '../images/carousel/carouselImage3.png';

import './CarouselStatic.css';
import { useState, useEffect } from 'react';

const HomeCarousel = () => {

  const imageArray = [carouselImage1,Rose, carouselImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="carousel">
        {imageArray.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Image ${index + 1}`} className='carousel-image' />
          </div>
        ))}
    </div>
  );
};

export default HomeCarousel;
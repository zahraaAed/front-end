import Rose from "../images/carousel/cake1.jpg";
import Afif from "../images/carousel/afif-cake.jpg";
import CheeseCake from "../images/carousel/cheesecake.jpg";
import GardenCake from "../images/carousel/gardencake.jpg";
import ThirdCake from "../images/carousel/thirdcake.jpg";
import './CarouselStatic.css';
import { useState, useEffect } from 'react';

const HomeCarousel = () => {

  const imageArray = [Rose, Afif,CheeseCake,GardenCake,ThirdCake];
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
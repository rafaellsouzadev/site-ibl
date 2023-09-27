import React, { useState, useEffect } from 'react';
import './styles/slider.scss';
import imagem1 from './assets/imagem-slider1.jpg';
//import imagem2 from './assets/slider2.png';
//import imagem3 from './assets/imagem-slider3.jpg';

const images: string[] = [imagem1, imagem1, imagem1];

const Slider: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

/*  const sliderStyle  = {
    backgroundImage: `url(${images[currentImage]})`,
    height: '820px',
    width: '1200',
    backgroundSize: 'cover',
  }; */

  return (
    <div className="slider-container">
      <div className="slider-content">
        <img
          //style={sliderStyle}
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className="slider-image"
        />
      </div>
    </div>
  );
};

export default Slider;

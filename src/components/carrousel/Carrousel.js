
import React from "react";
import { useState } from "react";
import FlecheGauche from "../../assets/images/FlecheGauche.png";
import FlecheDroite from "../../assets/images/FlecheDroite.png";
import'./Carrousel.scss';

const Carrousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {images.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="slider__picture" />
            )}
          </div>
        );
      })}
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={FlecheGauche} alt="" className="slider__previous-icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={FlecheDroite} alt="" className="slider__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Carrousel;
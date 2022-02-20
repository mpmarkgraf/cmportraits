import { useState } from "react";

import carouselStyles from "./Carousel.module.css";

import { CarouselData } from "./CarouselData";
import leftArrow from "../../content/left.png";
import rightArrow from "../../content/right.png";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={carouselStyles.slider}>
      <img
        src={leftArrow}
        alt="left arrow"
        className={carouselStyles.leftArrow}
        onClick={prevSlide}
      />
      <img
        src={rightArrow}
        alt="right arrow"
        className={carouselStyles.rightArrow}
        onClick={nextSlide}
      />
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? carouselStyles.slideActive
                : carouselStyles.slide
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="image"
                className={carouselStyles.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;

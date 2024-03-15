import React, { useState } from "react";
import "./carousel.scss";

const Carousel = ({ images, links }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openLink = () => {
    if (links && links[currentImageIndex]) {
      window.open(links[currentImageIndex], "_blank");
    }
  };

  return (
    <section>
      <div className="carousel">
        <button className="arrow" onClick={prevImage}>
          <svg
            className="svgIcon"
            height="2em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>
        <div className="test">
          <img
            src={images[currentImageIndex]}
            alt={`Cover ${currentImageIndex + 1}`}
            
          />
        </div>
        <button className="arrow" onClick={nextImage}>
          <svg
            className="svgIcon"
            height="2em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </div>
      <div className="carousel__add">
        <button className="carousel__linkBtn" onClick={openLink}>
          <svg
            className="svgIcon"
            viewBox="0 0 384 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
          <span className="icon2"></span>
          <span className="tooltip">Link</span>
        </button>
        <button className="carousel__linkBtn" onClick={openLink}>
          <svg
            className="svgIcon"
            viewBox="0 0 384 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
          <span className="icon2"></span>
          <span className="tooltip">Github</span>
        </button>
        <button className="carousel__linkBtn" onClick={openLink}>
          <svg
            className="svgIcon"
            viewBox="0 0 384 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
          <span className="icon2"></span>
          <span className="tooltip">Infos</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;

import React from "react";
import "./styles/Carousel.css";
import imgp1 from "../assets/images/1TIENDA.png"
import imgp2 from "../assets/images/2TIENDA.png"
import imgp3 from "../assets/images/3TIENDA.png"
import Carousel from 'react-bootstrap/Carousel'

function CarouselFn() {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgp1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgp2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgp3}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFn;

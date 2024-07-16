import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Slider1 from '../public/images/slider1.svg';

const CarouselComponent = () => (
  <Carousel>
    <Carousel.Item>
      <Image
        style={{ height: "565px", width: "100%" }}
        src={Slider1}
        alt="Slider 1"
      />
    </Carousel.Item>
    <Carousel.Item>
      <Image
        style={{ height: "565px", width: "100%" }}
        src={Slider1}
        alt="Slider 1"
      />
    </Carousel.Item>
    <Carousel.Item>
      <Image
        style={{ height: "565px", width: "100%" }}
        src={Slider1}
        alt="Slider 1"
      />
    </Carousel.Item>
    <Carousel.Item>
      <Image
        style={{ height: "565px", width: "100%" }}
        src={Slider1}
        alt="Slider 1"
      />
    </Carousel.Item>
    <Carousel.Item>
      <Image
        style={{ height: "565px", width: "100%" }}
        src={Slider1}
        alt="Slider 1"
      />
    </Carousel.Item>
  </Carousel>
);

export default CarouselComponent;

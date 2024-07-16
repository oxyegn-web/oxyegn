"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Slider1 from "../public/images/slider1.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Header,
  Icon,
  IconsContainer,
} from "@/styles/HomeContainer2.style";
import Offer1 from "../public/images/offer1.svg";
import Offer2 from "../public/images/offer2.svg";
import Offer3 from "../public/images/offer3.svg";
import Offer4 from "../public/images/offer4.svg";

import Ad1 from "../public/images/ad1.svg";
import Ad2 from "../public/images/ad2.svg";
import Ad3 from "../public/images/ad3.svg";
import Ad4 from "../public/images/ad4.svg";
import Ad5 from "../public/images/ad5.svg";
import Ad6 from "../public/images/ad6.svg";
import Iphone from "../public/images/iphone.svg";

import ViewAll from "../public/images/viewAll.svg";
import { CardContainer, CartIcon, DiscountBadge, HeartIcon, Price, ProductTitle, RatingBadge, StyledCard, StyledImage, StyledImage2, StyledParagraph } from "./HomeContent2Styled";
import CarouselComponent from "./Carousel";

interface ImageProps {
  src: string;
}

interface ImageContainerProps {
  images: ImageProps[];
}

const ImageContainer: React.FC<ImageContainerProps> = ({ images }) => (
  <div
    style={{
      width: "95%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    {images.map((image, index) => (
      <div
        key={index}
        style={{
          width: "calc(33.3333% - 13.3333px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={image.src}
          alt={`Image ${index + 1}`}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    ))}
  </div>
);

const Card = () => (
  <CardContainer>
    <DiscountBadge>5% OFF</DiscountBadge>
    <HeartIcon>&#9825;</HeartIcon>
    <StyledImage2 src={Iphone} alt="Apple iPhone 13" />
    <ProductTitle>Apple iPhone 13 (128GB)</ProductTitle>
    <Price>
      ₹51,999
      <span>₹59,999</span>
    </Price>
    <RatingBadge>4.5 ★</RatingBadge>
    <CartIcon>&#128722;</CartIcon>
  </CardContainer>
);

const Card1 = () => (
  <StyledCard>
    <StyledImage src={Iphone} alt="Product 1" />
    <StyledParagraph>Apple iPhone 13 (128GB)</StyledParagraph>
  </StyledCard>
);

const HomeContent2 = () => {
  const cards = [<Card1 key={1} />, <Card1 key={2} />, <Card1 key={3} />];

  while (cards.length < 5) {
    cards.push(<div style={{ flex: "1 1 calc(20% - 20px)" }} />);
  }

  return (
    <>
      <CarouselComponent/>
      <Container>
        <Header>Discount Zone</Header>
        <IconsContainer>
          <Icon>
            <Image src={Offer1} alt="Offer 1" />
          </Icon>
          <Icon>
            <Image src={Offer1} alt="Offer 2" />
          </Icon>
          <Icon>
            <Image src={Offer1} alt="Offer 3" />
          </Icon>
          <Icon>
            <Image src={Offer1} alt="Offer 4" />
          </Icon>
        </IconsContainer>
      </Container>

      <ImageContainer images={[{ src: Ad1 }, { src: Ad2 }, { src: Ad3 }]} />

      <div style={{ marginTop: "20px" }}></div>

      <div style={{ width: "95%", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ margin: 0 }}>Fresh Grocery</h1>
          <Image src={ViewAll} alt="View All" />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {cards}
        </div>
      </div>

      <ImageContainer images={[{ src: Ad4 }, { src: Ad5 }, { src: Ad6 }]} />

      <div
        style={{
          width: "95%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div style={{ width: "95%", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ margin: 0 }}>Fresh Grocery</h1>
          <Image src={ViewAll} alt="View All" />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {cards}
        </div>
      </div>


    </>
  );
};

export default HomeContent2;

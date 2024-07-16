"use client";
import React from "react";
import Image from "next/image";
import ProductDetailCard from "./cards/ProductDetailCard";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CardsContainer,
  Container,
  Header,
  HeaderContainer,
  Icon,
  IconsContainer,
  RowContainer,
  Title,
} from "@/styles/HomeContainer2.style";
import Offer1 from "../public/images/offer1.svg";

import Ad1 from "../public/images/ad1.svg";
import Ad2 from "../public/images/ad2.svg";
import Ad3 from "../public/images/ad3.svg";
import Ad4 from "../public/images/ad4.svg";
import Ad5 from "../public/images/ad5.svg";
import Ad6 from "../public/images/ad6.svg";

import ViewAll from "../public/images/viewAll.svg";
import CarouselComponent from "./Carousel";
import AdType1 from "./cards/AdType1";
import HomePageCard from "../components/cards/HomePageCard";

const HomeContent2 = () => {
  const cards = [
    <HomePageCard key={1} />,
    <HomePageCard key={2} />,
    <HomePageCard key={3} />,
  ];

  while (cards.length < 5) {
    cards.push(<div style={{ flex: "1 1 calc(20% - 20px)" }} />);
  }

  return (
    <>
      <CarouselComponent />
      <Container>
        <Header>Discount Zone</Header>
        <IconsContainer>
          {[...Array(4)].map((_, index) => (
            <Icon key={index}>

              <Image src={Offer1} alt={`Offer ${index + 1}`} />
              
            </Icon>
          ))}
        </IconsContainer>
      </Container>

      <AdType1 images={[{ src: Ad1 }, { src: Ad2 }, { src: Ad3 }]} />

      <RowContainer>
        <HeaderContainer>
          <Title>Fresh Grocery</Title>
          <Image src={ViewAll} alt="View All" />
        </HeaderContainer>
        <CardsContainer>{cards}</CardsContainer>
      </RowContainer>

      <AdType1 images={[{ src: Ad4 }, { src: Ad5 }, { src: Ad6 }]} />

      {/* <RowContainer>
        <ProductDetailCard />
        <ProductDetailCard />
        <ProductDetailCard />
        <ProductDetailCard />
      </RowContainer> */}

      <RowContainer>
        <HeaderContainer>
          <Title>Fresh Grocery</Title>
          <Image src={ViewAll} alt="View All" />
        </HeaderContainer>
        <CardsContainer>{cards}</CardsContainer>
      </RowContainer>
    </>
  );
};

export default HomeContent2;
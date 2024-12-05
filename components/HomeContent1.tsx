"use client";
import React from 'react';
import styled from 'styled-components';
import grocery from '../public/images/grocery.svg';
import appliances from '../public/images/appliance.svg';
import beauty from '../public/images/beauty.svg';
import eleltronic from '../public/images/electronic.svg';
import fashion from '../public/images/fashion.svg';
import home from '../public/images/home.svg';
import mobile from '../public/images/mobile.svg';
import toys from '../public/images/toys.svg';
import travel from '../public/images/travel.svg';
import Image from "next/image";
import { Container, Photo, PhotoContainer, PhotoName } from '@/styles/HomeContainer1.style';

const photos = [
  { src: grocery, name: "Grocery" },
  { src: mobile, name: "Mobiles & Tablets" },
  { src: fashion, name: "Fashion" },
  { src: eleltronic, name: "Electronics" },
  { src: home, name: "Home & Furniture" },
  { src: appliances, name: "Appliances" },
  { src: travel, name: "Travel" },
  { src: beauty, name: "Beauty" },
  { src: toys, name: "Toys" },
];

const HomeContent1 = () => {
  return (
    <Container>
      {photos.map((photo, index) => (
        <PhotoContainer key={index}>
          <Photo>
            <Image src={photo.src} alt={photo.name} layout="fill" objectFit="cover" />
          </Photo>
          <PhotoName>{photo.name}</PhotoName>
        </PhotoContainer>
      ))}
    </Container>
  );
};

export default HomeContent1;

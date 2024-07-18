import React from 'react'
import Iphone from "../../public/images/iphone.svg";
import { StyledCard, StyledImage, StyledParagraph } from '@/styles/HomeContainer2.style';

const HomePageCard = () => {
  return (
    <StyledCard>
    <StyledImage src={Iphone} alt="Product 1" />
    <StyledParagraph>Apple iPhone 13 (128GB)</StyledParagraph>
  </StyledCard>
  )
}

export default HomePageCard

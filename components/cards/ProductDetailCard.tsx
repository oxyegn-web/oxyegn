import React from 'react'
import Iphone from "../../public/images/iphone.svg";
import { CardContainer, DiscountBadge, HeartIcon, StyledImage2, ProductTitle, Price, RatingBadge, CartIcon } from '@/styles/HomeContainer2.style';

const ProductDetailCard = () => {
  return (
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
  )
}

export default ProductDetailCard

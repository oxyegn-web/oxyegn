import styled from 'styled-components';
import Image from 'next/image';

export const StyledCard = styled.div`
  flex: 1 1 calc(20% - 20px);
  box-sizing: border-box;
  text-align: center;
  min-width: calc(20% - 20px);
  min-height: 200px;
  margin-bottom: 20px;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  gap: 11px;
`;

export const StyledParagraph = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: center;
  justify-items: center;
  gap: 10px;
`;














export const CardContainer = styled.div`
  width: 30%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: green;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: green;
`;

export const StyledImage2 = styled(Image)`
  width: 100%;
  height: 30vh;
  display: block;
  margin-bottom: 20px;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

export const Price = styled.p`
  font-size: 16px;
  color: green;
  span {
    text-decoration: line-through;
    color: gray;
  }
`;

export const RatingBadge = styled.div`
  background-color: green;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin: 10px 0;
`;

export const CartIcon = styled.div`
  font-size: 24px;
  color: green;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
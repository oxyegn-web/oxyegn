import styled from 'styled-components';
import Image from "next/image";

// 50% off.... 
export const Container = styled.div`
  width: calc(100% - 40px);
  height: 60px;
  margin: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 10px 0px;
  font-weight: bold;
  font-family: sans-serif;
  margin-bottom: 30px;
  text-align: center;
  font-size: 24px;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 10px 0;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: grey; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


//cards list row

export const RowContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;


export const StyledCard = styled.div`
  flex: 1 1 calc(20% - 20px);
  box-sizing: border-box;
  text-align: center;
  min-width: calc(20% - 20px);
  min-height: 200px;
  margin-bottom: 20px;
`;

export const StyledImage = styled(Image)`
/* border: 1px solid rgba(224, 224, 224, 1);
border-radius: 8px; */
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

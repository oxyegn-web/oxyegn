import React from "react";
import Iphone from "../../public/images/iphone.svg";
import Image from "next/image";
import "./card.css";
// import { StyledCard, StyledImage, StyledParagraph } from '@/styles/HomeContainer2.style';

const HomePageCard = () => {
  return (
    <>
      <div className="container">
        <h3>Fresh Grocery</h3>
        <div className="card-container">
          <div className="img-box">
            <div className="img-container">
              <div className="cards">
                <Image src={Iphone} alt="mobile" />
              </div>
            </div>
            <p>Apple iphone 13 (128GB)</p>
          </div>
          <div className="img-box">
            <div className="img-container">
              <div className="cards">
                <Image src={Iphone} alt="mobile" />
              </div>
            </div>
            <p>Apple iphone 13 (128GB)</p>
          </div>
          <div className="img-box">
            <div className="img-container">
              <div className="cards">
                <Image src={Iphone} alt="mobile" />
              </div>
            </div>
            <p>Apple iphone 13 (128GB)</p>
          </div>
          <div className="img-box">
            <div className="img-container">
              <div className="cards">
                <Image src={Iphone} alt="mobile" />
              </div>
            </div>
            <p>Apple iphone 13 (128GB)</p>
          </div>
          <div className="img-box">
            <div className="img-container">
              <div className="cards">
                <Image src={Iphone} alt="mobile" />
              </div>
            </div>
            <p>Apple iphone 13 (128GB)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageCard;

//   <StyledCard>
//   <StyledImage src={Iphone} alt="Product 1" />
//   <StyledParagraph>Apple iPhone 13 (128GB)</StyledParagraph>
// </StyledCard>
// const Card = () => {
//   const cardStyle = {
//     width: '700px',
//     height: '1200px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     overflow: 'hidden',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   const imageStyle = {
//     width: '700px',
//     height: '900px',
//   };

//   return (
//     <div style={cardStyle}>
//       <Image src={Iphone} alt="Product 1" style={imageStyle} />
//     </div>
//   );
// };

// export default Card;

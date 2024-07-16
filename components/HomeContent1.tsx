// "use client"
// import styles from '../styles/HomeContainer1.module.scss'
// import MenuIcon from "@mui/icons-material/Menu";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import { useEffect, useState } from 'react';

// function App() {
//   const [screenSize, setScreenSize] = useState(getCurrentDimension());
//   const [menuOpen, setMenuOpen] = useState(false);
//   const handleMenuOpen = () => {
//     setMenuOpen(!menuOpen);
//   };


//   function getCurrentDimension() {
//     return {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   }


//   useEffect(() => {
//     const updateDimension = () => {
//       setScreenSize(getCurrentDimension());
//     };
//     window.addEventListener("resize", updateDimension);

//     return () => {
//       window.removeEventListener("resize", updateDimension);
//     };
//   }, [screenSize]);
//   return (
//     <div>

//      {/* {screenSize.width > 750 && (
//         <div className={styles.navBarContainer}>
//           <div>
//             <h3 className={styles.logo}>Oxyegn</h3>
//           </div>
//           <div className={styles.topnav}>
//             <a href="#Home">Home</a>
//             <a href="#news">News</a>
//             <a href="#projects">Projects</a>
//             <a href="#careers">Careers</a>
//             <a href="#contact">Contact</a>
//             <a href="#about">About</a>
//           </div>
//         </div>
//       )}

//       {screenSize.width <= 750 && (
//         <div>
//           <div className={styles.navBarContainer}>
//             <div>
//               <h3 className={styles.logo}>Oxyegn</h3>
//             </div>
//             <div className={styles.topnav}>
//               <div className={styles.topnav} onClick={handleMenuOpen}>
//                 <a>
//                   <MenuIcon style={{ fontSize: "200%" }} />
//                 </a>
//               </div>
//             </div>
//           </div>


//           {menuOpen ? (
//             <div>
//               <div className={styles.popupContainer}>
//                 <div className={styles.dialogStyle}>
//                   <div className={styles.boxStyle}>
//                     <div className={styles.mainContent}>
//                       <div className={styles.popupHeader}>
//                         <button
//                           className={styles.closeButton}
//                           onClick={handleMenuOpen}
//                         >
//                           <a>
//                             <MenuIcon
//                               style={{ fontSize: "250%", color: "white" }}
//                             />
//                           </a>
//                         </button>
//                       </div>
//                     </div>
//                     <div className={styles.verticalNav}>
//                       <a>Home</a>
//                       <a href="#news">News</a>
//                       <a href="#projects">Projects</a>
//                       <a href="#careers">Careers</a>
//                       <a href="#contact">Contact</a>
//                       <a href="#about">About</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//       )} */}

//       <div className={styles.overAllcontent}>                  
//         <div className={styles.container}>
//           <div className={styles.overview}>
//             <h2 className={styles.heading2}>Content 1 </h2>
//             <p className={styles.paragraph}>
//              Just content sections, we can give our own content here.
//             </p>
//           </div>
//           <div className={styles.overview}>
//             <h2 className={styles.heading2}> Content 2 </h2>
//             <p className={styles.paragraph}>
//              Just content sections, we can give our own content here.
//             </p>
//           </div>
//         </div>
//       </div>


//       <footer className={styles.footer}>  
//         <div>
//           <p>&copy; 2024 OxyegnO2. All rights reserved.</p>
//         </div>
//         <div className={styles.icons}>
//           <span>
//             <GoogleIcon />
//           </span>
//           <span>
//             <FacebookIcon />
//           </span>
//           <span>
//             <TwitterIcon />
//           </span>
//           <span>
//             <InstagramIcon />
//           </span>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


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

const Container = styled.div`
  height: 154px;
  padding: 20px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
`;

const PhotoContainer = styled.div`
  height: 114px;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Photo = styled.div`
  height: 80px;
  width: 80px;
  position: relative;
`;

const PhotoName = styled.div`
  height: 34px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
`;

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

"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOnlySearch = () => {
    setSearchVisible(!searchVisible);
  };

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return (
    <>
      {screenSize.width > 750 && (
        <nav className={styles.navbar}>
          <div className={styles.logo}>Oxyegn</div>
          <ul className={styles.menu}>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
          <div className={styles.search}>
            <div className={styles.wrapInput}>
              <span className={styles.searchIcon}>&#128269;</span>
              <input
                className={styles.input}
                type="text"
                placeholder="Search for Product"
              />
              <span className={styles.focusBorder}>
                <i></i>
              </span>
            </div>
          </div>
          <div className={styles.icons}>
            <div className={styles.iconItem}>
              <FaUser className={styles.icon} />
              <span>Profile</span>
            </div>
            <div className={styles.iconItem}>
              <FaHeart className={styles.icon} />
              <span>Wishlist</span>
            </div>
            <div className={styles.iconItem}>
              <FaShoppingBag className={styles.icon} />
              <span>Bag</span>
            </div>
          </div>
        </nav>
      )}

      {screenSize.width <= 750 && (
        <div className={styles.navBarContainer}>
          <h3 className={styles.logo2} style={{ marginLeft: "-30px" }}>
            Oxyegn
          </h3>
          {!searchVisible && (
            <>
            <div
              className={styles.searchIconMobile}
              onClick={handleOnlySearch}
            >
              &#128269;
            </div>
              <span className={styles.icon}>
              <FaUser style={{ margin: "10px" }} />
              <FaHeart style={{ margin: "10px" }} />
              <FaShoppingBag style={{ margin: "10px" }} />
            </span>
            <h1 className={styles.menuIcon} onClick={handleMenuOpen}>
              <MenuIcon />
            </h1>
            </>
          )}
          {searchVisible && (
           <div className={styles.wrapInput}>
           <span className={styles.searchIcon}  onClick={handleOnlySearch}>&#128269;</span>
           <input
             className={styles.input}
             type="text"
             placeholder="Search for Product"
           />
           <span className={styles.focusBorder}>
             <i></i>
           </span>
         </div>
          )}
      
        </div>
      )}

      {menuOpen && (
        <div className={styles.popupContainer}>
          <div className={styles.dialogStyle}>
            <div className={styles.boxStyle}>
              <div className={styles.mainContent}>
                <div className={styles.popupHeader}>
                  <button
                    className={styles.closeButton}
                    onClick={handleMenuOpen}
                  >
                    <MenuIcon style={{ fontSize: "250%", color: "white" }} />
                  </button>
                </div>
              </div>
              <div className={styles.verticalNav}>
                <a>Home</a>
                <a href="#news">News</a>
                <a href="#projects">Projects</a>
                <a href="#careers">Careers</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

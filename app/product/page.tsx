"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import grocery from "@/public/images/grocery.svg";
import appliances from "@/public/images/appliance.svg";
import beauty from "@/public/images/beauty.svg";
import eleltronic from "@/public/images/electronic.svg";
import fashion from "@/public/images/fashion.svg";
import home from "@/public/images/home.svg";
import mobile from "@/public/images/mobile.svg";
import toys from "@/public/images/toys.svg";
import travel from "@/public/images/travel.svg";
import Image from "next/image";
import {
  Container,
  Photo,
  PhotoContainer,
  PhotoName,
} from "@/styles/HomeContainer1.style";
import "./page.css";

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
import React, { useState, useEffect } from "react";
import {
  ProductsContainer,
  ProductGrid,
  CategoryTitle,
  ProductCard,
  FilterSection,
  FilterTitle,
  ScrollToTopButton,
} from "@/styles/Products.style";
import ProductDetailCard from "@/components/cards/ProductDetailCard";
import {
  BrandButton,
  BrandContainer,
  CheckboxContainer,
  CheckboxLabel,
  FilterGroup,
  FilterInput,
  FilterLabel,
  PriceInput,
  PriceRangeContainer,
  PriceSlider,
  SeeMoreLink,
} from "@/styles/filter.style";

const page = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    };

    const fetchBrands = async () => {
      const response = await fetch("/api/brands");
      const data = await response.json();
      setBrands(data);
    };

    const fetchRatings = () => {
      const ratingsData: any = [4, 3, 2, 1];
      setRatings(ratingsData);
    };

    const fetchDiscounts = () => {
      const discountsData: any = [40, 30, 20, 10];
      setDiscounts(discountsData);
    };

    fetchCategories();
    fetchBrands();
    fetchRatings();
    fetchDiscounts();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Container>
        {photos.map((photo, index) => (
          <PhotoContainer key={index}>
            <Photo>
              <Image
                src={photo.src}
                alt={photo.name}
                layout="fill"
                objectFit="cover"
              />
            </Photo>
            <PhotoName>{photo.name}</PhotoName>
          </PhotoContainer>
        ))}
      </Container>

      <ProductsContainer>
        <FilterSection>
          <FilterTitle>
            Filter <span>Reset all</span>
          </FilterTitle>

          <FilterGroup>
            <FilterLabel>Categories</FilterLabel>
            <FilterInput as="select">
              <option>Select</option>
              {categories?.map((category: any, index: any) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </FilterInput>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Price</FilterLabel>
            <PriceRangeContainer>
              <PriceInput type="number" placeholder="Min" />
              <PriceInput type="number" placeholder="Max" />
            </PriceRangeContainer>
            <PriceSlider type="range" min="500" max="50000" />
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Brands</FilterLabel>
            <BrandContainer>
              {brands?.map((brand: any, index: any) => (
                <BrandButton key={index}>{brand}</BrandButton>
              ))}
            </BrandContainer>
            <SeeMoreLink>See more</SeeMoreLink>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Rating</FilterLabel>
            <CheckboxContainer>
              {ratings?.map((rating: any, index: any) => (
                <CheckboxLabel key={index}>
                  <input type="checkbox" /> {rating} ★ & above
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
            <SeeMoreLink>See more</SeeMoreLink>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Discount</FilterLabel>
            <CheckboxContainer>
              {discounts?.map((discount: any, index: any) => (
                <CheckboxLabel key={index}>
                  <input type="checkbox" /> {discount}% & more
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
            <SeeMoreLink>See more</SeeMoreLink>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Availability</FilterLabel>
            <FilterInput as="select">
              <option>Select</option>
            </FilterInput>
          </FilterGroup>
        </FilterSection>


        <ProductGrid>
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />

          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
          <ProductDetailCard />
        </ProductGrid>
      </ProductsContainer>
      <Footer />

      <ScrollToTopButton onClick={scrollToTop}>
        ↑
      </ScrollToTopButton>
    </>
  );
};

export default page;

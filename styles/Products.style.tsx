import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const FilterSection = styled.div`
  width: 250px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;

export const ProductGrid = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const FiltersContainer = styled.div`
  margin-bottom: 20px;
`;

export const FilterTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;

export const Filter = styled.div`
  margin-bottom: 10px;
`;

export const PriceRangeInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const CategoryDropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 60px;
  font-weight: 500;
  background: #fff;
  border: 1px solid rgba(35, 46, 65, 0.15);
  border-radius: 50%;
  width: 40px;
  cursor: pointer;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #232e41;
  transition: all 1.5s ease;
  height: 40px;

  &:hover {
    background-color: white;
  }
`;

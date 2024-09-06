import styled from 'styled-components';

export const FilterSection = styled.div`
  width: 256px;
  height: 1252px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const FilterTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterGroup = styled.div`
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const PriceRangeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const PriceInput = styled.input`
  width: 30%;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const PriceSlider = styled.input`
  width: 100%;
  margin: 10px 0;
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

export const BrandButton = styled.button`
  background-color: #f0f4f7;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #e0e6ea;
  }
`;

export const CheckboxContainer = styled.div`
  margin-bottom: 10px;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  input {
    margin-right: 10px;
    width: 10px;
    accent-color: #2E8B57;
  }
`;

export const SeeMoreLink = styled.a`
  font-size: 12px;
  color: #0070f3;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

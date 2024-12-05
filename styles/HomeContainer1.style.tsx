import styled from 'styled-components';

export const Container = styled.div`
  height: 154px;
  padding: 20px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
`;

export const PhotoContainer = styled.div`
  height: 114px;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Photo = styled.div`
  height: 80px;
  width: 80px;
  position: relative;
`;

export const PhotoName = styled.div`
  height: 34px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
`;
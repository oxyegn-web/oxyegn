import styled from 'styled-components';

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
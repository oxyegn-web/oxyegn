"use client";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background: #f2fcfc;
  padding: 40px 40px 0;
  border-radius: 20px;
  width: 100%;
  display: flex;
`;

export const Main = styled.div`
  background-color: black;
  margin: auto;
  width: 100%;
  align-content: center;
  height: 100vh;
`;

export const Box = styled.div`
  width: 30.5rem;
  height: 48.7rem;
  padding: 3rem;
  margin: auto;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 4rem 4rem 6rem rgba(154, 155, 156, 0.486);
  position: relative;

  @media (max-width: 431px) {
    width: 80%;
    height: auto;
    padding: 2rem;
    top: 0;
    border-radius: 8px;
  }
`;

export const Close = styled.div`
  width: 36px;
  height: 36px;
  padding: 8.35px;
  position: absolute;
  top: 1rem;
  font-size: 26px;
  right: 1rem;
  cursor: pointer;
`;

export const Head = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 0px 0.2rem 0.2rem rgba(0, 0, 0, 0.24705882352941178);
`;

export const NextButton = styled.button`
  margin: 2rem 0;
  width: 100%;
  min-height: 3.3rem;
  background-color: rgb(46, 139, 87);
  font-size: 1rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 0.4rem;

  @media (max-width: 431px) {
    margin: 1rem 0;
  }
`;

export const GoogleButton = styled.button`
  margin: 2rem 0;
  width: 100%;
  height: 58px;
  padding: 16px 0;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid rgba(46, 139, 87, 1);
  background: rgba(255, 255, 255, 1);
  color: rgba(46, 139, 87, 1);
  font-size: 20px;

  @media (max-width: 431px) {
    margin: 1rem 0;
  }
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  margin: 2rem 0 0;

  @media (max-width: 431px) {
    margin: 1rem 0;
    gap: 0.5rem 0;
  }
`;

export const Input = styled.input`
  border-radius: 0.4rem;
  padding: 1rem;
  font-size: 1rem;
  outline: 1px solid #cccccc;
  outline-offset: -1px;

  @media (max-width: 431px) {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.7rem;

  @media (max-width: 431px) {
    gap: 0 0.5rem;
  }
`;

export const Line = styled.hr`
  width: 100%;
  min-height: 0.1rem;
  background-color: #cccccc;
  border: none;
  color: #cccccc;

  @media (max-width: 431px) {
    min-height: 0.05rem;
  }
`;

export const Info = styled.div`
  align-items: center;
  color: rgb(169, 169, 169);
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 400;

  @media (max-width: 431px) {
    font-size: 1rem;
  }
`;

export const StyledLink = styled.a`
  color: rgb(0, 123, 255);
  text-decoration: underline;
  font-size: 1.2rem;

  @media (max-width: 431px) {
    font-size: 1rem;
  }
`;

export const Box2 = styled.div`
  width: 30rem;
  height: 38rem;
  padding: 3rem;
  margin: auto;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 4rem 4rem 6rem rgba(154, 155, 156, 0.486);
  position: relative;

  @media (max-width: 431px) {
    width: 80%;
    height: auto;
    padding: 2rem;
    top: 0;
    border-radius: 8px;
  }
`;

export const RememberMeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const CheckboxLabel = styled(Label)`
  margin-left: 0.5rem;
  font-weight: normal;
`;

// export const Checkbox = styled.input`
// width: 25px;
// height: 25px;
// accent-color: green;
// `;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 25px;
  height: 25px;
  accent-color:  rgba(46, 139, 87, 1);
  gap: 0px;
  border-radius: 4px 0px 0px 0px;
  border: 2px 0px 0px 0px;
  opacity: 0px;
`;

export const ForgotPasswordLink = styled(StyledLink)`
  margin: 0;
`;

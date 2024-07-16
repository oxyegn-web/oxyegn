"use client";
import React from "react";
import {
  Box2,
  FlexCol,
  FlexRow,
  GoogleButton,
  Head,
  Info,
  Input,
  Label,
  Line,
  Main,
  NextButton,
  StyledLink,
  CheckboxLabel,
  RememberMeRow,
  Checkbox,
  ForgotPasswordLink
} from "@/styles/Signin.styled";

const page = () => {
  return (
    <>
      <Main>
        <Box2>
          {/* <Close>X</Close> */}
          <Head>Let`s Login</Head>
          <form action="">
            <FlexCol>
              <Label>
                <b>Enter email or mobile number</b>
              </Label>
              <Input type="text" placeholder="sunny@gmail.com" />
            </FlexCol>
            <FlexCol>
              <Label>
                <b>Password</b>
              </Label>
              <Input type="password" placeholder="Enter Password" />
            </FlexCol>
            <RememberMeRow>
              <FlexRow>
                <Checkbox type="checkbox" id="rememberMe" />
                <CheckboxLabel htmlFor="rememberMe">Remember me</CheckboxLabel>
              </FlexRow>
              <ForgotPasswordLink href="/forgot-password">Forgot Password?</ForgotPasswordLink>
            </RememberMeRow>
            <NextButton>Next</NextButton>
            <FlexRow>
              <Line />
              <Info>or</Info>
              <Line />
            </FlexRow>
            <GoogleButton>Continue With Google</GoogleButton>
            <FlexRow style={{ marginLeft: "7rem" }}>
              <Label>New User ?</Label>
              <StyledLink href="/home">Register here</StyledLink>
            </FlexRow>
          </form>
        </Box2>
      </Main>
    </>
  );
};

export default page;

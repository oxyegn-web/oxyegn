"use client";
import React from "react";
import {
  Box,
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
} from "@/styles/Signin.styled";

const page = () => {

  return (
    <>
     <Main>
  <Box>
    {/* <Close>X</Close> */}
    <Head>Create an account</Head>
    <form action="">
      <FlexCol>
        <Label>
          <b>Name</b>
        </Label>
        <Input type="text" placeholder="Enter your full Name" />
      </FlexCol>
      <FlexCol>
        <Label>
          <b>Email</b> <b>( </b>if registered with mobile<b> )</b>
        </Label>
        <Input type="text" placeholder="sunnylathiya7@gmail.com" />
      </FlexCol>
      <FlexCol>
        <Label>
          <b>Create Password</b>
        </Label>
        <Input type="password" placeholder="Enter Password" />
      </FlexCol>
      <FlexCol>
        <Label>
          <b>Confirm Password</b>
        </Label>
        <Input type="password" placeholder="Enter Password" />
      </FlexCol>
      <NextButton>Next</NextButton>
      <FlexRow>
        <Line />
        <Info>or</Info>
        <Line />
      </FlexRow>
      <GoogleButton>Continue With Google</GoogleButton>
      <FlexRow style={{ marginLeft: "5rem"}}>
        <Label>Already have an account?</Label>
        <StyledLink href="/home">Log in</StyledLink>
      </FlexRow>
    </form>
  </Box>
</Main>
    </>
  );
};

export default page;

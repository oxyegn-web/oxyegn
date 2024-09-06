"use client";
import React, { useState } from "react";
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
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { SigninUser } from "@/redux/slices/AuthSlices/AuthSlice";

const Page = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(SigninUser(formData));
      
      if (SigninUser.fulfilled.match(resultAction)) {
        // Redirect to home if login is successful
        router.push("/home");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Login failed:", resultAction.payload || resultAction.error.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <Main>
        <Box2>
          <Head>Let`s Login</Head>
          <form onSubmit={handleSubmit}>
            <FlexCol>
              <Label>
                <b>Enter email or mobile number</b>
              </Label>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="sunny@gmail.com"
              />
            </FlexCol>
            <FlexCol>
              <Label>
                <b>Password</b>
              </Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter Password"
              />
            </FlexCol>
            <RememberMeRow>
              <FlexRow>
                <Checkbox type="checkbox" id="rememberMe" />
                <CheckboxLabel htmlFor="rememberMe">Remember me</CheckboxLabel>
              </FlexRow>
              <ForgotPasswordLink href="/forgot-password">Forgot Password?</ForgotPasswordLink>
            </RememberMeRow>
            <NextButton type="submit">Next</NextButton>
            <FlexRow>
              <Line />
              <Info>or</Info>
              <Line />
            </FlexRow>
            <GoogleButton>Continue With Google</GoogleButton>
            <FlexRow style={{ marginLeft: "7rem" }}>
              <Label>New User?</Label>
              <StyledLink href="/register">Register here</StyledLink>
            </FlexRow>
          </form>
        </Box2>
      </Main>
    </>
  );
};

export default Page;

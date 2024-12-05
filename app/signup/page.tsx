"use client";
import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { SignupUser } from "@/redux/slices/AuthSlices/AuthSlice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
      user: undefined,
      token: "",
      _id: undefined,
      data: "",
      fcmToken: "",
    };

    dispatch(SignupUser(user))

    router.push("/signin");
  };

  return (
    <Main>
      <Box>
        <Head>Create an account</Head>
        <form onSubmit={handleSubmit}>
          <FlexCol>
            <Label>
              <b>Name</b>
            </Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full Name"
            />
          </FlexCol>
          <FlexCol>
            <Label>
              <b>Email</b> <b>( </b>if registered with mobile<b> )</b>
            </Label>
            <Input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="sunnylathiya7@gmail.com"
            />
          </FlexCol>
          <FlexCol>
            <Label>
              <b>Create Password</b>
            </Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
            />
          </FlexCol>
          <FlexCol>
            <Label>
              <b>Confirm Password</b>
            </Label>
            <Input
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleInputChange}
              placeholder="Enter Password"
            />
          </FlexCol>
          <NextButton type="submit">Next</NextButton>
          <FlexRow>
            <Line />
            <Info>or</Info>
            <Line />
          </FlexRow>
          <GoogleButton>Continue With Google</GoogleButton>
          <FlexRow style={{ marginLeft: "5rem" }}>
            <Label>Already have an account?</Label>
            <StyledLink href="/home">Log in</StyledLink>
          </FlexRow>
        </form>
      </Box>
    </Main>
  );
};

export default Page;

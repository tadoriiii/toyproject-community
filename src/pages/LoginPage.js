import React from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import GlobalStyle from "components/GlobalStyle";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Header>
        <Title>Log into</Title>
        <Title>your account</Title>
      </Header>
      <InputWrapper>
        <InputId placeholder="Email" />
        <InputPw placeholder="Password" />
      </InputWrapper>
      <Link to="/Main">
        <SignInWrapper>SIGN IN</SignInWrapper>
      </Link>
    </>
  );
};

export default LoginPage;

const Header = styled.div`
  background-color: #222222;
  width: 375px;
  height: 200px;
`;

const Title = styled.div`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 35px;
  font-weight: 800;
  position: relative;
  top: 50px;
  left: 40px;
  width: 280px;
`;

const InputWrapper = styled.div`
  margin-left: 37.5px;
  margin-top: 70px;
`;
const InputId = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 2px solid #ddd;
`;
const InputPw = styled.input`
  width: 300px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #ddd;
`;

const SignInWrapper = styled.div`
  border: 2px solid black;
  border-radius: 25px;
  background-color: black;
  color: white;
  width: 300px;
  height: 50px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: 10px;
  font-weight: 900;
  font-size: 15px;
  margin-top: 40px;
  margin-left: 37.5px;
`;

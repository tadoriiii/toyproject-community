import React from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import GlobalStyle from "components/GlobalStyle";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      {/* <LoginImage src={"/img/my.jpeg"} alt="Login_img" /> */}
      <LoginImage />
      <Title>Ideal store for </Title>
      <Title>your shopping</Title>
      <UnderBar />
      <Link to="/login">
        <LoginWrapper>SIGN IN WITH EMAIL</LoginWrapper>
      </Link>
      {/* <LoginWrapper>SIGN IN WITH EMAIL</LoginWrapper> */}
    </>
  );
};

export default FirstPage;

const LoginImage = styled.img`
  background-image: url("/img/my.jpeg");
  background-size: 375px 812px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 375px;
  height: 812px;
`;

const Title = styled.div`
  position: relative;
  top: 480px;
  left: 50px;
  background-color: none;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 35px;
  font-weight: 900;
  width: 280px;
`;

const UnderBar = styled.div`
  position: relative;
  top: 500px;
  left: 40px;
  border-bottom: 2px solid gray;
  width: 300px;
`;

const LoginWrapper = styled.button`
  position: relative;
  top: 530px;
  left: 40px;
  border: 2px solid white;
  border-radius: 25px;
  background-color: white;
  width: 300px;
  height: 50px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: 10px;
  font-weight: 900;
  font-size: 17px;
`;

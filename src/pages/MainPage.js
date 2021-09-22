import React from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import GlobalStyle from "components/GlobalStyle";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <BackgroundImg />
      <Title>Make your</Title>
      <Title>purchases as</Title>
      <UnderBar />
      <CategoryWrapper>
        <Link to="/product/electronics">
          <Category>electronics</Category>
        </Link>
        <Link to="/product/jewelery">
          <Category>jewelery</Category>
        </Link>
      </CategoryWrapper>
      <CategoryWrapper>
        <Link to="/product/men">
          <Category>men</Category>
        </Link>
        <Link to="/product/women">
          <Category>women</Category>
        </Link>
      </CategoryWrapper>
    </>
  );
};

export default MainPage;

const BackgroundImg = styled.img`
  background-image: url("/img/cb.jpeg");
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
  top: 400px;
  left: 50px;
  background-color: none;
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 35px;
  font-weight: 900;
  width: 280px;
`;

const UnderBar = styled.div`
  position: relative;
  top: 420px;
  left: 40px;
  border-bottom: 2px solid gray;
  width: 300px;
`;

const CategoryWrapper = styled.div`
  position: relative;
  top: 450px;
  left: 40px;
  width: 300px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Category = styled.button`
  border: 1px solid black;
  border-radius: 25px;
  background-color: black;
  width: 130px;
  height: 50px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding: 7px;
  margin: 0 9px 0 0;
`;

import React from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import GlobalStyle from "components/GlobalStyle";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";

const MainPage = () => {
  const { height } = useWindowSize();
  return (
    <>
      <Global styles={GlobalStyle} />

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

      {/* <BackgroundImg src="/img/cb.jpeg" style={{ height }} /> */}
    </>
  );
};

export default MainPage;

const BackgroundImg = styled.img`
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 1;
  object-fit: cover;
`;

const Title = styled.div`
  position: relative;
  top: 400px;
  left: 50px;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme.colors.primary};
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
  z-index: 2;
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

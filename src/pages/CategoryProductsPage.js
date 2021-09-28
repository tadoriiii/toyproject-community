import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useWindowSize } from "react-use";

import ProductsList from "components/ProductsList";

const getCatgoryName = (category) => {
  switch (category) {
    case "men":
      return "men's clothing";
    case "women":
      return "women's clothing";
    default:
      return category;
  }
};

const CategoryProductsPage = () => {
  const { category } = useParams();
  const productCategory = useMemo(() => getCatgoryName(category), [category]);

  const { height } = useWindowSize();

  return (
    <PageJSX style={{ height: height }}>
      <TopWrapper>
        <LeftWrapper>
          <Link to="/main">
            <BackImage src={"/img/back.png"} alt="back_mark" />
          </Link>
          <CategoryTitle>{productCategory}</CategoryTitle>
        </LeftWrapper>
        <RightWrapper>
          <Link to="/cart">
            <CartImage src={"/img/cart.jpeg"} alt="cart-Img" />
          </Link>
          <Link to="/like">
            <HeartImage src={"/img/heart.png"} alt="haert-Img" />
          </Link>
        </RightWrapper>
      </TopWrapper>
      <ProductsList category={productCategory} />
    </PageJSX>
  );
};

export default CategoryProductsPage;

const PageJSX = styled.div`
  width: 100%;

  padding-top: 50px;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 50px;

  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;

  border-bottom: 1px solid #ddd;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const BackImage = styled.img`
  width: 27px;
  height: 27px;
  margin: 11.5px 0px 0px 10px;

  background-color: none;
`;
const CategoryTitle = styled.div`
  margin: 12px 0px 0px 10px;

  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;
const CartImage = styled.img`
  width: 27px;
  height: 27px;
  margin: 11.5px 8px 0px 0px;
`;
const HeartImage = styled.img`
  width: 27px;
  height: 27px;
  margin-top: 11.5px;
`;
// const ItemWrapper = styled.div`
//   margin-top: 40px;
//   width: 375px;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;

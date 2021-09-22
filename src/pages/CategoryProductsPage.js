import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useWindowSize } from "react-use";

import ProductsList from "components/ProductsList";

const CategoryProductsPage = () => {
  const [productCategory, setProductCategory] = useState("");
  const { category } = useParams();
  const { height } = useWindowSize();

  useEffect(() => {
    if (!category) return;
    if (category !== "men" && category !== "women")
      setProductCategory(category);
    if (category === "men") setProductCategory("men's clothing");
    if (category === "women") setProductCategory("women's clothing");
  }, [category]);

  return (
    <PageJSX style={{ height: height }}>
      <TopWrapper>
        <Link to="/main">
          <BackImage src={"/img/back.png"} alt="back_mark" />
        </Link>
        <CategoryTitle>{productCategory}</CategoryTitle>
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
  position: fixed;
  top: 0;
  left: 0;

  border-bottom: 1px solid #ddd;
`;
const BackImage = styled.img`
  width: 27px;
  height: 27px;
  margin: 15px 0px 0px 10px;

  background-color: none;
`;
const CategoryTitle = styled.div`
  margin: 12px 0px 0px 10px;

  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
`;
// const ItemWrapper = styled.div`
//   margin-top: 40px;
//   width: 375px;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;

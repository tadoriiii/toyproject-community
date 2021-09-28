import React from "react";
import styled from "@emotion/styled";
import { useWindowSize } from "react-use";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const { height } = useWindowSize();
  const { product } = useSelector((state) => ({
    product: state.Product.product,
  }));
  return (
    <PageJSX style={{ height: height }}>
      <Header>
        <Link to="/main">
          <BackImage src={"/img/back.png"} alt="back_mark" />
        </Link>
        <Title>CART</Title>
      </Header>
      {product.map((item) => (
        <ProductWrapper>
          <ProductImage src={item.image} alt="product-img" />
          <ProductDetails>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>${item.price}</ProductPrice>
          </ProductDetails>
        </ProductWrapper>
      ))}
    </PageJSX>
  );
};

export default Cart;

const PageJSX = styled.div`
  width: 100%;

  padding-top: 50px;
`;
const Header = styled.header`
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
`;
const Title = styled.div`
  margin: 12px 0px 0px 10px;

  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
`;
const ProductWrapper = styled.div`
  border-bottom: 2px solid #ddd;
  margin: 20px 20px 0px 20px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 8px;
`;
const ProductImage = styled.img`
  width: 120px;
  height: 200px;
  border: 2px solid #ddd;
  border-radius: 4px;
`;
const ProductDetails = styled.div`
  width: 191px;
  height: 200px;
  margin-left: 20px;
  margin-top: 10px;
`;
const ProductTitle = styled.div`
  height: 170px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
`;
const ProductPrice = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
`;

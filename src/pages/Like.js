import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";

const Like = () => {
  const { height } = useWindowSize();
  const { likes } = useSelector((state) => ({
    likes: state.Product.likes,
  }));
  return (
    <PageJSX style={{ height: height }}>
      <Header>
        <Link to="/main">
          <BackImage src={"/img/back.png"} alt="back_mark" />
        </Link>
        <Title>WISH LIST</Title>
      </Header>
      <ProductWrapper>
        {likes.map((item) => (
          <Product>
            <Link to={`/singleproduct/${item.id}`}>
              <ProductImage src={item.image} alt="product-img" />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>${item.price}</ProductPrice>
            </Link>
          </Product>
        ))}
      </ProductWrapper>
    </PageJSX>
  );
};

export default Like;

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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 20px 0px 20px;
`;
const Product = styled.div`
  width: 167.5px;
  height: 350px;
`;
const ProductImage = styled.img`
  width: 150px;
  height: 200px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-left: 8.75px;
`;
const ProductTitle = styled.div`
  margin-left: 8.75px;
  margin-top: 12px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
`;
const ProductPrice = styled.div`
  margin-left: 8.75px;
  margin-top: 12px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
`;

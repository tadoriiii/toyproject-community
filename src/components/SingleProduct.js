import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";
import { getInformation, getLikeProduct } from "redux/Product";
import { useDispatch } from "react-redux";

const SingleProduct = ({ id }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productCategory, setProductCategory] = useState("");
  const { height } = useWindowSize();

  const fetchProduct = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      if (response.status === 200) {
        const product = response.data;
        setProduct(product);
      } else {
        throw response;
      }
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product.category) return;
    if (product.category !== "men" && product.category !== "women")
      setProductCategory(product.category);
    if (product.category === "men's clothing") setProductCategory("men");
    if (product.category === "women's clothing") setProductCategory("women");
  }, [product.category]);

  const dispatch = useDispatch();
  const getBuyProduct = (product) => dispatch(getInformation(product));
  const getLike = (likes) => dispatch(getLikeProduct(likes));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  return (
    <PageJSX style={{ height: height }}>
      <TopWrapper>
        <Link to={`/product/${productCategory}`}>
          <BackImage src={"/img/back.png"} alt="back_mark" />
        </Link>
      </TopWrapper>
      <ProductImage src={product.image} alt="product-img" />
      <ProductPrice>${product.price}</ProductPrice>
      <ProductTitle>{product.title}</ProductTitle>
      <ButtonWrapper>
        <Link to="/cart">
          <Button onClick={() => getBuyProduct(product)}>Buy</Button>
        </Link>
        <Link to="/like">
          <Button onClick={() => getLike(product)}>Like</Button>
        </Link>
      </ButtonWrapper>
      <Description>description</Description>
      <ProductDescription>{product.description}</ProductDescription>
    </PageJSX>
  );
};

export default SingleProduct;
const PageJSX = styled.div`
  width: 100%;
  padding-top: 50px;
`;
const TopWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
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
const ProductImage = styled.img`
  width: 100%;
  height: 400px;
  margin-top: 20px;
  border: 1px solid #ddd;
`;
const ProductPrice = styled.div`
  margin-top: 28px;
  margin-left: 12px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 600;
`;
const ProductTitle = styled.div`
  margin-top: 8px;
  margin-left: 12px;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 900;
`;
const ButtonWrapper = styled.div`
  width: 100%;

  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Button = styled.div`
  width: 150px;
  height: 35px;
  padding-top: 10px;
  border: 2px solid black;
  border-radius: 4px;
  background-color: black;
  color: white;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
`;
const Description = styled.div`
  margin-top: 16px;
  margin-left: 12px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 600;
`;
const ProductDescription = styled.div`
  margin-top: 16px;
  margin-left: 12px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

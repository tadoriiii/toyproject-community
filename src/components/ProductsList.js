import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ProductsList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      if (response.status === 200) {
        const products = response.data;
        setProducts(products);
      } else {
        throw response;
      }
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  return (
    <>
      <ItemContainer>
        <ItemWrapper>
          {products.map((product) => (
            <Link to={`/singleproduct/${product.id}`}>
              <ItemList key={product.id}>
                <ItemImage src={product?.image} alt="product-img" />
                <ItemTitle>{product.title}</ItemTitle>
                <ItemPrice>${product.price}</ItemPrice>
              </ItemList>
            </Link>
          ))}
        </ItemWrapper>
      </ItemContainer>
    </>
  );
};

export default ProductsList;
const ItemContainer = styled.div`
  width: 375px;
  height: 100%;
  margin-top: 40px;

  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* width: 170px; */
  justify-content: space-around;
  height: 300px;
`;
const ItemList = styled.li`
  list-style: none;
`;
const ItemImage = styled.img`
  height: 200px;
  width: 160px;
  border: 1px solid black;
  border-radius: 8px;
`;
const ItemTitle = styled.div`
  width: 160px;
  margin-left: 2px;
  padding-top: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
`;
const ItemPrice = styled.div`
  width: 160px;
  margin-bottom: 30px;
  margin-left: 2px;
  padding-top: 4px;
  font-size: 14px;
`;

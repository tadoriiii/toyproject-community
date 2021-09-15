import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        setProducts(response.data);
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
  }, []);

  if (loading) return <div>로딩중!</div>;
  if (error) return <div>에러가 발생</div>;

  return (
    <>
      <ItemContainer>
        <ItemWrapper>
          {products.map((product) => (
            <ItemList>
              <ItemImage src={product.image} alt="product-img" />
              <ItemTitle>{product.title}</ItemTitle>
              <ItemPrice>{product.price}</ItemPrice>
            </ItemList>
          ))}
        </ItemWrapper>
      </ItemContainer>
    </>
  );
};

export default Products;

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ItemWrapper = styled.div``;
const ItemList = styled.li`
  list-style: none;
`;
const ItemImage = styled.div`
  height: 300px;
  width: 150px;
`;
const ItemTitle = styled.div``;
const ItemPrice = styled.div``;

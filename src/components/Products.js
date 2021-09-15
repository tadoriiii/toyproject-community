import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <ul>
        {products.map((product) => (
          <li>
            <div>{product.id}</div>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>{product.category}</div>
            <div>{product.description}</div>
            {/* <div>{product.image}</div> */}
            <img src={product.image} alt="product-img" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;

import React from "react";
import SingleProduct from "components/SingleProduct";
import { useParams } from "react-router-dom";
const DetailProduct = () => {
  const { id } = useParams();
  return (
    <>
      <SingleProduct id={id} />
    </>
  );
};

export default DetailProduct;

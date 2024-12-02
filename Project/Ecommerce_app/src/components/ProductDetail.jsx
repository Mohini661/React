import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductListContext } from "../Store/ProductContext";

const ProductDetail = () => {
  const params = useParams();
  const { products } = useContext(ProductListContext);
//   console.log(products);
//   console.log(products.filter((item) => item.id === Number(params.id)));

  return (
    <div>
      {products
        .filter((item) => item.id === Number(params.id))
        .map((i) => {
          return <p>{i.title}</p>;
        })}
      <h1>Product Details</h1>
    </div>
  );
};

export default ProductDetail;

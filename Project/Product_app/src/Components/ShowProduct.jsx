import React, { useEffect, useState } from "react";
import Products from "./Products";
import { Link, useNavigate } from "react-router-dom";

const ShowProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        // console.log(data.products);
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {products.map((product) => (
          <Products key={product.id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default ShowProduct;

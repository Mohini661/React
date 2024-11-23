import React from "react";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          src={product.images}
          alt=""
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
        />
        <h3>{product.title}</h3>
        <div className="card-body">
          <p className="card-text">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  setPage(product);
                }}
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small className="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

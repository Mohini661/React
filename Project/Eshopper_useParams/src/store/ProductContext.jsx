import { createContext, useReducer, useState } from "react";

export const ProductListContext = createContext();

const ProductListContextProvider = ({ children }) => {
  // get Products using useState
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((p) => setProducts(p.products));
  };

  return (
    <ProductListContext.Provider value={{ products, setProducts, getProducts }}>
      {children}
    </ProductListContext.Provider>
  );
};
export default ProductListContextProvider;

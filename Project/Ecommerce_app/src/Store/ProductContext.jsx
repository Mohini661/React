import { createContext, useReducer, useState } from "react";

export const ProductListContext = createContext();

// const ProductReducer = (currentState, action) => {

// };

const ProductListContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts =()=>{
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((p) => setProducts(p.products));
  }
  //   const [productLists, productListDispatcher] = useReducer(ProductReducer, []);

  //   const setInitialProducts = (product) => {
  //     const initialProduct = {
  //       type: "INIT_PRODUCT",
  //       payload: { product },
  //     };
  //     productListDispatcher(initialProduct);
  //   };

  return (
    <ProductListContext.Provider value={{ products, setProducts, getProducts}}>
      {children}
    </ProductListContext.Provider>
  );
};
export default ProductListContextProvider;

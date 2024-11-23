import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ShowProduct from "./Components/ShowProduct";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>
      <Header></Header>
      <ShowProduct  />
      <ProductDetail product={selectedProduct}/>
    </>
  );
}

export default App;

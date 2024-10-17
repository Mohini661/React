import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider/Slider";
import Product from "./Components/Products/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <Slider />
      <Product />
      <Footer />
    </div>
  );
}

export default App;

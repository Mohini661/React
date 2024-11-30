import { useState } from "react";
import Header from "./components/Header";
import Start_Section from "./components/Start_Section";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Start_Section />
      <Products />
      <Footer />
    </>
  );
}

export default App;

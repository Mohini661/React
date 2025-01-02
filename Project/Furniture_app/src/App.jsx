import { useState } from "react";
import Header from "./components/Header";
import Start_Section from "./components/Start_Section";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ProductList from "./screens/ProductList";
import ProductDescription from "./screens/ProductDescription";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-description/:productId" element={<ProductDescription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

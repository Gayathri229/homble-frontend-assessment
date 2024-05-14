import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./screens/ProductList";
import ProductDescription from "./screens/ProductDescription";
import Dashboard from "./screens/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product-description/:productId" element={<ProductDescription />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

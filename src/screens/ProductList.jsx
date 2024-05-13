import React, { useEffect, useState } from "react";
import { getRequest } from "../axios";
import ProductListShimmer from "./ProductListShimmer";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import Header from "./Header";
import useFetchProducts from "../utils/hooks/useFetchProducts";

const ProductList = () => {
  const productsList = useFetchProducts();

  return productsList.length === 0 ? (
    <ProductListShimmer />
  ) : (
    <>
      <Header />
      <AddProduct />
      <div className="product-list-page">
        <div className="product-list">
          {productsList?.map((product) => (
            <Link to={`/product-description/${product?.id}`} key={product?.id}>
              <div className="product">
                <div>
                  <img
                    src={product?.productImage}
                    alt={product?.name}
                    className="product-image"
                  />
                </div>
                <div className="product_name-price">
                  <p className="product-name">{product?.name}</p>
                  <p className="product-price">₹ {product?.selling_price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

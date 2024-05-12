import React, { useEffect, useState } from "react";
import { getRequest } from "../axios";
import ProductListShimmer from "./ProductListShimmer";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import Header from "./Header";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await getRequest("/products");
      console.log(response);
      const sortedProducts = response?.data?.sort(
        (a, b) => a.selling_price - b.selling_price
      );
      setProducts(sortedProducts);
    } catch (error) {
      console.error("Error fetching response", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products.length === 0 ? (
    <ProductListShimmer />
  ) : (
    <>
      <Header />
      <div>
        {/* <AddProduct showModal={showAddProductModal} /> */}
      </div>
      <div className="product-list-page">
        
        <div className="product-list">
          {products?.map((product) => (
            <Link to={`/product-description/${product?.id}`}>
              <div className="product" key={product?.id}>
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

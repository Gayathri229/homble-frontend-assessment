import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../axios";
import Accordion from "./Accordion";

const ProductDescription = () => {
  const { productId } = useParams();
  const [productDescription, setProductDescription] = useState([]);

  const fetchProductDescription = async () => {
    try {
      const prodDescResponse = await getRequest("/products/" + productId);
      console.log(prodDescResponse);
      setProductDescription(prodDescResponse?.data);
    } catch (error) {
      console.error("Error fetching product details", error);
    }
  };

  useEffect(() => {
    fetchProductDescription();
  }, [productId]);

  return productDescription?.length === 0 ? (
    <div className="loading-text">LOADING...</div>
  ) : (
    <div className="product-description-page">
      <div className="product-description">
        <div>
          <img
            src={productDescription?.productImage}
            alt={productDescription?.name}
            className="product_desc-image"
          />
        </div>
        <div>
          <div className="product-detail">
            <p className="product_desc-name">{productDescription?.name}</p>
            <p className="product_desc-price">
              ₹ {productDescription?.selling_price}
            </p>
          </div>

          <div>
            <Accordion
              title={"Product Description"}
              content={productDescription?.description}
            />
          </div>
          <div>
            <Accordion
              title={"Allergen Info"}
              content={productDescription?.allergen_info}
            />
          </div>
          <div>
            <Accordion
              title={"Cooking Instruction"}
              content={productDescription?.cooking_instruction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

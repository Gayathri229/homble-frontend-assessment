import React, { useEffect, useMemo, useState } from "react";
import Accordion from "./Accordion";
import useFetchProductDescription from "../utils/hooks/useFetchProductDescription";

const ProductDescription = () => {
  const productDescriptionResponse = useFetchProductDescription();

  return productDescriptionResponse?.length === 0 ? (
    <div className="loading-text">LOADING...</div>
  ) : (
    <div className="product-description-page">
      <div className="product-description">
        <div>
          <img
            src={productDescriptionResponse?.productImage}
            alt={productDescriptionResponse?.name}
            className="product_desc-image"
          />
        </div>
        <div>
          <div className="product-detail">
            <p className="product_desc-name">
              {productDescriptionResponse?.name}
            </p>
            <p className="product_desc-price">
              ₹ {productDescriptionResponse?.selling_price}
            </p>
          </div>

          <div>
            <Accordion
              title={"Product Description"}
              content={productDescriptionResponse?.description}
            />
          </div>
          <div>
            <Accordion
              title={"Allergen Info"}
              content={productDescriptionResponse?.allergen_info}
            />
          </div>
          <div>
            <Accordion
              title={"Cooking Instruction"}
              content={productDescriptionResponse?.cooking_instruction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

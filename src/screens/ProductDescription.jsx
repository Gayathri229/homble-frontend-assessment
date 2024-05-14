import React from "react";
import Accordion from "./Accordion";
import useFetchProductDescription from "../utils/hooks/useFetchProductDescription";
import { useParams } from "react-router-dom";
import {
  ALLERGEN_INFO_TITLE,
  COOKING_INSTRUCTION_TITLE,
  PROD_DESC_TITLE,
} from "../utils/constants";

const ProductDescription = () => {
  const { productId } = useParams();

  const productDescriptionResponse = useFetchProductDescription({ productId });

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
              title={PROD_DESC_TITLE}
              content={productDescriptionResponse?.description}
            />
          </div>
          <div>
            <Accordion
              title={ALLERGEN_INFO_TITLE}
              content={productDescriptionResponse?.allergen_info}
            />
          </div>
          <div>
            <Accordion
              title={COOKING_INSTRUCTION_TITLE}
              content={productDescriptionResponse?.cooking_instruction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

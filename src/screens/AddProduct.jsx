import React, { useState } from "react";
import { postRequest } from "../axios";

const AddProduct = ({showModal}) => {
  // const [showAddProductModal, setShowAddProductModal] = useState(true);
  const [productName, setProductName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [allergenInfo, setAllergenInfo] = useState("");

  const addProductName = (event) => {
    setProductName(event.target.value);
  };

  const handleAddDescription = (event) => {
    setProdDescription(event.target.value);
  };

  const handleAddAllergenInfo = (event) => {
    setAllergenInfo(event.target.value);
  };

  const handleAddProduct = async () => {
    try {
      const url = "/products";
      const data = {
        productName: productName,
        productDescription: prodDescription,
        allergenInfo: allergenInfo,
      };
      const response = await postRequest(url, data);
      setProductName("");
      setProdDescription("");
      setAllergenInfo("");
      console.log("product added successfully", response);
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  return (
      <div className="add-product">
        {/* <button
          className="add"
          onClick={() => setShowAddProductModal(!showAddProductModal)}
        >
          ADD PRODUCT
        </button> */}
        {showModal && (
          <div className="add-product-modal">
            <div className="add-product-container">
              <form
                onSubmit={(event) => event.preventDefault()}
                className="add-product-form"
              >
                <div className="close-modal" onClick={showModal}>X</div>
                <div className="product-name-input">
                  <label>Product Name</label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(event) => addProductName(event)}
                  />
                </div>

                <div className="product-description-input">
                  <label>Product Description</label>
                  <input
                    type="text"
                    value={prodDescription}
                    onChange={(event) => handleAddDescription(event)}
                  />
                </div>

                <div className="allergen-info-input">
                  <label>Allergen Info</label>
                  <input
                    type="text"
                    value={allergenInfo}
                    onChange={(event) => handleAddAllergenInfo(event)}
                  />
                </div>

                <div className="submit-product-container">
                  <button
                    onClick={handleAddProduct}
                    className="submit-add-product"
                  >
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
  );
};

export default AddProduct;

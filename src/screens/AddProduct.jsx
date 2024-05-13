import React, { useState } from "react";
import { postRequest } from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowModal } from "../utils/appSlice";
import useAddProduct from "../utils/hooks/useAddProduct";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [allergenInfo, setAllergenInfo] = useState("");
  const showModal = useSelector((store) => store.app.showModal);
  const dispatch = useDispatch();
  const handleAddProduct = useAddProduct({
    productName,
    prodDescription,
    allergenInfo,
    setProductName,
    setProdDescription,
    setAllergenInfo,
  });

  const addProductName = (event) => {
    setProductName(event.target.value);
  };

  const handleAddDescription = (event) => {
    setProdDescription(event.target.value);
  };

  const handleAddAllergenInfo = (event) => {
    setAllergenInfo(event.target.value);
  };

  const handleSubmit = () => {
    handleAddProduct();
  };

  const handleCloseModal = () => {
    dispatch(toggleShowModal());
  };

  return (
    <div className="add-product">
      {showModal && (
        <div className="add-product-modal">
          <div className="add-product-container">
            <form
              onSubmit={(event) => event.preventDefault()}
              className="add-product-form"
            >
              <div className="close-modal" onClick={handleCloseModal}>
                X
              </div>
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
                <button onClick={handleSubmit} className="submit-add-product">
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

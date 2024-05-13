import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleShowModal } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleShowModal = () => {
    dispatch(toggleShowModal());
  };

  return (
    <div className="header">
      <div>
        <img src="/Homble_logo.png" alt="logo" className="homble-logo" />
      </div>

      <div>
        <button className="add" onClick={handleShowModal}>
          ADD PRODUCT
        </button>
      </div>
    </div>
  );
};

export default Header;

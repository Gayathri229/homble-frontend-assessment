import React, { useState } from "react";

const Header = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(true);

  return (
    <div className="header">
      <div>
        <img src="/Homble_logo.png" alt="logo" className="homble-logo" />
      </div>

      <div>
        <button
          className="add"
          onClick={() => setShowAddProductModal(!showAddProductModal)}
        >
          ADD PRODUCT
        </button>
      </div>
    </div>
  );
};

export default Header;

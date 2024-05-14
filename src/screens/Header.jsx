import React from "react";
import { useDispatch } from "react-redux";
import { toggleShowModal } from "../utils/appSlice";
import { Link } from "react-router-dom";

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
        <Link to="/dashboard">
          <button className="dashboard-button">DASHBOARD</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

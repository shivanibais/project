import React from "react";
import { useGlobalContext } from "./context";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const { amount } = useGlobalContext();
  return (
    <header>
      <div className="top-container">
        <h1 className="heading">UseReducer</h1>
        <button>
          <FaShoppingBag className="shopping-bag" />
          <span className="items-count">{amount}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

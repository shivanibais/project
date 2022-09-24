import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useGlobalContext } from "./context";

const CartItem = ({ id, title, price, img, amount }) => {
  const { removeItem, increase, decrease } = useGlobalContext();
  return (
    <div className="items-list">
      <img src={img} alt={title} />
      <div className="items">
        <h5 className="item-name">{title}</h5>
        <p className="item-price">${price}</p>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div className="alter-count-div">
        <button className="alter-btn" onClick={() => increase(id)}>
          <FaAngleUp />
        </button>
        {amount}
        <button className="alter-btn" onClick={() => decrease(id)}>
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

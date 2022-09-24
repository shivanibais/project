import React, { useEffect } from "react";
import { FaTimes, FaBorderStyle } from "react-icons/fa";
import { links, social } from "./data";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.backgroundColor = "#787a7c";
    } else {
      document.body.style.backgroundColor = "#f1f5f8";
    }
  }, [isModalOpen]);
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>Modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./GlobalContext";

const Modal = () => {
  const { isModelOpen, closeModel } = useGlobalContext();
  return (
    <div className={isModelOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>modal context</h3>
        <button onClick={closeModel} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;

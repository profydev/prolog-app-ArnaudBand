import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        Hello
      </div>
    </div>
  );
};

export default Modal;

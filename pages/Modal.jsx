import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return isModalOpen ? (
    <div className="modal">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        Hello
      </div>
    </div>
  ) : null;
};

export default Modal;

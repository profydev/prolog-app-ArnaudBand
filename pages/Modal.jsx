import React from "react";
import styled from "styled-components";

const Popup = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const ModalOverlay = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 10rem;
  left: 30rem;
  height: 12rem;
  width: 15rem;
  border-radius: 7%;
`;

const ModalContent = styled.div`
  padding: 0 1rem;
`;
const FlexButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CancelButton = styled.button`
  background: white;
  border: 1px solid black;
  border-radius: 10%;
  padding: 0.4rem;
`;

const SecondButton = styled.button`
  background: blue;
  color: white;
  border-radius: 10%;
  padding: 0.4rem;
  outline: none;
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Popup>
      <ModalOverlay>
        <ModalContent>
          {children}
          <FlexButton>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            <SecondButton>Open an email</SecondButton>
          </FlexButton>
        </ModalContent>
      </ModalOverlay>
    </Popup>
  );
};

export default Modal;

import styled from "styled-components";
import { Routes } from "@config/routes";
// import Link from "next/link";
import Modal from "./Modal";
import { useState } from "react";

const Header = styled.header`
  width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const Container = styled.div`
  // width: 1280px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
`;
const NavItem = styled.li`
  padding: 0 16px;
`;

const NavLink = styled.a`
  color: #667085;
  text-decoration: none;
`;

const HeaderButton = styled.a`
  background-color: #7f56d9;
  color: #fff;
  padding: 10px 18px;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  gap: 8px;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const IssuesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    console.log("Opened.");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header>
        <Container>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/logo-large.svg" alt="Prolog logo" />
          <nav>
            <NavItems>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/documentation">Documentation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pricing">Pricing</NavLink>
              </NavItem>
            </NavItems>
          </nav>
          <HeaderButton href={Routes.projects}>Open Dashboard</HeaderButton>
        </Container>
      </Header>
      <ContactButton onClick={handleButtonClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h1>Opened Modal</h1>
        <p>Content of the modal.</p>
      </Modal>
    </div>
  );
};

export default IssuesPage;

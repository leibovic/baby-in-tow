import styled from "styled-components";
import React, { useCallback, useState } from "react";
import hamburger from "../../icons/hamburger.svg";

const HamburgerPopup = styled.div`
  display: ${props => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;

  & > * {
    padding: 20px 0;
  }

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10 !important;

  padding: 100px 10px 10px;
  margin: 0;

  background-color: white;
  box-shadow: 0px 0px 14px rgba(6, 8, 10, 0.1);
`;

function HamburgerMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen(!isOpen), [setIsOpen, isOpen]);

  return (
    <>
      <input type="image" alt="Toggle menu" src={hamburger} onClick={toggle} />
      <HamburgerPopup open={isOpen}>{children}</HamburgerPopup>
    </>
  );
}

export default HamburgerMenu;

import styled from "styled-components";
import React, { useCallback, useRef, useState } from "react";
import hamburger from "../../icons/hamburger.svg";
import useComponentClicked from "../../hooks/useComponentClicked";

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

  padding: 64px 10px 10px;
  margin: 0;

  background-color: white;
  box-shadow: 0px 0px 14px rgba(6, 8, 10, 0.1);
`;

function HamburgerMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = useCallback(
    event => {
      console.log("togglePopup");
      event.stopPropagation();
      setIsOpen(!isOpen);
    },
    [isOpen]
  );
  const closePopup = useCallback(
    event => {
      if (isOpen) {
        console.log("closing popup");
        event.preventDefault();
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  const popupRef = useRef(null);
  useComponentClicked(popupRef, null, closePopup);

  return (
    <>
      <input
        type="image"
        alt="Toggle menu"
        src={hamburger}
        onClick={togglePopup}
      />
      <HamburgerPopup open={isOpen} ref={popupRef} onClick={closePopup}>
        {children}
      </HamburgerPopup>
    </>
  );
}

export default HamburgerMenu;

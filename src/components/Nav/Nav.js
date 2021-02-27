import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import logo from "../../branding/logo-beta.svg";
import ResponsiveLinkContainer from "./ResponsiveLinkContainer";
import { breakpointSmallMin, breakpointLargeMin } from "../../constants";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  & > * {
    z-index: 20;
  }

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;

  font-size: 14px;
  font-weight: 900;
  line-height: 24px;
  text-transform: uppercase;

  padding: 7px 18px;

  @media (min-width: ${breakpointSmallMin}) {
    padding: 7px 50px;
  }

  @media (min-width: ${breakpointLargeMin}) {
    padding: 7px 100px;
  }
`;

const StyledLogo = styled.img`
  width: 58px;
`;

function Nav() {
  return (
    <StyledNav>
      <Link to="/">
        <StyledLogo src={logo} alt="Baby in Tow" />
      </Link>
      <ResponsiveLinkContainer>
        <Link to="/map">View the map</Link>
        <a
          href="https://forms.gle/yt38Z27Y3SE81q447"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit a tip
        </a>
      </ResponsiveLinkContainer>
    </StyledNav>
  );
}

export default Nav;

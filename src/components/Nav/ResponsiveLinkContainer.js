import React from "react";
import useMedia from "use-media";
import styled from "styled-components";
import { breakpointSmallMin } from "../../constants";
import HamburgerMenu from "./HamburgerMenu";

const LinkContainer = styled.div`
  display: flex;
  & > * {
    padding: 10px;
  }
`;

function ResponsiveLinkContainer({ children }) {
  const isWide = useMedia({ minWidth: breakpointSmallMin });

  if (isWide) {
    return <LinkContainer>{children}</LinkContainer>;
  }

  return <HamburgerMenu>{children}</HamburgerMenu>;
}

export default ResponsiveLinkContainer;

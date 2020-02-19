import React from "react";
import styled, { css } from "styled-components";
import { Marker as ReactMapGLMarker } from "react-map-gl";
import Pin from "./Pin";

const StyledMarker = styled(ReactMapGLMarker)`
  ${props =>
    props.selected
      ? css`
          z-index: 10;
          transform: translate(-23px, -40px);
        `
      : css`
          transform: translate(-15px, -36px);
        `};
  svg {
    cursor: pointer;
  }
`;

const Marker = ({ selected, latitude, longitude, pinColor, onMarkerClick }) => (
  <StyledMarker latitude={latitude} longitude={longitude} selected={selected}>
    <Pin selected={selected} color={pinColor} onClick={onMarkerClick} />
  </StyledMarker>
);

export default Marker;

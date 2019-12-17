import React from 'react';
import styled from 'styled-components';
import { Marker as ReactMapGLMarker } from "react-map-gl";
import Pin from './Pin';
import { categoryColors } from './constants';

const StyledMarker = styled(ReactMapGLMarker)`
  z-index: 10;
  transform: ${props => props.selected 
    ? "translate(-23px,-40px)"
    : "translate(-15px,-36px)"
  };
`;

export const Marker = ({ selected, latitude, longitude }) => {
  const pinColor = location.category
    ? categoryColors[location.category].backgroundColor
    : "white";
  
  return (
    <StyledMarker
      latitude={latitude}
      longitude={longitude}
      selected={selected}
    >
      <Pin selected={selected} color={pinColor} />
    </StyledMarker>
  );
}
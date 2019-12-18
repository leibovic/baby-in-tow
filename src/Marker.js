import React from 'react';
import styled, { css } from 'styled-components';
import { Marker as ReactMapGLMarker } from "react-map-gl";
import { Pin } from './Pin';
import { categoryColors } from './constants';

const StyledMarker = styled(ReactMapGLMarker)`
  cursor: pointer;
  ${props => props.selected ? 
    css`
      z-index: 10;
      transform: translate(-23px,-40px)
    ` : css`
      transform: translate(-15px,-36px);
    `
  };
`;

export const Marker = ({ selected, latitude, longitude, category, onMarkerClick }) => {
  const pinColor = category
    ? categoryColors[category].backgroundColor
    : 'white';
  
  return (
    <StyledMarker
      latitude={latitude}
      longitude={longitude}
      selected={selected}
      onClick={onMarkerClick}
    >
      <Pin selected={selected} color={pinColor} onClick={onMarkerClick} />
    </StyledMarker>
    )
  ;
}
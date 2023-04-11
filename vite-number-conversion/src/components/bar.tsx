import React from 'react';
import styled from 'styled-components';
import Animation from './animation';

const InteractiveSpline = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0px;
  left: 0;
  z-index: 1;
  display: none;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/TennisCourt.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const TransparentDiv = styled.div`
  position: relative;
  height: 239px;
  background-color: transparent;
`;

const Bar = () => {
  return (
    <TransparentDiv>
      <InteractiveSpline><Animation></Animation></InteractiveSpline>
      <ImageContainer />
    </TransparentDiv>
  );
};

export default Bar;
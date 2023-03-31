import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      242.16% 134.58% at 50% 66.86%, 
      rgba(255, 255, 255, 0.052) 0%, 
      rgba(255, 255, 255, 0) 100%
    ) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    linear-gradient(180deg, #293017 0%, #16110E 36.98%, #0A0705 96.35%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: -999;
`;

const VerticalLine = styled.div`
  position: relative;
  width: 2px;
  height: 400px;
  left: calc(50%); /* center line horizontally */
  top: 340px;
  background: #070707;
`;

const HorizontalLine = styled.div`
  position: absolute;
  width: 2px;
  height: 100vw;
  left: 200px;
  top: 540px;
  background: #070707;
  transform: rotate(-90deg);
`;

const Background = () => {
  return (
    <BackgroundWrapper>
      <VerticalLine />
      <HorizontalLine />
    </BackgroundWrapper>
  );
};

export default Background;
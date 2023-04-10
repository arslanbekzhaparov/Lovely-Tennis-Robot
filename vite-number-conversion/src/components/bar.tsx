import React from 'react';
import styled from 'styled-components';
import Animation from './animation';

const InteractiveSpline = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0px;
  left: 0;
  z-index: 1;
  // display: none;
`;

const CounterContainer = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  font-size: 128px;
  line-height: 150px;
  color: #D1F851;
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
      {/* <CounterContainer>999</CounterContainer> */}
    </TransparentDiv>
  );
};

export default Bar;
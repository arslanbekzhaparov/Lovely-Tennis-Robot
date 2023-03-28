import React from 'react';
import styled from 'styled-components';

const InteractiveSpline = styled.div`
  // add your Interactive Spline styles here
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
      <InteractiveSpline />
      <CounterContainer>999</CounterContainer>
    </TransparentDiv>
  );
};

export default Bar;
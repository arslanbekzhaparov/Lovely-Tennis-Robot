import React from 'react';
import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
  0% {
    box-shadow: 0;
  }
  25% {
    box-shadow: inset 0 0 20px 5px #D1F851;
  }
  50% {
    box-shadow: inset 0 0 120px 5px #D1F851;
  }
  75% {
    box-shadow: inset 0 0 20px 5px #D1F851;
  }
  100% {
    box-shadow: 0;
  }
`;

const BackgroundAnimation = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: radial-gradient(
        242.16% 134.58% at 50% 66.86%,
        rgba(255, 255, 255, 0.052) 0%,
        rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(180deg, #293017 0%, #16110E 36.98%, #0A0705 96.35%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
`;

const OuterRing = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 5px solid #738332;
`;

const InnerRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 2px);
  height: calc(100% - 3px);
  border-radius: 100%;
  border: 5px solid #738332;
  animation: ${breatheAnimation} 4s linear infinite;
`;

const Loading = () => {
  return (
    <BackgroundAnimation>
    <Container>
      <OuterRing>
        <InnerRing />
      </OuterRing>
    </Container>
    </BackgroundAnimation>
  );
};

export default Loading;
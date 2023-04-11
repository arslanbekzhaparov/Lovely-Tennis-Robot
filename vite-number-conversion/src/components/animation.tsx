import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';
import Counter from './counter';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  width: 100px;
  height: 100px;
`;


const Animation = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
    if (canvas) {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/mrYzjx25kF9KU0n4/scene.splinecode');
    }
  }, []);

  return (
    <Container>
      <Canvas id="canvas3d" />
      <CounterContainer>
        {/* <Counter size={100} z-index={-2} /> */}
      </CounterContainer>
    </Container>
  );
};

const CounterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

export default Animation;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface CounterProps {
  size: number;
}

interface CounterState {
  count: number;
}

const CounterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 128px;
  line-height: 150px;
  z-score: -2;
`;

const Counter = ({ size }: CounterProps) => {
  const [count, setCount] = useState<CounterState>({ count: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => {
        const newCount = c.count + 1;
        return { count: newCount > 99 ? 0 : newCount };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getGradientColor = (count: number) => {
    const percent = count % 2;
    const startColor = [209, 248, 81]; // #D1F851 in RGB
    const endColor = [248, 81, 81]; // #F85151 in RGB
    const color = startColor.map((startVal, i) => {
      const endVal = endColor[i];
      return Math.round(startVal + (endVal - startVal) * percent / 10);
    });
    return `rgb(${color.join(',')})`;
  };

  return (
    <CounterWrapper style={{ fontSize: size }}>
      <span style={{ color: getGradientColor(count.count) }}>{count.count}</span>
    </CounterWrapper>
  );
};

export default Counter;
import React, { useState } from 'react';
import styled from 'styled-components';
import Decrement from '/Decrement.svg'
import Increment from '/Increment.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
`;

const Number = styled.div`
  font-family: 'Syncopate';
  font-style: normal;
  font-weight: 700;
  font-size: 170px;
  line-height: 133px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #D9FD6E;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Mode = () => {
    const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
      if (count < 3) {
        setCount(count + 1);
      }
    };
  
    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    return (
      <Wrapper>
        <Button src={Increment} onClick={handleIncrement} />
        <Number>{count}</Number>
        <Button src={Decrement} onClick={handleDecrement} />
      </Wrapper>
    );
  };
  
  export default Mode;
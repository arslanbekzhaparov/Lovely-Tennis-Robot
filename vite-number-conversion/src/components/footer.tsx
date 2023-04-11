import React, { useState } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 170px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const StateButton = styled.button<ButtonProps>`
  width: 360px;;
  height: 100px;
  top: 40px;
  position: relative;
  background-image: ${(props) =>
    props.isActive
      ? "url('/stateon.svg')"
      : "url('/stateoff.svg')"};
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  border: none;
  display: none;
`;

const LastSpace = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <StateButton onClick={handleClick} isActive={isActive} />
    </Container>
  );
};

export default LastSpace;
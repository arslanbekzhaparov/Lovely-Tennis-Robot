import React, { useState } from 'react';
import styled from 'styled-components';

interface PowerButtonProps {
  size?: number;
}

interface ButtonProps {
  size: number;
  isOn: boolean;
}

const PowerButtonWrapper = styled.div<PowerButtonProps>`
  display: inline-block;
  cursor: pointer;
  user-select: none;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const Button = styled.div<ButtonProps>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  // background-color: ${props => props.isOn ? '#98fb98' : '#803B1E'};
  background-color: #ffffff;
  opacity: .00001;
  transition: background-color 0.3s ease;
  
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background: black;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(25px);
    border-radius: 50%;
    opacity: ${props => props.isOn ? 0 : 1};
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(${props => props.isOn ? 1 : 0});
    width: 100%;
    height: 100%;
    background-color: #728331;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;

const PowerButton: React.FC<PowerButtonProps> = ({ size = 50 }) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <PowerButtonWrapper size={size} onClick={handleClick}>
      <Button size={size} isOn={isOn} />
    </PowerButtonWrapper>
  );
};

export default PowerButton;
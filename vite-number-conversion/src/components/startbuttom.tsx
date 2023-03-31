import React from 'react';
import styled from 'styled-components';
import startButtonImage from '/Startbutton.svg';

const StartButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: #2D3142;
  width: 130px;
  height: 120px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: 30px;

  :hover {
    transform: scale(1.05);
  }

  :active {
    transform: scale(0.95);
  }

`;

const StartButtonImage = styled.img`
  width: 200px;
  height: 170px;
`;

const Start = () => {
  return (
    <StartButtonWrapper>
      <StartButtonImage src={startButtonImage} alt="Start" />
    </StartButtonWrapper>
  );
};

export default Start;
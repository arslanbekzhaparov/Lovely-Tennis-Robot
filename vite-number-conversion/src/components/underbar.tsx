import React from 'react';
import styled from 'styled-components';
import StartImg from '../public/Startbutton.svg';
import Start from './startbuttom';
import RectangleAndCircles from './visual1';
import VolumeControl from './volumectrl';
import RectangleAndRectangle from './visual2';
import GridComponent from './numbergrid';
import WebSocketComponent from './websocket';

const StartButton = styled.button`
  background-image: StartImg;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(Screenshot_2023-03-30_172631-removebg-preview.png);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 200px;
  height: 50px;
`;

const LogoImg = styled.img`
  width: 50px;
  height: 38px;
`;

const UnderBarWrapper = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 100%;
  overflow-x: hidden;
`;

const LeftUnderBar = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 25px;
`;

const TopText = styled.div`
  font-family: 'Syncopate';
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 9px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #FFFFFF;
  padding: 20px;
`;

const BottomText = styled.div`
  font-family: 'Syncopate';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #FFFFFF;
  padding-bottom: 20px;
`;

const ButtonText = styled.div`
    font-family: 'Syncopate';
    font-style: normal;
    font-weight: 700;
    font-size: 9px;
    line-height: 9px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    padding-bottom: 30px;

    color: #FFFFFF;
`;
const Visual = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;



const UnderText = styled.div`
  font-family: 'Syncopate';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #FFFFFF;
`;

const RightUnderBar = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

const handleVolumeChange = (value: number) => {
    console.log(value);
  }


const UnderBar = () => {
  return (
    <UnderBarWrapper>
      <LeftUnderBar>
        <TopText>Top Text</TopText>
        <BottomText>Press to Start your session</BottomText>
        <ButtonText>Start</ButtonText>
        <Start></Start>
        <Visual><RectangleAndCircles></RectangleAndCircles></Visual>
        <UnderText> Progress</UnderText>
        <UnderText> Start</UnderText>
        {/* <StartButton> <LogoImg src={StartImg}/></StartButton> */}
      </LeftUnderBar>
      <RightUnderBar>
      <VolumeControl value={0.5} onChange={handleVolumeChange} />
        <Visual><RectangleAndRectangle></RectangleAndRectangle></Visual>
        <GridComponent></GridComponent>
        {/* <ButtonText>Start</ButtonText> */}
        {/* <Start></Start> */}
      </RightUnderBar>
    </UnderBarWrapper>
  );
};

export default UnderBar;
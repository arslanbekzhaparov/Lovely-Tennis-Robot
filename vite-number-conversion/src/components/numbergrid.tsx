import React, { RefObject } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 20px;
  margin-top: 70px;
`;

const Number = styled.div`
  font-family: 'Syncopate';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #D9FD6E;
  padding: 12px;
`;

const Description = styled.div`
  font-family: 'Syncopate';
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  line-height: 7px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #FFFFFF;
  padding: 13px;
`;

const GridComponent = () => {
  return (
    <Container>
      <div>
        <Number>24</Number>
        <Description>Spin Angle</Description>
      </div>
      <div>
        <Number>2</Number>
        <Description>mode #</Description>
      </div>
      <div>
        <Number>50</Number>
        <Description>balls left</Description>
      </div>
      {/* <div>
        <Number>0</Number>
        <Description>bitches</Description>
      </div> */}
    </Container>
  );
};

export default GridComponent;
import React from 'react';
import styled from 'styled-components';
import PowerSwitch from './navbarbutton';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center ;
  height: 56px;
  background: #070707;
  color: #fff;
  padding: 0 16px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 50px;
  height: 38px;
`;

const MiddleContainer = styled.div`
  text-align: center;
`;

const NavbarTitle = styled.h1`
  font-family: "Syncopate", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 10px;
  display: flex;
  align-items: flex-end;
  color: #FFFFFF;
  margin-top: 25px; // Add margin property

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleButton = styled.button`
  position: relative;
`;


const Navbar = () => {
  const handleToggle = () => {
    // Handle toggle logic here
  };

  return (
    <NavbarContainer>
      <LeftContainer>
        <LogoImg src="/teamlogo.svg" alt="Logo"/>
      </LeftContainer>
      <MiddleContainer>
        <NavbarTitle>tennis robot</NavbarTitle>
      </MiddleContainer>
      <RightContainer>
        <PowerSwitch size={35}></PowerSwitch>
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
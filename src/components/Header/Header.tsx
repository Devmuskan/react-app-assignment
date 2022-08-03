import React from 'react';
import { HeaderContainer, Title, HeaderIconsContainer, Subperagraph } from './styed';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>React Weather App </Title>
      <Subperagraph>Please Enable Geo Location for your browser by clicking on the geo location button</Subperagraph>
      <HeaderIconsContainer>
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;

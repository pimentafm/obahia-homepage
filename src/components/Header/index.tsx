import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container id="Header">
      <Logo className="logo" />
    </Container>
  );
};

export default Header;

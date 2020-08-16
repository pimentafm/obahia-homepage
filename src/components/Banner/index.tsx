import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container } from './styles';

const Banner: React.FC = () => (
  <Container>
    <div>
      <a href="http://obahia.dea.ufv.br">
        <Logo className="logo" />
      </a>
      <h1>Inteligência Territorial e Hídrica para o Oeste da Bahia</h1>
    </div>
  </Container>
);

export default Banner;

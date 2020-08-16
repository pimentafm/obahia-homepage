import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <div className="header">
      <a href="http://obahia.dea.ufv.br">
        <Logo className="logo" />
      </a>
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              Ferramentas
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Sobre
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </Container>
);

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const RuralProfitability: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo className="logo" title="Página principal" />
        </Link>

        <h1 className="subtitle">Lucratividade Rural - Em desenvolvimento</h1>

        <p className="section">Resumo</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
      </Content>
    </Container>
  );
};

export default RuralProfitability;

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

        <h1 className="subtitle">
          Modelo de otimização econômica da atividade agrícola considerando o
          regime hídrico e disponibilidade de outorga regional
        </h1>

        <p className="section">1. Descrição geral</p>
        <p className="subsection">1.1 Introdução</p>
        <p>
          A programação linear é um método amplamente utilizado para otimização
          da atividade agrícola com diversos objetivos. Dentre os principais
          objetivos, estão a otimização de alocação de água, maximização de
          benefícios econômicos, melhorar o manejo de irrigação e guiar ações de
          governança.
        </p>
        <p>
          Neste modelo de programação linear é proposto uma maximização
          econômica da atividade agrícola, considerando as respostas dadas pelo
          modelo de previsão do início da estação chuvosa. Este modelo é
          possível de ser aplicado em diversos níveis de gestão de água como
          fazendas, municípios e região.
        </p>
        <p>
          Através do cadastro de informações disponíveis na plataforma OBahia, o
          modelo pode ser utilizado de forma livre, auxiliando na tomada de
          decisão de qual cultura plantar, em quais áreas e em quais quinzenas,
          visando melhor uso dos recursos hídricos e maior lucratividade final.
        </p>
        <br />
        <p className="section">2. Modelo de lucratividade rural</p>
        <p className="subsection">2.1 Downloads</p>
        <p>
          O modelo de lucratividade rural e o manual de uso podem ser baixados
          nos links a seguir:
        </p>
        <ul>
          <li>
            <a
              href="ftp://obahia.dea.ufv.br/ruralprofitability/ModeloLucratividadeRural.xlsx"
              rel="noopener noreferrer"
            >
              Modelo de Lucratividade Rural
            </a>
          </li>
          <li>
            <a
              href="ftp://obahia.dea.ufv.br/ruralprofitability/Manual_ModeloLucratividadeRural.pdf"
              rel="noopener noreferrer"
            >
              Manual do modelo de Lucratividade Rural
            </a>
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default RuralProfitability;

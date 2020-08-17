import React from 'react';

import { Link } from 'react-scroll';

import {
  GiStack,
  GiRaining,
  GiMeshBall,
  GiWorld,
} from 'react-icons/gi';

import { BsGraphDown } from 'react-icons/bs';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { ParallaxProvider } from 'react-scroll-parallax';

import Section from '../../components/Section';

import image01 from '../../assets/landuse.png';
import image02 from '../../assets/agriculture.png';

import { Container } from './styles';
import { Banner } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Banner>
        <div className="banner-content">
          <div>
            <a href="http://obahia.dea.ufv.br">
              <Logo className="logo" />
            </a>
            <h1>Inteligência Territorial e Hídrica para o Oeste da Bahia</h1>
          </div>
        </div>
        
        <div className="menu-content">
          <div className="card">
            <div className="icon"> <Link
                  to="section1"
                  smooth={true}
                  duration={500}
                  className="scroll-link"
                >
                  <GiStack className="icons" />
                </Link></div>
            <p className="title">Séries temporais de Mapas</p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
          <div className="card">
            <div className="icon"> <Link
                  to="section2"
                  smooth={true}
                  duration={500}
                  className="scroll-link"
                >
                  <GiRaining className="icons" />
                </Link></div>
            <p className="title">Previsão do Início da Estação Chuvosa</p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
          <div className="card">
            <div className="icon"> <Link
                  to="section3"
                  smooth={true}
                  duration={500}
                  className="scroll-link"
                >
                  <BsGraphDown className="icons" />
                </Link></div>
            <p className="title">Previsão de Vazões Mínimas</p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
          <div className="card">
            <div className="icon"> <Link
                  to="section4"
                  smooth={true}
                  duration={500}
                  className="scroll-link"
                >
                  <GiMeshBall className="icons" />
                </Link></div>
            <p className="title">Visualizador do Modelo de Águas Subterrâneas</p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
          <div className="card">
            <div className="icon"> <Link
                  to="section5"
                  smooth={true}
                  duration={500}
                  className="scroll-link"
                >
                  <GiWorld className="icons" />
                </Link></div>
            <p className="title">Servidor de Mapas</p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
        </div>
      </Banner>
      <ParallaxProvider>
        <div id="section1">
          <Section image={image01} />
        </div>
        <div id="section2">
          <Section />
        </div>
        <div id="section3">
          <Section image={image02} />
        </div>
        <div id="section4">
          <Section />
        </div>
        <div id="section5">
          <Section />
        </div>
      </ParallaxProvider>
    </Container>
  );
};

export default Home;

import React from 'react';

import { GiStack, GiRaining, GiNetworkBars, GiMeshBall } from 'react-icons/gi';
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

          <div className="menu-content">
            <div className="circle">
              <GiStack className="icons" />
            </div>
            <div className="circle">
              <GiRaining className="icons" />
            </div>
            <div className="circle">
              <GiNetworkBars className="icons" />
            </div>
            <div className="circle">
              <GiMeshBall className="icons" />
            </div>
          </div>
        </div>
      </Banner>
      <ParallaxProvider>
        <Section image={image01} />
        <Section image="" />
        <Section image={image02} />
      </ParallaxProvider>
    </Container>
  );
};

export default Home;

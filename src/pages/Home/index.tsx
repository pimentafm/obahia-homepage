import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-scroll';

import {
  GiStack,
  GiRaining,
  GiMeshBall,
  GiEarthAmerica,
  GiMoneyStack,
  GiShakingHands,
} from 'react-icons/gi';
import { MdTrendingDown } from 'react-icons/md';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container, Banner, Background } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
   <Background />
      <Banner>
      
        <Logo className="logo" />
        <h1>Inteligência Territorial e Hídrica para o Oeste da Bahia</h1>
       
        <Slider
          className="slider-content"
          centerMode={true}
          dots={true}
          infinite={true}
          slidesToShow={7}
          centerPadding="0px"
          slidesToScroll={1}
          speed={500}
          responsive={[
            {
              breakpoint: 2060,
              settings: {
                slidesToShow: 6,
              },
            },
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 1580,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1208,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          <div className="card">
            <div className="icon">
              <Link
                to="section2"
                smooth={true}
                duration={1000}
                className="scroll-link"
              >
                <GiStack className="icons" />
              </Link>
            </div>
            <p className="title">Séries temporais de Mapas</p>
            <p className="text">
              Esta ferramenta permite a visualização e análise customizada das
              séries temporais de mapas a nível regional, de bacia hidrográfica,
              de áreas de drenagem e a nível municipal para a região do Oeste da
              Bahia.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Link
                to="section5"
                smooth={true}
                duration={1000}
                className="scroll-link"
              >
                <GiEarthAmerica className="icons" />
              </Link>
            </div>
            <p className="title">Vizualização de Mapas</p>
            <p className="text">
              Esta ferramenta permite a visualização e análise customizada das
              bases de dados contidas nessa plataforma.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Link
                to="section1"
                smooth={true}
                duration={1000}
                className="scroll-link"
              >
                <GiRaining className="icons" />
              </Link>
            </div>
            <p className="title">Previsão do Início da Estação Chuvosa</p>
            <p className="text">
              Esta ferramenta permite a visualização customizada da previsão do
              início das chuvas para o Oeste da Bahia, conforme previsto pelo
              sistema de previsão climática CFSv2 do NCEP/NOAA.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Link
                to="section3"
                smooth={true}
                duration={1000}
                className="scroll-link"
              >
                <MdTrendingDown className="icons" style={{ fontSize: 10 }} />
              </Link>
            </div>
            <p className="title">Previsão de Vazões Mínimas</p>
            <p className="text" style={{ color: 'red' }}>
              Esta ferramenta está em desenvolvimento.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Link
                to="section4"
                smooth={true}
                duration={1000}
                className="scroll-link"
              >
                <GiMeshBall className="icons" />
              </Link>
            </div>
            <p className="title">
              Visualização de Dados do Modelo de Águas Subterrâneas
            </p>
            <p className="text">
              Esta ferramenta permite a visualização customizada dos resultados
              do modelo de águas subterrâneas paras as bacias do Alto Rio
              Grande, Médio Rio Grande, Rio Corrente e Rio Carinhanha.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Link
                to="section7"
                smooth={true}
                duration={1000}
                className="scroll-link"
              >
                <GiMoneyStack className="icons" />
              </Link>
            </div>
            <p className="title">Lucratividade Rural</p>
            <p className="text" style={{ color: 'red' }}>
              Esta ferramenta está em desenvolvimento.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Link
                to="section7"
                smooth={true}
                duration={1000}
                className="scroll-link"
              >
                <GiShakingHands className="icons" />
              </Link>
            </div>
            <p className="title">Governança</p>
            <p className="text" style={{ color: 'red' }}>
              Esta ferramenta está em desenvolvimento.
            </p>
          </div>
        </Slider>

        <div className="banner-buttons">
          <a href="http://www.google.com">Iformações adicionais</a>
          <a href="http://www.google.com">Sobre o projeto</a>
        
        </div>

     
      </Banner>

    </Container>
  );
};

export default Home;

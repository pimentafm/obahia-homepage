import React from 'react';
import { Link } from 'react-router-dom';

import image01 from '../../assets/image01.png';
import image02 from '../../assets/image02.png';
import image03 from '../../assets/image03.png';

import BackgroundSlider from 'react-background-slider';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

import { Container, Banner } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Banner>
        <BackgroundSlider
          images={[image01, image02, image03]}
          duration={10}
          transition={1}
        />
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
              <Link to="/landuse">
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
              <a href="http://obahia.dea.ufv.br">
                <GiEarthAmerica className="icons" />
              </a>
            </div>
            <p className="title">Vizualização de Mapas</p>
            <p className="text">
              Esta ferramenta permite a visualização e análise customizada das
              bases de dados contidas nessa plataforma.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Link to="/onset">
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
              <Link to="/streamflow">
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
              <Link to="/mfview">
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
              <Link to="/ruralprofit">
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
              <Link to="/governance">
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
          <Link to="/informations">Iformações adicionais</Link>
          <Link to="about">Sobre o projeto</Link>
        </div>
      </Banner>
    </Container>
  );
};

export default Home;

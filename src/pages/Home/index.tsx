import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-scroll';

import { GiStack, GiRaining, GiMeshBall, GiEarthAmerica } from 'react-icons/gi';

import { BsGraphDown } from 'react-icons/bs';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { ParallaxProvider } from 'react-scroll-parallax';

import Section from '../../components/Section';

import image01 from '../../assets/landuse.png';
import image02 from '../../assets/agriculture.png';

import { Container, Banner } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Banner>
        <div className="banner-content">
          <div>
            <Logo className="logo" />
            <h1>Inteligência Territorial e Hídrica para o Oeste da Bahia</h1>
          </div>
        </div>

        <Slider
          className="slider-content"
          dots={true}
          infinite={true}
          initialSlide={3}
          slidesToShow={5}
          centerPadding="60px"
          slidesToScroll={1}
          speed={500}
          responsive={[
            {
              breakpoint: 1580,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 1208,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          <div className="card">
            <div className="icon">
              <Link
                to="section5"
                smooth={true}
                duration={500}
                className="scroll-link"
              >
                <GiEarthAmerica className="icons" />
              </Link>
            </div>
            <p className="title">AA</p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
          <div className="card">
            <div className="icon">
              <Link
                to="section4"
                smooth={true}
                duration={500}
                className="scroll-link"
              >
                <GiMeshBall className="icons" />
              </Link>
            </div>
            <p className="title">
              Visualizador do Modelo de Águas Subterrâneas
            </p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
          <div className="card">
            <div className="icon">
              <Link
                to="section3"
                smooth={true}
                duration={500}
                className="scroll-link"
              >
                <BsGraphDown className="icons" />
              </Link>
            </div>
            <p className="title">Previsão de Vazões Mínimas</p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
          <div className="card">
            <div className="icon">
              <Link
                to="section1"
                smooth={true}
                duration={500}
                className="scroll-link"
              >
                <GiStack className="icons" />
              </Link>
            </div>
            <p className="title">Séries temporais de Mapas</p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
          <div className="card">
            <div className="icon">
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className="scroll-link"
              >
                <GiRaining className="icons" />
              </Link>
            </div>
            <p className="title">Previsão do Início da Estação Chuvosa</p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
          <div className="card">
            <div className="icon">
              <Link
                to="section5"
                smooth={true}
                duration={500}
                className="scroll-link"
              >
                <GiEarthAmerica className="icons" />
              </Link>
            </div>
            <p className="title">BB</p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
          <div className="card">
            <div className="icon">
              <Link
                to="section5"
                smooth={true}
                duration={500}
                className="scroll-link"
              >
                <GiEarthAmerica className="icons" />
              </Link>
            </div>
            <p className="title">CC</p>
            <p className="text">Clique para acessar a ferramenta</p>
          </div>
        </Slider>
      </Banner>
      <ParallaxProvider>
        <div id="section1">
          <Section />
        </div>
        <div id="section2">
          <Section image={image01} />
        </div>
        <div id="section3">
          <Section />
        </div>
        <div id="section4">
          <Section image={image02} />
        </div>
        <div id="section5">
          <Section />
        </div>
      </ParallaxProvider>
    </Container>
  );
};

export default Home;

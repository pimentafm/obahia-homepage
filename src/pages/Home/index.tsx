import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import image01 from '../../assets/image01.png';
import image02 from '../../assets/image02.png';
import image03 from '../../assets/image03.png';

import BackgroundSlider from 'react-background-slider';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'react-toastify/dist/ReactToastify.css';

import {
  GiStack,
  GiRaining,
  GiMeshBall,
  GiEarthAmerica,
  GiMoneyStack,
  GiShakingHands,
} from 'react-icons/gi';

import { MdTrendingDown } from 'react-icons/md';

import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container, Banner } from './styles';
import HtmlParser from 'react-html-parser';

const Home: React.FC = () => {
  const [notificationModal, setNotificationModal] = useState<boolean>(true);

  const notify = () =>
    toast.error(`Não é possível acessar esta ferramenta no momento!!!`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const modalTitle = HtmlParser(
    `<span style="color: #1f5582; font-weight: 600; font-size: 16px;">OBahia</span><span> Inteligência Territorial e Hídrica para o Oeste da Bahia</span>`,
  );

  const showNotificationModal = () => {
    setNotificationModal(true);
  };

  const handleOk = () => {
    setNotificationModal(false);
  };

  useEffect(() => {
    showNotificationModal();
  }, []);

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
              <Link to="#" onClick={notify}>
                <GiStack className="icons" />
              </Link>
            </div>
            <p className="title">Séries temporais de Mapas</p>
            <p className="text">
              Visualização e análise customizada das séries temporais de mapas a
              nível regional, bacia hidrográfica, áreas de drenagem e municipal
              para a região do Oeste da Bahia.
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
              Visualização e análise customizada das bases de dados contidas
              nessa plataforma.
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
              Visualização customizada da previsão do início das chuvas para o
              Oeste da Bahia, conforme previsto pelo sistema de previsão
              climática CFSv2 do NCEP/NOAA.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Link to="#" onClick={notify}>
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
              <Link to="#" onClick={notify}>
                <GiMeshBall className="icons" />
              </Link>
            </div>
            <p className="title">
              Visualização de Dados do Modelo de Águas Subterrâneas
            </p>
            <p className="text">
              Visualização customizada dos resultados do modelo de águas
              subterrâneas para as bacias do Alto Rio Grande, Médio Rio Grande,
              Rio Corrente e Rio Carinhanha.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Link to="#" onClick={notify}>
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
              <Link to="#" onClick={notify}>
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
          <Link to="#" onClick={notify}>
            Iformações adicionais
          </Link>
          <Link to="#" onClick={notify}>
            Sobre o projeto
          </Link>
        </div>
      </Banner>

      <Modal
        title={modalTitle}
        visible={notificationModal}
        onOk={handleOk}
        closable={false}
        footer={[
          <Button
            key="submit"
            style={{
              background: '#1f5582',
              color: '#fff',
              borderColor: '#fff',
            }}
            onClick={handleOk}
          >
            Continue
          </Button>,
        ]}
      >
        <h3 style={{ textAlign: 'center', color: '#ff0000' }}>
          Esta pagina é uma versão em testes
        </h3>

        <h3 style={{ textAlign: 'center' }}>
          Modificações serão feitas durante o período de desenvolvimento deste
          projeto.
        </h3>

        <h3 style={{ textAlign: 'center' }}>
          Esta versão foi atualizada em 31/08/2020.
        </h3>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default Home;

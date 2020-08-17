import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  background: #1f5582;
  height: 100vh;
  overflow-x: hidden;
  text-align: center;

  .logo path {
    fill: #fff;
  }

  .logo path {
    fill: #fff;
  }

  svg {
    width: 70vw;
  }

  h1 {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    padding: 25px;
  }

  .banner-content {
    @media only screen and (max-width: 700px) {
      h1 {
        font-size: 25px;
      }
    }
    margin-top: 5vw;
  }

  .menu-content {
    display: flex;
    overflow-x: auto;

    width: 100%;
    max-width: 100%;

    border: 0px solid #ffffff00;

    -webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;

    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  .card {
    padding: 20px;
    position: relative;

    margin-right: 20px;

    width: 100%;
    height: 250px;
    max-width: 300px;
    min-width: 300px;
    background-color: #1f5582;
    border-radius: 10px;
    border: 2px solid rgba(7, 7, 7, 0.12);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
    font-size: 16px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .icons {
    margin: 0 auto;
    width: 100%;
    height: 80px;
    max-width: 80px;
    background: linear-gradient(
      90deg,
      #67b3f3 0%,
      #1f5582 40%,
      rgba(0, 0, 0, 0.28) 60%
    );
    border-radius: 100%;
    display: flex;
    color: white;
    transition: all 0.8s ease;
    background-position: 0px;
    background-size: 200px;
  }

  .card .title {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-top: 30px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  .card .text {
    width: 80%;
    margin: 0 auto;
    font-size: 13px;
    text-align: center;
    margin-top: 20px;
    color: white;
    font-weight: 200;
    letter-spacing: 2px;
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease;
  }

  .card:hover {
    height: 270px;
  }

  .card:hover .text {
    transition: all 0.3s ease;
    opacity: 1;
    max-height: 40px;
  }

  .card:hover .icons {
    background-position: -120px;
    transition: all 0.3s ease;
  }

  .card:hover .icons i {
    background: linear-gradient(90deg, #67b3f3, #1f5582);
    -webkit-text-fill-color: transparent;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .scroll-link {
    width: 4vw;
    height: 4vw;
    min-width: 60px;
    min-height: 60px;
    border-radius: 50%;
    z-index: 1;
  }
`;

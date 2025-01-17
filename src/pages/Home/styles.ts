import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: '#1f5582' Important;

  height: 100vh;
`;

export const LogoContainer = styled.div`
  z-index: 2;
  text-align: center;

  .logo path {
    fill: #fff;
  }

  svg {
    width: 60vw;
    margin: 4vh auto;

    @media only screen and (max-width: 700px) {
      margin: 2vh auto;
    }
  }

  h1 {
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    max-width: 1000px;
    margin: 10px auto;

    @media only screen and (max-width: 700px) {
      margin: 0px auto;
    }

    padding-left: 10px;
    padding-right: 10px;
  }

  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 25px;
    }

    svg {
      height: 60px;
    }
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;

  background: #fff;

  overflow-x: hidden;
  overflow-y: hidden;
  text-align: center;
  background-attachment: fixed;
  background-size: cover;

  #ReactBackgroundSlider {
    z-index: 1;
  }

  .banner-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .banner-buttons a {
    width: 240px;
    margin: 50px 10px 10px 10px;
    padding-top: 10px;
    padding-bottom: 10px;

    border: 0px solid rgba(7, 7, 7, 0.12);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 700px) {
      margin: 5px 10px 10px 10px;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    align-items: center;
    background: #25689f;
    border-radius: 50px;
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5em;
  }

  .banner-buttons a:hover {
    background: #1f5582;
    transition: 0.3s ease;
  }

  .slider-content {
    height: 360px;

    -webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;

    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    z-index: 1;
  }

  .slick-arrow {
    position: absolute;
    left: 50%;
    top: 82%;

    @media only screen and (min-width: 700px) {
      top: 93%;
    }

    width: 40px;
    height: 40px;
    padding: 0;
    text-indent: -9999px;
    background-repeat: no-repeat;
    background: rgba(31, 85, 130, 0.5);
    border-radius: 50%;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      display: inline-block;
      border-style: solid;
    }
    &.slick-prev {
      transform: translateX(-50%) translateX(-130px);
      z-index: 1;
      &:after {
        transform: translateX(-50%) translateX(-2px) translateY(-50%);
        border-width: 9px 12px 9px 0;
        border-color: transparent #fff transparent transparent;
      }
    }
    &.slick-next {
      transform: translateX(-50%) translateX(130px);
      z-index: 1;
      &:after {
        transform: translateX(-50%) translateX(2px) translateY(-50%);
        border-width: 9px 0 9px 12px;
        border-color: transparent transparent transparent #fff;
      }
    }
    &.slick-disabled {
      cursor: default;
      background: green;
      opacity: 0.5;
    }
  }

  .card {
    padding: 20px 10px 5px 10px;
    margin: 10px;
    position: relative;

    width: 250px;
    height: 250px;
    max-width: 300px;
    min-width: 300px;
    background-color: #25689f;
    border-radius: 10px;
    border: 0px solid rgba(7, 7, 7, 0.12);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
    font-size: 16px;
    transition: all 0.3s ease;
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
    height: 355px;
    background: #1f5582;
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
    background: linear-gradient(90deg, #2d80c0, #1f5582);
    -webkit-text-fill-color: transparent;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 40px;
    margin: 0 5px;
    padding: 0;

    @media only screen and (max-width: 700px) {
      top: -40px;
    }
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;
    font-size: medium;

    opacity: 0.5;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    z-index: -1;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #1f5582;
  }
`;

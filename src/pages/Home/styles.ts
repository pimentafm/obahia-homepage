import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  background: #1f5582;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;

  svg {
    width: 70vw;
  }

  .banner-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 5vw;

    h1 {
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      padding: 25px;
    }

    @media only screen and (max-width: 700px) {
      h1 {
        font-size: 25px;
      }
    }

    .logo path {
      fill: #fff;
    }

    .logo path {
      fill: #fff;
    }
  }

  .menu-content {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    width: 100%;
  }

  .circle {
    display: flex;
    background: #fff;
    margin: 10px;
    border-radius: 50%;

    box-shadow: 2px 2px 4px 0px #00000003;

    .icons {
      color: #1f5582;
      width: 4vw;
      height: 4vw;

      min-width: 50px;
      min-height: 50px;

      cursor: pointer;

      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .scroll-link {
        width: 4vw;
        height: 4vw;

        min-width: 50px;
        min-height: 50px;
        border-radius: 50%;
        z-index: 1;
      }
  }
`;

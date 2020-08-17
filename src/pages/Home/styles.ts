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
    width: 60vw;
  }

  .banner-content {
    display: flex;
    flex-direction: column;

    margin-top: 5vw;

    h1 {
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      padding: 5px 25px 10px 25px;
    }

    @media only screen and (max-width: 700px) {
      h1 {
        font-size: 25px;
      }
    }
  }

  .logo path {
    fill: #fff;
  }

  .logo path {
    fill: #fff;
  }

  .banner-content {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    padding: 5px;

    box-shadow: 2px 2px 4px 0px #00000003;

    .icons {
      color: #1f5582;
      width: 5vw;
      height: 5vw;
      min-width: 40px;
      min-height: 40px;
      border-radius: 50%;
      cursor: pointer;

      .scroll-link {
        width: 5vw;
        height: 5vw;
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;

        align-items: center;
        justify-content: center;
        text-align: center;

        z-index: 1;
      }
    }
  }
`;

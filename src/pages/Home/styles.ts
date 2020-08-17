import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  background: #1f5582;
  justify-content: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  text-align: center;

  overflow-x: hidden;

  div {
    display: flex;
    flex-direction: column;

    margin-top: 2vw;

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

  svg {
    width: 60vw;
  }

  .banner-content {
    display: flex;
    flex-direction: column;
  }

  .menu-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  .circle {
    background: #fff;
    width: 10vw;
    height: 10vw;
    min-width: 60px;
    min-height: 60px;
    margin: 10px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    box-shadow: 2px 2px 4px 0px #00000003;

    .icons {
      font-size: 80px;
      color: #1f5582;
      cursor: pointer;
    }
  }
`;

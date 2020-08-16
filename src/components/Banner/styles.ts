import styled from 'styled-components';

export const Container = styled.header`
  background: #1f5582;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      padding: 10px;
    }

    @media only screen and (max-width: 700px) {
      h1 {
        font-size: 20px;
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
`;

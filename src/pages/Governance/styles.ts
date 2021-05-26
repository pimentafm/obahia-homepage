import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: '#ffffff';
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  text-align: center;

  svg {
    margin: 4vh auto;

    @media only screen and (max-width: 500px) {
      width: 70vw;
    }
  }

  .subtitle {
    font-size: 40px;
    color: #1f5582;
  }

  .section {
    font-size: 2.5rem;
    color: #1f5582;
    font-weight: bold;
  }

  .subsection {
    font-size: 2rem;
    color: #1f5582;
  }

  p {
    text-align: justify;
    padding: 5px;
    margin: 5px;
    font-size: 1.5rem;
  }

  ul {
    text-align: justify;
    color: #1f5582;
    padding: 5px;
    margin-left: 50px;
    font-size: 1.5rem;
  }

  li {
    text-align: justify;
    padding: 5px;
    margin-left: 10px;
    font-size: 1.5rem;
  }

  strong {
    color: #1f5582;
    font-size: 1.5rem;
  }
`;

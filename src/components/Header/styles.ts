import styled from 'styled-components';

export const Container = styled.header`
  .header {
    position: fixed;
    background: #1f5582;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 72px;

    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.13), 1px 2px 2px rgba(0, 0, 0, 0.1),
      -1px -2px 2px rgba(0, 0, 0, 0.05);
  }

  .logo path {
    fill: #fff;
  }

  svg {
    width: 150px;
  }

  ul#nav {
    /* center align the menu */
    text-align: center;
  }

  ul#nav li {
    position: relative;
    list-style: none;
    display: inline-block;
  }

  /* Links */
  ul#nav li a {
    display: inline-block;
    padding: 8px 13px;
    line-height: 32px;
    text-decoration: none;
    color: #fff;

    -webkit-transition: color 0.2s ease-in-out;
    -moz-transition: color 0.2s ease-in-out;
    -o-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
  }

  ul#nav li a:active {
    background-color: transparent;
  }
  ul#nav li.current a {
    color: #fe6928;
  }
`;

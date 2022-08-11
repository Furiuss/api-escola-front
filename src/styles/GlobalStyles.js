import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto;
    background-color: ${primaryDarkColor};
    color: ${primaryColor};
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${primaryColor};
    border: 3px solid transparent;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${primaryColor}
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 800px;
  margin: 30px auto;
`;

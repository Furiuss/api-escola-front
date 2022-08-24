import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto;
    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryColor};
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: white;
    padding: 12px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: 0.15s;
  }

  button:hover {
    filter: brightness(70%);
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor}
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container {
    font-weight: 700;
    font-size: 18px;
  }
`;

export const Container = styled.section`
  max-width: 680px;
  margin: 30px auto;
  background: #fce2db;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

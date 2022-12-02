import { css } from '@emotion/react';

export const GlobalStyles = css`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    overflow-x: hidden;
    height: 100%;
    width: 100%;
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f7f9fc;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: 'Roboto', sans-serif;
    font-weight: bold !important;
    font-size: 16px;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0;
    &:disabled {
      cursor: not-allowed;
    }
  }

  input,
  textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;
    border: none;
    background-color: transparent;
  }

  textarea {
    resize: none;
  }
`;

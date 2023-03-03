import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Helvetica;
  }

  html {
    font-size: 62.5% !important;
  }

  #body {
    overflow-x: hidden;

    .red-color {
      color: #ed1c24;
    }

    .half-bg {
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.35) 50%,
        transparent
      );
    }
  }

 
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Helvetica;
  }

  html {
    font-size: 62.5%;

    @media screen and (max-width: 435px) {
      font-size: 42.5% ;
    }

    @media screen and (max-width: 300px) {
      font-size: 40% ;
    }

    @media screen and (min-width: 2000px) {
      font-size: 82.5% ;
    }

    @media screen and (min-width: 2500px) {
      font-size: 100% ;
    }
  }

  #body {
    overflow-x: hidden;

    .logo {
      background-image: linear-gradient(to bottom, #ed1c24 55%, #fbfcfe 50%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: #000;

      position: relative;

      ::before {
        content: "";
        width: 93.1%;
        height: 0.2rem;
        background-color: #000;

        position: absolute;
        top: 55%;
        left: 0.4rem;
      }
      ::after {
        content: "";
        width: 1rem;
        height: 1rem;
        border: 0.2rem solid #000;
        border-radius: 50%;
        background-color: #aaa;

        position: absolute;
        top: 45%;
        left: 47%;
      }
    }

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

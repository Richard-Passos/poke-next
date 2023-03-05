/* Logic */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  html {
    font-size: 62.5%;

    @media screen and (min-width: 2000px) {
      font-size: 82.5% ;
    }

    @media screen and (min-width: 2500px) {
      font-size: 100% ;
    }
  }

  body {
    overflow-x: hidden;

    .half-bg {
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.35) 50%,
        transparent
      );
    }

    .logo {
      color: #000;

      background-image: linear-gradient(to bottom, #ed1c24 55%, #fbfcfe 55%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      
      position: relative;
      

      ::before {
        content: "";
        width: 100%;
        height: 0.2rem;
        background-color: #000;

        position: absolute;
        top: 55%;
        left: 0;
      }
      ::after {
        content: "";
        width: 1rem;
        height: 1rem;
        background-color: rgba(200, 200, 200, 0.5);
        border: 0.2rem solid #000;
        border-radius: 50%;

        position: absolute;
        top: 45%;
        left: 50%;
      }
    }
  }
`;

export default GlobalStyle;

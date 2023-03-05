/* Logic */
import styled, { keyframes } from "styled-components";

const isRotating = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Btn = styled.button`
  padding: 1rem 2rem;
  background-color: #2c2d2f;
  color: #000;
  border: 0.1rem solid #000;
  border-radius: 1rem;
  font-size: 2rem;
  overflow: hidden;
  transition: 0.5s;

  position: relative;
  z-index: 1;

  ::before {
    content: "";
    width: 150%;
    height: 70%;
    border-radius: 1rem;
    transition: 1s ease;
    transform: rotate(15deg);

    background-image: linear-gradient(to right, #ed1c24 55%, #fbfcfe 55%);

    position: absolute;
    top: 15%;
    left: -1rem;
    z-index: -1;
  }
  ::after {
    content: "";
    background-color: #2c2d2f;
    border-radius: 1rem;

    position: absolute;
    inset: 0.1rem;
    z-index: -1;
  }

  :hover {
    cursor: pointer;

    :before {
      transform: rotate(375deg);
    }
  }
`;

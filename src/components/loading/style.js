/* Style */

/* Logic */
import styled, { keyframes } from "styled-components";

const isRotating = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const Container = styled.div`
  margin-top: 9rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  width: 10rem;
  height: 10rem;
  border: 0.5rem solid #1b1c1e;
  border-top-color: #ed1c24;
  border-radius: 50%;

  animation: ${isRotating} 0.8s infinite;
`;

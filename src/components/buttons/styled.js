import styled from "styled-components";

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 3rem;

  button {
    width: 50%;
    background-color: #333;
    color: #fbfcfe;
    padding: 0.9rem 2rem;
    border: 0.1rem solid #1b1c1e;
    border-radius: 1rem;
    font-size: 1.6rem;
    box-shadow: -0.2rem 0.3rem 0 #1b1c1e, -0.4rem 0.6rem 0 #000;
    cursor: pointer;

    :active {
      box-shadow: inset -0.4rem 0.4rem 0 #1b1c1e;
    }
  }
`;

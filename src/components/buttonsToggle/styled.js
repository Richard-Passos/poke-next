/* Logic */
import styled from "styled-components";

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 3em;

  button {
    width: 50%;
    padding: 0.625em 1.25em;
    background-color: #333;
    color: #fbfcfe;
    border: 0.0625em solid #1b1c1e;
    border-radius: 0.625em;
    font-size: 1.6em;
    box-shadow: -0.125em 0.1875em 0 #1b1c1e, -0.25em 0.375em #000;

    :hover {
      cursor: pointer;
    }

    :active {
      box-shadow: inset -0.25em 0.25em 0 #1b1c1e;
    }
  }
`;

import styled from "styled-components";

export const FooterMain = styled.footer`
  background-color: #1b1c1e;
  color: #fff;
  height: 5em;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.6rem;

    span {
      font-weight: bold;
      transition: .2s;

      :hover {
        color: #000;
      }
    }
  }
`;

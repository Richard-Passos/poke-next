/* Logic */
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 15em;
  padding: 2em 0;
  margin-left: 0.3em;
  color: #1b1c1e;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Form = styled.form`
  input {
    width: 100%;
    padding: 0.625em 1.25em;
    border: 0.0625em solid #1b1c1e;
    border-radius: 0.625em;
    font-size: 1.6em;
    box-shadow: -0.125em 0.1875em 0 #888, -0.25em 0.375em #1b1c1e;
  }
`;

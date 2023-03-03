import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${(props) => (props.size || 3)}rem;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
`
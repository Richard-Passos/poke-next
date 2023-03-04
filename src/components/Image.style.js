import styled from "styled-components";
import ImageNext from "next/image";

export const Image = styled(ImageNext)`
  width: ${({ width }) => `${width / 10}rem`};
  height: ${({ height }) => `${height / 10}rem`};
`;

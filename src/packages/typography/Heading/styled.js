import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const HeadingBase = styled.h1`
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "900" : 400)};
  font-size: 28px;
  ${breakpoints.md} {
    font-size: 48px;
  }
`;

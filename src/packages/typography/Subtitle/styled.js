import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const SubtitleBase = styled.h2`
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ color }) => color};
  line-height: 40px;
  font-weight: 300;
  font-size: 20px;

  ${breakpoints.md} {
    font-size: 28px;
  }
`;

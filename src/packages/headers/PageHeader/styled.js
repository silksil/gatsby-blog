import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const Wrapper = styled.div`
  background: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10%;

  img {
    margin-left: 16px;
  }
`;

export const HeaderContent = styled.div`
  color: ${({ theme }) => theme.primary.contrast};
  text-align: center;

  h1 {
    font-weight: 900;
    font-size: 64px;
  }

  h2 {
    font-size: 20px;
    line-height: 32.256px;
  }
  ${breakpoints.lg} {
    text-align: left;
    max-width: 1360px;
  }
`;

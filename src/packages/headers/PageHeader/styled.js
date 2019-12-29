import styled, { css } from "styled-components";
import { breakpoints } from "../../breakpoints";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.primary.main};
`;

export const HeaderContent = styled.div`
  color: ${({ theme }) => theme.primary.contrast};
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20%;
  h1 {
    font-weight: 900;
    font-size: 64px;
  }

  h2 {
    font-size: 16px;
  }
  ${breakpoints.lg} {
    text-align: left;
    max-width: 1360px;
  }
`;

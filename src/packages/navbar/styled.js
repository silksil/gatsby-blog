import styled from "styled-components";
import { breakpoints } from "../breakpoints";

export const Placeholder = styled.div`
  width: 100%;
  height: 50px;
`;

export const NavBar = styled.div`
  width: 100%;
  height: 50px;
  padding: 16px 0px;
  background: ${({ theme, isTransparent }) =>
    isTransparent ? "transparent" : theme.primary.main};
  box-shadow: ${({ theme, isTransparent }) =>
    isTransparent ? "transparent" : ` 0 0 48px ${theme.primary.shadow}`};
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  z-index: 2;
  overflow: hidden;

  a {
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    color: ${({ color }) => color};
    &:hover {
      color: ${({ theme }) => theme.primary.contrastSecondary};
    }
    &:active {
      color: ${({ theme }) => theme.primary.contrast};
    }

    > *:not(:last-child) {
      margin-right: 16px;
    }
  }

  ${breakpoints.md} {
    padding: 16px 0px;
  }

  ${breakpoints.lg} {
    padding: 16px 0px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  font-weight: bold;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  > *:not(:last-child) {
    margin-right: 54px;
  }
`;

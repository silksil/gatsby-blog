import styled from "styled-components";
import { breakpoints } from "../breakpoints";

export const Placeholder = styled.div`
  width: 100%;
  height: 50px;
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 50px;
  padding: 16px 0px;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease;
  border-bottom: ${({ theme, isTransparent, isVisible }) =>
    isTransparent || !isVisible ? "none" : ` 1px solid ${theme.primary.light}`};
  transition: box-shadow 1s ease-in-out;
  top: ${({ isVisible }) => (isVisible ? "0px" : "-50px")};
  transition: top 0.3s ease;
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  z-index: 2;
  overflow: hidden;

  a {
    font-size: 18px;
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

  .active {
    color: ${({ theme }) => theme.tertiary.main};
    line-height: 1.8;
    border-bottom: ${({ theme }) => `2px solid ${theme.tertiary.main} `};
  }
`;

export const Left = styled.div`
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.secondary};
  color: ${({ theme }) => theme.primary.contrastSecondary};
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  > *:not(:last-child) {
    margin-right: 54px;
  }
`;

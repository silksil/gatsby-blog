import styled, { css } from "styled-components";
import { breakpoints } from "../../breakpoints";

export const xxl = css`
  font-size: 2.7rem;

  ${breakpoints.md} {
    font-size: 2.5rem;
  }
`;

export const xl = css`
  font-size: 1.75rem;

  ${breakpoints.md} {
    font-size: 2.25rem;
  }
`;

export const l = css`
  font-size: 1.5rem;

  ${breakpoints.md} {
    font-size: 2.2rem;
  }
`;

export const m = css`
  font-size: 1.25rem;

  ${breakpoints.md} {
    font-size: 1.75rem;
  }
`;

export const s = css`
  font-size: 1.1rem;

  ${breakpoints.md} {
    font-size: 1.6rem;
  }
`;

export const xs = css`
  font-size: 1rem;

  ${breakpoints.md} {
    font-size: 1.3rem;
  }
`;

const getFontWeight = (bold, lighter) => {
  if (bold) return "bold";
  if (lighter) return "lighter";
  return "normal";
};

export const HeadingBase = css`
  font-family: ${({ font, theme }) =>
    font === "primary" ? theme.font.primary : theme.font.secondary};
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ color }) => color};
  font-weight: ${({ bold, lighter }) => getFontWeight(bold, lighter)};
`;

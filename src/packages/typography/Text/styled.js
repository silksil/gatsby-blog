import styled, { css } from "styled-components";
import { breakpoints } from "../../breakpoints";
import { xl, l, m, s, xs } from "../Heading/styled";

const FontSizes = css`
  p,
  ul,
  ol,
  li {
    font-size: 1rem;
    line-height: 1.5rem;

    ${breakpoints.md} {
      font-size: 1.125rem;
      line-height: 2rem;
    }

    ${breakpoints.lg} {
      font-size: 1.2rem;
      line-height: 2.1rem;
    }
  }

  h1 {
    ${xl};
  }
  h2 {
    ${l};
  }
  h3 {
    ${m};
  }

  h4 {
    ${s};
  }

  h5,
  h6 {
    ${xs};
  }

  blockquote {
    font-size: 1.75rem;
    line-height: 1.6rem;

    ${breakpoints.md} {
      font-size: 2rem;
    }

    cite {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
  }
`;

export const TextBase = styled.div`
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  font-weight: ${({ lighter }) => (lighter ? "lighter" : "normal")};
  text-align: ${props => (props.center ? "center" : null)};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;

  ${FontSizes};

  img,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote {
    margin: 0;
    padding: 0;
    margin-top: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.primary.contrastDark};
    + p,
    + blockquote,
    + ul {
      margin-top: 0px;
    }
  }

  img {
    display: block;
    object-fit: cover;
    background-size: cover;
    width: 100%;
  }
  a {
    color: ${({ theme }) => theme.secondary.light};
    border-bottom: ${({ theme }) => `2px solid ${theme.secondary.dark} `};
    margin: 0;
    &:hover {
      cursor: pointer;
      filter: brightness(85%);
    }
  }
  blockquote {
    border-left: ${({ theme }) => `3px solid ${theme.secondary.main} `};
    padding-left: 14px;

    ${breakpoints.md} {
      padding-left: 22px;
    }

    cite {
      padding-top: 8px;
      display: block;
      margin-top: 8px;
      text-transform: uppercase;
      font-style: normal;
      color: ${({ theme }) => theme.primary.contrastSecondary};
    }
  }

  ol,
  ul {
    list-style: none;
    list-style-image: none;
    padding: 0px;
    margin: 0;
    margin-top: 16px;

    li {
      margin-top: 16px;
      padding-left: 0px;
      margin-left: 30px;
      list-style-type: disc;

      &:first-child {
        margin-top: 0px;
      }
    }
  }
`;

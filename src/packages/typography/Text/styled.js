import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const TextBase = styled.div`
  color: ${({ color }) => color};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  text-align: ${props => (props.center ? "center" : null)};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  img,
  p,
  h1,
  h2,
  h3,
  blockquote {
    margin: 0;
    padding: 0;
    margin-top: 28px;
  }

  img {
    display: block;
    object-fit: cover;
    background-size: cover;
    width: 100%;
  }
  a {
    margin: 0;
    &:hover {
      cursor: pointer;
      filter: brightness(85%);
    }
  }
  blockquote {
    border-left: ${({ theme }) => `3px solid ${theme.secondary.main} `};
    padding-left: 14px;

    cite {
      padding-top: 8px;
      display: block;
      margin-top: 8px;
      text-transform: uppercase;
      font-style: normal;
      color: ${({ theme }) => theme.primary.contrastSecondary};
    }

    &:before {
      content: " “ ";
      display: block;
      font-size: 32px;
      color: ${({ theme }) => theme.secondary.main};
      line-height: 32px;
      font-family: Arial;
    }
  }

  ol,
  ul {
    list-style: none;
    list-style-image: none;
    padding: 0px;
    margin: 0;
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
  p,
  ul,
  ol,
  li {
    font-weight: 400;
    font-size: 15px;
    line-height: 29px;
  }
  h1,
  h2,
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    + p {
      margin-top: 8px;
    }
  }

  blockquote {
    font-size: 16px;
    font-weight: 700;
    line-height: 44px;
    cite {
      font-size: 12px;
      font-weight: 300;
      line-height: 12px;
    }
  }

  ${breakpoints.lg} {
    p,
    ul,
    ol,
    li {
      font-size: 18px;
      line-height: 36px;
      font-weight: 400;
    }
    blockquote {
      font-size: 24px;
      font-weight: 700;
      line-height: 48px;
    }
  }
`;

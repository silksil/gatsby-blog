import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    font-style: normal;
    padding: 0;
    margin: 0;
    line-height: 1.5;
    background: ${({ theme }) => theme.background};
  }
  a {
    text-decoration: none;
  }

`;

export const StyledPage = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary.contrast};
`;

export const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
`;

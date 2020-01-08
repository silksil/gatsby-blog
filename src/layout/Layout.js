import { node } from "prop-types";
import React from "react";
import { ThemeProvider } from "styled-components";

import themes from "./themes";
import Meta from "./Meta";
import { GlobalStyle, Inner, StyledPage } from "./styled";

import { GridSpacer } from "@packages/grids";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

const Layout = ({ children }) => (
  <ThemeProvider theme={themes.dark}>
    <StyledPage>
      <GlobalStyle />
      <Meta />
      <NavBar />
      <Inner>{children}</Inner>
      <GridSpacer />
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

Layout.propTypes = {
  children: node.isRequired
};

export default Layout;

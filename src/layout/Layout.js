import { node } from "prop-types";
import React from "react";
import { ThemeProvider } from "styled-components";

import themes from "./themes";
import Meta from "./Meta";
import { GlobalStyle, Inner, StyledPage } from "./styled";

import { Grid, GridItem } from "@packages/grids";
import { Newsletter, BackgroundNewsletter } from "@components/Newsletter";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

const Layout = ({ children }) => (
  <ThemeProvider theme={themes.light}>
    <StyledPage>
      <GlobalStyle />
      <Meta />
      <NavBar />
      <Inner>{children}</Inner>
      <BackgroundNewsletter>
        <Grid>
          <GridItem
            columnStartSm="1"
            columnEndSm="14"
            columnStartMd="1"
            columnEndMd="14"
            columnStartLg="4"
            columnEndLg="10"
          >
            <Newsletter />
          </GridItem>
        </Grid>
      </BackgroundNewsletter>
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

Layout.propTypes = {
  children: node.isRequired
};

export default Layout;

import React from "react";
import { TopNavBar, TopNavBarContent } from "@packages/navbar";
import { Link } from "gatsby";
import CreateLinks from "./CreateLinks";

import { Grid, GridItem } from "@packages/grids";

const NavBar = ({ ...props }) => {
  const links = [
    { text: "Home", path: "/" },
    { text: "Blog", path: "blog" }
  ];

  return (
    <TopNavBar color="primaryContrast" {...props}>
      <Grid>
        <GridItem
          columnStartSm="1"
          columnEndSm="span 12"
          columnStartMd="1"
          columnEndMd="span 10"
          columnStartLg="1"
          columnEndLg="14"
        >
          <TopNavBarContent
            childrenLeft="GO MENTAL"
            childrenRight={CreateLinks(Link, links)}
          />
        </GridItem>
      </Grid>
    </TopNavBar>
  );
};

export default NavBar;

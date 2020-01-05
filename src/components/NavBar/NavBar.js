import React, { useState } from "react";
import { TopNavBar, TopNavBarContent } from "@packages/navbar";
import { Link } from "gatsby";
import CreateLinks from "./CreateLinks";

import { Grid, GridItem } from "@packages/grids";
import { useEventListener } from "@packages/hooks";

const NavBar = ({ ...props }) => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navOnScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
    setIsVisible(visible);
    setPrevScrollPos(currentScrollPos);

    if (currentScrollPos > 20) {
      return setIsTransparent(false);
    } else {
      return setIsTransparent(true);
    }
  };

  useEventListener("scroll", navOnScroll);

  const links = [
    { text: "Home", path: "/" },
    { text: "Blog", path: "blog" }
  ];

  return (
    <TopNavBar
      isVisible={isVisible}
      isFixed
      isTransparent={isTransparent}
      color="primaryContrast"
      {...props}
    >
      <Grid>
        <GridItem
          columnStartSm="1"
          columnEndSm="span 12"
          columnStartMd="1"
          columnEndMd="span 10"
          columnStartLg="2"
          columnEndLg="12"
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

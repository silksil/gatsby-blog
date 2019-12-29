import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as S from "./styled";
import { useContrastColor } from "../themes";

const TopNavBar = ({ color, children, ...props }) => {
  const contrastColor = useContrastColor(color);
  return (
    <Fragment>
      <S.NavBar {...props} color={contrastColor}>
        {children}
      </S.NavBar>
      <S.Placeholder />
    </Fragment>
  );
};

TopNavBar.propTypes = {
  children: PropTypes.node.isRequired
};

export default TopNavBar;

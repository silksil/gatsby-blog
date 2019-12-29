import React from "react";
import PropTypes from "prop-types";
import StyledMenu from "./styled";

const Menu = ({  children }) => (
  <StyledMenu aria-label="Menu">{children}</StyledMenu>
);



Menu.propTypes = {
  children: PropTypes.node.isRequired
};

export default Menu;

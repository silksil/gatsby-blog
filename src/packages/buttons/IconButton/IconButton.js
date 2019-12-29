import React from "react";
import PropTypes from "prop-types";
import StyledIconButton from "./styled";

const IconButton = ({ children, onClick, ...props }) => (
  <StyledIconButton type="button" onClick={onClick} {...props}>
    {children}
  </StyledIconButton>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

IconButton.defaultProps = {
  onClick: () => {}
};

export default IconButton;

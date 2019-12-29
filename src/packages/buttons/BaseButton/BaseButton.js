import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as S from "./styled";

const StyledButton = styled.div`
  ${S.BaseButtonStyling};
  ${props => S[props.size]};
`;

const BaseButton = ({ type, children, ...remainingProps }) => {
  const newChildren = React.Children.map(children, child => {
    if (
      React.Children.count(children) === 1 ||
      React.isValidElement(child) ||
      child === false ||
      child === null
    ) {
      return child;
    }
    return <span>{child}</span>;
  });

  return React.createElement(
    StyledButton,
    {
      type: type === "link" ? null : type,
      as: type === "link" ? "a" : "button",
      ...remainingProps
    },
    newChildren
  );
};

BaseButton.defaultProps = {
  size: "l",
  fullWidth: false,
  children: null,
  onClick: null
};

BaseButton.propTypes = {
  size: PropTypes.oneOf(["s", "l"]),
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(["link", "button", "submit"]).isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default BaseButton;

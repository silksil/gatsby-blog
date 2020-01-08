import React from "react";
import { string, bool, oneOf } from "prop-types";
import * as S from "./styled";
import styled from "styled-components";
import { COLORS, useContrastColor } from "@packages/themes";

const HeadingStyle = styled.div`
  ${S.HeadingBase};
  ${props => S[props.size]};
`;

const Heading = ({ element, color, ...props }) => {
  const textColor = useContrastColor(color);

  return <HeadingStyle as={element} color={textColor} {...props} />;
};

Heading.defaultProps = {
  children: null,
  uppercase: false,
  center: false,
  bold: false,
  lighter: false,
  font: "secondary"
};

Heading.propTypes = {
  children: string,
  uppercase: bool,
  center: bool,
  element: oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  size: oneOf(["xs", "s", "m", "l", "xl", "xxl"]).isRequired,
  color: oneOf(Object.values(COLORS)).isRequired,
  bold: bool,
  lighter: bool,
  font: oneOf(["primary", "secondary"])
};

export default Heading;

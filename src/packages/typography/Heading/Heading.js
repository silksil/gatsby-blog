import React from "react";
import { string, bool, oneOf } from "prop-types";
import * as S from "./styled";
import COLORS from "../enums";

import useColor from "../useColor";

const Heading = ({ element, color, ...props }) => {
  const textColor = useColor(color);
  return <S.HeadingBase as={element} color={textColor} {...props} />;
};

Heading.defaultProps = {
  children: null,
  uppercase: false,
  center: false,
  bold: false
};

Heading.propTypes = {
  children: string,
  uppercase: bool,
  center: bool,
  element: oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  color: oneOf(Object.values(COLORS)).isRequired,
  bold: bool
};

export default Heading;

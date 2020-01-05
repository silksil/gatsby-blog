import React from "react";
import { string, bool, oneOf } from "prop-types";
import * as S from "./styled";
import { COLORS, useContrastColor } from "@packages/themes";

const Text = ({ element, color, ...props }) => {
  const textColor = useContrastColor(color);

  return <S.TextBase as={element} color={textColor} {...props} />;
};

Text.defaultProps = {
  children: null,
  uppercase: false,
  center: false,
  bold: true
};

Text.propTypes = {
  children: string,
  uppercase: bool,
  center: bool,
  color: oneOf(Object.values(COLORS)).isRequired,
  bold: bool
};

export default Text;

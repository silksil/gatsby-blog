import React from "react";
import { string, oneOf } from "prop-types";
import * as S from "./styled";
import { COLORS, useContrastColor } from "@packages/themes";

const Subtitle = ({ element, color, ...props }) => {
  const textColor = useContrastColor(color);
  return <S.SubtitleBase as={element} color={textColor} {...props} />;
};

Subtitle.defaultProps = {
  element: "h2",
  children: null
};

Subtitle.propTypes = {
  children: string,
  element: oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  size: oneOf(["xxl", "xl", "l", "m", "s", "xs"]).isRequired,
  color: oneOf(Object.values(COLORS)).isRequired
};

export default Subtitle;

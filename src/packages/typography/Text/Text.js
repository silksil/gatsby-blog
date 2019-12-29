import React from "react";
import { node, bool, oneOf } from "prop-types";
import * as S from "./styled";
import COLORS from "../enums";

import useColor from "../useColor";

const Text = ({ color, ...props }) => {
  const textColor = useColor(color);
  return <S.TextBase color={textColor} {...props} />;
};

Text.defaultProps = {
  children: null,
  bold: false,
  center: false
};

Text.propTypes = {
  children: node,
  color: oneOf(Object.values(COLORS)).isRequired,
  bold: bool,
  center: bool
};

export default Text;

// import React from "react";
// import { string, bool, oneOf } from "prop-types";
// import styled from "styled-components";
// import * as S from "./styled";
// import COLORS from "../enums";

// import useColor from "../useColor";

// const HeadingStyle = styled.h1`
//   ${S.HeadingBase}
//   ${props => S[props.size]};
// `;

// const Heading = ({ element, color, ...props }) => {
//   const textColor = useColor(color);
//   return <HeadingStyle as={element} color={textColor} {...props} />;
// };

// Heading.defaultProps = {
//   children: null,
//   uppercase: false,
//   center: false
// };

// Heading.propTypes = {
//   children: string,
//   uppercase: bool,
//   center: bool,
//   element: oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
//   size: oneOf(["xxl", "xl", "l", "m", "s", "xs"]).isRequired,
//   color: oneOf(Object.values(COLORS)).isRequired
// };

// export default Heading;

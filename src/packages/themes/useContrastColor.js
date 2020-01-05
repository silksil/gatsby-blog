import { useContext } from "react";
import { ThemeContext } from "styled-components";
import COLORS from "./COLORS";

const {
  PRIMARY_CONTRAST,
  PRIMARY_CONTRAST_DARK,
  PRIMARY_CONTRAST_LIGHT,
  SECONDARY_CONTRAST,
  TERTIARY_CONTRAST
} = COLORS;

const useColor = color => {
  const theme = useContext(ThemeContext);
  const colors = {
    [PRIMARY_CONTRAST]: theme.primary.contrast,
    [PRIMARY_CONTRAST_DARK]: theme.primary.contrastDark,
    [PRIMARY_CONTRAST_LIGHT]: theme.primary.contrastLight,
    [SECONDARY_CONTRAST]: theme.secondary.contrast,
    [TERTIARY_CONTRAST]: theme.tertiary.contrast
  };
  return colors[color];
};

export default useColor;

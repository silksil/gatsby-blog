import { useContext } from "react";
import { ThemeContext } from "styled-components";

const COLORS = {
  PRIMARY_CONTRAST: "primaryContrast",
  PRIMARY_CONTRAST_SECONDARY: "primaryContrastSecondary",
  SECONDARY_CONTRAST: "secondaryContrast",
  TERTIARY_CONTRAST: "tertiaryContrast"
};

const {
  PRIMARY_CONTRAST,
  PRIMARY_CONTRAST_SECONDARY,
  SECONDARY_CONTRAST,
  TERTIARY_CONTRAST
} = COLORS;

const useColor = color => {
  const theme = useContext(ThemeContext);
  const colors = {
    [PRIMARY_CONTRAST]: theme.primary.contrast,
    [PRIMARY_CONTRAST_SECONDARY]: theme.primary.contrastSecondary,
    [SECONDARY_CONTRAST]: theme.secondary.contrast,
    [TERTIARY_CONTRAST]: theme.tertiary.contrast
  };
  return colors[color];
};

export default useColor;

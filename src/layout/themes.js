const SECONDARY = {
  main: "#663399",
  dark: "#351F64",
  light: "#B17ACC",
  contrast: "white"
};

const TERTIARY = {
  main: "#395AFF",
  dark: "#0031cb",
  light: "#7f87ff",
  contrast: "#FFFFFF"
};

const SUCCESS = {
  light: "#eafcee",
  main: "#1fc844",
  contrast: "#FFFFFF"
};

const ERROR = {
  main: "#E60000",
  contrast: "#FFFFFF"
};

const FONT = {
  primary: "Source Sans Pro, sans-serif",
  secondary: "Playfair Display, serif"
};

const BORDER_RADIUS = "8px";

const themes = {
  light: {
    borderRadius: BORDER_RADIUS,
    font: FONT,
    app: {
      focus: "blue",
      background: "white"
    },
    primary: {
      main: "#FFFFFF",
      dark: "#bdbdbd",
      light: "#f2f2f2",
      contrast: "#304455",
      contrastDark: "#273849",
      contrastLight: "#828c99",
      shadow: "rgba(0, 0, 0, 0.06)",
      shadowSecondary: "rgba(166, 173, 201, 0.22)"
    },
    secondary: {
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      light: SECONDARY.light,
      contrast: SECONDARY.contrast
    },
    tertiary: {
      main: TERTIARY.main,
      dark: TERTIARY.dark,
      light: TERTIARY.light,
      contrast: TERTIARY.contrast
    },
    success: {
      main: SUCCESS.main,
      light: SUCCESS.light,
      contrast: SUCCESS.contrast
    },
    error: {
      main: ERROR.main,
      light: ERROR.light,
      contrast: ERROR.contrast
    }
  },
  dark: {
    borderRadius: BORDER_RADIUS,
    font: FONT,
    background: "#121117;",
    primary: {
      dark: "#131313",
      main: "#232029",
      light: "#33383f",
      contrast: "#D9D7E0",
      contrastDark: "#FFFFFF",
      contrastLight: "#B6B4BC",
      shadow: "transparent",
      shadowSecondary: "transparent"
    },
    secondary: {
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      light: SECONDARY.light,
      contrast: SECONDARY.contrast
    },
    tertiary: {
      main: TERTIARY.main,
      dark: TERTIARY.dark,
      light: TERTIARY.light,
      contrast: TERTIARY.contrast
    },
    success: {
      light: SUCCESS.light,
      main: SUCCESS.main,
      contrast: SUCCESS.contrast
    },
    error: {
      main: ERROR.main,
      light: ERROR.light,
      contrast: ERROR.contrast
    }
  }
};

export default themes;

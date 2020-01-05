const SECONDARY = {
  main: "#FFD500",
  dark: "#f7b801",
  light: "#fff5da",
  contrast: "black"
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

const themes = {
  light: {
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
    font: FONT,
    background: "#202020;",
    primary: {
      dark: "#131313",
      main: "#3a3a3a",
      light: "#33383f",
      contrast: "#818384",
      contrastDark: "#b3b9c5",
      contrastLight: "#828c99",
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

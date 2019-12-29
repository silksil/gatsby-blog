const SECONDARY = {
  main: "#FFD500",
  dark: "#c7a400",
  light: "#ffe875",
  contrast: "black",
}

const TERTIARY = {
  main: "#395AFF",
  dark: "#0031cb",
  light: "#7f87ff",
  contrast: "#FFFFFF",
}

const SUCCESS = {
  main: "#0C7723",
  contrast: "#FFFFFF",
}

const ERROR = {
  main: "#E60000",
  contrast: "#FFFFFF",
}

const themes = {
  light: {
    app: {
      focus: "blue",
      background: "white",
    },
    primary: {
      main: "#FFFFFF",
      dark: "#bdbdbd",
      light: "#f9faff;",
      contrast: "#828c99",
      contrastSecondary: "black",
      shadow: "rgba(0, 0, 0, 0.06)",
      shadowSecondary: "rgba(166, 173, 201, 0.22)",
    },
    secondary: {
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      light: SECONDARY.light,
      contrast: SECONDARY.contrast,
    },
    tertiary: {
      main: TERTIARY.main,
      dark: TERTIARY.dark,
      light: TERTIARY.light,
      contrast: TERTIARY.contrast,
    },
    success: {
      main: SUCCESS.main,
      contrast: SUCCESS.contrast,
    },
    error: {
      main: ERROR.main,
      contrast: ERROR.contrast,
    },
  },
  dark: {
    background: "#33383f",
    primary: {
      dark: "black",
      main: "#0f1f2d",
      light: "#33383f",
      contrast: "#818384",
      contrastSecondary: "#D7DADC",
      shadow: "transparent",
      shadowSecondary: "transparent",
    },
    secondary: {
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      light: SECONDARY.light,
      contrast: SECONDARY.contrast,
    },
    tertiary: {
      main: TERTIARY.main,
      dark: TERTIARY.dark,
      light: TERTIARY.light,
      contrast: TERTIARY.contrast,
    },
    success: {
      main: SUCCESS.main,
      contrast: SUCCESS.contrast,
    },
    error: {
      main: ERROR.main,
      contrast: ERROR.contrast,
    },
  },
}

export default themes

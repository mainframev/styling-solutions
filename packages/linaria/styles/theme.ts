import { createTheming } from "@callstack/react-theme-provider";

const palette = {
  ink: "#000000",
  white: "#fff",
  primary: "#6c5ce7",
  primaryHover: "#5849c8",
  secondary: "#FFE9B1",
  secondaryHover: "#FFD97D",
  success: "#00d2d3",
  successHover: "#00a8a9",
  warning: "#ff9f43",
  warningHover: "#ff793f",
  alert: "#ff5252",
  alertHover: "#ff2d2d",
};

const defaultTheme = {
  ...palette,
  components: {
    button: {
      primary: {
        color: palette.white,
        background: palette.primary,
        backgroundHover: palette.primaryHover,
      },
      secondary: {
        color: palette.ink,
        background: palette.secondary,
        backgroundHover: palette.secondaryHover,
      },
      success: {
        color: palette.white,
        background: palette.success,
        backgroundHover: palette.successHover,
      },
      warning: {
        color: palette.white,
        background: palette.warning,
        backgroundHover: palette.warningHover,
      },
      alert: {
        color: palette.white,
        background: palette.alert,
        backgroundHover: palette.alertHover,
      },
    },
    badge: {
      primary: {
        color: palette.white,
        backgroundColor: palette.primary,
      },
      secondary: {
        color: palette.ink,
        backgroundColor: palette.secondary,
      },
      success: {
        color: palette.white,
        backgroundColor: palette.success,
      },
      warning: {
        color: palette.ink,
        backgroundColor: palette.warning,
      },
      alert: {
        color: palette.white,
        backgroundColor: palette.alert,
      },
    },
  },
};

const { ThemeProvider, useTheme } = createTheming(defaultTheme);

export { ThemeProvider, useTheme, defaultTheme };

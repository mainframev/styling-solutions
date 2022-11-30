import { createTheming } from "@callstack/react-theme-provider";

const palette = {
  white: {
    100: "#ffffff",
    200: "#F1FAF7",
    300: "#E7ECF1",
  },
  ink: {
    100: "#697D95",
    200: "#5D738E",
    300: "#4A617C",
    400: "#4F5E71",
    500: "#3E4E63",
    600: "#324256",
    700: "#252A31",
    800: "#181B20",
    900: "#0B0C0F",
  },
  product: {
    100: "#ECF8F7",
    200: "#D6F0EC",
    300: "#BFE8E2",
    400: "#00A58E",
    500: "#009580",
    600: "#008472",
    700: "#007F6D",
    800: "#007060",
    900: "#007060",
    950: "#005C4E",
  },
  orange: {
    100: "#FEF7F1",
    200: "#FCECDA",
    300: "#FAE2C6",
    400: "#DF7B00",
    500: "#C96F00",
    600: "#B26200",
    700: "#BA5D00",
    800: "#A75400",
    900: "#954a00",
    950: "#803F00",
  },
  green: {
    100: "#F2F8F2",
    200: "#E1EFE2",
    300: "#CDE4CF",
    400: "#28A138",
    500: "#238B31",
    600: "#1D7228",
    700: "#2D7738",
    800: "#276831",
    900: "#1F5126",
    950: "#235C2B",
  },
  red: {
    100: "#FCF3F3",
    200: "#F8E2E2",
    300: "#F3CECE",
    400: "#D21C1C",
    500: "#B91919",
    600: "#9D1515",
    700: "#970C0C",
    800: "#890B0B",
    900: "#6D0909",
    950: "#760909",
  },
  blue: {
    100: "#F1F8FE",
    200: "#DEF0FC",
    300: "#C7E4FA",
    400: "#0172CB",
    500: "#0161AC",
    600: "#01508E",
    700: "#005AA3",
    800: "#004F8F",
    900: "#003E70",
    950: "#004680",
  },
  cloud: {
    100: "#F5F7F9",
    200: "#E5EAEF",
    300: "#D6DEE6",
    400: "#E8EDF1",
    500: "#DCE3E9",
    600: "#CAD4DE",
    700: "#BAC7D5",
    800: "#A6B6C8",
    900: "#94A8BE",
  },
};

const defaultTheme = {
  ...palette,
  components: {
    button: {
      primary: {
        color: palette.white["100"],
        background: palette.product["400"],
        backgroundHover: palette.product["500"],
      },
      secondary: {
        color: palette.ink["900"],
        background: palette.cloud["400"],
        backgroundHover: palette.cloud["500"],
      },
      success: {
        color: palette.white["100"],
        background: palette.green["400"],
        backgroundHover: palette.green["500"],
      },
      warning: {
        color: palette.white["100"],
        background: palette.orange["400"],
        backgroundHover: palette.orange["500"],
      },
      alert: {
        color: palette.white["100"],
        background: palette.red["400"],
        backgroundHover: palette.red["500"],
      },
    },
    badge: {
      primary: {
        color: palette.white["100"],
        backgroundColor: palette.product["400"],
      },
      secondary: {
        color: palette.ink["900"],
        backgroundColor: palette.cloud["400"],
      },
      success: {
        color: palette.white["100"],
        backgroundColor: palette.green["400"],
      },
      warning: {
        color: palette.ink["900"],
        backgroundColor: palette.orange["400"],
      },
      alert: {
        color: palette.white["100"],
        backgroundColor: palette.red["400"],
      },
    },
  },
};

const { ThemeProvider, useTheme } = createTheming(defaultTheme);

export { ThemeProvider, useTheme, defaultTheme };

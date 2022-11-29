import React from "react";
import { makeStyles, shorthands, mergeClasses } from "@griffel/react";
import defaultTheme from "../styles/defaultTheme";

export type ButtonCustomColors =
  | "Brown"
  | "CornflowerBlue"
  | "DarkGoldenRod"
  | "DarkOliveGreen"
  | "DarkSalmon"
  | "DarkSlateGray"
  | "IndianRed"
  | "MidnightBlue"
  | "Sienna"
  | "Teal"
  | "YellowGreen";

interface Props {
  customBackground?: ButtonCustomColors;
  type?: "primary" | "secondary" | "success" | "warning" | "alert";
  size?: "small" | "medium" | "large";
}

const useClasses = makeStyles({
  basic: {
    display: "inline-flex",
    alignItems: "center",
    fontWeight: "450",
    color: "#fff",
    boxSizing: "border-box",
    cursor: "pointer",
    ...shorthands.padding("8px", "12px"),
    ...shorthands.transition("background-color", "2s", "ease-in"),
    ...shorthands.borderRadius("6px"),
    ...shorthands.border("0", "none"),
  },
  primary: {
    color: defaultTheme.components.button.primary.color,
    backgroundColor: defaultTheme.components.button.primary.background,
  },
  secondary: {
    color: defaultTheme.components.button.secondary.color,
    backgroundColor: defaultTheme.components.button.secondary.background,
  },
  success: {
    color: defaultTheme.components.button.success.color,
    backgroundColor: defaultTheme.components.button.success.background,
  },
  alert: {
    color: defaultTheme.components.button.alert.color,
    backgroundColor: defaultTheme.components.button.alert.background,
  },
  warning: {
    color: defaultTheme.components.button.warning.color,
    backgroundColor: defaultTheme.components.button.warning.background,
  },
  Brown: {
    backgroundColor: "brown",
  },
  CornflowerBlue: {
    backgroundColor: "cornflowerblue",
  },
  DarkGoldenRod: {
    backgroundColor: "darkgoldenrod",
  },
  DarkOliveGreen: {
    backgroundColor: "darkolivegreen",
  },
  DarkSalmon: {
    backgroundColor: "darksalmon",
  },
  DarkSlateGray: {
    backgroundColor: "darkslategray",
  },
  IndianRed: {
    backgroundColor: "indianred",
  },
  MidnightBlue: {
    backgroundColor: "midnightblue",
  },
  Sienna: {
    backgroundColor: "sienna",
  },
  Teal: {
    backgroundColor: "teal",
  },
  YellowGreen: {
    backgroundColor: "yellowgreen",
  },
});

const Button = ({
  children,
  customBackground,
  type = "primary",
}: React.PropsWithChildren<Props>) => {
  const classes = useClasses();
  return (
    <button className={mergeClasses(classes.basic, classes[customBackground || type])}>
      {children}
    </button>
  );
};

export default Button;

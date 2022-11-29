import * as React from "react";
import { makeStyles, shorthands, mergeClasses } from "@griffel/react";
import defaultTheme from "../styles/defaultTheme";

interface Props {
  type?: "primary" | "secondary" | "success" | "warning" | "alert";
}

const useClasses = makeStyles({
  basic: {
    display: "inline-block",
    fontWeight: "450",
    textAlign: "center",
    color: "#000",
    ...shorthands.borderRadius("6px"),
    ...shorthands.padding("8px", "12px"),
  },
  primary: {
    ...defaultTheme.components.badge["primary"],
  },
  secondary: {
    ...defaultTheme.components.badge["secondary"],
  },
  success: {
    ...defaultTheme.components.badge["success"],
  },
  warning: {
    ...defaultTheme.components.badge["warning"],
  },
  alert: {
    ...defaultTheme.components.badge["alert"],
  },
});

const Badge = ({ type = "primary", children }: React.PropsWithChildren<Props>) => {
  const classes = useClasses();
  const className = mergeClasses(
    classes.basic,
    type === "primary" && classes.primary,
    type === "secondary" && classes.secondary,
    type === "success" && classes.success,
    type === "warning" && classes.warning,
    type === "alert" && classes.alert,
  );

  return <div className={className}>{children}</div>;
};

export default Badge;

import React from "react";
import { makeStyles, shorthands } from "@griffel/react";
import Link from "next/link";
import theme from "../styles/defaultTheme";

const useClasses = makeStyles({
  Wrapper: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap("12px"),
  },
  Link: {
    boxSizing: "border-box",
    backgroundColor: theme.product["400"],
    textDecorationLine: "none",
    color: "#fff",
    cursor: "pointer",
    transitionTimingFunction: "ease-in",
    transitionDuration: ".2s",
    transitionProperty: "background-color",
    ...shorthands.padding("10px", "12px"),
    ...shorthands.borderRadius("6px"),
    ":hover": { backgroundColor: theme.components.button.primary.backgroundHover },
  },
});

const NavbarLinks = () => {
  const classes = useClasses();

  return (
    <div className={classes.Wrapper}>
      <Link href="/" className={classes.Link}>
        Main
      </Link>
      <Link href="/second" className={classes.Link}>
        Second Page
      </Link>
      <Link href="/third" className={classes.Link}>
        Third Page
      </Link>
    </div>
  );
};

export default NavbarLinks;

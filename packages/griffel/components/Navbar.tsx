import React from "react";
import { makeStyles, shorthands } from "@griffel/react";
import useMixins from "../styles/useMixins";
import NavbarLinks from "./NavbarLinks";

const useClasses = makeStyles({
  Navbar: {
    // background propety will not work
    backgroundColor: "#fff",
    boxSizing: "border-box",
    // for shorthands we have to use helper functions
    boxShadow:
      "0px 0px 2px 0px rgba(37, 42, 49, 0.16), 0px -2px 4px 0px rgba(37, 42, 49, 0.12)",
    ...shorthands.padding("20px", "0")
  }
});

const Navbar = () => {
  const classes = useClasses();
  const mixins = useMixins();

  return (
    <div className={classes.Navbar}>
      <div className={mixins.container}>
        <NavbarLinks />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { makeStyles, shorthands } from "@griffel/react";
import LoaderIcon from "./LoaderIcon";

const useClasses = makeStyles({
  text: {
    fontSize: "1.5rem",
    color: "#ccc",
    textAlign: "center"
  },
  wrapper: {
    display: "flex",
    position: "absolute",
    zIndex: "100",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    ...shorthands.gap("8px"),
    ...shorthands.margin("2rem", "0")
  }
});

const Loading = () => {
  const classes = useClasses();

  return (
    <div className={classes.wrapper}>
      <LoaderIcon />
      <span className={classes.text}>Loading</span>
    </div>
  );
};

export default Loading;

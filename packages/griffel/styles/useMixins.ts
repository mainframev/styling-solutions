import { makeStyles, shorthands } from "@griffel/react";

const useMixins = makeStyles({
  container: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "1100px",
    paddingLeft: "16px",
    paddingRight: "16px",
    ...shorthands.margin("0px", "auto")
  }
});

export default useMixins;

import React from "react";
import { makeStyles, shorthands, mergeClasses } from "@griffel/react";

const useClasses = makeStyles({
  loadingAnimation: {
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationDuration: "2s",
    animationName: {
      from: {
        backgroundPositionX: "0",
        backgroundPositionY: "0"
      },
      to: {
        backgroundPositionX: "100%",
        backgroundPositionY: "0"
      }
    }
  },
  loadingWrapper: {
    height: "24px",
    position: "relative",
    width: `calc(24px * 5)`,
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundRepeat: "repeat-x",
    // backgroundImage: `url('data:image/svg+xml;charset=utf8,<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.58333 7.62663C9.872 7.62663 10.9167 6.58196 10.9167 5.29329C10.9167 4.00463 9.872 2.95996 8.58333 2.95996C7.29467 2.95996 6.25 4.00463 6.25 5.29329C6.25 6.58196 7.29467 7.62663 8.58333 7.62663Z"></path><path d="M15.4167 7.62663C16.7053 7.62663 17.75 6.58196 17.75 5.29329C17.75 4.00463 16.7053 2.95996 15.4167 2.95996C14.128 2.95996 13.0833 4.00463 13.0833 5.29329C13.0833 6.58196 14.128 7.62663 15.4167 7.62663Z"></path><path d="M6.66667 10.71C6.66667 11.9986 5.622 13.0433 4.33333 13.0433C3.04467 13.0433 2 11.9986 2 10.71C2 9.42132 3.04467 8.37665 4.33333 8.37665C5.622 8.37665 6.66667 9.42132 6.66667 10.71Z"></path><path d="M12 21.0433C8.58334 21.0433 5.83334 19.2933 5.83334 17.2099C5.91668 16.2099 6.41668 15.2933 7.33334 14.7099C8.16668 14.0433 8.91668 13.2099 9.33334 12.2933C9.75001 11.1266 10.8333 10.3766 12 10.2933C13.1667 10.3766 14.25 11.1266 14.6667 12.2933C15.0833 13.2933 15.75 14.1266 16.6667 14.7099C17.5 15.2933 18.0833 16.2099 18.1667 17.2099C18.1667 19.3766 15.4167 21.0433 12 21.0433Z"></path><path d="M22 10.71C22 11.9986 20.9553 13.0433 19.6667 13.0433C18.378 13.0433 17.3333 11.9986 17.3333 10.71C17.3333 9.42132 18.378 8.37665 19.6667 8.37665C20.9553 8.37665 22 9.42132 22 10.71Z"></path></svg>')`,
    "&:before": {
      position: "absolute",
      left: "-1px",
      top: 0,
      // just empty string will not work
      content: `''`,
      height: "24px",
      width: "100%",
      backgroundPositionX: "center",
      backgroundPositionY: "center",
      backgroundRepeat: "repeat-x",
      boxShadow: "inset rgb(255 255 255) 14px 0px 20px 0px",
      ...shorthands.borderRadius("6px")
    }
  }
});

const LoadingIcon = () => {
  const classes = useClasses();
  return (
    <div
      className={mergeClasses(classes.loadingWrapper, classes.loadingAnimation)}
    />
  );
};

export default LoadingIcon;

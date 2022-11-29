import React from "react";
import { cx, css } from "@linaria/core";

const loadingAnimationStyle = css`
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 2s;
  animation-name: paws;

  @keyframes paws {
    from {
      background-position-x: 0;
      background-position-y: 0;
    }

    to {
      background-position-x: 100%;
      background-position-y: 0;
    }
  }
`;

const loadingWrapperStyle = css`
  height: 24px;
  position: relative;
  width: calc(24px * 5);
  &:before {
    position: absolute;
    left: -1px;
    top: 0;
    content: "";
    height: 24px;
    width: 100%;
    background-position-x: center;
    background-position-y: center;
    background-repeat: repeat-x;
    box-shadow: inset rgb(255 255 255) 14px 0px 20px 0px;
    border-radius: 6px;
  }
`;

const LoadingIcon = () => {
  return <div className={cx(loadingWrapperStyle, loadingAnimationStyle)} />;
};

export default LoadingIcon;

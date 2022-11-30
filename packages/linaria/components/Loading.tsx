import React from "react";
import { css } from "@linaria/core";
import LoaderIcon from "./LoaderIcon";

const textStyle = css`
  font-size: 1.5rem;
  color: #ccc;
  text-align: center;
`;

const wrapperStyle = css`
  display: flex;
  position: absolute;
  z-index: 100;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 8px;
  margin: 2rem 0;
`;

const Loading = () => {
  return (
    <div className={wrapperStyle}>
      <LoaderIcon />
      <span className={textStyle}>Loading</span>
    </div>
  );
};

export default Loading;
